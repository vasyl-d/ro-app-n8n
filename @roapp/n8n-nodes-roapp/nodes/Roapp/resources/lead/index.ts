import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { leadGetManyDescription } from './getAll';
import { leadCreateDescription } from './create';
import { leadUpdateStatusDescription } from './updateStatus';
import { leadCreateCommentDescription } from './createComment';
import { handleGetAll,
	handleGetOne,
	handleCreateUpdate,
	BASE_URL} from '../../shared/methods';

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
				name: 'Create',
				value: 'create',
				action: 'Create lead',
				description: 'Create a new lead',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a lead',
				description: 'Get the data of a single lead',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get leads',
				description: 'Get leads',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update lead',
				description: 'Update the lead',
			},
			{
				name: 'Update Status',
				value: 'updateStatus',
				action: 'Update lead status',
				description: 'Update the lead status',
			},
		],
		default: 'getAll',
	},
	...leadGetManyDescription,
	...leadCreateDescription,
	...leadUpdateStatusDescription,
	...leadCreateCommentDescription,
];

export async function executeLeadOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}lead/`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}lead/?ids[]=${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}lead/`, 'POST');
	} else if  (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}lead/`, 'PUT');
	} else if (operation === 'updateStatus') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}lead/status/`, 'PUT');
	} else if (operation === 'createComment') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}lead/${this.getNodeParameter('lead_id', index)}/comment/`, 'POST');
	}
	return [[{json:{},
		pairedItem: {
			item: index, // Зв'язуємо з поточним вхідним індексом
		}}]];
}