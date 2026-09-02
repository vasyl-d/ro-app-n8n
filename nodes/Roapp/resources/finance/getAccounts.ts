import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceGetAccounts = {
	operation: ['getAccounts'],
	resource: ['finance'],
};

export const financeGetAccountsDescription: INodeProperties[] = [
	{
		displayName: 'Payment Method',
		name: 'payment_method',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceGetAccounts,
		},
		options: [
			{ name: 'All', value: '' },
			{ name: 'Cash', value: 'cash' },
			{ name: 'Cashless', value: 'cashless' },
			{ name: 'Credit Card', value: 'credit_card' },
		],
		default: '',
		description: "Account's payment method type",
	},
	{
		displayName: 'Location Name or ID',
		name: 'branch_id',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceGetAccounts,
		},
		typeOptions: {
			loadOptionsDependsOn: ['resource', 'operation'],
			loadOptionsMethod: 'getLocations',
		},
		default: '',
		description: 'Choose from the list, or specify an ID using an expression. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceGetAccounts,
		},
		options: [
			{ name: 'ID', value: 'id' },
			{ name: '-ID', value: '-id' },
			{ name: 'Title', value: 'title' },
			{ name: '-Title', value: '-title' },
		],
		default: 'id',
		description: 'Defines the sorting order of returned results',
	},
];
