import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties, Icon
} from 'n8n-workflow';

export class OrderryApi implements ICredentialType {
	name = 'orderryApi';
	icon: Icon = 'file:../nodes/Orderry/or_app_white.svg';

	displayName = 'OrderryApi API';
	
	// Link to your community node's README
	documentationUrl = 'https://github.com/vasyl-d/ro-app-n8n#credentials';
	
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
		// The same authorization fields
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'hidden',
			default: 'https://api.orderry.com/', // Exact URL for Orderry
		},
	];
	
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};
	

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.orderry.com/',
			url: 'v2/company/locations',
		},
	};
}
