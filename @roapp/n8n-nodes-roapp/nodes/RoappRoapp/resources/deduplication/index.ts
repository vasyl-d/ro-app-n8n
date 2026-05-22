import type { INodeProperties } from 'n8n-workflow';
import { deduplicationFindDuplicatesDescription } from './findDuplicates';
import { deduplicationMergeDescription } from './merge';
import { executeDeduplicationOperation } from './execute';

const showOnlyForDeduplication = {
	resource: ['deduplication'],
};

export const deduplicationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForDeduplication,
		},
		options: [
			{
				name: 'Find Duplicates',
				value: 'findDuplicates',
				action: 'Find duplicates',
				description: 'Find potential duplicate persons or organizations',
			},
			{
				name: 'Merge',
				value: 'merge',
				action: 'Merge records',
				description: 'Merge two records of the same type',
			},
		],
		default: 'findDuplicates',
	},
	...deduplicationFindDuplicatesDescription,
	...deduplicationMergeDescription,
];

export { executeDeduplicationOperation };

