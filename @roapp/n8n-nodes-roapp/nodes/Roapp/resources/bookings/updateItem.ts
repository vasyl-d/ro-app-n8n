import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBookingsUpdateItem = {
	operation: ['updateItem'],
	resource: ['booking'],
};

export const bookingsUpdateItemDescription: INodeProperties[] = [
	{
		displayName: 'Booking ID',
		name: 'bookingId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the booking',
		displayOptions: {
			show: showOnlyForBookingsUpdateItem,
		},
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the booking item to update',
		displayOptions: {
			show: showOnlyForBookingsUpdateItem,
		},
	},
	{
		displayName: 'Entity ID',
		name: 'entity_id',
		type: 'number',
		default: 0,
		description: 'The ID of the product or service',
		displayOptions: {
			show: showOnlyForBookingsUpdateItem,
		},
	},
	{
		displayName: 'Quantity',
		name: 'quantity',
		type: 'number',
		default: 0,
		description: 'The quantity of the item',
		displayOptions: {
			show: showOnlyForBookingsUpdateItem,
		},
	},
	{
		displayName: 'Price',
		name: 'price',
		type: 'number',
		default: 0,
		description: 'The price per unit',
		displayOptions: {
			show: showOnlyForBookingsUpdateItem,
		},
	},
	{
		displayName: 'Cost',
		name: 'cost',
		type: 'number',
		default: 0,
		description: 'The unit cost',
		displayOptions: {
			show: showOnlyForBookingsUpdateItem,
		},
	},
	{
		displayName: 'Tax IDs',
		name: 'tax_ids',
		type: 'string',
		default: [],
		description: 'Array of Tax IDs. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForBookingsUpdateItem,
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
			show: showOnlyForBookingsUpdateItem,
		},
	},
];