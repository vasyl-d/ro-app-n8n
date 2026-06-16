import type { INodeProperties } from 'n8n-workflow';

const showOnlyForleadCreateComment = {
    operation: ['createComment'],
    resource: ['lead'],
};

export const leadCreateCommentDescription: INodeProperties[] = [
    {
        displayName: 'Lead ID',
        name: 'lead_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForleadCreateComment,
        },
    },
    {
        displayName: 'Comment',
        name: 'message',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForleadCreateComment,
        },
    },
    {
        displayName: 'Is Private',
        name: 'is_private',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: showOnlyForleadCreateComment,
        },
        description: 'Whether true, the comment will be private. If false, the comment will be public.',
    },
];
