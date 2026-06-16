import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimateCreate = {
    operation: ['create', 'update'],
    resource: ['estimate'],
};

export const estimatesCreateDescription: INodeProperties[] = [
    {
        displayName: 'Estimate ID',
        name: 'estimate_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                operation: ['update'],
                resource: ['estimate'],
            }
        },       
    },
	{
		displayName: 'Estimate Type Name or ID',
		name: 'order_type_id',
		type: 'options',		
		displayOptions: {
			show: showOnlyForEstimateCreate,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getTypes',
		},
		default: [],
		description: 'Estimate type to create. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
    {
        displayName: 'Estimate Client ID',
        name: 'client_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForEstimateCreate,
        },
    },
    {
        displayName: 'Asset ID',
        name: 'asset_id',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForEstimateCreate,
        },
    },
    {
        displayName: 'Custom Fields',
        name: 'customFields',
        placeholder: 'Add custom field',
        type: 'resourceMapper',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForEstimateCreate,
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
