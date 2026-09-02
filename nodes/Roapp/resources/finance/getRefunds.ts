import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceGetRefunds = {
	operation: ['getRefunds'],
	resource: ['finance'],
};

const showOnlyForFinanceRefundsCreatedAt = {
	operation: ['getRefunds'],
	resource: ['finance'],
};

export const financeGetRefundsDescription: INodeProperties[] = [
	{
		displayName: 'Branch IDs',
		name: 'branch_ids',
		type: 'string',
		displayOptions: {
			show: showOnlyForFinanceGetRefunds,
		},
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		description: 'List of location IDs',
	},
	{
		displayName: 'Client IDs',
		name: 'client_ids',
		type: 'string',
		displayOptions: {
			show: showOnlyForFinanceGetRefunds,
		},
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		description: 'List of Client (Person / Organization) IDs',
	},
	{
		displayName: 'Related Document Type',
		name: 'related_document_type',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceGetRefunds,
		},
		options: [
			{ name: 'All', value: '' },
			{ name: 'Order', value: 'order' },
			{ name: 'Sale', value: 'sale' },
		],
		default: '',
		description: 'Type of related document',
	},
	{
		displayName: 'Created',
		name: 'created_at',
		type: 'collection',
		displayOptions: {
			show: showOnlyForFinanceRefundsCreatedAt,
		},
		default: {},
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
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceGetRefunds,
		},
		options: [
			{ name: 'ID', value: 'id' },
			{ name: '-ID', value: '-id' },
		],
		default: 'id',
		description: 'Defines the sorting order of returned results',
	},
];
