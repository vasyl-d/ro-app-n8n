import type { INodeProperties } from 'n8n-workflow';
import { orderGetManyDescription } from './getAll';
import { orderCreateDescription } from './create';
import { orderGetDescription } from './get';

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
				routing: {
					request: {
						method: 'GET',
						url: 'v2/orders',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create order',
				description: 'Create a new order',
				routing: {
					request: {
						method: 'POST',
						url: 'v2/orders',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an order',
				description: 'Get the data of a single order',
				routing: {
					request: {
						method: 'GET',
						url: 'v2/orders/{{$parameter.orderId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...orderGetManyDescription,
	...orderCreateDescription,
	...orderGetDescription,
];
