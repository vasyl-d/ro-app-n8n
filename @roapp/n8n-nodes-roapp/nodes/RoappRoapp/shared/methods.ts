//The provided code is a TypeScript file that exports several functions and constants for interacting with the Roapp API. Here's a breakdown of the code:
import {INodePropertyOptions, 
	IAllExecuteFunctions, 
	ILoadOptionsFunctions, 
	ResourceMapperFields, 
	IExecuteFunctions,
	IHttpRequestMethods
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
	"person": `${BASE_URL}2/contacts/people/custom-fields`,
	"organization": `${BASE_URL}2/contacts/organizations/custom-fields`,
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

// Кеш для custom fields данных
// let orderCustomFieldsCache: { fields: any[], fieldsInfo: { [key: string]: string } } | null = null;

// let customFieldsCacheTTL: number = 0;

const CACHE_DURATION = 5 * 60 * 1000; // 5 минут в миллисекундах

export const showOnlyForOrderCreate = {
    operation: ['create'],
    resource: ['order'],
};

// ==================== HELPER FUNCTIONS ====================
async function fetchCustomFieldsData(
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
	resource: string) : Promise<{ fields:INodePropertyOptions[]} >  {

	const url:string =  resources_stuses_urls[resource];
	const response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
	method: "GET",
	url,
	json: true,
	});
	const fields = response.map((row:any) => ({
		name: row.name,
		value: row.id
	}));
	return { fields };
}

export async function getInvoiceStatuses(
	this: IAllExecuteFunctions,
	): Promise<INodePropertyOptions[]> {
    const { fields } = await getResourceStatuses.call(this, 'invoice');
	return fields;
};

export async function getOrderStatuses(
	this: IAllExecuteFunctions,
	): Promise<INodePropertyOptions[]> {
    const { fields } = await getResourceStatuses.call(this, 'order');
	return fields;
};

export async function getOrderCustomFieldsCollection(
	this: ILoadOptionsFunctions,
): Promise<ResourceMapperFields> {
	const { fields } = await fetchCustomFieldsData.call(this, 'order');
	return { fields };
}

// ==================== HELPER FUNCTIONS ====================

async function getCustomFieldsInfo(
	this: IExecuteFunctions,
	resource: string
): Promise<{ [key: string]: string }> {
	// Используем кеш вместо повторного запроса
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
					if (parameterName == "created") {
					const from = processedFilters?.created_from
						? `${String(DateTime.fromISO(String(processedFilters?.created_from)).toISO()).split(".")[0]}Z` // або .toISOString()
						: '';
					const to = processedFilters?.created_to
						? `,${String(DateTime.fromISO(String(processedFilters?.created_to)).toISO()).split(".")[0]}Z`
						: '';
					qs["created_at"] = `${from}${to}`;
					} else {
						Object.assign(qs, value);
					}
					if (processedFilters?.idValues) {
						qs[parameterName] = processedFilters.idValues.map((v: any) => v.value).join(',');
					}
				} else if (value !== undefined && value !== '') {
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
    url: string,
    method: IHttpRequestMethods = 'GET',
) {
    const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;
    const limit = this.getNodeParameter('limit', index, 0) as number;
    
    // Збираємо всі Query Parameters динамічно
    const qs = makeQs.call(this, index);
    // Додаємо кастомні поля з мапера, якщо вони є
    try {
		const customFields = this.getNodeParameter('customFields', index) as any;
        if (customFields?.value) Object.assign(qs, customFields.value);
    } catch (e) { /* ignore if not exists */ }
	
    const returnData: any[] = [];
    let page = 1;
    let responseData;
	
    do {
		qs.page = page;
		console.log('QS Object before request:', JSON.stringify(qs, null, 2));
		console.log('--- DEBUG QS END ---');
        
		try{
			responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
				method: method,
				url: url,
				json: true,
				qs: qs,
			});
		} catch (e) {
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
        // Зупиняємось, якщо API повернув порожній список
    } while (responseData?.data?.length > 0 || (Array.isArray(responseData) && responseData.length > 0));

    return returnData;
}


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

		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'POST',
			url: 'https://api.roapp.io/v2/orders',
			json: true,
			body: body,
		});
	} else if (operation === 'getAll') {
		const url = `${BASE_URL}v2/orders`; 
		return await handleGetAll.call(this, index, url);

		} else if (operation === 'get') {
			return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
				method: 'GET',
				url: `https://api.roapp.io/v2/orders/${this.getNodeParameter('orderId', index)}`,
				json: true,
			});
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
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'POST',
			url: 'https://api.roapp.io/v2/contacts/people',
			json: true,
			body: body,
		});
	} else if (operation === 'getAll') {
		const url = `${BASE_URL}v2/contacts/people`; 
		return await handleGetAll.call(this, index, url);
	} else if (operation === 'get') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'GET',
			url: `https://api.roapp.io/v2/contacts/people/${this.getNodeParameter('personId', index)}`,
			json: true,
		});
	}
	return null;
}

export async function executeInvoiceOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		const url = `${BASE_URL}v2/invoices`; 
		return await handleGetAll.call(this, index, url);
	} else if (operation === 'get') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'GET',
			url: `https://api.roapp.io/v2/invoices/${this.getNodeParameter('invoiceId', index)}`,
			json: true,
		});
	}
	return null;
}

export async function executeOrganizationOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		const url = `${BASE_URL}v2/organizations`; 
		return await handleGetAll.call(this, index, url);
	}
	return null;
}

export async function executeSaleOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		const url = `${BASE_URL}v2/sales`; 
		return await handleGetAll.call(this, index, url);
	}
	return null;
}

