import { INodeProperties , IExecuteFunctions} from 'n8n-workflow';
import {getAllInvoicesDescription} from './getAll';
import {invoiceCreateDescription} from './create';
import {invoiceUpdateDescription} from './update';
import {invoiceUpdateStatusDescription} from './updateStatus';
import {invoiceCreateCommentDescription} from './createComment';
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
				name: 'Get Invoice Items',
				value: 'getItems',
				action: 'Get Invoice Items',
				description: 'Get the Items of a single invoice',
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
            {
				name: 'Delete',
				value: 'delete',
				action: 'Delete an invoice',
				description: 'Delete an invoice',
			},
            {
				name: 'Update Status',
				value: 'updateStatus',
				action: 'Update invoice status',
				description: 'Update the status of an invoice',
			},
            {
				name: 'Create Comment',
				value: 'createComment',
				action: 'Create invoice comment',
				description: 'Add a comment to an invoice',
			},
		],
		default: 'getAll',
	},
    ...getAllInvoicesDescription,
	...invoiceCreateDescription,
	...invoiceUpdateStatusDescription,
	...invoiceCreateCommentDescription,
	...invoiceUpdateDescription
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
	} else if (operation === 'delete') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
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
		// const invoiceId = this.getNodeParameter('Id', index);
		// const statusId = this.getNodeParameter('status_id', index);
		// return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
		// 	method: 'POST',
		// 	url: `${BASE_URL}v2/invoices/${invoiceId}/status`,
		// 	json: true,
		// 	body: { status_id: statusId }
		// });
	} else if (operation === 'createComment') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/invoices/${this.getNodeParameter('Id', index)}/comments`, 'POST');
	
	// 	const invoiceId = this.getNodeParameter('Id', index);
	// 	const comment = this.getNodeParameter('comment', index);
	// 	const visibility = this.getNodeParameter('visibility', index, 'public');
	// 	return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
	// 		method: 'POST',
	// 		url: `${BASE_URL}v2/invoices/${invoiceId}/comments`,
	// 		json: true,
	// 		body: { comment, visibility }
	// 	});
	}
	return null;
}