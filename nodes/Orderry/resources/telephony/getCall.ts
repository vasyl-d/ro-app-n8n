import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTelephonyCall = {
	operation: ['getCall'],
	resource: ['telephony'],
};

export const telephonyCallDescription: INodeProperties[] = [
	{
		displayName: 'Call ID',
		name: 'call_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTelephonyCall,
		},
		description: 'The ID of the call to retrieve',
	},
];
