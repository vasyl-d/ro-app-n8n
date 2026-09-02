import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceDeleteTransaction = {
	operation: ['deleteTransaction'],
	resource: ['finance'],
};

export const financeDeleteTransactionDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceDeleteTransaction,
		},
		default: '',
		description: 'The finance account ID',
	},
	{
		displayName: 'Transaction ID',
		name: 'transaction_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceDeleteTransaction,
		},
		default: '',
		description: 'The transaction ID to delete',
	},
];
