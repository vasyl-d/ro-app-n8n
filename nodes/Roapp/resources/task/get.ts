import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskGet = {
	operation: ['get'],
	resource: ['task'],
};

export const taskGetDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskGet,
		},
		description: 'The ID of the task to retrieve',
	},
];
