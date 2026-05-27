import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBookingsCreateItem = {
	operation: ['createItem'],
	resource: ['booking'],
};

export const bookingsCreateItemDescription: INodeProperties[] = [
	{
		displayName: 'Booking ID',
		name: 'bookingId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the booking to add the item to',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Entity ID',
		name: 'entity_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the product or service',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Quantity',
		name: 'quantity',
		type: 'number',
		default: 1,
		required: true,
		description: 'The quantity of the item',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: 0,
		required: false,
		description: 'The price per unit',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Cost',
		name: 'cost',
		type: 'number',
		default: 0,
		required: false,
		description: 'The unit cost',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Discount Type',
		name: 'discount_type',
		type: 'options',
		default: 'percentage',
		required: false,
		description: 'The type of discount',
		options: [
			{
				name: 'Percentage',
				value: 'percentage',
			},
			{
				name: 'Amount',
				value: 'value',
			},
		],
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Discount Percentage',
		name: 'discount_percentage',
		type: 'number',
		default: 0,
		required: false,
		description: 'The discount percentage (if type is percentage)',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Discount Amount',
		name: 'discount_amount',
		type: 'number',
		default: 0,
		required: false,
		description: 'The discount amount (if type is amount)',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Discount Sponsor',
		name: 'discount_sponsor',
		type: 'options',
		default: 'staff',
		required: false,
		description: 'The sponsor of the discount',
		options: [
			{
				name: 'Staff',
				value: 'staff',
			},
			{
				name: 'Company',
				value: 'company',
			},
		],
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Warranty Period',
		name: 'warranty_period',
		type: 'string',
		default: '0',
		required: false,
		description: 'The warranty period',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Warranty Unit',
		name: 'warranty_unit',
		type: 'options',
		default: 'days',
		required: false,
		description: 'The unit of the warranty period',
		options: [
			{
				name: 'Days',
				value: 'days',
			},
			{
				name: 'Months',
				value: 'months',
			},
		],
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Tax IDs',
		name: 'tax_ids',
		type: 'string',
		default: [],
		required: false,
		description: 'Array of Tax IDs. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		required: false,
		description: 'Additional comments about the item',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
];