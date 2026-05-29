//The provided code is a TypeScript file that exports several functions and constants for interacting with the Roapp API. Here's a breakdown of the code:
import {INodePropertyOptions, 
	IAllExecuteFunctions, 
	ILoadOptionsFunctions, 
	IExecuteFunctions,
	IHttpRequestMethods,
	NodeOperationError,
	NodeApiError
 } from 'n8n-workflow';
import { DateTime } from 'luxon';

export const BASE_URL:string = "https://api.roapp.io/";

const cf_types = {
	0 : "boolean",
	1 : "string",
	2 : "string",
	3 : "string",
	4 : "dateTime",
	5 : "dateTime",
	6 : "number"
} as any;

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
let cache: { [key: string]: { fields: any[], fieldsInfo: { [key: string]: string } }} = {};
let cacheTTL: { [key: string]: number } = {};

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
): Promise<{ fields: any[], fieldsInfo: { [key: string]: string } }> {
	// Получаем ключ для кеша на основе ресурса
	const cacheKey = `cf_${resource}`;

	// Проверяем, есть ли актуальный кеш
	if (cache[cacheKey] && cacheTTL[cacheKey] > Date.now()) {
		return cache[cacheKey];
	}

	// Получаем данные с API
	const url = resources_cf_urls[resource];
	let data = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
		method: 'GET',
		url,
		json: true,
	});
	data = data?.data || data;
	// Формируем fields для resourceMapper
	const fields = data.map((field: any) => ({
		id: `f${field.id}`,
		displayName: field.title || field.name,
		name: `f${field.id}`,
		type: cf_types[parseInt(field.type)] || 'string',
		default: cf_types[parseInt(field.type)] === 'boolean' ? false : '',
		required: false,
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
	let response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
	method: "GET",
	url,
	json: true,
	});
	response = response?.data || response;
	const fields:INodePropertyOptions[] = response.map((row:any) => ({
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
	let response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
	method: "GET",
	url,
	json: true,
	});
	response = response?.data || response;
	const fields:INodePropertyOptions[] = response.map((row:any) => ({
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
	customFieldsData: any,
	fieldsInfo: { [key: string]: string }
): any {
	const transformed: any = {};

	for (const [fieldKey, fieldValue] of Object.entries(customFieldsData)) {
		const fieldType = fieldsInfo[fieldKey];

		// Преобразуем dateTime поля в ISO формат
		if (fieldType === 'dateTime' && fieldValue) {
			try {
				// Если это строка, парсим как дату
				const dateObj = new Date(fieldValue as any);
				if (!isNaN(dateObj.getTime())) {
					// Преобразуем в ISO формат: "2024-01-15T10:30:00Z"
					transformed[fieldKey] = dateObj.toISOString().split('.')[0] + 'Z';
				} else {
					transformed[fieldKey] = fieldValue;
				}
			} catch (e) {
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
):any {
	// 1. Отримуємо всі параметри, які є в описі цієї ноди для поточного індексу
	const parameters = this.getNode().parameters;
	const qs: { [key: string]: any } = {};
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
					const processedFilters:{[key:string]:any}= { ...value };
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
					if (processedFilters?.idValues) {
						qs[parameterName] = processedFilters.idValues.map((v: any) => v.value).join(',');
					}
				} else if (value != undefined && String(value).trim() != '' && value !== null) {
					qs[parameterName] = value;
				}
			} catch (e) {
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
) {
    const returnAll = this.getNodeParameter('returnAll', index, true) as boolean;
    const limit = this.getNodeParameter('limit', index, 50) as number;
    
    // Збираємо всі Query Parameters динамічно
    const qs = makeQs.call(this, index);
    // Додаємо кастомні поля з мапера, якщо вони є
    // try {
	// 	const customFields = this.getNodeParameter('customFields', index) as any;
    //     if (customFields?.value) Object.assign(qs, customFields.value);
    // } catch (e) { /* ignore if not exists */ }
	
    const returnData: any[] = [];
    let page = 1;
    let responseData;
	
    do {
		responseData = [];
		console.log(`before request: ${url}, ${JSON.stringify(qs, null, 2)}`);
        
		try{
			responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
				method: 'GET',
				url: url,
				json: true,
				qs: qs,
			});
		} catch (error) {
			// Якщо API повернуло помилку (наприклад, 400)
			// Better error extraction
			console.log(error);
			const errorMessage = error?.response?.body?.message || 
								error?.response?.body?.error ||
								error?.message ||
								'Unknown error occurred';
			
			throw new NodeApiError(this.getNode(), error, { 
				message: errorMessage 
			});
		} finally {
			// Адаптуйте під структуру вашого API (наприклад, responseData.items або responseData.data)
			const items = Array.isArray(responseData) ? responseData : (responseData?.data || []);
			returnData.push(...items);
			// console.table(returnData);
			
			if (!returnAll && returnData.length >= limit) {
				return returnData.slice(0, limit);
			}
		}
        page++;
		qs.page = page;
        // Зупиняємось, якщо API повернув порожній список
    } while (responseData?.data?.length > 0 || (Array.isArray(responseData) && responseData.length > 0));

    return returnData;
};

export async function handleGetOne(
	this: IExecuteFunctions,
    index: number,
    url: string,
    method: IHttpRequestMethods = 'GET',
	) {
	try {
		// Збираємо всі Query Parameters динамічно
		const qs = makeQs.call(this, index);
		console.log(`before request: ${url}, ${JSON.stringify(qs, null, 2)}`);
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: method,
			url: url,
			json: true,
			qs: qs,
		});
	} catch (error) {
		// Якщо API повернуло помилку (наприклад, 400)
		// Better error extraction
		console.log(error);
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
	body: any,
    method: IHttpRequestMethods = 'POST',
	) {
	try {
		console.log(`Log ${url} body before request: ${JSON.stringify(body)}`);
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: method,
			url: url,
			json: true,
			body: body
		});
	} catch (error) {
		// Якщо API повернуло помилку (наприклад, 400)
		// Better error extraction
		console.log(error);
		const errorMessage = error?.response?.body?.message || 
							error?.response?.body?.error ||
							error?.message ||
							'Unknown error occurred';
		
		throw new NodeApiError(this.getNode(), error, { 
			message: errorMessage 
		});
	}
};

function isEmpty(value: any): boolean {
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
	) {
	try {
		let body:Record<string, any> = {};
		const parameters = this.getNode().parameters;
		for (const paramName in parameters) {
			if (paramName == 'resource' || paramName == 'operation') {
				continue
			}
			if (parameters.hasOwnProperty(paramName)) {
				const value = this.getNodeParameter(paramName, index) as any;

				// Перевірка: пропускаємо null, undefined та порожні рядки
				if (! isEmpty(value)) {
					if (paramName == "customFields" && value?.value ) {
						const fieldsInfo = await getCustomFieldsInfo.call(this, this.getNodeParameter('resource', index));
						const transformedCustomFields = transformCustomFieldsValues(value?.value, fieldsInfo);
						body.custom_fields = transformedCustomFields;
					} else if (paramName == "scheduled_for" || paramName == "scheduled_to" || paramName == "due_date") {
						// body[paramName] = `${String(DateTime.fromISO(String(value)).toISO()).split(".")[0]}Z`; // або .toISOString()
						body[paramName] = `${DateTime.fromISO(String(value)).toUTC().toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")}`; // або .toISOString()
					} else if (paramName == "issue_date_invoice" || paramName == "due_date_invoice") {
						body[paramName.slice(0,-8)] = `${DateTime.fromISO(String(value)).toUTC().toFormat("yyyy-MM-dd")}`; // або .toISOString()
					} else if (paramName == "items" && value?.item) {
						body.items = transformInvoiceItems(value.item);
					} else if (paramName == "items_custom" && value?.customItem) {
						body.items_custom = transformInvoiceCustomItems(value.customItem);
					}
					else {
						body[paramName] = value;
					}
				}
			}
		}
		console.log(`Log ${url} body before request: ${JSON.stringify(body)}`);
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: method,
			url: url,
			json: true,
			body: body
		});
	} catch (error) {
		// Якщо API повернуло помилку (наприклад, 400)
		// Better error extraction
		console.log(error);
		const errorMessage = error?.response?.body?.message || 
							error?.response?.body?.error ||
							error?.message ||
							'Unknown error occurred';
		
		throw new NodeApiError(this.getNode(), error, { 
			message: errorMessage 
		});
		//todo: retry on 429 error
	}
};

