import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderCreate = {
    operation: ['create'],
    resource: ['order'],
};

export const orderCreateDescription: INodeProperties[] = [
    {
        displayName: 'Order branch_id',
        name: 'branch_id',
        type: 'string',
        default: '37892',
        required: true,
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
        routing: {
            send: {
                type: 'body',
                property: 'branch_id',
            },
        },
    },
    {
        displayName: 'Order order_type_id',
        name: 'order_type_id',
        type: 'string',
        default: '60674',
        required: true,
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
        routing: {
            send: {
                type: 'body',
                property: 'order_type_id',
            },
        },
    },
    {
        displayName: 'Order client_id',
        name: 'client_id',
        type: 'string',
        default: '18705800',
        required: true,
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
    },
    {
        displayName: 'Custom Fields',
        name: 'customFields',
        placeholder: 'Add custom field',
        type: 'resourceMapper',
        noDataExpression: true,
        default: { mappingMode: 'defineBelow', value: {} },
        typeOptions: {
            loadOptionsDependsOn: [
				'resource',
				'operation',
        	],
            resourceMapper: {
                resourceMapperMethod: 'getCustomFields',
                mode: 'add',
            },
        },
        displayOptions: {
            show: showOnlyForOrderCreate,
        }
    },
];