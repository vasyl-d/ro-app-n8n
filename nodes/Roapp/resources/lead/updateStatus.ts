import type { INodeProperties } from 'n8n-workflow';

const showOnlyForleadUpdateStatus = {
    operation: ['updateStatus'],
    resource: ['lead'],
};

export const leadUpdateStatusDescription: INodeProperties[] = [
    {
        displayName: 'Lead ID',
        name: 'lead_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForleadUpdateStatus,
        },
    },
    {
        displayName: 'Lead Name or ID',
        name: 'status_id',
        type: 'options',
        displayOptions: {
            show: showOnlyForleadUpdateStatus,
        },
        typeOptions: {
            loadOptionsDependsOn: [
                'resource',
                'operation',
            ],
            loadOptionsMethod: 'getStatuses',
        },
        default: [],
        description: 'Lead status to set. Choose from the list, or specify an ID using an expression. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
        required: true,
    },
];
