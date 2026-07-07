import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrdersGetPublicUrl = {
	operation: ['getPublicUrl'],
	resource: ['order'],
};

export const ordersGetPublicUrlDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForOrdersGetPublicUrl,
		},
	},
];
