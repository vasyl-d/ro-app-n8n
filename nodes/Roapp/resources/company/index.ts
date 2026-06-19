import { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { handleGetOne, BASE_URL, handleGetAll } from '../../shared/methods';

const showOnlyForCompany = {
    resource: ['company'],
};

export const companyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
            show: showOnlyForCompany,
		},
		options: [
			{
				name: 'Get Employees',
				value: 	 'getEmployees',
				action:  'Get the employees of a company',
				description: 'Get the employees of a company',
			},	
            {
				name: 'Get Info',
				value: 'getInfo',
				action: 'Get the comapany info',
				description: 'Get the comapany info',
			},
            {
				name: 'Get Legal Entities',
				value: 'getLegalEntities',
				action: 'Get the legal entities of a company',
				description: 'Get the legal entities of a company',				
			},
			{
				name: 'Get License',
				value: 'getLicense',
				action: 'Get the license of a company',
				description: 'Get the license of a company',					
			},			
			{
				name: 'Get Location By ID',
				value: 'getLocationById',
				action: 'Get the location data',
				description: 'Get the location data',					
			},			
			{
				name: 'Get Location Resources',
				value: 'getLocationResources',
				action: 'Get resources for given location',
				description: 'Get resources for given location',					
			},			
            {
				name: 'Get Locations',
				value: 'getLocations',
				action: 'Get the locations of a company',
				description: 'Get the locations of a company',					
			},			
			{
				name: 'Get Taxes',
				value: 	'getTaxes',
				action: 'Get the taxes of a company',
				description: 'Get the taxes of a company',

			},		
		],
		default: 'getInfo',
	}
];

export async function executeCompanyOperations(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getInfo') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company`);
	} 
	if (operation === 'getLocations') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/company/locations`);
	} 
	if (operation === 'getLicense') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company/license`);
	} 
	if (operation === 'getLegalEntities') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/company/legal-entities`);
	} 
	if (operation === 'getTaxes') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/company/taxes`);
	}
	if (operation === 'getEmployees') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/company/employees`);
	}
	if (operation === 'getLocaionById') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company/locations/${this.getNodeParameter('Id', index)}`);
	}
	if (operation === 'getLocationResources') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/company/locations/${this.getNodeParameter('Id', index)}/resources`);
	}
	return [[{json:{}, 
		pairedItem: {
			item: index, // Link to current input index
		}}]];
}
