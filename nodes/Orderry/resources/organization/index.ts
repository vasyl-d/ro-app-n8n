import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { organozationGetManyDescription } from './getAll';
import { organizationCreateDescription } from './create';
import { handleCreateUpdate, handleGetAll, handleGetOne, BASE_URL } from '../../shared/methods';

const showOnlyForCompanies = {
	resource: ['organization'],
};

export const organizationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCompanies,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create an organization',
				description: 'Create an organization',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an organization',
				description: 'Delete an organization',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an organization',
				description: 'Get the data of a single organization',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get companies',
				description: 'Get companies',
			},
			{
				name: 'Get Organization People',
				value: 'getOrganizationPeople',
				action: 'Get persons connected with an organization',
				description: 'Get persons connected with an organization',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an organization',
				description: 'Update an organization',
			},
		],
		default: 'getAll',
	},
	...organozationGetManyDescription,
	...organizationCreateDescription
];

export async function executeOrganizationOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
):Promise<INodeExecutionData[][]> {
	if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/contacts/organizations`, 'POST');
	} else if (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/contacts/organizations/${this.getNodeParameter('organization_id', index)}`, 'PATCH');
	} else if (operation === 'delete') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/contacts/organizations/${this.getNodeParameter('Id', index)}`, 'DELETE');
	} else if (operation === 'getOrganizationPeople') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/contacts/organizations/${this.getNodeParameter('Id', index)}/people`);
	} else if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/contacts/organizations`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/organizations/${this.getNodeParameter('Id', index)}`);
	}
	return [[{json: {}}]];
}