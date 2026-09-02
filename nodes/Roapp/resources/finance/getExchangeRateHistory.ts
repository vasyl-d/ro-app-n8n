import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceGetExchangeRateHistory = {
	operation: ['getExchangeRateHistory'],
	resource: ['finance'],
};

export const financeGetExchangeRateHistoryDescription: INodeProperties[] = [
	{
		displayName: 'Currency ISO Code',
		name: 'Id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceGetExchangeRateHistory,
		},
		default: '',
	},
];
