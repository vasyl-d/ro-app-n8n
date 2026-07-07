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
		description: 'The unit cost',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
	{
		displayName: 'Tax IDs',
		name: 'tax_ids',
		type: 'string',
		default: [],
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
		description: 'Additional comments about the item',
		displayOptions: {
			show: showOnlyForBookingsCreateItem,
		},
	},
];