import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties, Icon
} from 'n8n-workflow';

export class RoappApi implements ICredentialType {
	name = 'roappApi';
	icon: Icon = 'file:../nodes/Roapp/roapp.svg';

	displayName = 'RoappApi API';
	
	// Link to your community node's README
	documentationUrl = 'https://github.com/vasyl-d/vasyl-d/ro-app-n8n/@roapp/-roapp?tab=readme-ov-file#credentials';
	
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
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
			baseURL: 'https://api.roapp.io/',
			url: 'v2/company/locations',
		},
	};
}
