import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTelephonyExtensions = {
	operation: ['getManyExtensions'],
	resource: ['telephony'],
};

export const telephonyExtensionsDescription: INodeProperties[] = [
	{
		displayName: 'Provider ID',
		name: 'provider_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTelephonyExtensions,
		},
		description: 'The ID of the telephony provider',
	},
	{
		displayName: 'Get All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForTelephonyExtensions,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForTelephonyExtensions,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
	},
];
