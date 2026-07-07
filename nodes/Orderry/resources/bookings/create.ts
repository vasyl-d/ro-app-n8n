import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBookingsCreate = {
	operation: ['create', 'update'],
	resource: ['booking'],
};

export const bookingsCreateDescription: INodeProperties[] = [
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
		displayName: 'Assigned Employee Name or ID',
		name: 'assignee_id',
		type: 'options',		
		required: true,
		displayOptions: {
			show: showOnlyForBookingsCreate,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getEmployees',
		},
		default: [],
		description: 'The ID of the employee assigned. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
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