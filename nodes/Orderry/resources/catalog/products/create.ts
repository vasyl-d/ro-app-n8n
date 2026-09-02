import type { INodeProperties } from 'n8n-workflow';

const showCreateProduct = {
				operation: ['createProduct', 'updateProduct'],
				resource: ['catalog'],
			};

export const createProductDescription: INodeProperties[] = [
    // Search parameters for getServices operation
    {
        displayName: 'Product ID',
        name: 'product_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                operation: ['updateProduct'],
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
        description: 'The product title',
        displayOptions: {
            show: showCreateProduct
        },
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        description: 'The product description',
        displayOptions: {
            show: showCreateProduct
        },
    },
    {
        displayName: 'Category ID',
        name: 'category_id',
        type: 'string',
        default: '',
        required: true,
        description: 'The product category ID',
        displayOptions: {
            show: showCreateProduct
        },
    },
    {
        displayName: 'Product Type ID',
        name: 'product_type_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showCreateProduct
        },
    },
    {
        displayName: 'Is Serial',
        name: 'is_serial',
        type: 'boolean',
        default: false,
        description: 'Whether the product have unique serial numbers?',
        displayOptions: {
            show: showCreateProduct
        },
    },
    {
        displayName: 'Barcodes',
        name: 'barcodes',
        type: 'collection',
        default: [],
        typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
        description: 'The product barcode',
        displayOptions: {
            show: showCreateProduct
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
        displayName: 'Sku',
        name: 'sku',
        type: 'string',
        default: '',
        description: 'The product sku',
        displayOptions: {
            show: showCreateProduct
        },
    },
    {
        displayName: 'Code',
        name: 'code',
        type: 'string',
        default: '',
        description: 'The product code',
        displayOptions: {
            show: showCreateProduct
        },
    },
    {
        displayName: 'UOM ID',
        name: 'uom_id',
        type: 'number',
        default: 1,
        required: true,
        description: 'The product UOM code',
        displayOptions: {
            show: showCreateProduct
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
            show: showCreateProduct
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
        displayName: 'Dimensions and Weight',
        name: 'dimensions_and_weight',
        type: 'collection',
        default: {},
        description: 'The product dimensions and weight',
        displayOptions: {
            show: showCreateProduct
        },
        options: [
            {
                displayName: 'Is Enabled',
                name: 'is_enabled',
                type: 'boolean',
                default: false,
                description: 'Whether the product dimensions tracing enabled?',
            },
            {
                displayName: 'Dimensions',
                name: 'dimensions',
                type: 'collection',
                default: {},
                description: 'The product dimensions',
                required: true,
                displayOptions: {
                    show: {
                        is_enabled: [true],
                    },
                },
                options: [
                    {
                        displayName: 'Length',
                        name: 'length',
                        type: 'number',
                        default: 0,
                        description: 'The product length',
                    },
                    {
                        displayName: 'Width',
                        name: 'width',
                        type: 'number',
                        default: 0,
                        description: 'The product width',
                    },
                    {
                        displayName: 'Height',
                        name: 'height',
                        type: 'number',
                        default: 0,
                        description: 'The product height',
                    },
                    {
                        displayName: 'Unit',
                        name: 'unit',
                        type: 'options',
                        default: 'mm',
                        description: 'The product dimensions units',
                        options: [
                            {
                                name: 'Millimeter',
                                value: 'mm',
                            },
                            {
                                name: 'Centimeter',
                                value: 'cm',
                            },
                            {
                                name: 'Inch',
                                value: 'in',
                            },
                        ]
                    }
                ]
            },
            {
                displayName: 'Weight',
                name: 'weight',
                type: 'collection',
                required: true,
                default: {},
                displayOptions: {
                    show: {
                        is_enabled: [true],
                    },
                },
                description: 'The product weight',
                options: [
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'number',
                        default: 1,
                        description: 'The product weight value',
                    },
                    {
                        displayName: 'Unit',
                        name: 'unit',
                        type: 'options',
                        default: 'kg',
                        description: 'The product weight unit',
                        options: [
                            {
                                name: 'Gram',
                                value: 'g',
                            },
                            {
                                name: 'Kilogram',
                                value: 'kg',
                            },
                            {
                                name: 'Pound',
                                value: 'lb',
                            },
                        ]
                    }
                ]
            }
        ]
    },
    {
        displayName: 'Expiration Tracking',
        name: 'expiration_tracking',
        type: 'collection',
        default: {},
        description: 'The product expiration tracking',
        displayOptions: {
            show: showCreateProduct
        },
        options: [
            {
                displayName: 'Is Enabled',
                name: 'is_enabled',
                type: 'boolean',
                default: false,
                description: 'Whether the product expiration tracing enabled?',
            },
            {
                displayName: 'Expiration Soon Alert',
                name: 'expiration_soon_alert',
                type: 'collection',
                default: {},
                displayOptions: {
                    show: {
                        is_enabled: [true],
                    },
                },
                description: 'The product expiration soon alert settings',
                options: [
                    {
                        displayName: 'Is Enabled',
                        name: 'is_enabled',
                        type: 'boolean',
                        default: false,
                        description: 'Whether the product expiration soon alert enabled?',
                    },
                    {
                        displayName: 'Expiration Soon Period Value',
                        name: 'value',
                        type: 'number',
                        default: 1,
                        description: 'The product expiration soon alert period before expiration',
                    },
                    {
                        displayName: 'Expiration Soon Period Unit',
                        name: 'unit',
                        type: 'options',
                        default: 'days',
                        description: 'The product expiration soon alert period unit',
                        options: [
                            {
                                name: 'Days',
                                value: 'days',
                            },
                            {
                                name: 'Months',
                                value: 'months',
                            },
                        ]
                    }
                ]
            },
            {
                displayName: 'Critical Alert',
                name: 'critical_alert',
                type: 'collection',
                default: {},
                description: 'The product expiration critical alert settings',
                displayOptions: {
                    show: {
                        is_enabled: [true],
                    },
                },
                options: [
                    {
                        displayName: 'Is Enabled',
                        name: 'is_enabled',
                        type: 'boolean',
                        default: false,
                        description: 'Whether the product expiration critical alert enabled?',
                    },
                    {
                        displayName: 'Expiration Critical Period Value',
                        name: 'value',
                        type: 'number',
                        default: 1,
                        description: 'The product expiration critical alert period before expiration',
                    },
                    {
                        displayName: 'Expiration Critical Period Unit',
                        name: 'unit',
                        type: 'options',
                        default: 'days',
                        description: 'The product expiration critical alert period unit',
                        options: [
                            {
                                name: 'Days',
                                value: 'days',
                            },
                            {
                                name: 'Months',
                                value: 'months',
                            },
                        ]
                    }
                ]
            }
        ]
    }
]