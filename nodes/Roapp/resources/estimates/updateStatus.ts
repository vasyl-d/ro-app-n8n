import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimatesUpdateStatus = {
	operation: ['updateStatus'],
	resource: ['estimate'],
};

export const estimatesUpdateStatusDescription: INodeProperties[] = [
	{
		displayName: 'Estimate ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEstimatesUpdateStatus,
		},
	},
	{
		displayName: 'Status Name or ID',
		name: 'status_id',
		type: 'options',
		displayOptions: {
			show: showOnlyForEstimatesUpdateStatus,
		},
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Estimate status to set. Choose from the list, or specify an ID using an expression. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		required: true,
	},
];
