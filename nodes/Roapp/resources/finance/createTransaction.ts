import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceCreateTransaction = {
	operation: ['createTransaction'],
	resource: ['finance'],
};

export const financeCreateTransactionDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'Id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		default: '',
		description: 'The finance account ID to create transaction for',
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		default: '',
		description: 'Transaction amount',
	},
	{
		displayName: 'Direction',
		name: 'direction',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		options: [
			{ name: 'Income', value: 'income' },
			{ name: 'Expense', value: 'expense' },
		],
		default: 'income',
		description: 'Transaction direction',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		default: '',
		description: 'Transaction description',
	},
	{
		displayName: 'Cashflow Category Name or ID',
		name: 'category_id',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		typeOptions: {
			loadOptionsDependsOn: ['resource', 'operation'],
			loadOptionsMethod: 'getCashflowCategories',
		},
		default: '',
		description: 'Cashflow category ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Client ID',
		name: 'client_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		default: '',
		description: 'People/Organization ID',
	},
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		description: 'Array of tag strings',
	},
	{
		displayName: 'Related Document',
		name: 'related_document',
		type: 'collection',
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'order',
				options: [
					{ name: 'Order', value: 'order' },
					{ name: 'Sale', value: 'sale' },
				],
				description: 'The related document type',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				description: 'The related document ID',
			},
		],
		default: {},
		description: 'Type of related document',
	},
	{
		displayName: 'Custom Created At',
		name: 'custom_created_at',
		type: 'dateTime',
		displayOptions: {
			show: showOnlyForFinanceCreateTransaction,
		},
		default: '',
		description: 'Transaction backdate (ISO 8601)',
	},
];
