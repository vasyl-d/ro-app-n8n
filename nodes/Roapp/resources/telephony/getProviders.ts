import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTelephonyProviders = {
	operation: ['getProviders'],
	resource: ['telephony'],
};

export const telephonyProvidersDescription: INodeProperties[] = [
	{
		displayName: 'Get All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForTelephonyProviders,
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
				...showOnlyForTelephonyProviders,
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
