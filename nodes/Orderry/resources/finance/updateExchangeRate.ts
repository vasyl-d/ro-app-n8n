import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceUpdateExchangeRate = {
	operation: ['updateExchangeRate'],
	resource: ['finance'],
};

export const financeUpdateExchangeRateDescription: INodeProperties[] = [
	{
		displayName: 'Currency ISO Code',
		name: 'Id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceUpdateExchangeRate,
		},
		default: '',
	},
	{
		displayName: 'Rate',
		name: 'rate',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceUpdateExchangeRate,
		},
		default: '',
		description: 'Exchange rate relative to the company\'s base currency',
	},
];
