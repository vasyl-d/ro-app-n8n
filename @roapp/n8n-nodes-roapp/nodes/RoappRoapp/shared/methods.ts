import {INodePropertyOptions, IAllExecuteFunctions, ILoadOptionsFunctions, ResourceMapperFields, IExecuteFunctions } from 'n8n-workflow';

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
	"order" : "https://api.roapp.io/v2/orders/custom-fields",
	"person": "https://api.roapp.io/v2/contacts/people/custom-fields",
	"organization": "https://api.roapp.io/v2/contacts/organizations/custom-fields",
	"lead": "https://api.roapp.io/v2/lead/custom-fields/"
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

// async function fetchOrderCustomFieldsData(
// 	this: IExecuteFunctions | ILoadOptionsFunctions,
// ): Promise<{ fields: any[], fieldsInfo: { [key: string]: string } }> {
// 	// Проверяем, есть ли актуальный кеш
// 	if (orderCustomFieldsCache && customFieldsCacheTTL > Date.now()) {
// 		return orderCustomFieldsCache;
// 	}

// 	// Получаем данные с API
// 	const data = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
// 		method: 'GET',
// 		url: 'https://api.roapp.io/v2/orders/custom-fields',
// 		json: true,
// 	});

// 	// Формируем fields для resourceMapper
// 	const fields = data.map((field: any) => ({
// 		id: `f${field.id}`,
// 		displayName: field.title || field.name,
// 		name: `f${field.id}`,
// 		type: cf_types[parseInt(field.type)] || 'string',
// 		default: cf_types[parseInt(field.type)] === 'boolean' ? false : '',
// 		required: false,
// 		display: true,
// 	}));

// 	// Формируем fieldsInfo для трансформации значений
// 	const fieldsInfo: { [key: string]: string } = {};
// 	for (const field of data) {
// 		const fieldType = cf_types[parseInt(field.type)] || 'string';
// 		fieldsInfo[`f${field.id}`] = fieldType;
// 	}

// 	// Сохраняем в кеш
// 	orderCustomFieldsCache = { fields, fieldsInfo };
// 	customFieldsCacheTTL = Date.now() + CACHE_DURATION;

// 	return { fields, fieldsInfo };
// }

export async function getInvoiceStatuses(
	this: IAllExecuteFunctions,
	): Promise<INodePropertyOptions[]> {
    const returnData: INodePropertyOptions[] = [];
    const data = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', 
		{
			method: 'GET',
			url: 'https://api.roapp.io/v2/invoices/statuses', // 
			json: true,
		});

	for (const row of data) {
		returnData.push({
			name: row?.name,    // То, что видит пользователь
			value: row.id,      // То, что отправится в API (row_id)
		});
	}
	
	return returnData;
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
		const qs: any = {};
		if (this.getNodeParameter('returnAll', index) === false) {
			qs.limit = this.getNodeParameter('limit', index);
		}
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'GET',
			url: 'https://api.roapp.io/v2/orders',
			json: true,
			qs: qs,
		});
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
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'GET',
			url: 'https://api.roapp.io/v2/contacts/people',
			json: true,
		});
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
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'GET',
			url: 'https://api.roapp.io/v2/invoices',
			json: true,
		});
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
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'GET',
			url: 'https://api.roapp.io/v2/contacts/organizations',
			json: true,
		});
	}
	return null;
}

export async function executeSaleOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'GET',
			url: 'https://api.roapp.io/v2/sales',
			json: true,
		});
	}
	return null;
}

