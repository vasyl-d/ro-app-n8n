import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderGetMany = {
	operation: ['getAll'],
	resource: ['order'],
};

export const orderGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Status Name or ID',
		name: 'statuses',
		type: 'multiOptions',		
		displayOptions: {
			show: showOnlyForOrderGetMany,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Filter by invoice status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>.',
	},
	{
		displayName: 'Customer ID',
		name: 'client_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by customer ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForOrderGetMany,
		},
	},
];