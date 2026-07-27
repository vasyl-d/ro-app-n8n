import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTelephonyTranscript = {
	operation: ['getCallTranscript'],
	resource: ['telephony'],
};

export const telephonyCallTranscriptDescription: INodeProperties[] = [
	{
		displayName: 'Call ID',
		name: 'call_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTelephonyTranscript,
		},
		description: 'The ID of the call to get the transcript for',
	},
];
