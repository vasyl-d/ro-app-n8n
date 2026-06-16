import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrdersUpdateItem = {
	operation: ['updateItem'],
	resource: ['order'],
};

export const ordersUpdateItemDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'order_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the order',
		displayOptions: {
			show: showOnlyForOrdersUpdateItem,
		},
	},
	{
		displayName: 'Item ID',
		name: 'item_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the order item to update',
		displayOptions: {
			show: showOnlyForOrdersUpdateItem,
		},
	},
	{
		displayName: 'Entity ID',
		name: 'entity_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the product or service',
		displayOptions: {
			show: showOnlyForOrdersUpdateItem,
		},
	},
	{
		displayName: 'Quantity',
		name: 'quantity',
		type: 'number',
		default: 1,
		required: true,
		description: 'The quantity of the item',
		displayOptions: {
			show: showOnlyForOrdersUpdateItem,
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: 0,
		description: 'The price per unit',
		displayOptions: {
			show: showOnlyForOrdersUpdateItem,
		},
	},
	{
		displayName: 'Cost',
		name: 'cost',
		type: 'number',
		default: 0,
		description: 'The unit cost',
		displayOptions: {
			show: showOnlyForOrdersUpdateItem,
		},
	},
	{
		displayName: 'Tax IDs',
		name: 'tax_ids',
		type: 'string',
		default: [],
		description: 'Array of Tax IDs. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForOrdersUpdateItem,
		},
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		description: 'Additional comments about the item',
		displayOptions: {
			show: showOnlyForOrdersUpdateItem,
		},
	},
];
