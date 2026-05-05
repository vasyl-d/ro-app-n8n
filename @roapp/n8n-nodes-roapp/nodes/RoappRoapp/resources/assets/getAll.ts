import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetGetMany = {
	operation: ['getAll'],
	resource: ['asset'],
};

export const assetGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Ids',
		name: 'ids[]',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by asset id Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForAssetGetMany,
		},
	},
	{
		displayName: 'Uids',
		name: 'uid[]',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by asset uid/serial number. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForAssetGetMany,
		},
	},
	{
		displayName: 'Owner ids',
		name: 'owner_id[]',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by customer ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForAssetGetMany,
		},
	},
	{
		displayName: 'Warehouse ids',
		name: 'warehouse_id[]',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by warehouse ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForAssetGetMany,
		},
	},
];