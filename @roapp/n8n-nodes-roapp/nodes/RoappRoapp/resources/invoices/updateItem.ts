import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoicesUpdateItem = {
	operation: ['updateItem'],
	resource: ['invoice'],
};

export const invoiceUpdateItemDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the invoice',
		displayOptions: {
			show: showOnlyForInvoicesUpdateItem,
		},
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the invoice item to update',
		displayOptions: {
			show: showOnlyForInvoicesUpdateItem,
		},
	},
	{
		displayName: 'Entity ID',
		name: 'entity_id',
		type: 'number',
		default: 0,
		required: false,
		description: 'Product or Service ID from catalog',
		displayOptions: {
			show: showOnlyForInvoicesUpdateItem,
		},
	},
	{
		displayName: 'Quantity',
		name: 'quantity',
		type: 'number',
		default: 0,
		required: false,
		description: 'The quantity of the item',
		displayOptions: {
			show: showOnlyForInvoicesUpdateItem,
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
			show: showOnlyForInvoicesUpdateItem,
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
			show: showOnlyForInvoicesUpdateItem,
		},
	},
	{
		displayName: 'Comment Visibility',
		name: 'comment_visibility',
		type: 'options',
		default: 'public',
		options: [
			{ name: 'Public', value: 'public' },
			{ name: 'Private', value: 'private' }
		],
		required: false,
		displayOptions: {
			show: showOnlyForInvoicesUpdateItem,
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
			show: showOnlyForInvoicesUpdateItem,
		},
		typeOptions: {
			multipleValues: true,
		},
	},
];