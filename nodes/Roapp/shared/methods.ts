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
	JsonObject,
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
	"estimate" : `${BASE_URL}v2/estimates/custom-fields`,
	"person": `${BASE_URL}v2/contacts/people/custom-fields`,
	"organization": `${BASE_URL}v2/contacts/organizations/custom-fields`,
	"lead": `${BASE_URL}lead/custom-fields/`,
	'asset': `${BASE_URL}warehouse/assets/custom-fields/`
};

const resources_stuses_urls: { [key: string]: string } = {
  "order": `${BASE_URL}v2/orders/statuses`,
  "estimate": `${BASE_URL}v2/estimates/statuses`,
  "lead": `${BASE_URL}statuses/leads`,
  "invoice": `${BASE_URL}v2/invoices/statuses`
};

const resources_types_urls: { [key: string]: string } = {
  "order": `${BASE_URL}v2/orders/types`,
  "estimate": `${BASE_URL}v2/estimates/types`,
  "lead": `${BASE_URL}lead/types/`,
  "asset": `${BASE_URL}v2/assets/types`
};

// Custom fields data cache
const cache: { [key: string]: { fields: ResourceMapperField[], fieldsInfo: { [key: string]: string } }} = {};
const cacheTTL: { [key: string]: number } = {};

const CACHE_DURATION = 5 * 60 * 1000; // 5 min in ms

// ==================== HELPER FUNCTIONS ====================

function errorHelper(
	this: IExecuteFunctions | ILoadOptionsFunctions, 
	error: JsonObject, 
	):NodeApiError 
{
	const context = error?.context as IDataObject;
	const errorMessage = `${String(JSON.stringify(error?.description || context?.data))} ${String(error?.messages)}`;
	// console.log(errorMessage);

	throw new NodeApiError(this.getNode(), error, { 
		message: errorMessage 
		});		
}

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
	// get chache key by resource
	const cacheKey = `cf_${resource}`;

	// If data is in cache and not expired, return it
	if (cache[cacheKey] && cacheTTL[cacheKey] > Date.now()) {
		return cache[cacheKey];
	}

	// Get custom fields data
	const url = resources_cf_urls[resource];
	let data = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
		method: 'GET',
		url,
		json: true,
	});
	data = data?.data || data;
	// make fields
	const fields = data.map((field: { [key: string]: string }) => ({
		id: `f${field.id}`,
		displayName: field.title || field.name,
		name: `f${field.id}`,
		type: cf_types[parseInt(field.type)] || 'string',
		default: cf_types[parseInt(field.type)] === 'boolean' ? false : '',
		display: true,
	}));

	// make fieldsInfo
	const fieldsInfo: { [key: string]: string } = {};
	for (const field of data) {
		const fieldType = cf_types[parseInt(field.type)] || 'string';
		fieldsInfo[`f${field.id}`] = fieldType;
	}

	// store cache
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

export async function getAdCampaigns(
	this: IAllExecuteFunctions) : Promise<INodePropertyOptions[]>  {
	const url:string =  `${BASE_URL}marketing/campaigns/`;
	let response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
		method: "GET",
		url,
		json: true,
	});
	response = response?.data;
	const fields:INodePropertyOptions[] = response.map((row: IDataObject) => ({
		name: row.name,
		value: row.id
	}));
	return fields;
}

export async function getEmployees(
	this: IAllExecuteFunctions) : Promise<INodePropertyOptions[]>  {
	const url:string =  `${BASE_URL}v2/company/employees`;
	let response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
		method: "GET",
		url,
		json: true,
	});
	response = response?.data || response;
	const fields:INodePropertyOptions[] = response.map((row: IDataObject) => ({
		name: `${row?.first_name} ${row?.last_name}`,
		value: row.id
	}));
	return fields;
}

export async function getLocations(
	this: IAllExecuteFunctions) : Promise<INodePropertyOptions[]>  {
	const url:string =  `${BASE_URL}v2/company/locations`;
	let response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
		method: "GET",
		url,
		json: true,
	});
	response = response?.data || response;
	const fields:INodePropertyOptions[] = response.map((row: IDataObject) => ({
		name: row?.name,
		value: row.id
	}));
	return fields;
}

export async function getLocationResources(
	this: IAllExecuteFunctions,
	branch_id: string) : Promise<INodePropertyOptions[]>  {

	if (!branch_id) {
		return [];
	};
	const url:string =  `${BASE_URL}v2/company/locations/${branch_id}/resources`;
	const response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
		method: "GET",
		url,
		json: true,
	});
	const fields:INodePropertyOptions[] = response.map((row: IDataObject) => ({
		name: row.name,
		value: row.id
	}));
	return fields;
}

