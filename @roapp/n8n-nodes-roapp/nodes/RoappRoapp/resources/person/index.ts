import type { INodeProperties } from 'n8n-workflow';
import { personCreateDescription } from './create';
import { personGetDescription } from './get';

const showOnlyForUsers = {
	resource: ['person'],
};

export const personDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUsers,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get persons',
				description: 'Get many person',
				routing: {
					request: {
						method: 'GET',
						url: 'v2/contacts/people',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a user',
				description: 'Get the data of a single user',
				routing: {
					request: {
						method: 'GET',
						url: 'v2/contacts/people/{{$parameter.personId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new person',
				description: 'Create a new person',
				routing: {
					request: {
						method: 'POST',
						url: 'v2/contacts/people',
					},
				},
			},
		],
		default: 'getAll',
	},
	...personGetDescription,
	...personCreateDescription,
];
