import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceGetRefundItems = {
	operation: ['getRefundItems'],
	resource: ['finance'],
};

export const financeGetRefundItemsDescription: INodeProperties[] = [
	{
		displayName: 'Refund ID',
		name: 'Id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForFinanceGetRefundItems,
		},
		default: '',
		description: 'The refund ID to retrieve items for',
	},
];
