import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetCreate = {
    operation: ['create', 'update'],
    resource: ['asset'],
};

export const assetCreateDescription: INodeProperties[] = [
    {
        displayName: 'Asset id',
        name: 'asset_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                operation: ['update'],
                resource: ['asset'],
            },
        },
    },
    {
        displayName: 'UID/Serial',
        name: 'uid',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Reg number',
        name: 'reg_number',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Group',
        name: 'group',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Brand',
        name: 'brand',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Model',
        name: 'model',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Owner id',
        name: 'owner_id',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: {
                operation: ['create', 'update'],
                resource: ['asset'],
                warehouse_id: ['', undefined]
            }
        },
    },
    {
        displayName: 'Warehouse id',
        name: 'warehouse_id',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: {
                operation: ['create', 'update'],
                resource: ['asset'],
                // owner_id: ['', undefined]
            }
        },
    },
    {
        displayName: 'Year',
        name: 'year',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Cost',
        name: 'cost',
        type: 'string',
        default: '',
        required: false,
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
// custom fileds works different from other resources without 'f'
    // {
    //     displayName: 'Custom Fields',
    //     name: 'customFields',
    //     placeholder: 'Add custom field',
    //     type: 'resourceMapper',
    //     noDataExpression: true,
    //     displayOptions: {
    //         show: showOnlyForAssetCreate,
    //     },
    //     default: { mappingMode: 'defineBelow', value: {} },
    //     typeOptions: {
    //         loadOptionsDependsOn: [
	// 			'resource',
	// 			'operation',
    //     	],
    //         resourceMapper: {
    //             resourceMapperMethod: 'getCustomFields',
    //             mode: 'add',
    //         },
    //     },
    // },
];