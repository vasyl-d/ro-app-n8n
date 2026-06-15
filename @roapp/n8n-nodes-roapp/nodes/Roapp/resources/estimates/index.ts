import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { estimatesGetAllDescription } from './getAll';
import { estimatesCreateDescription } from './create';
import { estimatesCreateItemDescription } from './createItem';
import { estimatesUpdateItemDescription } from './updateItem';
import { estimatesDeleteItemDescription } from './deleteItem';
import { estimatesUpdateStatusDescription } from './updateStatus';
import { estimatesCreateCommentDescription } from './createComment';
import { estimatesGetPublicUrlDescription } from './getPublicUrl';
import { handleGetAll, handleGetOne, BASE_URL, handleCreateUpdate } from '../../shared/methods';

const showOnlyForEstimates = {
	resource: ['estimate'],
};

export const estimatesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEstimates,
		},
		options: [
			{
				name: 'Add Item',
				value: 'createItem',
				action: 'Add estimate item',
				description: 'Add an item to an estimate',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create estimate',
				description: 'Create a new estimate',
			},
			{
				name: 'Create Comment',
				value: 'createComment',
				action: 'Create estimate comment',
				description: 'Add a comment to an estimate',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete estimate',
				description: 'Delete an estimate',
			},
			{
				name: 'Delete Item',
				value: 'deleteItem',
				action: 'Delete estimate item',
				description: 'Delete an estimate item',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get estimate',
				description: 'Get the data of a single estimate',
			},
			{
				name: 'Get Custom Fields',
				value: 'getCustomFields',
				action: 'Get estimate custom fields',
				description: 'Get the custom fields of an estimate',
			},
			{
				name: 'Get Items',
				value: 'getItems',
				action: 'Get estimate items',
				description: 'Get items for an estimate',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get estimates',
				description: 'Get multiple estimates',
			},
			{
				name: 'Get Public URL',
				value: 'getPublicUrl',
				action: 'Get estimate public URL',
				description: 'Get the public page URL of an estimate',
			},
			{
				name: 'Get Statuses',
				value: 'getStatuses',
				action: 'Get estimate statuses',
				description: 'Get the statuses of an estimate',
			},
			{
				name: 'Get Types',
				value: 'getTypes',
				action: 'Get estimate types',
				description: 'Get the types of an estimate',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update estimate',
				description: 'Update an estimate',
			},
			{
				name: 'Update Item',
				value: 'updateItem',
				action: 'Update estimate item',
				description: 'Update an estimate item',
			},
			{
				name: 'Update Status',
				value: 'updateStatus',
				action: 'Update the status of an estimate',
				description: 'Update the status of an estimate',
			},
		],
		default: 'getAll',
	},
	...estimatesGetAllDescription,
	...estimatesCreateDescription,
	...estimatesCreateItemDescription,
	...estimatesUpdateItemDescription,
	...estimatesDeleteItemDescription,
	...estimatesUpdateStatusDescription,
	...estimatesCreateCommentDescription,
	...estimatesGetPublicUrlDescription,
];

export async function executeEstimateOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]>{

	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/estimates`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'delete') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'DELETE',
			url: `${BASE_URL}v2/estimates/${this.getNodeParameter('Id', index)}`
		});
	} else if (operation === 'getItems') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('Id', index)}/items`);
	} else if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/estimates`, 'POST');
	} else if (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('estimate_id', index)}`, 'PATCH');
	} else if (operation === 'getStatuses') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/estimates/statuses`);
	} else if (operation === 'getTypes') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/estimates/types`);
	} else if (operation === 'getCustomFields') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/estimates/custom-fields`);
	} else if (operation === 'createItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('estimate_id', index)}/items`, 'POST');
	} else if (operation === 'updateItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('estimate_id', index)}/items/${this.getNodeParameter('item_id', index)}`, 'PATCH');
	} else if (operation === 'deleteItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('estimate_id', index)}/items/${this.getNodeParameter('item_id', index)}`, 'DELETE');
	} else if (operation === 'updateStatus') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('Id', index)}/status`, 'POST');
	} else if (operation === 'createComment') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('Id', index)}/comments`, 'POST');
	} else if (operation === 'getPublicUrl') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/estimates/${this.getNodeParameter('Id', index)}/public-url`);
	}
	return [[{json:{}, 
		pairedItem: {
			item: index, // Зв'язуємо з поточним вхідним індексом
		}}]];
}
