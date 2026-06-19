import type { INodeProperties } from 'n8n-workflow';

// Define the structure for the getAll operation using the specified tool endpoint
const showOnlyForInvoiceGetMany = {
    operation: ['getAll'], // <--- Update the operation name
    resource: ['invoice'], // <--- Update the resource name for Get Invoices
};

export const getAllInvoicesDescription: INodeProperties[] = [
	{
		displayName: 'Status Names or IDs',
		name: 'statuses',
		type: 'multiOptions',		
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},		
		typeOptions: {
		loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Filter by invoice status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Customer IDs',
		name: 'client_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},
		default: [], // Default for multi-value must be an array
		description: 'Add one or more Customer IDs',
	},
	{
		displayName: 'Payer IDs',
		name: 'payer_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},
		default: [], // Default for multi-value must be an array
		description: 'Add one or more Customer IDs',
	},
	{
		displayName: 'Issue Date',
		name: "issue_date",
		type: "collection",
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'issue_date_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'issue_date_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: 'Payment Method',
		name: "payment_method",
		type: "options",
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},
		default: 'cash',
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

];