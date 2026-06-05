import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFindDuplicates = {
	resource: ['deduplication'],
	operation: ['findDuplicates'],
};

export const deduplicationFindDuplicatesDescription: INodeProperties[] = [
	{
		displayName: 'Resource Type',
		name: 'resource_type',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFindDuplicates,
		},
		options: [
			{
				name: 'Person',
				value: 'person',
			},
			{
				name: 'Organization',
				value: 'organization',
			},
		],
		default: 'person',
		description: 'Which resource type to scan for duplicates',
	},
	{
		displayName: 'Max Records',
		name: 'max_records',
		type: 'number',
		displayOptions: {
			show: showOnlyForFindDuplicates,
		},
		default: 0,
		description: 'Maximum number of records to analyze (0 = no limit)',
	},
	{
		displayName: 'Min Name Similarity',
		name: 'min_name_similarity',
		type: 'number',
		displayOptions: {
			show: showOnlyForFindDuplicates,
		},
		default: 0.85,
		description: 'Jaro-Winkler similarity threshold for name matching (0-1)',
	},
];
