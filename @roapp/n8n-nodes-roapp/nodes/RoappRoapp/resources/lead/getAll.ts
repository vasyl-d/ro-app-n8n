import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLeadGetMany = {
	operation: ['getAll'],
	resource: ['lead'],
};

export const leadGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Ids',
		name: 'ids',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by asset id Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForLeadGetMany,
		},
	},
	{
		displayName: 'Id labels',
		name: 'id_labels',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by lead number. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForLeadGetMany,
		},
	},
	{
		displayName: 'Status Name or ID',
		name: 'statuses',
		type: 'multiOptions',		
		displayOptions: {
			show: showOnlyForLeadGetMany,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Filter by lead status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>.',
	},
	// {
	// 	displayName: 'Lead Types Name or ID',
	// 	name: 'types',
	// 	type: 'multiOptions',		
	// 	displayOptions: {
	// 		show: showOnlyForLeadGetMany,
	// 	},		
	// 	typeOptions: {
	// 		loadOptionsDependsOn: [
	// 			'resource',
	// 			'operation',
	// 		],
	// 		loadOptionsMethod: 'getTypes',
	// 	},
	// 	default: [],
	// 	description: 'Filter by lead Type. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>.',
	// },
	{
		displayName: 'Managers ids',
		name: 'managers',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by warehouse ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForLeadGetMany,
		},
	},
	{
		displayName: 'Names',
		name: 'names',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by lead customer name. Specify one or more using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForLeadGetMany,
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		default:[],
		description: 'Filter by lead customer name. Specify one or more using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForLeadGetMany,
		},
	},
];