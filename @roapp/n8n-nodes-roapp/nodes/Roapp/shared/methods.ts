//The provided code is a TypeScript file that exports several functions and constants for interacting with the Roapp API. Here's a breakdown of the code:
import {INodePropertyOptions, 
	IAllExecuteFunctions, 
	ILoadOptionsFunctions, 
	IExecuteFunctions,
	IHttpRequestMethods,
	NodeOperationError,
	NodeApiError, 
	IDataObject,
	INodeExecutionData,
	ResourceMapperField,
 } from 'n8n-workflow';
import { DateTime } from 'luxon';

export const BASE_URL:string = "https://api.roapp.io/";

const cf_types: { [key: number]: string }= {
	0 : "boolean",
	1 : "string",
	2 : "string",
	3 : "string",
	4 : "dateTime",
	5 : "dateTime",
	6 : "number"
};

const resources_cf_urls:{ [key: string]: string } = {
	"order" : `${BASE_URL}v2/orders/custom-fields`,
	"person": `${BASE_URL}v2/contacts/people/custom-fields`,
	"organization": `${BASE_URL}v2/contacts/organizations/custom-fields`,
	"lead": `${BASE_URL}lead/custom-fields/`,
	'asset': `${BASE_URL}warehouse/assets/custom-fields/`
};

const resources_stuses_urls: { [key: string]: string } = {
  "order": `${BASE_URL}v2/orders/statuses`,
  "lead": `${BASE_URL}statuses/leads`,
  "invoice": `${BASE_URL}v2/invoices/statuses`
};

const resources_types_urls: { [key: string]: string } = {
  "order": `${BASE_URL}v2/orders/types`,
  "lead": `${BASE_URL}lead/types/`,
  "asset": `${BASE_URL}v2/assets/types`
};

// Кеш для custom fields данных
const cache: { [key: string]: { fields: ResourceMapperField[], fieldsInfo: { [key: string]: string } }} = {};
const cacheTTL: { [key: string]: number } = {};

const CACHE_DURATION = 5 * 60 * 1000; // 5 минут в миллисекундах

// ==================== HELPER FUNCTIONS ====================
export function phoneValidation(
	phone:string,
):boolean {
	const phoneRegex = /^\+?[1-9]\d{1,14}$/;
	return phone!="" && phone!=null && phone!="undefined" && phoneRegex.test(phone)
}

export async function fetchCustomFieldsData(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	resource: string
): Promise<{ fields: ResourceMapperField[], fieldsInfo: { [key: string]: string } }> {
	// Получаем ключ для кеша на основе ресурса
	const cacheKey = `cf_${resource}`;

	// Проверяем, есть ли актуальный кеш
	if (cache[cacheKey] && cacheTTL[cacheKey] > Date.now()) {
		return cache[cacheKey];
	}

	// Получаем данные с API
	const url = resources_cf_urls[resource];
	let data = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
		method: 'GET',
		url,
		json: true,
	});
	data = data?.data || data;
	// Формируем fields для resourceMapper
	const fields = data.map((field: { [key: string]: string }) => ({
		id: `f${field.id}`,
		displayName: field.title || field.name,
		name: `f${field.id}`,
		type: cf_types[parseInt(field.type)] || 'string',
		default: cf_types[parseInt(field.type)] === 'boolean' ? false : '',
		display: true,
	}));

	// Формируем fieldsInfo для трансформации значений
	const fieldsInfo: { [key: string]: string } = {};
	for (const field of data) {
		const fieldType = cf_types[parseInt(field.type)] || 'string';
		fieldsInfo[`f${field.id}`] = fieldType;
	}

	// Сохраняем в кеш
	cache[cacheKey] = { fields, fieldsInfo };
	cacheTTL[cacheKey] = Date.now() + CACHE_DURATION;

	return { fields, fieldsInfo };
}

export async function getResourceStatuses(
	this: IAllExecuteFunctions, 
	resource: string) : Promise<INodePropertyOptions[]>  {

	const url:string =  resources_stuses_urls[resource];
	if (!url) {
		return [];
	}
	let response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
	method: "GET",
	url,
	json: true,
	});
	response = response?.data || response;
	const fields:INodePropertyOptions[] = response.map((row: IDataObject) => ({
		name: row?.name || row?.title,
		value: row.id
	}));
	return fields;
}

export async function getResourceTypes(
	this: IAllExecuteFunctions, 
	resource: string) : Promise<INodePropertyOptions[]>  {

	const url:string =  resources_types_urls[resource];
	if (!url) {
		return [];
	}
	let response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
	method: "GET",
	url,
	json: true,
	});
	response = response?.data || response;
	const fields:INodePropertyOptions[] = response.map((row: IDataObject) => ({
		name: row?.title || row?.name,
		value: row.id
	}));
	return fields;
}

