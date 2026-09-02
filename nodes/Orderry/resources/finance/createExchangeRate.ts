import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceCreateExchangeRate = {
	operation: ['createExchangeRate'],
	resource: ['finance'],
};

export const financeCreateExchangeRateDescription: INodeProperties[] = [
	{
		displayName: 'Currency ISO Code',
		name: 'currency',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceCreateExchangeRate,
		},
		default: '',
	},
	{
		displayName: 'Rate',
		name: 'rate',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceCreateExchangeRate,
		},
		default: '',
		description: 'Exchange rate relative to the company\'s base currency',
	},
];
