import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrdersUpdateStatus = {
	operation: ['updateStatus'],
	resource: ['order'],
};

export const ordersUpdateStatusDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForOrdersUpdateStatus,
		},
	},
	{
		displayName: 'Status Name or ID',
		name: 'status_id',
		type: 'options',
		displayOptions: {
			show: showOnlyForOrdersUpdateStatus,
		},
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Order status to set. Choose from the list, or specify an ID using an expression. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		required: true,
	},
];
