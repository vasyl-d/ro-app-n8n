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
	"lead": `${BASE_URL}v2/lead/custom-fields/`
};

const resources_stuses_urls: { [key: string]: string } = {
  "order": `${BASE_URL}v2/orders/statuses`,
  "lead": `${BASE_URL}v2/leads/statuses`,
  "invoice": `${BASE_URL}v2/invoices/statuses`
};

// Кеш для custom fields данных
let cache: { [key: string]: { fields: any[], fieldsInfo: { [key: string]: string } }} = {};
let cacheTTL: { [key: string]: number } = {};

const CACHE_DURATION = 5 * 60 * 1000; // 5 минут в миллисекундах

export const showOnlyForOrderCreate = {
    operation: ['create'],
    resource: ['order'],
};

// ==================== HELPER FUNCTIONS ====================
function phoneValidation(
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
	const data = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
		method: 'GET',
		url,
		json: true,
	});

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
	const response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
	method: "GET",
	url,
	json: true,
	});
	const fields:INodePropertyOptions[] = response.map((row:any) => ({
		name: row.name,
		value: row.id
	}));
	return fields;
}

// ==================== HELPER FUNCTIONS ====================

async function getCustomFieldsInfo(
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

function transformCustomFieldsValues(
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
				if (Array.isArray(value)) {
					// ВАРІАНТ А: API очікує рядок через кому: ?status=active,pending
					qs[`${parameterName}`] = value.join(`,`);

					// ВАРІАНТ Б: API очікує формат з квадратними дужками: ?status[]=active&status[]=pending
					// (Більшість бібліотек роблять це автоматично, але іноді треба вказати ключ явно)
					// qs[`${paramName}[]`] = value; 
				}
				// Якщо це колекція "filters" або "additionalFields"
				else if (typeof value === 'object' && value !== null) {
					const processedFilters:{[key:string]:any}= { ...value };
					if (parameterName == "created" || parameterName == "modified" || parameterName == "closed") {
						const from_name = `${parameterName}_from`;
						const to_name = `${parameterName}_to`;
						const from = processedFilters[from_name]
							? `${String(DateTime.fromISO(String(processedFilters?.created_from)).toISO()).split(".")[0]}Z` // або .toISOString()
							: '';
						const to = processedFilters[to_name]
							? `,${String(DateTime.fromISO(String(processedFilters?.created_to)).toISO()).split(".")[0]}Z`
							: '';
						qs[`${parameterName}_at`] = `${from}${to}`;
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

async function handleGetAll(
    this: IExecuteFunctions,
    index: number,
    url: string
) {
    const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
    const limit = this.getNodeParameter('limit', index, 0) as number;
    
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
			// if (error.response) {
			// 	// error.response.body — це те, що повернуло ваше API (наприклад, { message: "Invalid phone" })
			// 	throw new NodeApiError(this.getNode(), error, error?.response?.body?.message);
			// }
			// // Якщо сталася інша помилка (мережа тощо)
			// throw error;
			break;
		} finally {
			// Адаптуйте під структуру вашого API (наприклад, responseData.items або responseData.data)
			const items = Array.isArray(responseData) ? responseData : (responseData?.data || []);
			returnData.push(...items);
			
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

async function handleGetOne(
	this: IExecuteFunctions,
    index: number,
    url: string,
    method: IHttpRequestMethods = 'GET',
	) {
	try {
		console.log(`Log ${url} before request`);
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: method,
			url: url,
			json: true,
		});
	} catch (error) {
		// Якщо API повернуло помилку (наприклад, 400)
		if (error.response) {
			// error.response.body — це те, що повернуло ваше API (наприклад, { message: "Invalid phone" })
			console.log(`Error message: ${error.response?.body?.message}`);
			throw new NodeApiError(this.getNode(), error, { message: error.response?.body?.message });
		}
		// Якщо сталася інша помилка (мережа тощо)
		throw error;
	}
};

async function handlePost(
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
		if (error.response) {
			// error.response.body — це те, що повернуло ваше API (наприклад, { message: "Invalid phone" })
			throw new NodeApiError(this.getNode(), error, { message: error.response?.body?.message });
		}
		// Якщо сталася інша помилка (мережа тощо)
		throw error;
		//todo: retry on 429 error
	}
};

export async function executeOrderOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'create') {
		const body: any = {
			branch_id: this.getNodeParameter('branch_id', index),
			order_type_id: this.getNodeParameter('order_type_id', index),
			client_id: this.getNodeParameter('client_id', index),
		};

		const customFields = this.getNodeParameter('customFields', index) as any;
		if (customFields?.value) {
			// Получаем информацию о типах полей и преобразуем dateTime
			const fieldsInfo = await getCustomFieldsInfo.call(this, 'order');
			const transformedCustomFields = transformCustomFieldsValues(customFields.value, fieldsInfo);
			body.custom_fields = transformedCustomFields;
		}

		return await handlePost.call(this, index, `${BASE_URL}v2/orders`, body );

	} else if (operation === 'getAll') {

		return await handleGetAll.call(this, index, `${BASE_URL}v2/orders`);

		} else if (operation === 'get') {
			return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('orderId', index)}`);
		}
	return null;
}

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
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/people/${this.getNodeParameter('personId', index)}`);
	}
	return null;
}

export async function executeInvoiceOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/invoices`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('invoiceId', index)}`);
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
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/organizations/${this.getNodeParameter('organizationId', index)}`);
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

export async function executeSaleOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/sales`);
	}
	return null;
}

