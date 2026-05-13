import { INodeProperties , IExecuteFunctions} from 'n8n-workflow';
import {getAllInvoicesDescription} from './getAll';
import {invoiceCreateDescription} from './create';
import { handleGetAll, handleGetOne, BASE_URL, handleCreateUpdate } from '../../shared/methods';

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
			},
            {
				name: 'Get',
				value: 'get',
				action: 'Get an invoice',
				description: 'Get the data of a single invoice',
			},
            {
				name: 'Create',
				value: 'create',
				action: 'Create an invoice',
				description: 'Create an invoice',
			},
            {
				name: 'Update',
				value: 'update',
				action: 'Update an invoice',
				description: 'Update an invoice',
			},
		],
		default: 'getAll',
	},
    ...getAllInvoicesDescription,
	...invoiceCreateDescription
];

export async function executeInvoiceOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/invoices`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices`, 'POST');
	} else if (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}`, 'PATCH');
	}
	return null;
}