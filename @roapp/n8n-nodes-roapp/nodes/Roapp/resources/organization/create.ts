import type { INodeProperties } from 'n8n-workflow';

const showOnlyForOrganizationCreate = {
	operation: ['create'],
	resource: ['organization'],
};

export const organizationCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForOrganizationCreate,
		},
		description: 'The name of the Company',
	},
    {
        displayName: 'Custom Fields',
        name: 'customFields',
        placeholder: 'Add custom field',
        type: 'resourceMapper',
        noDataExpression: true,
		displayOptions: {
            show: showOnlyForOrganizationCreate,
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
