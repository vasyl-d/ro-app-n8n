import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoiceUpdate = {
    operation: ['update'],
    resource: ['invoice'],
};

export const invoiceUpdateDescription: INodeProperties[] = [
    {
        displayName: 'Invoice id',
        name: 'Id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceUpdate
        }
    },
    {
        displayName: 'Client id',
        name: 'client_id',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceUpdate
        }
    },
    {
        displayName: 'Payer id',
        name: 'payer_id',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceUpdate
        }
    },
    {
        displayName: 'Manager id',
        name: 'manager_id',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceUpdate
        }
    },
    {
        displayName: 'Issue Date',
        name: 'issue_date_invoice',
        type: 'dateTime',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceUpdate
        }
    },
    {
        displayName: 'Due Date',
        name: 'due_date_invoice',
        type: 'dateTime',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceUpdate
        }
    },
    {
        displayName: 'Payment Method',
        name: 'payment_method',
        type: 'options',
        default: 'cashless',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceUpdate,
        },
        options: [
            { name: 'Cash', value: 'cash' },
            { name: 'Cashless', value: 'cashless' },
            { name: 'Credit Card', value: 'credit_card' }
        ]
    },
    {
        displayName: 'Comment',
        name: 'comment',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceUpdate,
        },
    },

];