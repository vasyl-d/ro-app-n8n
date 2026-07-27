import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskReopen = {
	operation: ['reopenTask'],
	resource: ['task'],
};

export const taskReopenDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'task_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskReopen,
		},
		description: 'The ID of the task to reopen',
	},
];
