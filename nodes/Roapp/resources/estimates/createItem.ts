import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimatesCreateItem = {
	operation: ['createItem'],
	resource: ['estimate'],
};

export const estimatesCreateItemDescription: INodeProperties[] = [
	{
		displayName: 'Estimate ID',
		name: 'estimate_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the estimate to add the item to',
		displayOptions: {
			show: showOnlyForEstimatesCreateItem,
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
			show: showOnlyForEstimatesCreateItem,
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
			show: showOnlyForEstimatesCreateItem,
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: 0,
		description: 'The price per unit',
		displayOptions: {
			show: showOnlyForEstimatesCreateItem,
		},
	},
	{
		displayName: 'Cost',
		name: 'cost',
		type: 'number',
		default: 0,
		description: 'The unit cost',
		displayOptions: {
			show: showOnlyForEstimatesCreateItem,
		},
	},
	{
		displayName: 'Tax IDs',
		name: 'tax_ids',
		type: 'string',
		default: [],
		description: 'Array of Tax IDs. Specify one or more IDs using an expression.',
		displayOptions: {
			show: showOnlyForEstimatesCreateItem,
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
			show: showOnlyForEstimatesCreateItem,
		},
	},
];
