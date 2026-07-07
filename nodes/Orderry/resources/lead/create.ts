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
	},
	{
		displayName: 'Lead Type Name or ID',
		name: 'leadtype_id',
		type: 'options',		
		displayOptions: {
			show: showOnlyForLeadCreate,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getTypes',
		},
		default: [],
		description: 'Lead type to create. Choose from the list, or specify an ID using an <a href="https://n8n.io">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
        displayName: 'Lead Status Name or ID',
        name: 'status_id',
        type: 'options',
		default: [],
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['lead'],
			}
		},
        typeOptions: {
            loadOptionsDependsOn: [
                'resource',
                'operation',
            ],
            loadOptionsMethod: 'getStatuses',
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>'
    },
	{
		displayName: 'Client ID',
		name: 'client_id',
		type: 'number',
		default: '',
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
		description: 'Lead contact number. Must be set with contact_name if client_id is absent.',
	},
	{
		displayName: 'Contact Name',
		name: 'contact_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Lead contact name',
	},
	{
		displayName: 'Is Juridical',
		name: 'is_juridical',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForLeadCreate,
		},
		description: 'Whether the lead contact is a legal entity',
	},
	{
		displayName: 'Branch Name or ID',
		name: 'branch_id',
		type: 'options',
		required: true,		
		displayOptions: {
			show: showOnlyForLeadCreate,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getLocations',
		},
		default: [],
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
		displayName: 'Ad Campaign Name or ID',
		name: 'ad_campaign_id',
		type: 'options',		
		displayOptions: {
			show: showOnlyForLeadCreate,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getAdCampaigns',
		},
		default: [],
		description: 'Advertising campaign ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
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
