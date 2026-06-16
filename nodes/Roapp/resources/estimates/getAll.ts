import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimatesGetMany = {
    operation: ['getAll'],
    resource: ['estimate'],
};

export const estimatesGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Status Names or IDs',
		name: 'statuses',
		type: 'multiOptions',		
		displayOptions: {
			show: showOnlyForEstimatesGetMany,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
					'resource',
					'operation',
				],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Filter by estimate status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Customer IDs',
		name: 'client_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForEstimatesGetMany,
		},
		default: [],
		description: 'Add one or more Customer IDs',
	},
	{
		displayName: 'Payment Method',
		name: "payment_method",
		type: "options",
		displayOptions: {
			show: showOnlyForEstimatesGetMany,
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
