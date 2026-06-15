import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { personCreateDescription } from './create';
import { personGetAllDescription } from './getAll';
import { handleCreateUpdate, handleGetAll, handleGetOne, BASE_URL } from '../../shared/methods';

const showOnlyForUsers = {
	resource: ['person'],
};

export const personDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUsers,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new person',
				description: 'Create a new person',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a person',
				description: 'Delete a person',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a user',
				description: 'Get the data of a single user',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get persons',
				description: 'Get many person',
			},
			{
				name: 'Get Person Organization',
				value: 'getPersonOrganization',
				action: 'Get person organization',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a person',
				description: 'Update a person',
			},
		],
		default: 'getAll',
	},
	...personCreateDescription,
	...personGetAllDescription
];

export async function executePersonOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
):Promise<INodeExecutionData[][]> {
	if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/contacts/people`, 'POST');
	} else if (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/contacts/people/${this.getNodeParameter('person_id', index)}`, 'PATCH');
	} else if (operation === 'delete') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/contacts/people/${this.getNodeParameter('Id', index)}`, 'DELETE');
	} else if (operation === 'getPersonOrganization') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/people/${this.getNodeParameter('Id', index)}/organizations`);
	} else if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/contacts/people`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/contacts/people/${this.getNodeParameter('Id', index)}`);
	}
	return [[{json: {}}]];
}