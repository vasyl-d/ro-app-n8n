import { INodeProperties } from 'n8n-workflow';
import {getAllInvoicesDescription} from './getAll';
import {invoiceGetDescription} from './get';

const showOnlyForInvoices = {
    resource: ['invoice'],
};

export const invoiceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
            show: showOnlyForInvoices,
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Retrieve all invoices',
				action: 'Get all invoices',
				routing: {
					request: {
						method: 'GET',
						url: 'v2/invoices',
					},
				},
			},
            {
				name: 'Get',
				value: 'get',
				action: 'Get an invoice',
				description: 'Get the data of a single invoice',
				routing: {
					request: {
						method: 'GET',
						url: 'v2/invoices/{{$parameter.invoiceId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
    ...getAllInvoicesDescription,
    ...invoiceGetDescription,
];
