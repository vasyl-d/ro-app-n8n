import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBundleCreateItem = {
	operation: ['createBundleItem', 'updateBundleItem'],
	resource: ['catalog'],
};

export const bundleCreateItemDescription: INodeProperties[] = [
	{
		displayName: 'Bundle ID',
		name: 'bundle_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the order to add the item to',
		displayOptions: {
			show: {
				operation: ['createBundleItem', 'updateBundleItem', 'deleteBundleItem'],
				resource: ['catalog'],
			}
		},
	},
	{
		displayName: 'Item ID',
		name: 'item_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the item in the bundle',
		displayOptions: {
			show: {
				operation: ['updateBundleItem', 'deleteBundleItem'],
				resource: ['catalog'],
			},
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
			show: {
				operation: ['createBundleItem'],
				resource: ['catalog'],
			},
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
			show: showOnlyForBundleCreateItem,
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: 0,
		description: 'The price per unit',
		displayOptions: {
			show: showOnlyForBundleCreateItem,
		},
	}
];