export function transformInvoiceItems(items: any[]): any[] {
	if (!items || !Array.isArray(items)) return [];
	return items.map(item => {
		const result: any = {
			entity_id: item.entity_id,
			quantity: item.quantity,
			price: item.price,
		};
		if (item.comment) result.comment = item.comment;
		if (item.comment_visibility) result.comment_visibility = item.comment_visibility;
		if (item.tax_ids?.length) result.tax_ids = item.tax_ids.filter((v: any) => v !== '').map((v: any) => Number(v));
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

export function transformInvoiceCustomItems(items: any[]): any[] {
	if (!items || !Array.isArray(items)) return [];
	return items.map(item => {
		const result: any = {
			entity: {
				type: item.entity_type,
				title: item.entity_title,
				uom_id: Number(item.entity_uom_id),
			},
			quantity: item.quantity,
			price: item.price,
		};
		if (item.entity_description) result.entity.description = item.entity_description;
		if (item.comment) result.comment = item.comment;
		if (item.comment_visibility) result.comment_visibility = item.comment_visibility;
		if (item.tax_ids?.length) result.tax_ids = item.tax_ids.filter((v: any) => v !== '').map((v: any) => Number(v));
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

// export async function executeOrderOperation(
// 	this: IExecuteFunctions,
// 	operation: string,
// 	index: number,
// ): Promise<any> {
// 	if (operation === 'getAll') {
// 		return await handleGetAll.call(this, index, `${BASE_URL}v2/orders`);
// 	} else if (operation === 'get') {
// 		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}`);
// 	} else if (operation === 'delete') {
// 		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
// 			method: 'DELETE',
// 			url: `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}`
// 		});
// 	} else if (operation === 'getItems') {
// 		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/items`);
// 	} else if (operation === 'create') {
// 		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders`, 'POST');
// 	} else if (operation === 'update') {
// 		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}`, 'PATCH');
// 	} else if (operation === 'getStatuses') {
// 		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/statuses`);
// 	} else if (operation === 'getTypes') {
// 		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/types`);
// 	} else if (operation === 'getCustomFields') {
// 		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/custom-fields`);
// 	} else if (operation === 'createItem') {
// 		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('orderId', index)}/items`, 'POST');
// 	} else if (operation === 'updateItem') {
// 		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('orderId', index)}/items/${this.getNodeParameter('itemId', index)}`, 'PATCH');
// 	} else if (operation === 'deleteItem') {
// 		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('orderId', index)}/items/${this.getNodeParameter('itemId', index)}`, 'DELETE');
// 	} else if (operation === 'updateStatus') {
// 		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/status`, 'POST');
// 	} else if (operation === 'createComment') {
// 		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/comments`, 'POST');
// 	} else if (operation === 'getPublicUrl') {
// 		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/public-url`);
// 	}
// 	return null;
// }

export async function executePersonOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'create') {
		const body: any = {
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
				body.phones = phonesUi.phones.map((item:any) => {
					if (phoneValidation(item.phone)) {
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
		const customFields = this.getNodeParameter('customFields', index) as any;
		if (customFields?.value) {
			// Получаем информацию о типах полей и преобразуем dateTime
			const fieldsInfo = await getCustomFieldsInfo.call(this, 'person');
			const transformedCustomFields = transformCustomFieldsValues(customFields.value, fieldsInfo);
			body.custom_fields = transformedCustomFields;
		}
		return await handlePost.call(this, index, `${BASE_URL}v2/contacts/people`, body);
	} else if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/contacts/people`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/people/${this.getNodeParameter('Id', index)}`);
	}
	return null;
}


export async function executeOrganizationOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/contacts/organizations`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/organizations/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'create') {
		const body:any = {
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
				body.phones = phonesUi.phones.map((item:any) => {
					if (phoneValidation(item.phone)) {
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
		const customFields = this.getNodeParameter('customFields', index) as any;
		if (customFields?.value) {
			// Получаем информацию о типах полей и преобразуем dateTime
			const fieldsInfo = await getCustomFieldsInfo.call(this, 'organization');
			const transformedCustomFields = transformCustomFieldsValues(customFields.value, fieldsInfo);
			body.custom_fields = transformedCustomFields;
		}
		return await handlePost.call(this, index, `${BASE_URL}v2/contacts/organizations`, body);
	}
	return null;
}

