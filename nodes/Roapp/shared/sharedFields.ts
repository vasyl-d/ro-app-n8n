import { INodeProperties } from 'n8n-workflow';

export const globalFields: INodeProperties[] = [
	{
		displayName: 'Entity ID',
		name: 'Id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['get', 'getLocationById', 'getLocationResources', 'delete', 'getItems', 'getServiceById', 'getProductById', 'getOrganizationPeople', 'getPersonOrganization'],
				resource: ['sale', 'person', 'organization', 'order', 'invoice', 'company', 'asset', 'lead', 'catalog', 'booking']
			},
		},
		description: "The entity's ID to retrieve",
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		placeholder: 'example@gmail.com',
		typeOptions: {
			isEmail: true,
		},
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['person', 'organization']
			},
		},
		description: 'The email of the Company/Person',

	},
	{
		displayName: 'Address',
		name: 'address',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['person', 'organization']
			},
		},
		description: 'The address of the Company/Person',

	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['person', 'organization']
			},
		},
		description: 'The notes of the Company/Person',

	},
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['person', 'organization']
			},
		},
		description: 'The tags of the Company/Person',
		default: [],
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
	},
	{
		displayName: 'Is Supplier',
		name: 'supplier',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['person', 'organization']
			},
		},
		description: 'Whether the entity is a supplier',
	},
	{
		displayName: 'Phones',
		name: 'phonesUi', // Використовуємо суфікс Ui, щоб потім перетворити в чистий масив
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Phone',
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['person', 'organization']
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'phones',
				displayName: 'Phone Details',
				values: [
					{
						displayName: 'Has Viber',
						name: 'has_viber',
						type: 'boolean',
						default: true,
						description: 'Whether sending Viber messages allowed?',
					},
					{
						displayName: 'Has WhatsApp',
						name: 'has_whatsapp',
						type: 'boolean',
						default: true,
						description: 'Whether to send WhatsApp messages allowed',
					},
					{
						displayName: 'Notify',
						name: 'notify',
						type: 'boolean',
						default: true,
						description: 'Whether sending SMS allowed to this number?',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
							required:	true,
						placeholder: '+12027123456',
						description: 'Enter in international format E.164. Example:	+1607...',
					},
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: 'Mobile',
							required:	true,
						description: 'Phone\'s name (e.g. Mobile, Work)',
					},
				],
			},
		],
	},
	{
		displayName: "Created",
		name: "created_at",
		type: "collection",
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['order', 'estimate', 'booking', 'invoice', 'sale']
			},
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'created_at_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'created_at_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: "Modified",
		name: "modified_at",
		type: "collection",
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['order', 'invoice','person', 'organization', 'bookings', 'invoice']
			},
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'modified_at_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'modified_at_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: "Closed",
		name: "closed_at",
		type: "collection",
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['order']
			},
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'closed_at_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'closed_at_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: "Scheduled",
		name: "scheduled_for",
		type: "collection",
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['order', 'estimate']
			},
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'scheduled_for_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'scheduled_for_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: 'Assignee Name or ID',
		name: "assignee_id",
		type: "options",
		required: true,
		displayOptions: {
			show: {
				operation: ['createItem', 'updateItem'],
				resource: ['order', 'estimate', 'invoice', 'booking']
			},
		},
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getEmployees',
		},
		default: [],
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: "Discount",
		name: "discount",
		type: "collection",
		required: true,
		default: {type: "percentage", percentage: 0, amount:0, sponsor: "staff" },
		displayOptions: {
			show: {
				operation: ['createItem', 'updateItem'],
				resource: ['order', 'estimate', 'invoice', 'booking']
			},
		},
		options: [
			{
				displayName: 'Discount Type',
				name: 'type',
				type: 'options',
				default: 'percentage',
				description: 'The type of discount',
				options: [
					{
						name: 'Amount',
						value: 'value',
					},
					{
						name: 'Percentage',
						value: 'percentage',
					}
				],
			},
			{
				displayName: 'Discount Percentage',
				name: 'percentage',
				type: 'number',
				default: 0,
				description: 'The discount percentage (if type is percentage)',
			},
			{
				displayName: 'Discount Amount',
				name: 'amount',
				type: 'number',
				default: 0,
				description: 'The discount amount (if type is amount)',
			},
			{
				displayName: 'Discount Sponsor',
				name: 'sponsor',
				type: 'options',
				default: 'staff',
				description: 'The sponsor of the discount',
				options: [
					{
						name: 'Staff',
						value: 'staff',
					},
					{
						name: 'Company',
						value: 'company',
					},
				],
			},
		]
	},
	{
		displayName: "Warranty",
		name: "warranty",
		type: "collection",
		required: true,
		default: {period: 0, unit: "days" },
		displayOptions: {
			show: {
				operation: ['createItem', 'updateItem'],
				resource: ['order', 'estimate', 'invoice', 'booking']
			},
		},
		options: [
			{
				displayName: 'Warranty Period',
				name: 'period',
				type: 'string',
				default: '0',
			},
			{
				displayName: 'Warranty Unit',
				name: 'unit',
				type: 'options',
				default: 'days',
				description: 'The unit of the warranty period',
				options: [
					{
						name: 'Days',
						value: 'days',
					},
					{
						name: 'Months',
						value: 'months',
					},
				],
			},
		]
	},
	{
		displayName: 'Due Date',
		name: "due_date",
		type: "collection",
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['order', 'estimate']
			},
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'due_date_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'due_date_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: "Scheduled_for",
		name: "scheduled_for",
		type: "dateTime",
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate', 'booking']
			},
		},
		default : '',
	},
	{
		displayName: "Scheduled_to",
		name: "scheduled_to",
		type: "dateTime",
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate', 'booking']
			},
		},
		default : '',
	},
	{
		displayName: 'Location Name or ID',
		name: 'branch_id',
		type: 'options',		
		required: true,
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate', 'booking']
			},
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getLocations',
			reloadNodeOptions: true, 
		},
		default: [],
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Assigned Employee Name or ID',
		name: 'assignee_id',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate']
			},
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
		displayName: 'Manager Name or ID',
		name: 'manager_id',
		type: 'options',		
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate', 'lead', 'invoice', 'person', 'organization']
			},
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getEmployees',
		},
		default: [],
		description: 'Responsible manager ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Resource Name or ID',
		name: 'resource_id',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate', 'booking']
			},
		},
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getLocationResources',
		},
		default: '',
	},
	{
		displayName: 'Ad Campaign Name or ID',
		name: "ad_campaign_id",
		type: "options",
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: "",
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate', 'bookings', 'person', 'organization']
			},
		},
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getAdCampaigns',
		},
	},
	{
		displayName: 'Due Date',
		name: "due_date",
		type: "dateTime",
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate']
			},
		},
		default : '',
	},
	{
		displayName: 'Names',
		name: 'names',
		type: 'string',
		default: [],
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		description: 'Filter by customer Name',
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['person', 'organization']
			},
		},
	},
	{
		displayName: 'Phones',
		name: 'phones',
		type: 'string',
		default: [],
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		description: 'Filter by customer phone number',
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['person', 'organization']
			},
		},
	},
	{
		displayName: 'Managers',
		name: 'managers',
		type: 'string',
		default: [],
		typeOptions: {
			multipleValues: true, // Це перетворює звичайний інпут на динамічний список
		},
		description: 'Filter by manager IDs',
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['person', 'organization', 'order', 'estimate']
			},
		},
	},
	{
        displayName: "Ordering",
        name: "ordering",
        type: "options",
        default: 'id',
        options: [
            { name: '-ID', value: '-id' },
            { name: '-Modified_at', value: '-modified_at' },
            { name: 'All', value: '' },
            { name: 'ID', value: 'id',  },
            { name: 'Modified_at', value: 'modified_at' },
        ],
        displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['person', 'organization', 'order']
			},
        },
    },
	{
		displayName: 'Get All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['getAll', 'getEmployees', 'getReviews', 'getStock', 'getServices', 'getProducts', 'getAdCampaigns'],
				resource: ['sale', 'person', 'organization', 'order', 'invoice', 'company', 'asset', 'lead', 'catalog', 'booking', 'marketing', 'warehouse']
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['getAll', 'getEmployees', 'getReviews', 'getStock', 'getServices', 'getProducts','getAdCampaigns'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
	},
];
