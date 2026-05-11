import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrderCreate = {
    operation: ['create', 'update'],
    resource: ['order'],
};

export const orderCreateDescription: INodeProperties[] = [
    {
        displayName: 'Order Id',
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
        displayName: 'Order branch_id',
        name: 'branch_id',
        type: 'string',
        default: '37892',
        required: true,
        displayOptions: {
            show: showOnlyForOrderCreate,
        },
    },
    // {
    //     displayName: 'Order order_type_id',
    //     name: 'order_type_id',
    //     type: 'string',
    //     default: '60674',
    //     required: true,
    //     displayOptions: {
    //         show: showOnlyForOrderCreate,
    //     },
    // },
	{
		displayName: 'Order order_type_id',
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
		description: 'Order type to create. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>.',
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
        displayName: 'Asset Id',
        name: 'asset_id',
        type: 'string',
        default: '',
        required: false,
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