// ==================== HELPER FUNCTIONS ====================

export async function getCustomFieldsInfo(
	this: IExecuteFunctions,
	resource: string
): Promise<{ [key: string]: string }> {
	// Используем кеш вместо повторного запроса
	if (!resources_cf_urls[resource]) {
		return {}
	};
	const { fieldsInfo } = await fetchCustomFieldsData.call(this, resource);
	return fieldsInfo;
}

export function transformCustomFieldsValues(
	customFieldsData: IDataObject,
	fieldsInfo: { [key: string]: string }
): IDataObject {
	const transformed: IDataObject = {};

	for (const [fieldKey, fieldValue] of Object.entries(customFieldsData)) {
		const fieldType = fieldsInfo[fieldKey];

		// Преобразуем dateTime поля в ISO формат
		if (fieldType === 'dateTime' && fieldValue) {
			try {
				// Если это строка, парсим как дату
				const dateObj = new Date(fieldValue as string);
				if (!isNaN(dateObj.getTime())) {
					// Преобразуем в ISO формат: "2024-01-15T10:30:00Z"
					transformed[fieldKey] = dateObj.toISOString().split('.')[0] + 'Z';
				} else {
					transformed[fieldKey] = fieldValue;
				}
			} catch {
				transformed[fieldKey] = fieldValue;
			}
		} else {
			transformed[fieldKey] = fieldValue;
		}
	}

	return transformed;
}

// ==================== EXECUTE METHODS FOR EACH RESOURCE ====================

//helper funcs
function makeQs(
	this: IExecuteFunctions,
	index: number,
	ignored: string[] = []
):IDataObject {
	// 1. Отримуємо всі параметри, які є в описі цієї ноди для поточного індексу
	const parameters = this.getNode().parameters;
	const qs: IDataObject = {};
	const ignoredParameters = ['resource', 'operation', 'returnAll', 'limit', ...ignored];

	for (const parameterName of Object.keys(parameters)) {
		if (!ignoredParameters.includes(parameterName)) {
			try {
				// Отримуємо значення параметра (з урахуванням виразів/expressions)
				const value = this.getNodeParameter(parameterName, index);
				if (Array.isArray(value) && value.length > 0) {
					// ВАРІАНТ А: API очікує рядок через кому: ?status=active,pending
					qs[`${parameterName}`] = value.join(`,`);

					// ВАРІАНТ Б: API очікує формат з квадратними дужками: ?status[]=active&status[]=pending
					// (Більшість бібліотек роблять це автоматично, але іноді треба вказати ключ явно)
					// qs[`${paramName}[]`] = value; 
				}
				// Якщо це колекція "filters" або "additionalFields"
				else if (typeof value === 'object' && value !== null && value != undefined) {
					const processedFilters:{[key:string]:unknown} = { ...value };
					if (parameterName == "created_at" || parameterName == "modified_at" || parameterName == "closed_at" || parameterName == "scheduled_for" || parameterName == "due_date" || parameterName == "issue_date") {
						const from_name = `${parameterName}_from`;
						const to_name = `${parameterName}_to`;
						const from = processedFilters[from_name]
							? `${String(DateTime.fromISO(String(processedFilters[from_name])).toISO()).split(".")[0]}Z` // або .toISOString()
							: '';
						const to = processedFilters[to_name]
							? `,${String(DateTime.fromISO(String(processedFilters[to_name])).toISO()).split(".")[0]}Z`
							: '';
						qs[`${parameterName}`] = `${from}${to}`;
					} else {
						Object.assign(qs, value);
					}

					// Створюємо окрему константу з явним приведенням типу
					const idValues = processedFilters?.idValues as IDataObject[] | undefined;

					// Тепер безпечно перевіряємо, чи це дійсно масив
					if (Array.isArray(idValues)) {
						qs[parameterName] = idValues.map((v: IDataObject) => v.value).join(',');
					}
				} else if (value != undefined && String(value).trim() != '' && value !== null) {
					qs[parameterName] = value;
				}
			} catch {
				// Параметр може бути прихований по displayOptions, тоді getNodeParameter викине помилку
			continue;
			}
		}
	}
	return qs;
}

