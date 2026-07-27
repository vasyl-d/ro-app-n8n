import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskComment = {
	operation: ['createComment'],
	resource: ['task'],
};

export const taskCommentDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'task_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskComment,
		},
		description: 'The ID of the task to comment on',
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskComment,
		},
		description: 'Comment text',
	},
	{
		displayName: 'Is Private',
		name: 'is_private',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForTaskComment,
		},
		description: 'Whether the comment is private',
	},
];
