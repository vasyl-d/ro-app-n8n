import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrdersCreateComment = {
	operation: ['createComment'],
	resource: ['order'],
};

export const ordersCreateCommentDescription: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForOrdersCreateComment,
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForOrdersCreateComment,
		},
	},
	{
		displayName: 'Visibility',
		name: 'visibility',
		type: 'options',
		default: 'public',
		displayOptions: {
			show: showOnlyForOrdersCreateComment,
		},
		options: [
			{ name: 'Public', value: 'public' },
			{ name: 'Private', value: 'private' }
		],
	},
];
