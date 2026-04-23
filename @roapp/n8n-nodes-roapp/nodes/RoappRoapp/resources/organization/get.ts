import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrganizationGet = {
	operation: ['get'],
	resource: ['organization'],
};

export const organizationGetDescription: INodeProperties[] = [
	{
		displayName: 'organization ID',
		name: 'organizationId',
		type: 'string',
		displayOptions: { show: showOnlyForOrganizationGet },
		default: '',
		description: "The organization's ID to retrieve",
	},
];
