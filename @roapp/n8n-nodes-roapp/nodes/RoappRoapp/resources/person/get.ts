import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUserGet = {
	operation: ['get'],
	resource: ['person'],
};

export const personGetDescription: INodeProperties[] = [
	{
		displayName: 'Person ID',
		name: 'personId',
		type: 'string',
		displayOptions: { show: showOnlyForUserGet },
		default: '',
		description: "The person's ID to retrieve",
	},
];
