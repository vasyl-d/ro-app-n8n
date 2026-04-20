import type { INodeProperties } from 'n8n-workflow';

// Define the structure for the getAll operation using the specified tool endpoint
const showOnlyForInvoiceGetMany = {
    operation: ['getAll'], // <--- Update the operation name
    resource: ['invoice'], // <--- Update the resource name for Get Invoices
};

export const getAllInvoicesDescription: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForInvoiceGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
    {
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
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
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				...showOnlyForInvoiceGetMany,
				returnAll: [false],
			},
		},
		options: [
			{
				displayName: 'Status Name or ID',
				name: 'statusId',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getInvoiceStatuses',
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
				name: 'customerId',
				type: 'string',
				default: '',
				description: 'Filter by customer ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
				routing: {
					send: {
						type: 'query',
						property: 'client_ids',
					},
				},
			},
			{
				displayName: 'Date From',
				name: 'dateFrom',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'query',
						property: 'created_at',
                        value: '={{new Date($value).toISOString().split(".")[0] + "Z"}}', // Преобразуем дату в ISO 8601 без миллисекунд
					},
				},
			},
			{
				displayName: 'Date To',
				name: 'dateTo',
				type: 'dateTime',
				default: '',
				routing: {
					send: {
						type: 'query',
						property: 'created_at',
					},
				},
			},
		],
	},
];