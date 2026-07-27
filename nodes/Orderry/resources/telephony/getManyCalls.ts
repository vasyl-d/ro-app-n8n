import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTelephonyCalls = {
	operation: ['getManyCalls'],
	resource: ['telephony'],
};

export const telephonyCallsDescription: INodeProperties[] = [
	{
		displayName: 'Direction',
		name: 'direction',
		type: 'options',
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		default: '',
		options: [
			{name: 'Not Set', value: ''},
			{ name: 'Incoming', value: 'incoming' },
			{ name: 'Outgoing', value: 'outgoing' },
		],
		description: 'Filter by call direction',
	},
	{
		displayName: 'Extension IDs',
		name: 'extension_ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		description: 'Filter by extension IDs',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		default: '',
		options: [
			{name: 'Not Set', value: ''},
			{ name: 'Completed', value: 'completed' },
			{ name: 'No Answer', value: 'noanswer' },
			{ name: 'Missed', value: 'missed' },
		],
		description: 'Filter by call status',
	},
	{
		displayName: 'Sentiment',
		name: 'sentiment',
		type: 'options',
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		default: '',
		options: [
			{name: 'Not Set', value: ''},
			{ name: 'Positive', value: 'positive' },
			{ name: 'Neutral', value: 'neutral' },
			{ name: 'Negative', value: 'negative' },
		],
		description: 'Filter by call sentiment',
	},
	{
		displayName: 'Insight',
		name: 'insight',
		type: 'options',
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		default: '',
		options: [
			{ name: 'Booking Not Confirmed', value: 'booking_not_confirmed' },
			{ name: 'Follow Up Required', value: 'follow_up_required' },
			{ name: 'Friendly Service', value: 'friendly_service' },
			{ name: 'Good Value', value: 'good_value' },
			{ name: 'Information Only', value: 'information_only' },
			{ name: 'Long Wait Time', value: 'long_wait_time' },
			{ name: 'Loyalty Acknowledged', value: 'loyalty_acknowledged' },
			{ name: 'Miscommunication', value: 'miscommunication' },
			{ name: 'Needs Quote Or Estimate', value: 'needs_quote_or_estimate' },
			{ name: 'Not In Stock', value: 'not_in_stock' },
			{name: 'Not Set', value: ''},
			{ name: 'Policy Disagreement', value: 'policy_disagreement' },
			{ name: 'Poor Service', value: 'poor_service' },
			{ name: 'Potential Sale', value: 'potential_sale' },
			{ name: 'Pricing Disagreement', value: 'pricing_disagreement' },
			{ name: 'Quality Issue', value: 'quality_issue' },
			{ name: 'Quality Satisfaction', value: 'quality_satisfaction' },
			{ name: 'Quick Resolution', value: 'quick_resolution' },
			{ name: 'Repeat Problem', value: 'repeat_problem' },
			{ name: 'Unresolved Issue', value: 'unresolved_issue' },
			{ name: 'Went Above And Beyond', value: 'went_above_and_beyond' },
		],
		description: 'Filter by call insight',
	},
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string',
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		default: '',
		description: 'Filter by contact ID',
	},
	{
		displayName: 'Phone Number',
		name: 'phone_number',
		type: 'string',
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		default: '',
		description: 'Filter by contact phone number',
	},
	{
		displayName: 'Created',
		name: 'created_at',
		type: 'collection',
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		default: {},
		options: [
			{
				displayName: 'From',
				name: 'created_at_from',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'To',
				name: 'created_at_to',
				type: 'dateTime',
				default: '',
			},
		],
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		default: '',
		options: [
			{name: 'Not Set', value: ''},
			{ name: 'ID', value: 'id' },
			{ name: '-ID', value: '-id' },
		],
		displayOptions: {
			show: showOnlyForTelephonyCalls,
		},
		description: 'Sorting order of returned results',
	},
];
