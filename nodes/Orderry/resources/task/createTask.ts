import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskCreate = {
	operation: ['createTask'],
	resource: ['task'],
};

export const taskCreateDescription: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTaskCreate,
		},
		description: 'Task title',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForTaskCreate,
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
			show: showOnlyForTaskCreate,
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
			show: showOnlyForTaskCreate,
		},
		description: 'Array of Employee IDs. Specify one or more IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
];
