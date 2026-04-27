import type { INodeProperties } from 'n8n-workflow';
import { saleGetManyDescription } from './getAll';

const showOnlyForCompanies = {
	resource: ['sale'],
};

export const saleDescription: INodeProperties[] = [
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
				action: 'Get sales',
				description: 'Get sales',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get sale by Id',
				description: 'Get sale by Id',
			},
		],
		default: 'getAll',
	},
	...saleGetManyDescription,
];
