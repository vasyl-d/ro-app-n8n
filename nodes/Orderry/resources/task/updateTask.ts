import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskUpdate = {
	operation: ['updateTask'],
	resource: ['task'],
};

export const taskUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Task ID',
		name: 'task_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskUpdate,
		},
		description: 'The ID of the task to update',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskUpdate,
		},
		description: 'Task title',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForTaskUpdate,
		},
		description: 'Task description',
	},
	{
		displayName: 'Deadline',
		name: 'deadline',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskUpdate,
		},
		description: 'Task due date',
	},
	{
		displayName: 'Assignee IDs',
		name: 'assignees',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		displayOptions: {
			show: showOnlyForTaskUpdate,
		},
		description: 'Array of Employee IDs. Specify one or more IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
];
