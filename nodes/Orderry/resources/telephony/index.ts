import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { handleGetAll, handleGetOne, BASE_URL } from '../../shared/methods';
import { telephonyCallDescription } from './getCall';
import { telephonyCallRecordingUrlDescription } from './getCallRecordingUrl';
import { telephonyCallTranscriptDescription } from './getCallTranscript';
import { telephonyExtensionDescription } from './getExtension';
import { telephonyCallsDescription } from './getManyCalls';
import { telephonyExtensionsDescription } from './getManyExtensions';
import { telephonyProvidersDescription } from './getProviders';

const showOnlyForTelephony = {
	resource: ['telephony'],
};

export const telephonyDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTelephony,
		},
		options: [
			{
				name: 'Get Call',
				value: 'getCall',
				action: 'Get call by ID',
				description: 'Get details of a single call',
			},
			{
				name: 'Get Call Recording URL',
				value: 'getCallRecordingUrl',
				action: 'Get call recording URL',
				description: 'Get the recording URL for a call',
			},
			{
				name: 'Get Call Transcript',
				value: 'getCallTranscript',
				action: 'Get call transcript',
				description: 'Get the transcript of a call',
			},
			{
				name: 'Get Extension',
				value: 'getExtension',
				action: 'Get extension by ID',
				description: 'Get a single extension by provider and extension ID',
			},
			{
				name: 'Get Many Calls',
				value: 'getManyCalls',
				action: 'Get calls',
				description: 'Get a list of calls',
			},
			{
				name: 'Get Many Extensions',
				value: 'getManyExtensions',
				action: 'Get provider extensions',
				description: 'Get extensions for a telephony provider',
			},
			{
				name: 'Get Providers',
				value: 'getProviders',
				action: 'Get telephony providers',
				description: 'Get a list of telephony providers',
			},
		],
		default: 'getProviders',
	},
	...telephonyProvidersDescription,
	...telephonyExtensionsDescription,
	...telephonyExtensionDescription,
	...telephonyCallsDescription,
	...telephonyCallDescription,
	...telephonyCallRecordingUrlDescription,
	...telephonyCallTranscriptDescription,
];

export async function executeTelephonyOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getProviders') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/telephony/providers`);
	} else if (operation === 'getManyExtensions') {
		const provider_id = this.getNodeParameter('provider_id', index) as string;
		return await handleGetAll.call(this, index, `${BASE_URL}v2/telephony/providers/${provider_id}/extensions`);
	} else if (operation === 'getExtension') {
		const provider_id = this.getNodeParameter('provider_id', index) as string;
		const ext_id = this.getNodeParameter('ext_id', index) as string;
		return await handleGetOne.call(this, index, `${BASE_URL}v2/telephony/providers/${provider_id}/extensions/${ext_id}`);
	} else if (operation === 'getManyCalls') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/telephony/calls`);
	} else if (operation === 'getCall') {
		const call_id = this.getNodeParameter('call_id', index) as string;
		return await handleGetOne.call(this, index, `${BASE_URL}v2/telephony/calls/${call_id}`);
	} else if (operation === 'getCallRecordingUrl') {
		const call_id = this.getNodeParameter('call_id', index) as string;
		return await handleGetOne.call(this, index, `${BASE_URL}v2/telephony/calls/${call_id}/recording-url`);
	} else if (operation === 'getCallTranscript') {
		const call_id = this.getNodeParameter('call_id', index) as string;
		return await handleGetOne.call(this, index, `${BASE_URL}v2/telephony/calls/${call_id}/transcript`);
	}
	return [[{ json: {}, pairedItem: { item: index } }]];
}
