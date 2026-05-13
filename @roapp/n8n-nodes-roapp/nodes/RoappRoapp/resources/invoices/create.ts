import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoiceCreate = {
    operation: ['create', 'update'],
    resource: ['invoice'],
};

// {
//   "issueDate": "2026-05-12",
//   "dueDate": "2026-05-12",
//   "clientId": 0,
//   "payerId": 0,
//   "paymentMethod": "string",
//   "legalEntityId": 0,
//   "managerId": 0,
//   "comment": "string",
//   "overrideNumber": "string"
// }

export const invoiceCreateDescription: INodeProperties[] = [
    {
        displayName: 'Invoice id',
        name: 'Id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                    operation: ['update'],
                    resource: ['invoice'],
                }
        }
    },
    {
        displayName: 'Client id',
        name: 'clientId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Payer id',
        name: 'payerId',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Manager id',
        name: 'managerId',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Issue Date',
        name: 'issueDate',
        type: 'dateTime',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Due Date',
        name: 'dueDate',
        type: 'dateTime',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'legal Entity Id',
        name: 'legalEntityId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceCreate,
        },
    },
    {
        displayName: 'payment Method',
        name: 'paymentMethod',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceCreate,
        },
    },
    {
        displayName: 'Comment',
        name: 'comment',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceCreate,
        },
    },
    {
        displayName: 'overrideNumber',
        name: 'overrideNumber',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForInvoiceCreate,
        },
    }
];