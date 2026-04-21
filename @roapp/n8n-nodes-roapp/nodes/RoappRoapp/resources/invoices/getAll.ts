import type { INodeProperties } from 'n8n-workflow';

// Define the structure for the getAll operation using the specified tool endpoint
const showOnlyForInvoiceGetMany = {
    operation: ['getAll'], // <--- Update the operation name
    resource: ['invoice'], // <--- Update the resource name for Get Invoices
};

export const getAllInvoicesDescription: INodeProperties[] = [
	{
		displayName: 'Status Name or ID',
		name: 'statuses',
		type: 'multiOptions',
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},
		typeOptions: {
			loadOptionsMethod: 'getInvoiceStatuses',
		},
		default: [],
		description: 'Filter by invoice status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>.',
	},
	{
		displayName: 'Customer IDs',
		name: 'client_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},
		default: [], // Для багатократних значень дефолт має бути масивом
		description: 'Add one or more Customer IDs',
	},
	{
		displayName: "Created",
		name: "created",
		type: "collection",
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
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
	},
	{
		displayName: "Payment type",
		name: "payment_method",
		type: "options",
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},
		default: "",
		options: [
			{
				name: "Cash",
				value: "cash"
			},
			{
				name: "Cashless",
				value: "cashless"
			},
			{
				name: "Credit_card",
				value: "credit_card"
			}
		]
	},
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

];