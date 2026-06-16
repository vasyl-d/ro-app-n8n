import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetCreate = {
    operation: ['create', 'update'],
    resource: ['asset'],
};

export const assetCreateDescription: INodeProperties[] = [
    {
        displayName: 'Asset ID',
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
        displayName: 'Reg Number',
        name: 'reg_number',
        type: 'string',
        default: '',
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
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Model',
        name: 'model',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Owner ID',
        name: 'owner_id',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: ['create', 'update'],
                resource: ['asset'],
                warehouse_id: ['', undefined]
            }
        },
    },
    {
        displayName: 'Warehouse ID',
        name: 'warehouse_id',
        type: 'string',
        default: '',
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
        displayOptions: {
            show: showOnlyForAssetCreate,
        },
    },
    {
        displayName: 'Cost',
        name: 'cost',
        type: 'string',
        default: '',
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