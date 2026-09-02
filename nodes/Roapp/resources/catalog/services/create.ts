import type { INodeProperties } from 'n8n-workflow';

const showCreateService = {
				operation: ['createService', 'updateService'],
				resource: ['catalog'],
			};

export const createServiceDescription: INodeProperties[] = [
    // Search parameters for getServices operation
    {
        displayName: 'Service ID',
        name: 'service_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                operation: ['updateService'],
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
        description: 'The service title',
        displayOptions: {
            show: showCreateService
        },
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'The service description',
        displayOptions: {
            show: showCreateService
        },
    },
    {
        displayName: 'Category ID',
        name: 'category_id',
        type: 'string',
        default: '',
        required: true,
        description: 'The service category ID',
        displayOptions: {
            show: showCreateService
        },
    },
    {
        displayName: 'Barcodes',
        name: 'barcodes',
        type: 'collection',
        default: {},
        typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
        description: 'The product barcode',
        displayOptions: {
            show: showCreateService
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

    {
        displayName: 'Type',
        name: 'type',
        type: 'options',
        default: 'service',
        description: 'Service or Labor',
        displayOptions: {
            show: showCreateService
        },
        options: [
            {
                name: 'Service',
                value: 'service',
            },
            {
                name: 'Labor',
                value: 'labor',
            },
        ],
    },
    {
        displayName: 'UOM ID',
        name: 'uom_id',
        type: 'number',
        default: 1,
        required: true,
        description: 'The product UOM code',
        displayOptions: {
            show: showCreateService
        },
    },
    {
        displayName: 'Prices',
        name: 'prices',
		type: "collection",
        default: {},
        typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
        description: 'The product prices',
        displayOptions: {
            show: showCreateService
        },
        options: [
            {
                displayName: 'ID',
                name: 'id',
                type: 'number',
                default: 0,
                description: 'The product price ID',
            },
            {
                displayName: 'Price',
                name: 'price',
                type: 'number',
                default: 0,
                description: 'The product price value',
            }
        ]
    },
    {
        displayName: 'Cost',
        name: 'cost',
        type: 'number',
        default: 0,
        description: 'The service cost',
        displayOptions: {
            show: showCreateService
        },
    },
    {
        displayName: 'Duration',
        name: 'duration',
        type: 'number',
        default: 30,
        description: 'The service duration in minutes',
        displayOptions: {
            show: showCreateService
        },
    }
]