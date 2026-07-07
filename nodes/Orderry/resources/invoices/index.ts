import { INodeProperties , IExecuteFunctions, INodeExecutionData} from 'n8n-workflow';
import {getAllInvoicesDescription} from './getAll';
import {invoiceCreateDescription} from './create';
import {invoiceUpdateDescription} from './update';
import {invoiceUpdateStatusDescription} from './updateStatus';
import {invoiceCreateCommentDescription} from './createComment';
import {invoiceCreateItemDescription} from './createItem';
import {invoiceUpdateItemDescription} from './updateItem';
import {invoiceDeleteItemDescription} from './deleteItem';
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
				name: 'Add Item',
				value: 'createItem',
				action: 'Add invoice item',
				description: 'Add an item to an invoice',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create an invoice',
				description: 'Create an invoice',
			},
			{
				name: 'Create Comment',
				value: 'createComment',
				action: 'Create invoice comment',
				description: 'Add a comment to an invoice',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete an invoice',
				description: 'Delete an invoice',
			},
			{
				name: 'Delete Item',
				value: 'deleteItem',
				action: 'Delete invoice item',
				description: 'Delete an item from an invoice',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an invoice',
				description: 'Get the data of a single invoice',
			},
			{
				name: 'Get Invoice Items',
				value: 'getItems',
				action: 'Get invoice items',
				description: 'Get the Items of a single invoice',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve many invoices',
				action: 'Get many invoices',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update an invoice',
				description: 'Update an invoice',
			},
            {
				name: 'Update Item',
				value: 'updateItem',
				action: 'Update invoice item',
				description: 'Update an item in an invoice',
			},
            {
				name: 'Update Status',
				value: 'updateStatus',
				action: 'Update invoice status',
				description: 'Update the status of an invoice',
			}
		],
		default: 'getAll',
	},
    ...getAllInvoicesDescription,
	...invoiceCreateDescription,
	...invoiceUpdateStatusDescription,
	...invoiceCreateCommentDescription,
	...invoiceCreateItemDescription,
	...invoiceUpdateItemDescription,
	...invoiceDeleteItemDescription,
	...invoiceUpdateDescription
];

export async function executeInvoiceOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]>{
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/invoices`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'delete') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: 'DELETE',
			url: `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}`
		});
	} else if (operation === 'getItems') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}/items`);
	} else if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices`, 'POST');
	} else if (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}`, 'PATCH');
	} else if (operation === 'updateStatus') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}/status`, 'POST');
	} else if (operation === 'createComment') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}/comments`, 'POST');
	} else if (operation === 'createItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}/items`, 'POST');
	} else if (operation === 'updateItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}/items/${this.getNodeParameter('itemId', index)}`, 'PATCH');
	} else if (operation === 'deleteItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}/items/${this.getNodeParameter('itemId', index)}`, 'DELETE');
	}
	return [[{json:{}, 
		pairedItem: {
			item: index, // Link to current input index
		}}]];
}