import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUserGet = {
	operation: ['get'],
	resource: ['order'],
};

export const orderGetDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'string',
		displayOptions: { show: showOnlyForUserGet },
		default: '',
		description: "The order's ID to retrieve",
	},
];