export async function handleGetAll(
	this: IExecuteFunctions,
	index: number,
	url: string
): Promise<INodeExecutionData[][]> {
	const returnAll = this.getNodeParameter('returnAll', index, true) as boolean;
	const limit = this.getNodeParameter('limit', index, 50) as number;
	
	const qs = makeQs.call(this, index);
	
	const rawItems: IDataObject[] = [];
	let page: number = parseInt(qs.page as string, 10) || 1;
	
	let responseData: unknown;
	let resObj: IDataObject = {};
	let total_pages: number = 0;
	
	do {
		if (page !== 1) {
			qs.page = page;
		}
		console.log(`Requesting page ${page}: ${url}, QS: ${JSON.stringify(qs)}`);
		
		try {
			responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
				method: 'GET',
				url: url,
				json: true,
				qs: qs,
			});
		} catch (error) {
			const errorMessage = error?.response?.body?.message || 
								error?.response?.body?.error ||
								error?.message ||
								'Unknown error occurred';
			
			throw new NodeApiError(this.getNode(), error, { 
				message: errorMessage 
			});
		}

		resObj = (responseData || {}) as IDataObject;
		
		// Витягуємо масив даних з відповіді API
		const items = (resObj?.data || []) as IDataObject[];
		console.log(`Items count: ${items.length}`);

		// 🛑 ЗАХИСТ 1: Якщо API повернуло порожній масив, негайно зупиняємося (навіть якщо total_pages каже інакше)
		if (items.length === 0) {
			break;
		}

		rawItems.push(...items);
		
		const paging = resObj?.paging as IDataObject | undefined;
		const rawCount = Number(resObj?.count);
		
		// Надійний розрахунок total_pages із захистом від NaN та невірних значень
		if (paging?.total_pages !== undefined) {
			total_pages = Number(paging.total_pages);
		} else if (!isNaN(rawCount) && rawCount > 0) {
			total_pages = Math.ceil(rawCount / 50);
		} else {
			// 🛑 ЗАХИСТ 2: Якщо API не дало мета-даних про сторінки, вважаємо, що сторінка всього одна
			total_pages = 1; 
		}

		if (!returnAll && rawItems.length >= limit) {
			break;
		}

		console.log(`Total pages: ${total_pages}, finished page ${page}`);
		
		// 🛑 ЗАХИСТ 3: Якщо ми щойно обробили останню сторінку, виходимо без інкременту
		if (page >= total_pages) {
			break;
		}

		page = page + 1;

	} while (page <= total_pages);

	const finalItems = returnAll ? rawItems : rawItems.slice(0, limit);
	// 2. Вручну конвертуємо сирі дані у формат INodeExecutionData з додаванням pairedItem
	const executionData: INodeExecutionData[] = finalItems.map((item) => ({
		json: item,
		pairedItem: {
			item: index, // Зв'язуємо з поточним вхідним індексом
		},
	}));

	return [executionData];
}


export async function handleGetOne(
	this: IExecuteFunctions,
    index: number,
    url: string,
    method: IHttpRequestMethods = 'GET',
	):Promise<INodeExecutionData[][]>  {
	try {
		// Збираємо всі Query Parameters динамічно
		const qs = makeQs.call(this, index);
		console.log(`before request: ${url}, ${JSON.stringify(qs, null, 2)}`);
		return [[{
			json: await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
				method: method,
				url: url,
				json: true,
				qs: qs,
			}),		
			pairedItem: {
				item: index, // Зв'язуємо з поточним вхідним індексом
		},}]];
	} catch (error) {
		// Якщо API повернуло помилку (наприклад, 400)
		// Better error extraction
		// console.log(error);
		const errorMessage = error?.response?.body?.message || 
							error?.response?.body?.error ||
							error?.message ||
							'Unknown error occurred';
		
		throw new NodeApiError(this.getNode(), error, { 
			message: errorMessage 
		});
	}
};

export async function handlePost(
	this: IExecuteFunctions,
    index: number,
    url: string,
    body: IDataObject,
    method: IHttpRequestMethods = 'POST',
):Promise<INodeExecutionData[][]> {
	try {
		console.log(`Log ${url} body before request: ${JSON.stringify(body)}`);
		return [[{ 
		json: await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: method,
			url: url,
			json: true,
			body: body
		}),
		pairedItem: {
			item: index, // Зв'язуємо з поточним вхідним індексом
		},}]];
	} catch (error) {
		// Якщо API повернуло помилку (наприклад, 400)
		// Better error extraction
		// console.log(error);
		const errorMessage = error?.response?.body?.message || 
							error?.response?.body?.error ||
							error?.message ||
							'Unknown error occurred';
		
		throw new NodeApiError(this.getNode(), error, { 
			message: errorMessage 
		});
	}
};

