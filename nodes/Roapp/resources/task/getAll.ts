import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTaskGetAll = {
	operation: ['getAll'],
	resource: ['task'],
};

export const taskGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Author IDs',
		name: 'author_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		description: 'Filter by author (employee) ID. Specify one or more IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		displayOptions: {
			show: showOnlyForTaskGetAll,
		},
	},
	{
		displayName: 'Assignee IDs',
		name: 'assignee_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		description: 'Filter by assignee (employee) ID. Specify one or more IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		displayOptions: {
			show: showOnlyForTaskGetAll,
		},
	},
	{
		displayName: 'Deadline',
		name: 'deadline_at',
		type: 'collection',
		default: {},
		description: 'Filter by task deadline date',
		displayOptions: {
			show: showOnlyForTaskGetAll,
		},
		options: [
			{
				displayName: 'From',
				name: 'deadline_at_from',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'To',
				name: 'deadline_at_to',
				type: 'dateTime',
				default: '',
			},
		],
	},
	{
		displayName: 'Sort Direction',
		name: 'sort_dir',
		type: 'options',
		default: 'asc',
		options: [
			{ name: 'Ascending', value: 'asc' },
			{ name: 'Descending', value: 'desc' },
		],
		description: 'Sorting direction',
		displayOptions: {
			show: showOnlyForTaskGetAll,
		},
	}
];
