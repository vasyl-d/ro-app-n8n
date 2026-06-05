import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBookingsCreate = {
	operation: ['create'],
	resource: ['booking'],
};

export const bookingsCreateDescription: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'branch_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The location where the booking takes place',
		displayOptions: {
			show: showOnlyForBookingsCreate,
		},
	},
	{
		displayName: 'Assigned Employee ID',
		name: 'assignee_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the employee assigned to this booking',
		displayOptions: {
			show: showOnlyForBookingsCreate,
		},
	},
	{
		displayName: 'Customer ID',
		name: 'client_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the customer (person or organization)',
		displayOptions: {
			show: showOnlyForBookingsCreate,
		},
	},
	{
		displayName: 'Scheduled From',
		name: 'scheduled_for',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'The start date and time of the booking',
		displayOptions: {
			show: showOnlyForBookingsCreate,
		},
	},
	{
		displayName: 'Scheduled To',
		name: 'scheduled_to',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'The end date and time of the booking',
		displayOptions: {
			show: showOnlyForBookingsCreate,
		},
	},
	{
		displayName: 'Resource ID',
		name: 'resource_id',
		type: 'number',
		default: 0,
		description: 'The ID of the resource (e.g., room, equipment)',
		displayOptions: {
			show: showOnlyForBookingsCreate,
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		description: 'Additional comments about the booking',
		displayOptions: {
			show: showOnlyForBookingsCreate,
		},
	},
	{
		displayName: 'Custom Fields',
		name: 'customFields',
		placeholder: 'Add custom field',
		type: 'resourceMapper',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForBookingsCreate,
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