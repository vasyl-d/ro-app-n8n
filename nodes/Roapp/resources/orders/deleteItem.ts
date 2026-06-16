import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrdersDeleteItem = {
	operation: ['deleteItem'],
	resource: ['order'],
};

export const ordersDeleteItemDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'order_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the order',
		displayOptions: {
			show: showOnlyForOrdersDeleteItem,
		},
	},
	{
		displayName: 'Item ID',
		name: 'item_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the order item to delete',
		displayOptions: {
			show: showOnlyForOrdersDeleteItem,
		},
	},
];
