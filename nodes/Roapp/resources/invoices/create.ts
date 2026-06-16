import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoiceCreate = {
    operation: ['create'],
    resource: ['invoice'],
};

export const invoiceCreateDescription: INodeProperties[] = [
    {
        displayName: 'Override Number',
        name: 'override_number',
        description: "Set custom Invoice number instaed of automatically assigned by Ro",
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Client ID',
        name: 'client_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Payer ID',
        name: 'payer_id',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Issue Date',
        name: 'issue_date_invoice',
        type: 'dateTime',
        default: '',
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Due Date',
        name: 'due_date_invoice',
        type: 'dateTime',
        default: '',
        displayOptions: {
            show: showOnlyForInvoiceCreate
        }
    },
    {
        displayName: 'Legal Entity ID',
        name: 'legal_entity_id',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForInvoiceCreate,
        },
    },
    {
        displayName: 'Payment Method',
        name: 'payment_method',
        type: 'options',
        default: 'cashless',
        required: true,
        displayOptions: {
            show: showOnlyForInvoiceCreate,
        },
        options: [
            { name: 'Cash', value: 'cash' },
            { name: 'Cashless', value: 'cashless' },
            { name: 'Credit Card', value: 'credit_card' }
        ]
    },
    {
        displayName: 'Comment',
        name: 'comment',
        type: 'string',
        default: '',
        displayOptions: {
            show: showOnlyForInvoiceCreate,
        },
    },
    {
        displayName: 'Items',
        name: 'items',
        type: 'fixedCollection',
        placeholder: 'Add Item',
        default: [],
        displayOptions: {
            show: {
                    operation: ['create'],
                    resource: ['invoice'],
                }
        },
        typeOptions: {
            multipleValues: true,
        },
        options: [
            {
                name: 'item',
                displayName: 'Item',
                values: [
													{
														displayName: 'Comment',
														name: 'comment',
														type: 'string',
														default: '',
													},
													{
														displayName: 'Comment Visibility',
														name: 'comment_visibility',
														type: 'options',
														default: 'public',
														options: [
																	{
																		name: 'Public',
																		value: 'public',
																	},
																	{
																		name: 'Private',
																		value: 'private',
																	},
																]
													},
													{
														displayName: 'Discount Amount',
														name: 'discount_amount',
														type: 'number',
														default: '',
													},
													{
														displayName: 'Discount Percentage',
														name: 'discount_percentage',
														type: 'number',
														default: '',
													},
													{
														displayName: 'Discount Sponsor',
														name: 'discount_sponsor',
														type: 'options',
														default: 'company',
														options: [
																	{
																		name: 'Staff',
																		value: 'staff',
																	},
																	{
																		name: 'Company',
																		value: 'company',
																	},
															]
													},
													{
														displayName: 'Discount Type',
														name: 'discount_type',
														type: 'options',
														default: 'value',
														options: [
																	{
																		name: 'Percentage',
																		value: 'percentage',
																	},
																	{
																		name: 'Value',
																		value: 'value',
																	},
															]
													},
													{
														displayName: 'Entity ID',
														name: 'entity_id',
														type: 'number',
														default: '',
															required:	true,
														description: 'Product or Service ID from catalog',
													},
													{
														displayName: 'Price',
														name: 'price',
														type: 'number',
														default: '',
															required:	true,
													},
													{
														displayName: 'Quantity',
														name: 'quantity',
														type: 'number',
														default: 1,
															required:	true,
													},
													{
														displayName: 'Tax IDs',
														name: 'tax_ids',
														type: 'string',
														default: ''
													},
													{
														displayName: 'Warranty Period',
														name: 'warranty_period',
														type: 'number',
														default: '',
													},
													{
														displayName: 'Warranty Unit',
														name: 'warranty_unit',
														type: 'options',
														default: 'days',
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
													},
													],
            },
        ],
    },
    {
        displayName: 'Custom Items',
        name: 'items_custom',
        type: 'fixedCollection',
        placeholder: 'Add Custom Item',
        default: [],
        displayOptions: {
            show: {
                    operation: ['create'],
                    resource: ['invoice'],
                }
        },
        typeOptions: {
            multipleValues: true,
        },
        options: [
            {
                name: 'customItem',
                displayName: 'Custom Item',
                values: [
													{
														displayName: 'Comment',
														name: 'comment',
														type: 'string',
														default: '',
													},
													{
														displayName: 'Comment Visibility',
														name: 'comment_visibility',
														type: 'options',
														default: 'public',
														options: [
																	{
																		name: 'Public',
																		value: 'public',
																	},
																	{
																		name: 'Private',
																		value: 'private',
																	},
																]
													},
													{
														displayName: 'Discount Amount',
														name: 'discount_amount',
														type: 'number',
														default: '',
													},
													{
														displayName: 'Discount Percentage',
														name: 'discount_percentage',
														type: 'number',
														default: '',
													},
													{
														displayName: 'Discount Sponsor',
														name: 'discount_sponsor',
														type: 'options',
														default: 'company',
														options: [
																	{
																		name: 'Staff',
																		value: 'staff',
																	},
																	{
																		name: 'Company',
																		value: 'company',
																	},
															]
													},
													{
														displayName: 'Discount Type',
														name: 'discount_type',
														type: 'options',
														default: 'value',
														options: [
																	{
																		name: 'Percentage',
																		value: 'percentage',
																	},
																	{
																		name: 'Value',
																		value: 'value',
																	},
															]
													},
													{
														displayName: 'Entity Description',
														name: 'entity_description',
														type: 'string',
														default: '',
													},
													{
														displayName: 'Entity Title',
														name: 'entity_title',
														type: 'string',
														default: '',
															required:	true,
													},
													{
														displayName: 'Entity Type',
														name: 'entity_type',
														type: 'options',
														default: 'product',
														options: [
																	{
																		name: 'Product',
																		value: 'product',
																	},
																	{
																		name: 'Service',
																		value: 'service',
																	},
															],
															required:	true,
													},
													{
														displayName: 'Entity UOM ID',
														name: 'entity_uom_id',
														type: 'number',
														default: '',
															required:	true,
														description: 'Unit of measure ID',
													},
													{
														displayName: 'Price',
														name: 'price',
														type: 'number',
														default: '',
															required:	true,
													},
													{
														displayName: 'Quantity',
														name: 'quantity',
														type: 'number',
														default: 1,
															required:	true,
													},
													{
														displayName: 'Tax IDs',
														name: 'tax_ids',
														type: 'string',
														default: ''
													},
													{
														displayName: 'Warranty Period',
														name: 'warranty_period',
														type: 'number',
														default: '',
													},
													{
														displayName: 'Warranty Unit',
														name: 'warranty_unit',
														type: 'options',
														default: 'days',
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
													},
													],
            },
        ],
    },
];