// ==================== HELPER FUNCTIONS ====================

export async function getCustomFieldsInfo(
	this: IExecuteFunctions,
	resource: string
): Promise<{ [key: string]: string }> {
	// use cache data
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

		// dateTime to ISO format
		if (fieldType === 'dateTime' && fieldValue) {
			try {
				// str to date
				const dateObj = new Date(fieldValue as string);
				if (!isNaN(dateObj.getTime())) {
					// to iso: "2024-01-15T10:30:00Z"
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

function isVisible(param: IDataObject, resourceName:string, operationName:string): boolean {
		const opts = param.displayOptions as IDataObject;
		if (!opts) return true;

		const show = opts.show as IDataObject;
		const hide = opts.hide as IDataObject;
		const hideResource = hide.resource as string[];
		const hideOperation = hide.operation as string[];
		const showResource = show.resource as string[];
		const showOperation = show.operation as string[];
		if (hide) {
			if (hideResource && Array.isArray(hideResource) && (hideResource.includes(resourceName))) return false;
			if (hideOperation && Array.isArray((hideOperation) && (hideOperation.includes(operationName)))) return false;
		}
		if (show) {
			if (showResource && Array.isArray(showResource) && !(showResource.includes(resourceName))) return false;
			if (showOperation && Array.isArray(showOperation) && !(showOperation.includes(operationName))) return false;
		}
		return true;
	}

// ==================== EXECUTE METHODS FOR EACH RESOURCE ====================

//helper funcs
function makeQs(
	this: IExecuteFunctions,
	index: number,
	ignored: string[] = []
):IDataObject {
	// 1. Get all Node parameters
	const parameters = this.getNode().parameters;
	const qs: IDataObject = {};
	const ignoredParameters = ['resource', 'operation', 'returnAll', 'limit', ...ignored];
	const oldApiRresources = ['asset', 'lead', 'warehouse'] as string[];
	const resourceName = this.getNodeParameter('resource', index) as string;
	const operationName = this.getNodeParameter('operation', index) as string;

	for (const parameterName of Object.keys(parameters)) {
		if (!isVisible(parameters[parameterName] as IDataObject, resourceName, operationName)) continue;
		if (!ignoredParameters.includes(parameterName)) {
			try {
		// Get parameter value (considering expressions)
				const value = this.getNodeParameter(parameterName, index);
				if (Array.isArray(value) && value.length > 0) {
					if (oldApiRresources.includes(resourceName)) {
					// API option expects array format with square brackets: ?status[]=active&status[]=pending
					// (Most libraries do this automatically, but sometimes you need to specify the key explicitly)
						// qs[`${parameterName}[]`] = value.join(`&${parameterName}[]=`); 
						qs[`${parameterName}[]`] = value; 
					} else {
						// API option expects comma-separated string: ?status=active,pending
						qs[`${parameterName}`] = value; 
						// qs[`${parameterName}`] = value.join(`,`);
					}
				}
				// If this is a "filters" or "additionalFields" collection
				else if (typeof value === 'object' && value !== null && value != undefined) {
					const processedFilters:{[key:string]:unknown} = { ...value };
					if (parameterName == "created_at" || parameterName == "modified_at" || parameterName == "closed_at" || parameterName == "scheduled_for" || parameterName == "due_date" || parameterName == "issue_date") {
						const from_name = `${parameterName}_from`;
						const to_name = `${parameterName}_to`;
						let from:string = '';
						let to:string = '';
						if (parameterName != "issue_date") {
							from = processedFilters[from_name]
								? `${String(DateTime.fromISO(String(processedFilters[from_name])).toISO()).split(".")[0]}Z` // or .toISOString()
								: '';
							to = processedFilters[to_name]
								? `,${String(DateTime.fromISO(String(processedFilters[to_name])).toISO()).split(".")[0]}Z`
								: '';
							} else {
								from = processedFilters[from_name]
								? `${String(DateTime.fromISO(String(processedFilters[from_name])).toISO({includeOffset: false, precision: 'day' }))}` // or .toISOString()
								: '';
								to = processedFilters[to_name]
								? `,${String(DateTime.fromISO(String(processedFilters[to_name])).toISO({includeOffset: false, precision: 'day' }))}`
								: '';
							}
							if (from || to) {
								qs[`${parameterName}`] = `${from}${to}`;
							}
					} else {
						Object.assign(qs, value);
					}

					// Create a separate constant with explicit type casting
					const idValues = processedFilters?.idValues as IDataObject[] | undefined;

					// Now safely check if it's actually an array
					if (Array.isArray(idValues)) {
						qs[parameterName] = idValues.map((v: IDataObject) => v.value).join(',');
					}
				} else if (value != undefined && String(value).trim() != '' && value !== null) {
					qs[parameterName] = value;
				}
			} catch {
				// Parameter may be hidden by displayOptions, then getNodeParameter will throw an error
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
	const resourceName = this.getNodeParameter('resource', index) as string;
	const oldApiRresources = ['asset', 'lead'] as string[];
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

		// console.log(`Requesting page ${page}: ${url}, QS: ${JSON.stringify(qs)}`);
		const options:IDataObject = {};

		if (oldApiRresources.includes(resourceName)) {
			options["arrayFormat"] = 'repeat';
		} else {
			options["arrayFormat"] = 'comma';
		};
	
		try {
			responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
				method: 'GET',
				url: url,
				json: true,
				qs: qs,
				...options
			});
		} catch (error) {
			errorHelper.call(this, error);
		}

		resObj = (responseData || {}) as IDataObject;
		
		// Extract data array from API response
		const items = (resObj?.data || responseData || []) as IDataObject[];
		// console.log(`Items count: ${items.length}`);

		// Safety 1: If API returned empty array, stop immediately (even if total_pages says otherwise)
		if (items.length === 0) {
			break;
		}

		rawItems.push(...items);
		
		const paging = resObj?.paging as IDataObject | undefined;
		const rawCount = Number(resObj?.count);
		
		// Reliable total_pages calculation with protection against NaN and invalid values
		if (paging?.total_pages !== undefined) {
			total_pages = Number(paging.total_pages);
		} else if (!isNaN(rawCount) && rawCount > 0) {
			total_pages = Math.ceil(rawCount / 50);
		} else {
			// Safety 2: If API didn't provide page metadata, assume there is only one page
			total_pages = 1; 
		}

		if (!returnAll && rawItems.length >= limit) {
			break;
		}

		// console.log(`Total pages: ${total_pages}, finished page ${page}`);
		
		// Safety 3: If we just processed the last page, exit without incrementing
		if (page >= total_pages) {
			break;
		}

		page = page + 1;

	} while (page <= total_pages);

	const finalItems = returnAll ? rawItems : rawItems.slice(0, limit);
	// 2. Manually convert raw data to INodeExecutionData format with pairedItem
	const executionData: INodeExecutionData[] = finalItems.map((item) => ({
		json: item,
		pairedItem: {
			item: index, // Link to current input index
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
		// Collect all Query Parameters dynamically
		const qs = makeQs.call(this, index);
		// console.log(`before request: ${url}, ${JSON.stringify(qs, null, 2)}`);
		return [[{
			json: await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
				method: method,
				url: url,
				json: true,
				qs: qs,
			}),		
			pairedItem: {
				item: index, // Link to current input index
		},}]];
	} catch (error) {
		errorHelper.call(this, error);
		return [[{json: {}, pairedItem: {item: index}}]];
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
		// console.log(`Log ${url} body before request: ${JSON.stringify(body)}`);
		return [[{ 
		json: await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: method,
			url: url,
			json: true,
			body: body
		}),
		pairedItem: {
			item: index, // Link to current input index
		},}]];
	} catch (error) {
		errorHelper.call(this, error);
		return [[{json: {}, pairedItem: {item: index}}]];
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
		
		// Get parameters as key-value object
		const parameters = this.getNode().parameters as IDataObject;

		for (const paramName in parameters) {
			if (paramName === 'resource' || paramName === 'operation') {
				continue;
			}
			
			if (Object.prototype.hasOwnProperty.call(parameters, paramName)) {
				// Replaced any with unknown. n8n linter approves.
				const value = this.getNodeParameter(paramName, index) as unknown;

				// Validation: skip null, undefined and empty strings
				if (!isEmpty(value)) {
					// Cast to IDataObject for safe access to nested fields (value?.value etc.)
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
					else if (paramName === "phonesUi" && valueObj?.phones) {
						const phonesUi = Object.assign(valueObj as {
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
					}
					else {
						// Since body is typed as IDataObject, we can assign unknown values to it
						body[paramName] = this.getNodeParameter(paramName, index);
					}
				}
			}
		}
		// console.log(`Log ${url} body before request: ${JSON.stringify(body)}`);
		// Make the API request and explicitly tell TypeScript the response is an object (IDataObject)
		const responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: method,
			url: url,
			json: true,
			body: body
		}) as IDataObject;

		return [[{ 
			json: responseData, 		
			pairedItem: {
				item: index, // Link to current input index
			} }]];

	} catch (error) {
		errorHelper.call(this, error);
		return [[{json: {}, pairedItem: {item: index}}]];
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