function isEmpty(value: unknown): boolean {
	if (Array.isArray(value)) return value.length === 0;
	if (value && typeof value === 'object') return Object.keys(value).length === 0;
	if (value == null || value == undefined || String(value).trim() == '') return true;
	return false;
}

export async function handleCreateUpdate(
	this: IExecuteFunctions,
	index: number,
	url: string,
	method: IHttpRequestMethods = 'POST',
): Promise<INodeExecutionData[][]> {
	try {
		const body: IDataObject = {};
		
		// Отримуємо параметри як об'єкт (словник) ключ-значення
		const parameters = this.getNode().parameters as IDataObject;

		for (const paramName in parameters) {
			if (paramName === 'resource' || paramName === 'operation') {
				continue;
			}
			
			if (Object.prototype.hasOwnProperty.call(parameters, paramName)) {
				// Замінено any на unknown. Лінтер n8n це схвалює.
				const value = this.getNodeParameter(paramName, index) as unknown;

				// Перевірка: пропускаємо null, undefined та порожні рядки
				if (!isEmpty(value)) {
					// Приводимо до IDataObject для безпечного читання вкладених полів (value?.value тощо)
					const valueObj = value as IDataObject;

					if (paramName === "customFields" && valueObj?.value) {
						const resource = this.getNodeParameter('resource', index) as string;
						const fieldsInfo = await getCustomFieldsInfo.call(this, resource);
						const transformedCustomFields = transformCustomFieldsValues(valueObj.value as IDataObject, fieldsInfo);
						body.custom_fields = transformedCustomFields;
					} 
					else if (paramName === "scheduled_for" || paramName === "scheduled_to" || paramName === "due_date") {
						body[paramName] = `${DateTime.fromISO(String(value)).toUTC().toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")}`;
					} 
					else if (paramName === "issue_date_invoice" || paramName === "due_date_invoice") {
						body[paramName.slice(0, -8)] = `${DateTime.fromISO(String(value)).toUTC().toFormat("yyyy-MM-dd")}`;
					} 
					else if (paramName === "items" && valueObj?.item) {
						body.items = transformInvoiceItems(valueObj.item as IDataObject[]);
					} 
					else if (paramName === "items_custom" && valueObj?.customItem) {
						body.items_custom = transformInvoiceCustomItems(valueObj.customItem as IDataObject[]);
					}
					else {
						// Оскільки body має тип IDataObject, ми можемо присвоїти туди unknown значення
						body[paramName] = this.getNodeParameter(paramName, index);
					}
				}
			}
		}
		console.log(`Log ${url} body before request: ${JSON.stringify(body)}`);
		// Робимо запит до API та явно кажемо TypeScript, що відповідь — це об'єкт (IDataObject)
		const responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: method,
			url: url,
			json: true,
			body: body
		}) as IDataObject;

		return [[{ 
			json: responseData, 		
			pairedItem: {
				item: index, // Зв'язуємо з поточним вхідним індексом
			} }]];

	} catch (error) {
		const errorMessage = error?.response?.body?.message || 
							error?.response?.body?.error ||
							error?.message ||
							'Unknown error occurred';
		
		throw new NodeApiError(this.getNode(), error, { 
			message: errorMessage 
		});
	}
}

export function transformInvoiceItems(items: IDataObject[]): IDataObject[] {
	if (!items || !Array.isArray(items)) return [];
	return items.map((item:IDataObject) => {
		const result: IDataObject = {
			entity_id: item.entity_id,
			quantity: item.quantity,
			price: item.price,
		};
		if (item.comment) result.comment = item.comment;
		if (item.comment_visibility) result.comment_visibility = item.comment_visibility;
		const tax = item?.tax_ids as Array<string>;
		if (tax?.length) result.tax_ids = tax.filter((v: string) => v !== '').map((v: string) => Number(v));
		if (item.discount_type || item.discount_percentage || item.discount_amount || item.discount_sponsor) {
			result.discount = {
				type: item.discount_type,
				percentage: Number(item.discount_percentage) || 0,
				amount: Number(item.discount_amount) || 0,
				sponsor: item.discount_sponsor,
			};
		}
		if (item.warranty_period || item.warranty_unit) {
			result.warranty = {
				period: Number(item.warranty_period) || 0,
				unit: item.warranty_unit,
			};
		}
		return result;
	});
}

