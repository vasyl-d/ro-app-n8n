import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTelephonyExtension = {
	operation: ['getExtension'],
	resource: ['telephony'],
};

export const telephonyExtensionDescription: INodeProperties[] = [
	{
		displayName: 'Provider ID',
		name: 'provider_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTelephonyExtension,
		},
		description: 'The ID of the telephony provider',
	},
	{
		displayName: 'Extension ID',
		name: 'ext_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTelephonyExtension,
		},
		description: 'The ID of the extension',
	},
];
