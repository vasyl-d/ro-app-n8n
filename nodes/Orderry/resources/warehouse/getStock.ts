import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetStock = {
	operation: ['getStock'],
	resource: ['warehouse'],
};

export const warehouseGetStockDescription: INodeProperties[] = [
	{
		displayName: 'Warehouse ID',
		name: "warehouse_id",
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: showOnlyForGetStock
		}
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		description: 'Filter by product title',
		displayOptions: {
			show: showOnlyForGetStock
		},
	},
	{
		displayName: 'Product ID',
		name: 'ids',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		default: [],
		description: 'Filter by product IDs. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForGetStock,
		},
	},
	{
		displayName: 'Categories ID',
		name: 'categories',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		default: [],
		description: 'Filter by category IDs. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForGetStock,
		},
	},
	{
		displayName: 'Articles ID',
		name: 'articles',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		default:[],
		description: 'Filter by article IDs. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForGetStock,
		},
	},
	{
		displayName: 'Barcodes ID',
		name: 'barcodes',
		type: 'string',
		typeOptions: {
			multipleValues: true, // Converts regular input into a dynamic list
		},
		default:[],
		description: 'Filter by barcode IDs. Specify one or more IDs using an <a href="https://n8n.io">expression</a>.',
		displayOptions: {
			show: showOnlyForGetStock,
		},
	},
	{
		displayName: 'Exclude Zero Residue',
		name: 'exclude_zero_residue',
		type: 'boolean',
		default: false,
		description: 'Whether Return only products with non-zero residue',
		displayOptions: {
			show: showOnlyForGetStock,
		},
	}
];