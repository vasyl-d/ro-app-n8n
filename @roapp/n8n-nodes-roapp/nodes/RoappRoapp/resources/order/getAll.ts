import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderGetMany = {
	operation: ['getAll'],
	resource: ['order'],
};

export const orderGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForOrderGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForOrderGetMany,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
			},
			operations: {
				pagination: {
					type: 'offset',
					properties: {
						limitParameter: 'limit',
						offsetParameter: 'offset',
						pageSize: 100,
						type: 'query',
					},
				},
			},
		},
	},
	{
		displayName: 'Status Name or ID',
		name: 'statuses',
		type: 'multiOptions',
		typeOptions: {
			loadOptionsMethod: 'getOrderStatuses',
		},
		displayOptions: {
			show: showOnlyForOrderGetMany,
		},
		default: [],
		description: 'Filter by invoice status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>.',
		routing: {
			send: {
				type: 'query',
				property: 'statuses',
			},
		},
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
	{
		displayName: "Created",
		name: "created",
		type: "collection",
		displayOptions: {
			show: showOnlyForOrderGetMany,
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'created_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'created_to',
				type: 'dateTime',
				default: ''
			},
		]
	}
];