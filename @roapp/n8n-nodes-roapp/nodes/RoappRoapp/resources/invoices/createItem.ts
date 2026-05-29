import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoicesCreateItem = {
	operation: ['createItem'],
	resource: ['invoice'],
};

export const invoiceCreateItemDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the invoice to add the item to',
		displayOptions: {
			show: showOnlyForInvoicesCreateItem,
		},
	},
	{
		displayName: 'Entity ID',
		name: 'entity_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'Product or Service ID from catalog',
		displayOptions: {
			show: showOnlyForInvoicesCreateItem,
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
			show: showOnlyForInvoicesCreateItem,
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: '',
		required: true,
		description: 'The price per unit',
		displayOptions: {
			show: showOnlyForInvoicesCreateItem,
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
			show: showOnlyForInvoicesCreateItem,
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
			show: showOnlyForInvoicesCreateItem,
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
			show: showOnlyForInvoicesCreateItem,
		},
		typeOptions: {
			multipleValues: true,
		},
	},
];