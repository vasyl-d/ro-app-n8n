import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoiceGet = {
	operation: ['get'],
	resource: ['invoice'],
};

export const invoiceGetDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'string',
		displayOptions: { show: showOnlyForInvoiceGet },
		default: '',
		description: "The invoice's ID to retrieve",
	},
];
