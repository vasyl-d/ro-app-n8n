import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBookingsDeleteItem = {
	operation: ['deleteItem'],
	resource: ['booking'],
};

export const bookingsDeleteItemDescription: INodeProperties[] = [
	{
		displayName: 'Booking ID',
		name: 'bookingId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the booking',
		displayOptions: {
			show: showOnlyForBookingsDeleteItem,
		},
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the booking item to delete',
		displayOptions: {
			show: showOnlyForBookingsDeleteItem,
		},
	},
];