import type { INodeProperties } from 'n8n-workflow';

const showGetCatalogue = {
				operation: ['getServices', 'getProducts', 'getBundles'],
				resource: ['catalog'],
			};

export const getAllDescription: INodeProperties[] = [
	// Search parameters for getServices operation
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		description: 'Search query used to filter services by name',
		displayOptions: {
			show: showGetCatalogue
		},
	},
	{
		displayName: 'Barcode',
		name: 'barcode',
		type: 'string',
		default: '',
		description: 'Catalogue item barcode',
		displayOptions: {
			show: showGetCatalogue
		},
	},
	{
		displayName: 'SKU',
		name: 'sku',
		type: 'string',
		default: '',
		description: 'Catalogue item SKU',
		displayOptions: {
			show: {
				operation: ['getProducts'],
				resource: ['catalog'],
			}
		},
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		default: '',
		description: 'Catalogue item inner code',
		displayOptions: {
			show: {
				operation: ['getProducts'],
				resource: ['catalog'],
			}
		},
	},
	{
		displayName: 'Category IDs',
		name: 'category_ids',
		type: 'number',
		typeOptions: {
			multipleValues: true,
		},
		default: '',
		description: 'List of Category IDs',
		displayOptions: {
			show: showGetCatalogue
		},
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		default: 'title',
		description: 'Defines the sorting order of returned results',
		options: [
			{
				name: 'Title (Ascending)',
				value: 'title',
			},
			{
				name: 'Title (Descending)',
				value: '-title',
			},
		],
		displayOptions: {
			show: showGetCatalogue
		},
	},
];