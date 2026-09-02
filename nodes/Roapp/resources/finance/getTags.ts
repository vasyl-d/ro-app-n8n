import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceGetTags = {
	operation: ['getTags'],
	resource: ['finance'],
};

export const financeGetTagsDescription: INodeProperties[] = [
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceGetTags,
		},
		options: [
			{ name: 'ID', value: 'id' },
			{ name: '-ID', value: '-id' },
			{ name: 'Name', value: 'name' },
			{ name: '-Name', value: '-name' },
		],
		default: 'id',
		description: 'Defines the sorting order of returned results',
	},
];
