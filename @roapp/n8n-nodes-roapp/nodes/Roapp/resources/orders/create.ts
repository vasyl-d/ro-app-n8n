import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderCreate = {
    operation: ['create', 'update'],
    resource: ['order'],
};

export const ordersCreateDescription: INodeProperties[] = [
    {
        displayName: 'Order ID',
        name: 'order_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                operation: ['update'],
                resource: ['order'],
            }
        },       
    },
    {
        displayName: 'Order Branch_id',
        name: 'branch_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
    },
	{
		displayName: 'Order Order_type_id Name or ID',
		name: 'order_type_id',
		type: 'options',		
		displayOptions: {
			show: showOnlyForOrderCreate,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getTypes',
		},
		default: [],
		description: 'Order type to create. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
    {
        displayName: 'Order Client_id',
        name: 'client_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
    },
    {
        displayName: 'Asset ID',
        name: 'asset_id',
        type: 'string',
        default: '',
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
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
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
    },
];