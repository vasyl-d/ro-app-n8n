import { INodeProperties } from 'n8n-workflow';

export const globalFields: INodeProperties[] = [
		{
		displayName: 'Entity ID',
		name: 'Id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['get', 'getLocationById', 'getLocationResources', 'delete', 'getItems'],
				resource: ['sale', 'person', 'organization', 'order', 'invoice', 'company', 'asset', 'lead']
			},
		},
		description: "The entity's ID to retrieve",
	},
		{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		required: false,
		placeholder: 'example@gmail.com',
		typeOptions: {
			isEmail: true,
		},
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['person', 'organization']
			},
		},
		description: 'The email of the Company',

	},
	{
		displayName: 'Phones',
		name: 'phonesUi', // Використовуємо суфікс Ui, щоб потім перетворити в чистий масив
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Phone',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['person', 'organization']
			},
		},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'phones',
				displayName: 'Phone details',
				values: [
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: 'Mobile',
						required: true,
						description: 'Phone\'s name (e.g. Mobile, Work)',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
						required: true,
						placeholder: '+12027123456',
						description: 'Enter in international format E.164. Example: +1607...',
					},
					{
						displayName: 'Notify',
						name: 'notify',
						type: 'boolean',
						default: true,
						description: 'Is sending SMS allowed to this number?',
					},
					{
						displayName: 'Has Viber',
						name: 'has_viber',
						type: 'boolean',
						default: true,
						description: 'Is sending Viber messages allowed?',
					},
					{
						displayName: 'Has WhatsApp',
						name: 'has_whatsapp',
						type: 'boolean',
						default: true,
						description: 'Is sending WhatsApp messages allowed?',
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
				resource: ['order', 'invoice', 'sale', 'person', 'organization']
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
				resource: ['order', 'invoice','person', 'organization']
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
		displayName: "Due date",
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
				resource: ['order', 'estimate']
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
				resource: ['order', 'estimate']
			},
		},
		default : '',
	},
	{
		displayName: "Resource id",
		name: "resource_id",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate']
			},
		},
	},
	{
		displayName: "Ad campaign id",
		name: "ad_campaign_id",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: ['create', 'update'],
				resource: ['order', 'estimate', 'lead']
			},
		},
	},
	{
		displayName: "Due date",
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
		description: 'Filter by manager Ids',
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
        default: {},
        options: [
            { name: 'Id', value: 'id',  },
            { name: '-Id', value: '-id' },
            { name: 'Modified_at', value: 'modified_at' },
            { name: '-Modified_at', value: '-modified_at' },
            { name: 'All', value: '' },
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
				operation: ['getAll', 'getEmployees', 'getReviews', 'getStock'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['getAll', 'getEmployees', 'getReviews', 'getStock'],
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
