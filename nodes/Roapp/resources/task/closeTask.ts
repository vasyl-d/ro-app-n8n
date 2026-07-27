import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskClose = {
	operation: ['closeTask'],
	resource: ['task'],
};

export const taskCloseDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'task_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskClose,
		},
		description: 'The ID of the task to close',
	},
];
