import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceGetTransactions = {
	operation: ['getTransactions'],
	resource: ['finance'],
};

const showOnlyForFinanceCreatedAt = {
	operation: ['getTransactions'],
	resource: ['finance'],
};

export const financeGetTransactionsDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'Id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceGetTransactions,
		},
		default: '',
		description: 'The account ID to retrieve transactions for',
	},
	{
		displayName: 'Direction',
		name: 'direction',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceGetTransactions,
		},
		options: [
			{ name: 'All', value: '' },
			{ name: 'Expense', value: 'expense' },
			{ name: 'Income', value: 'income' },
		],
		default: '',
		description: 'Transaction direction',
	},
	{
		displayName: 'Cashflow Category Name or ID',
		name: 'category_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForFinanceGetTransactions,
		},
		default: '',
		description: 'Filter by cashflow category',
	},
	{
		displayName: 'Created By Name or ID',
		name: 'created_by_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForFinanceGetTransactions,
		},
		default: '',
		description: 'Filter by employee ID',
	},
	{
		displayName: 'Created',
		name: 'created_at',
		type: 'collection',
		displayOptions: {
			show: showOnlyForFinanceCreatedAt,
		},
		default: {},
		options: [
			{
				displayName: 'From',
				name: 'created_at_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'created_at_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceGetTransactions,
		},
		options: [
			{ name: 'Created At', value: 'created_at' },
			{ name: '-Created At', value: '-created_at' },
		],
		default: 'created_at',
		description: 'Defines the sorting order of returned results',
	},
];
