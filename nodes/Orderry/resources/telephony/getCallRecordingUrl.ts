import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTelephonyRecordingUrl = {
	operation: ['getCallRecordingUrl'],
	resource: ['telephony'],
};

export const telephonyCallRecordingUrlDescription: INodeProperties[] = [
	{
		displayName: 'Call ID',
		name: 'call_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTelephonyRecordingUrl,
		},
		description: 'The ID of the call to get the recording URL for',
	},
];
