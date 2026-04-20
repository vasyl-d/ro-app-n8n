import type { INodeProperties } from 'n8n-workflow';
import { organozationGetManyDescription } from './getAll';

const showOnlyForCompanies = {
	resource: ['organization'],
};

export const organizationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCompanies,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get companies',
				description: 'Get companies',
				routing: {
					request: {
						method: 'GET',
						url: 'v2/contacts/organizations',
					},
				},
			},
		],
		default: 'getAll',
	},
	...organozationGetManyDescription,
];
