import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceGetExchangeRate = {
	operation: ['getExchangeRate'],
	resource: ['finance'],
};

export const financeGetExchangeRateDescription: INodeProperties[] = [
	{
		displayName: 'Currency ISO Code',
		name: 'Id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceGetExchangeRate,
		},
		default: '',
	},
];
