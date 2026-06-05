import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoiceCreateComment = {
    operation: ['createComment'],
    resource: ['invoice'],
};

export const invoiceCreateCommentDescription: INodeProperties[] = [
    {
        displayName: 'Invoice ID',
        name: 'Id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceCreateComment
        }
    },
    {
        displayName: 'Comment',
        name: 'comment',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceCreateComment
        }
    },
    {
        displayName: 'Visibility',
        name: 'visibility',
        type: 'options',
        default: 'public',
        displayOptions: {
            show: showOnlyForInvoiceCreateComment
        },
        options: [
            { name: 'Public', value: 'public' },
            { name: 'Private', value: 'private' }
        ],
    },
];