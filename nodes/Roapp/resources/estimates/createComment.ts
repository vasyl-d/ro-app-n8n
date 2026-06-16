import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimatesCreateComment = {
	operation: ['createComment'],
	resource: ['estimate'],
};

export const estimatesCreateCommentDescription: INodeProperties[] = [
	{
		displayName: 'Estimate ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEstimatesCreateComment,
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForEstimatesCreateComment,
		},
	},
	{
		displayName: 'Visibility',
		name: 'visibility',
		type: 'options',
		default: 'public',
		displayOptions: {
			show: showOnlyForEstimatesCreateComment,
		},
		options: [
			{ name: 'Public', value: 'public' },
			{ name: 'Private', value: 'private' }
		],
	},
];