export function transformInvoiceCustomItems(items: IDataObject[]): IDataObject[] {
	if (!items || !Array.isArray(items)) return [];
	return items.map((item:IDataObject) => {
		const result: IDataObject = {
			entity: {
				type: item.entity_type,
				title: item.entity_title,
				uom_id: Number(item.entity_uom_id),
				description: item.entity_description || '' 
			},
			quantity: item.quantity,
			price: item.price,
		};
		if (item.comment) result.comment = item.comment;
		if (item.comment_visibility) result.comment_visibility = item.comment_visibility;
		const tax = item?.tax_ids as Array<string>;
		if (tax?.length) result.tax_ids = tax.filter((v: string) => v !== '').map((v: string) => Number(v));
		if (item.discount_type || item.discount_percentage || item.discount_amount || item.discount_sponsor) {
			result.discount = {
				type: item.discount_type,
				percentage: Number(item.discount_percentage) || 0,
				amount: Number(item.discount_amount) || 0,
				sponsor: item.discount_sponsor,
			};
		}
		if (item.warranty_period || item.warranty_unit) {
			result.warranty = {
				period: Number(item.warranty_period) || 0,
				unit: item.warranty_unit,
			};
		}
		return result;
	});
}


export async function executePersonOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
):Promise<INodeExecutionData[][]> {
	if (operation === 'create') {
		const body: IDataObject = {
			first_name: this.getNodeParameter('first_name', index),
			last_name: this.getNodeParameter('last_name', index),
		};
		if (this.getNodeParameter('email', index)) {
			body.email = this.getNodeParameter('email', index);
		}
		const phonesUi = Object.assign(this.getNodeParameter('phonesUi', index, {}) as {
															phones?: Array<{
																title: string;
																phone: string;
																notify: boolean;
																has_viber: boolean;
																has_whatsapp: boolean;
															}> });

		if (phonesUi?.phones && phonesUi?.phones?.length > 0) {
				body.phones = phonesUi.phones.map((item:IDataObject) => {
					const phone = item.phone as string;
					if (phoneValidation(phone)) {
						return {
							title: item.title,
							phone: item.phone,
							notify: item.notify,
							has_viber: item.has_viber,
							has_whatsapp: item.has_whatsapp,
						}
					}
					else {
						throw new NodeOperationError(this.getNode(), 
							`The phone number "${item.phone}" is not valid. Please use international format (e.g., +12021234567).`,
							{ itemIndex: index }
						);
					}
				});
		}
		const customFields = this.getNodeParameter('customFields', index) as IDataObject;
		if (customFields?.value) {
			// Получаем информацию о типах полей и преобразуем dateTime
			const fieldsInfo = await getCustomFieldsInfo.call(this, 'person');
			const valObj = customFields?.value as IDataObject;
			const transformedCustomFields = transformCustomFieldsValues(valObj, fieldsInfo);
			body.custom_fields = transformedCustomFields;
		}
		return await handlePost.call(this, index, `${BASE_URL}v2/contacts/people`, body);
	} else if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/contacts/people`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/people/${this.getNodeParameter('Id', index)}`);
	}
	return [[{json: {}}]];
}


export async function executeOrganizationOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
):Promise<INodeExecutionData[][]> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/contacts/organizations`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/organizations/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'create') {
		const body:IDataObject = {
			name : this.getNodeParameter('name', index),
		};
		if (this.getNodeParameter('email', index)) {
			body.email = this.getNodeParameter('email', index);
		}
		const phonesUi = Object.assign(this.getNodeParameter('phonesUi', index, {}) as {
															phones?: Array<{
																title: string;
																phone: string;
																notify: boolean;
																has_viber: boolean;
																has_whatsapp: boolean;
															}> });

		if (phonesUi?.phones && phonesUi?.phones?.length > 0) {
				body.phones = phonesUi.phones.map((item:IDataObject) => {
					const phone = item.phone as string;
					if (phoneValidation(phone)) {
						return {
							title: item.title,
							phone: item.phone,
							notify: item.notify,
							has_viber: item.has_viber,
							has_whatsapp: item.has_whatsapp,
						}
					}
					else {
						throw new NodeOperationError(this.getNode(), 
							`The phone number "${item.phone}" is not valid. Please use international format (e.g., +12021234567).`,
							{ itemIndex: index }
						);
					}
				});
		}
		const customFields = this.getNodeParameter('customFields', index) as IDataObject;
		if (customFields?.value) {
			// Получаем информацию о типах полей и преобразуем dateTime
			const fieldsInfo = await getCustomFieldsInfo.call(this, 'organization');
			const valObj = customFields?.value as IDataObject;
			const transformedCustomFields = transformCustomFieldsValues(valObj, fieldsInfo);
			body.custom_fields = transformedCustomFields;
		}
		return await handlePost.call(this, index, `${BASE_URL}v2/contacts/organizations`, body);
	}
	return [[{json: {}}]]
}

