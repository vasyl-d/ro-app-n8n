import { INodeProperties , IExecuteFunctions} from 'n8n-workflow';
import {getAllInvoicesDescription} from './getAll';
import { handleGetAll, handleGetOne, BASE_URL } from '../../shared/methods';

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
		],
		default: 'getAll',
	},
    ...getAllInvoicesDescription,
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
	}
	return null;
}