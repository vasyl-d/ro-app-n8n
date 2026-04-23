import type { INodeProperties } from 'n8n-workflow';
import { organozationGetManyDescription } from './getAll';
import { organizationGetDescription } from './get';
import { organizationCreateDescription } from './create';

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
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an organization',
				description: 'Get the data of a single organization',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create an organization',
				description: 'Create an organization',
			},
		],
		default: 'getAll',
	},
	...organozationGetManyDescription,
	...organizationGetDescription,
	...organizationCreateDescription
];
