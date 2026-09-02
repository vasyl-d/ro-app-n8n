import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceDeleteExchangeRate = {
	operation: ['deleteExchangeRate'],
	resource: ['finance'],
};

export const financeDeleteExchangeRateDescription: INodeProperties[] = [
	{
		displayName: 'Currency ISO Code',
		name: 'Id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceDeleteExchangeRate,
		},
		default: '',
	},
];
