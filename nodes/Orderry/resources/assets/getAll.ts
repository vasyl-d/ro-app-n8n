import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetGetMany = {
	operation: ['getAll'],
	resource: ['asset'],
};

export const assetGetManyDescription: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		default:[],
		description: 'Filter by asset ID Specify one or more IDs using an <a href="https://n8n.io">expression</a>',
		displayOptions: {
			show: showOnlyForAssetGetMany,
		},
	},
	{
		displayName: 'Uids',
		name: 'uid',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		default:[],
		description: 'Filter by asset uid/serial number. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForAssetGetMany,
		},
	},
	{
		displayName: 'Owner IDs',
		name: 'owner_id',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		default:[],
		description: 'Filter by customer ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForAssetGetMany,
		},
	},
	{
		displayName: 'Warehouse IDs',
		name: 'warehouse_id[]',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		default:[],
		description: 'Filter by warehouse ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForAssetGetMany,
		},
	},
];