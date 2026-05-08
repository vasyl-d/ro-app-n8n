import type { INodeProperties } from 'n8n-workflow';
import { orderGetManyDescription } from './getAll';
import { orderCreateDescription } from './create';

const showOnlyForCompanies = {
	resource: ['order'],
};

export const orderDescription: INodeProperties[] = [
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
				action: 'Get orders',
				description: 'Get orders',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create order',
				description: 'Create a new order',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update order',
				description: 'Update an order',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an order',
				description: 'Get the data of a single order',
			},
		],
		default: 'getAll',
	},
	...orderGetManyDescription,
	...orderCreateDescription,
];
