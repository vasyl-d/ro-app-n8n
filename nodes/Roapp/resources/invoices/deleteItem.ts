import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoicesDeleteItem = {
	operation: ['deleteItem'],
	resource: ['invoice'],
};

export const invoiceDeleteItemDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'Id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the invoice',
		displayOptions: {
			show: showOnlyForInvoicesDeleteItem,
		},
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the invoice item to delete',
		displayOptions: {
			show: showOnlyForInvoicesDeleteItem,
		},
	},
];