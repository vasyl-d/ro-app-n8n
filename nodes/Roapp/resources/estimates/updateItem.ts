import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimatesUpdateItem = {
	operation: ['updateItem'],
	resource: ['estimate'],
};

export const estimatesUpdateItemDescription: INodeProperties[] = [
	{
		displayName: 'Estimate ID',
		name: 'estimate_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the estimate',
		displayOptions: {
			show: showOnlyForEstimatesUpdateItem,
		},
	},
	{
		displayName: 'Item ID',
		name: 'item_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the estimate item to update',
		displayOptions: {
			show: showOnlyForEstimatesUpdateItem,
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
			show: showOnlyForEstimatesUpdateItem,
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
			show: showOnlyForEstimatesUpdateItem,
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: 0,
		description: 'The price per unit',
		displayOptions: {
			show: showOnlyForEstimatesUpdateItem,
		},
	},
	{
		displayName: 'Cost',
		name: 'cost',
		type: 'number',
		default: 0,
		description: 'The unit cost',
		displayOptions: {
			show: showOnlyForEstimatesUpdateItem,
		},
	},
	{
		displayName: 'Tax IDs',
		name: 'tax_ids',
		type: 'string',
		default: [],
		description: 'Array of Tax IDs. Specify one or more IDs using an expression.',
		displayOptions: {
			show: showOnlyForEstimatesUpdateItem,
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
			show: showOnlyForEstimatesUpdateItem,
		},
	},
];
