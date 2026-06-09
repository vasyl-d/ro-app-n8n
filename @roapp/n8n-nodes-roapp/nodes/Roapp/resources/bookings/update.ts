import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBookingsUpdate = {
	operation: ['update'],
	resource: ['booking'],
};

export const bookingsUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Status ID',
		name: 'status_id',
		type: 'options',
		default: 1,
		description: 'The status of the booking (1: New, 2: Confirmed, 3: Pending, 4: In progress, 5: Completed, 6: Canceled, 7: No-show)',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
		options: [
			{
				name: 'New',
				value: 1,
			},
			{
				name: 'Confirmed',
				value: 2,
			},
			{
				name: 'Pending',
				value: 3,
			},
			{
				name: 'In Progress',
				value: 4,
			},
			{
				name: 'Completed',
				value: 5,
			},
			{
				name: 'Canceled',
				value: 6,
			},
			{
				name: 'No-Show',
				value: 7,
			},
		],
	}
];