import type { INodeProperties } from 'n8n-workflow';

const showCreateBundle = {
				operation: ['createBundle', 'updateBundle'],
				resource: ['catalog'],
			};

export const createBundleDescription: INodeProperties[] = [
    // Search parameters for getServices operation
    {
        displayName: 'Bundle ID',
        name: 'bundle_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                operation: ['updateBundle'],
                resource: ['catalog'],
            }
        }
    },
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        default: '',
        required: true,
        description: 'The bundle title',
        displayOptions: {
            show: showCreateBundle
        },
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'The bundle description',
        displayOptions: {
            show: showCreateBundle
        },
    },
    {
        displayName: 'Category ID',
        name: 'category_id',
        type: 'string',
        default: '',
        required: true,
        description: 'The bundle category ID',
        displayOptions: {
            show: showCreateBundle
        },
    },
   {
        displayName: 'Barcode',
        name: 'barcode',
        type: 'collection',
        default: {},
        description: 'The bundle barcode',
        displayOptions: {
            show: showCreateBundle
        },
        options: [
            {
                displayName: 'Type',
                name: 'type',
                type: 'options',
                default: 'code128',
                description: 'The product barcode type',
                options: [
                    {
                        name: 'CODE-128',
                        value: 'code128',
                    },
                    {
                        name: 'EAN-13',
                        value: 'ean13',
                    },
                    {
                        name: 'EAN-8',
                        value: 'ean8',
                    },
                    {
                        name: 'QR-Code',
                        value: 'qrcode',
                    },
                    {
                        name: 'UPC',
                        value: 'upc',
                    },
                ],
            },
            {
                displayName: 'Code',
                name: 'code',
                type: 'string',
                default: '',
                description: 'The product barcode data',
            }
        ]
    },
]