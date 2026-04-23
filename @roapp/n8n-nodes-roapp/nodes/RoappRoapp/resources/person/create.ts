import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPersonCreate = {
	operation: ['create'],
	resource: ['person'],
};

export const personCreateDescription: INodeProperties[] = [
	{
		displayName: 'first_name',
		name: 'first_name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForPersonCreate,
		},
		description: 'The name of the user',
		routing: {
			send: {
				type: 'body',
				property: 'first_name',
			},
		},
	},
	{
		displayName: 'last_name',
		name: 'last_name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForPersonCreate,
		},
		description: 'The last name of the user',
		routing: {
			send: {
				type: 'body',
				property: 'last_name',
			},
		},
	},
	    {
        displayName: 'Custom Fields',
        name: 'customFields',
        placeholder: 'Add custom field',
        type: 'resourceMapper',
        noDataExpression: true,
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
        displayOptions: {
            show: showOnlyForPersonCreate,
        }
    },
];
