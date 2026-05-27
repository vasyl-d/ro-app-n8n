import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBookingsGetAll = {
	operation: ['getAll'],
	resource: ['booking'],
};

export const bookingsGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Status Name or ID',
		name: 'statuses',
		type: 'multiOptions',		
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Filter by booking status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>.',
	},
	{
		displayName: 'Location IDs',
		name: 'branches',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default:[],
		description: 'Filter by location ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
	},
	{
		displayName: 'Booking IDs',
		name: 'ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default:[],
		description: 'Filter by booking ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
	},
	{
		displayName: 'Assignee IDs',
		name: 'assignees',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default:[],
		description: 'Filter by assignee (employee) ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
	},
	{
		displayName: 'Customer ID',
		name: 'client_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default:[],
		description: 'Filter by customer ID. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
	},
	{
		displayName: 'Customer Names',
		name: 'client_names',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default:[],
		description: 'Filter by customer name. Specify one or more names using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
	},
	{
		displayName: 'Customer Phones',
		name: 'client_phones',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default:[],
		description: 'Filter by customer phone number. Specify one or more phone numbers using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
	},
	{
		displayName: 'Created From',
		name: 'created_at_from',
		type: 'dateTime',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
		default: '',
		description: 'Filter by creation date from. Only bookings created on or after this date will be returned.',
	},
	{
		displayName: 'Created To',
		name: 'created_at_to',
		type: 'dateTime',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
		default: '',
		description: 'Filter by creation date to. Only bookings created on or before this date will be returned.',
	},
	{
		displayName: 'Modified From',
		name: 'modified_at_from',
		type: 'dateTime',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
		default: '',
		description: 'Filter by modification date from. Only bookings modified on or after this date will be returned.',
	},
	{
		displayName: 'Modified To',
		name: 'modified_at_to',
		type: 'dateTime',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
		default: '',
		description: 'Filter by modification date to. Only bookings modified on or before this date will be returned.',
	},
	{
		displayName: 'Scheduled From',
		name: 'scheduled_for_from',
		type: 'dateTime',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
		default: '',
		description: 'Filter by scheduled from date. Only bookings scheduled on or after this date will be returned.',
	},
	{
		displayName: 'Scheduled To',
		name: 'scheduled_for_to',
		type: 'dateTime',
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
		default: '',
		description: 'Filter by scheduled to date. Only bookings scheduled on or before this date will be returned.',
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		default: 'id',
		description: 'Defines the sorting order of returned results',
		options: [
			{
				name: 'ID (Ascending)',
				value: 'id',
			},
			{
				name: 'ID (Descending)',
				value: '-id',
			},
			{
				name: 'Modified At (Ascending)',
				value: 'modified_at',
			},
			{
				name: 'Modified At (Descending)',
				value: '-modified_at',
			},
			{
				name: 'Scheduled From (Ascending)',
				value: 'scheduled_for',
			},
			{
				name: 'Scheduled From (Descending)',
				value: '-scheduled_for',
			},
		],
		displayOptions: {
			show: showOnlyForBookingsGetAll,
		},
	},
];