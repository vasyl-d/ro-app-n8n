import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceGetTransaction = {
	operation: ['getTransaction'],
	resource: ['finance'],
};

export const financeGetTransactionDescription: INodeProperties[] = [
	{
		displayName: 'Account ID',
		name: 'account_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceGetTransaction,
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
			show: showOnlyForFinanceGetTransaction,
		},
		default: '',
	},
];
