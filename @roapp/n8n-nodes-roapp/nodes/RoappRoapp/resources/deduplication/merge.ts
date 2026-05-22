import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMerge = {
	resource: ['deduplication'],
	operation: ['merge'],
};

export const deduplicationMergeDescription: INodeProperties[] = [
	{
		displayName: 'Resource Type',
		name: 'resource_type',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMerge,
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
		description: 'Type of records to merge',
	},
	{
		displayName: 'Record A ID',
		name: 'record_a_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForMerge,
		},
		default: '',
		required: true,
		description: 'ID of the first record (will be primary if auto)',
	},
	{
		displayName: 'Record B ID',
		name: 'record_b_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForMerge,
		},
		default: '',
		required: true,
		description: 'ID of the second record (will be merged into primary)',
	},
	{
		displayName: 'Primary Record',
		name: 'primary_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForMerge,
		},
		default: '',
		description: 'Override which record becomes primary (default: oldest by created_at)',
	},
];
