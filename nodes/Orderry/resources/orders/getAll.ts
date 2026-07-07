import type { INodeProperties } from 'n8n-workflow';

// Define the structure for the getAll operation using the specified tool endpoint
const showOnlyForOrdersGetMany = {
    operation: ['getAll'], // <--- Update the operation name
    resource: ['order'], // <--- Update the resource name for Get Orders
};

export const ordersGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Status Names or IDs',
		name: 'statuses',
		type: 'multiOptions',		
		displayOptions: {
			show: showOnlyForOrdersGetMany,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
					'resource',
					'operation',
				],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Filter by order status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Customer IDs',
		name: 'client_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		displayOptions: {
			show: showOnlyForOrdersGetMany,
		},
		default: [], // Default for multi-value must be an array
		description: 'Add one or more Customer IDs',
	},
	{
		displayName: 'Payment Method',
		name: "payment_method",
		type: "options",
		displayOptions: {
			show: showOnlyForOrdersGetMany,
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
