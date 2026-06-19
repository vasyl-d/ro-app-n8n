import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ordersGetAllDescription } from './getAll';
import { ordersCreateDescription } from './create';
import { ordersCreateItemDescription } from './createItem';
import { ordersUpdateItemDescription } from './updateItem';
import { ordersDeleteItemDescription } from './deleteItem';
import { ordersUpdateStatusDescription } from './updateStatus';
import { ordersCreateCommentDescription } from './createComment';
import { ordersGetPublicUrlDescription } from './getPublicUrl';
import { handleGetAll, handleGetOne, BASE_URL, handleCreateUpdate } from '../../shared/methods';

const showOnlyForOrders = {
	resource: ['order'],
};

export const ordersDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForOrders,
		},
		options: [
			{
				name: 'Add Item',
				value: 'createItem',
				action: 'Add order item',
				description: 'Add an item to an order',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create order',
				description: 'Create a new order',
			},
			{
				name: 'Create Comment',
				value: 'createComment',
				action: 'Create order comment',
				description: 'Add a comment to an order',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete order',
				description: 'Delete an order',
			},
			{
				name: 'Delete Item',
				value: 'deleteItem',
				action: 'Delete order item',
				description: 'Delete an order item',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get order',
				description: 'Get the data of a single order',
			},
			{
				name: 'Get Custom Fields',
				value: 'getCustomFields',
				action: 'Get order custom fields',
				description: 'Get the custom fields of an order',
			},
			{
				name: 'Get Items',
				value: 'getItems',
				action: 'Get order items',
				description: 'Get items for an order',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get orders',
				description: 'Get multiple orders',
			},
			{
				name: 'Get Public URL',
				value: 'getPublicUrl',
				action: 'Get order public URL',
				description: 'Get the public page URL of an order',
			},
			{
				name: 'Get Statuses',
				value: 'getStatuses',
				action: 'Get order statuses',
				description: 'Get the statuses of an order',
			},
			{
				name: 'Get Types',
				value: 'getTypes',
				action: 'Get order types',
				description: 'Get the types of an order',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update order',
				description: 'Update an order',
			},
			{
				name: 'Update Item',
				value: 'updateItem',
				action: 'Update order item',
				description: 'Update an order item',
			},
			{
				name: 'Update Status',
				value: 'updateStatus',
				action: 'Update order status',
				description: 'Update the status of an order',
			},
		],
		default: 'getAll',
	},
	...ordersGetAllDescription,
	...ordersCreateDescription,
	...ordersCreateItemDescription,
	...ordersUpdateItemDescription,
	...ordersDeleteItemDescription,
	...ordersUpdateStatusDescription,
	...ordersCreateCommentDescription,
	...ordersGetPublicUrlDescription,
];

export async function executeOrderOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]>{

	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/orders`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'delete') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: 'DELETE',
			url: `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}`
		});
	} else if (operation === 'getItems') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/items`);
	} else if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders`, 'POST');
	} else if (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('order_id', index)}`, 'PATCH');
	} else if (operation === 'getStatuses') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/statuses`);
	} else if (operation === 'getTypes') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/types`);
	} else if (operation === 'getCustomFields') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/custom-fields`);
	} else if (operation === 'createItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('order_id', index)}/items`, 'POST');
	} else if (operation === 'updateItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('order_id', index)}/items/${this.getNodeParameter('item_id', index)}`, 'PATCH');
	} else if (operation === 'deleteItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('order_id', index)}/items/${this.getNodeParameter('item_id', index)}`, 'DELETE');
	} else if (operation === 'updateStatus') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/status`, 'POST');
	} else if (operation === 'createComment') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/comments`, 'POST');
	} else if (operation === 'getPublicUrl') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/orders/${this.getNodeParameter('Id', index)}/public-url`);
	}
	return [[{json:{}, 
		pairedItem: {
			item: index, // Link to current input index
		}}]];
}