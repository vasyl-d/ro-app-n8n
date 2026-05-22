import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoiceUpdateStatus = {
    operation: ['updateStatus'],
    resource: ['invoice'],
};

export const invoiceUpdateStatusDescription: INodeProperties[] = [
    {
        displayName: 'Invoice ID',
        name: 'Id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceUpdateStatus
        }
    },
    {
        displayName: 'Status Name or ID',
        name: 'status_id',
        type: 'options',
        displayOptions: {
            show: showOnlyForInvoiceUpdateStatus,
        },
        typeOptions: {
            loadOptionsDependsOn: [
                'resource',
                'operation',
            ],
            loadOptionsMethod: 'getStatuses',
        },
        default: [],
        description: 'Invoice status to set. Choose from the list, or specify an ID using an expression.',
        required: true,
    },
];