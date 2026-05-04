import { INodeProperties, IExecuteFunctions } from 'n8n-workflow';
import { handleGetOne, BASE_URL } from '../../shared/methods';

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
				name: 'Get Info',
				value: 'getInfo',
				action: 'Get the comapany info',
				description: 'Get the comapany info',
			},
            {
				name: 'Get Locations',
				value: 'getLocations',
				action: 'Get the locations of a company',
				description: 'Get the locations of a company',					
			},			
            {
				name: 'Get License',
				value: 'getLicense',
				action: 'Get the license of a company',
				description: 'Get the license of a company',					
			},			
            {
				name: 'Get Legal Entities',
				value: 'getLegalEntities',
				action: 'Get the legal entities of a company',
				description: 'Get the legal entities of a company',				
			},
			{
				name: 'Get Taxes',
				value: 	'getTaxes',
				action: 'Get the taxes of a company',
				description: 'Get the taxes of a company',

			},
			{
				name: 'Get Employees',
				value: 	 'getEmployees',
				action:  'Get the employees of a company',
				description: 'Get the employees of a company',
			}			
		],
		default: 'getInfo',
	}
];

export async function executeGetCompany(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getInfo') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company`);
	} 
	if (operation === 'getLocations') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company/locations`);
	} 
	if (operation === 'getLicense') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company/license`);
	} 
	if (operation === 'getLegalEntities') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company/legal-entities`);
	} 
	if (operation === 'getTaxes') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company/taxes`);
	}
	if (operation === 'getEmployees') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/company/employees`);
	}
	return null;
}
