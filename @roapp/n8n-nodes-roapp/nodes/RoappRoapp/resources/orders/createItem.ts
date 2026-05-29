import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrdersCreateItem = {
	operation: ['createItem'],
	resource: ['order'],
};

export const ordersCreateItemDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'order_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the order to add the item to',
		displayOptions: {
			show: showOnlyForOrdersCreateItem,
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
			show: showOnlyForOrdersCreateItem,
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
			show: showOnlyForOrdersCreateItem,
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: 0,
		required: false,
		description: 'The price per unit',
		displayOptions: {
			show: showOnlyForOrdersCreateItem,
		},
	},
	{
		displayName: 'Cost',
		name: 'cost',
		type: 'number',
		default: 0,
		required: false,
		description: 'The unit cost',
		displayOptions: {
			show: showOnlyForOrdersCreateItem,
		},
	},
	{
		displayName: 'Tax IDs',
		name: 'tax_ids',
		type: 'string',
		default: [],
		required: false,
		description: 'Array of Tax IDs. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForOrdersCreateItem,
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
		required: false,
		description: 'Additional comments about the item',
		displayOptions: {
			show: showOnlyForOrdersCreateItem,
		},
	},
];
