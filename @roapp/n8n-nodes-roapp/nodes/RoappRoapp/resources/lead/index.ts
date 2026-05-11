import type { INodeProperties, IExecuteFunctions } from 'n8n-workflow';
import { leadGetManyDescription } from './getAll';
import { handleGetAll, 
	handleGetOne, 
	handleCreateUpdate,
	BASE_URL} from '../../shared/methods';
// import { leadCreateDescription } from './create';

const showOnlyForlead = {
	resource: ['lead'],
};

export const leadDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForlead,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get leads',
				description: 'Get leads',
			},
			// {
			// 	name: 'Create',
			// 	value: 'create',
			// 	action: 'Create lead',
			// 	description: 'Create a new lead',
			// },
			// {
			// 	name: 'Update',
			// 	value: 'update',
			// 	action: 'Update lead',
			// 	description: 'Update the lead',
			// },
			{
				name: 'Get',
				value: 'get',
				action: 'Get a lead',
				description: 'Get the data of a single lead',
			},
		],
		default: 'getAll',
	},
	...leadGetManyDescription,
// 	...leadCreateDescription,
];

export async function executeLeadOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}lead/`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}lead/?ids[]=${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}lead/`, 'POST');
	} else if  (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}lead/`, 'PUT')
	}
	return null;
}