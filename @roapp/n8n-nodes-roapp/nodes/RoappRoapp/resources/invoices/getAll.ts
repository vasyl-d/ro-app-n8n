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
		displayName: "Payment method",
		name: "payment_method",
		type: "options",
		displayOptions: {
			show: showOnlyForInvoiceGetMany,
		},
		default: {},
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