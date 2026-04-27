import { INodeProperties } from 'n8n-workflow';

export const globalFields: INodeProperties[] = [
		{
		displayName: 'Entity ID',
		name: 'Id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['sale', 'person', 'organization', 'order', 'invoice']
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
		name: "created",
		type: "collection",
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['order', 'invoice', 'sale']
			},
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'created_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'created_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: "Modified",
		name: "modified",
		type: "collection",
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['order', 'invoice']
			},
		},
		default : {},
		options: [
			{
				displayName: 'From',
				name: 'modified_from',
				type: 'dateTime',
				default: ''
			},
			{
				displayName: 'To',
				name: 'modified_to',
				type: 'dateTime',
				default: ''
			},
		]
	},
	{
		displayName: 'Get All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['getAll'],
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
				operation: ['getAll'],
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
