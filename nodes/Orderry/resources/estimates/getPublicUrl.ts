import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimatesGetPublicUrl = {
	operation: ['getPublicUrl'],
	resource: ['estimate'],
};

export const estimatesGetPublicUrlDescription: INodeProperties[] = [
	{
		displayName: 'Estimate ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEstimatesGetPublicUrl,
		},
	},
];
