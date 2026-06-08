import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLeadCreate = {
	operation: ['create','update'],
	resource: ['lead'],
};

export const leadCreateDescription: INodeProperties[] = [
	{
		displayName: 'Lead ID',
		name: 'lead_id',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['lead'],
			}
		},
		description: 'Inquiry type ID',
	},
	{
		displayName: 'Lead Type ID',
		name: 'leadtype_id',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Inquiry type ID',
	},
	{
		displayName: 'Client ID',
		name: 'client_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Client ID. Either client_id or contact_phone + contact_name are required.',
	},
	{
		displayName: 'Contact Phone',
		name: 'contact_phone',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Inquiry contact number. Must be set with contact_name if client_id is absent.',
	},
	{
		displayName: 'Contact Name',
		name: 'contact_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Inquiry contact name',
	},
	{
		displayName: 'Is Juridical',
		name: 'is_juridical',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Whether the inquiry contact is a legal entity',
	},
	{
		displayName: 'Branch ID',
		name: 'branch_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Location ID',
	},
	{
		displayName: 'Manager ID',
		name: 'manager_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Responsible manager ID',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Inquiry description',
	},
	{
		displayName: 'Ad Campaign ID',
		name: 'ad_campaign_id',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Advertising campaign ID',
	},
	{
		displayName: 'Is Urgent',
		name: 'is_urgent',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Whether this Inquiry is urgent',
	},
	    {
        displayName: 'Custom Fields',
        name: 'customFields',
        placeholder: 'Add custom field',
        type: 'resourceMapper',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForLeadCreate,
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
