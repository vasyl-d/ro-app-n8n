import { INodeProperties } from 'n8n-workflow';

export const globalFields: INodeProperties[] = [
		{
		displayName: 'Entity ID',
		name: 'Id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['get', 'getLocationById', 'getLocationResources', 'delete', 'getItems', 'getServiceById', 'getProductById'],
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
				resource: ['order', 'estimate', 'booking', 'invoice']
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
		displayName: "Assignee id",
		name: "assignee_id",
		type: "string",
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['createItem', 'updateItem'],
				resource: ['order', 'estimate', 'invoice', 'booking']
			},
		},
	},
	{
		displayName: "Discount",
		name: "discount",
		type: "collection",
		required: true,
		default: {},
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
						name: 'Percentage',
						value: 'percentage',
					},
					{
						name: 'Amount',
						value: 'value',
					},
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
		default: {},
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
				description: 'The warranty period',
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
				resource: ['order', 'estimate', 'bookings']
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
				operation: ['getAll', 'getEmployees', 'getReviews', 'getStock', 'getServices', 'getProducts'],
				resource: ['sale', 'person', 'organization', 'order', 'invoice', 'company', 'asset', 'lead', 'catalog', 'booking']
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
				operation: ['getAll', 'getEmployees', 'getReviews', 'getStock', 'getServices', 'getProducts'],
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
