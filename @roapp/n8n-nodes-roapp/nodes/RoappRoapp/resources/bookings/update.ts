import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBookingsUpdate = {
	operation: ['update'],
	resource: ['booking'],
};

export const bookingsUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'branch_id',
		type: 'number',
		default: 0,
		required: false,
		description: 'The location where the booking takes place',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
	},
	{
		displayName: 'Status ID',
		name: 'status_id',
		type: 'number',
		default: 0,
		required: false,
		description: 'The status of the booking (1: New, 2: Confirmed, 3: Pending, 4: In progress, 5: Completed, 6: Canceled, 7: No-show)',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
	},
	{
		displayName: 'Assigned Employee ID',
		name: 'assignee_id',
		type: 'number',
		default: 0,
		required: false,
		description: 'The ID of the employee assigned to this booking',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
	},
	{
		displayName: 'Customer ID',
		name: 'client_id',
		type: 'number',
		default: 0,
		required: false,
		description: 'The ID of the customer (person or organization)',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
	},
	{
		displayName: 'Scheduled From',
		name: 'scheduled_for',
		type: 'dateTime',
		default: '',
		required: false,
		description: 'The start date and time of the booking',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
	},
	{
		displayName: 'Scheduled To',
		name: 'scheduled_to',
		type: 'dateTime',
		default: '',
		required: false,
		description: 'The end date and time of the booking',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
	},
	{
		displayName: 'Resource ID',
		name: 'resource_id',
		type: 'number',
		default: 0,
		required: false,
		description: 'The ID of the resource (e.g., room, equipment)',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		required: false,
		description: 'Additional comments about the booking',
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
	},
	{
		displayName: 'Custom Fields',
		name: 'customFields',
		placeholder: 'Add custom field',
		type: 'resourceMapper',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForBookingsUpdate,
		},
		default: { mappingMode: 'defineBelow', value: {} },
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			resourceMapper: {
				resourceMapperMethod: 'getCustomFields',
				mode: 'add',
			},
		},
	},
];