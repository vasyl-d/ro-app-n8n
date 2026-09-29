import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimatesGetMany = {
    operation: ['getAll'],
    resource: ['estimate'],
};

export const estimatesGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Status Names or IDs',
		name: 'statuses',
		type: 'multiOptions',		
		displayOptions: {
			show: showOnlyForEstimatesGetMany,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
					'resource',
					'operation',
				],
			loadOptionsMethod: 'getStatuses',
		},
		default: [],
		description: 'Filter by estimate status. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
		{
		displayName: 'Estimates Types Names or IDs',
		name: "types",
		displayOptions: {
			show: showOnlyForEstimatesGetMany,
		},	
		type: 'multiOptions',
		typeOptions: {
			loadOptionsMethod: 'getTypes',
		},
		default: [],
		description: 'Filter by order type. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Location Names or IDs',
		name: 'location_ids',
		type: 'multiOptions',
		displayOptions: {
			show: showOnlyForEstimatesGetMany,
		},
		typeOptions: {
			loadOptionsMethod: 'getLocations'
		},
		default: [],
		description: 'Filter by location. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Customer IDs',
		name: 'client_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForEstimatesGetMany,
		},
		default: [],
		description: 'Add one or more Customer IDs',
	},

];
