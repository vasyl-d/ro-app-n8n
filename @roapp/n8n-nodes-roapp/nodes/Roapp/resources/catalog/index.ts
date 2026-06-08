import { INodeProperties , IExecuteFunctions, INodeExecutionData} from 'n8n-workflow';
import { handleGetAll, handleGetOne, BASE_URL  } from '../../shared/methods';
import { getAllDescription } from './getAll';

const showOnlyForCatalog = {
    resource: ['catalog'],
};

export const catalogDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCatalog,
		},
		options: [
			{
				name: 'Get Product by ID',
				value: 'getProductById',
				description: 'Retrieve Product data',
				action: 'Get product by id',
			},
			{
				name: 'Get Products',
				value: 'getProducts',
				description: 'Retrieve a list of products',
				action: 'Get products',
			},
			{
				name: 'Get Products Categiories',
				value: 'getProductsCategories',
				description: 'Retrieve a list of Products categories',
				action: 'Get products categiories',
			},
			{
				name: 'Get Products Prices',
				value: 'getProductsPrices',
				action: 'Get products prices',
			},
			{
				name: 'Get Products Unit Of Measures',
				value: 'getProductsUOMs',
				action: 'Get products unit of measures',
			},
			{
				name: 'Get Service by ID',
				value: 'getServiceById',
				description: 'Retrieve service data',
				action: 'Get services by id',
			},
			{
				name: 'Get Services',
				value: 'getServices',
				description: 'Retrieve a list of services',
				action: 'Get services',
			},
			{
				name: 'Get Services Categiories',
				value: 'getServicesCategories',
				description: 'Retrieve a list of services categories',
				action: 'Get services categiories',
			},
			{
				name: 'Get Services Prices',
				value: 'getServicesPrices',
				action: 'Get services prices',
			},
			{
				name: 'Get Services Unit Of Measures',
				value: 'getServicesUOMs',
				action: 'Get services unit of measures',
			},
		],
		default: 'getServices',
	},
	...getAllDescription
];

export async function executeCatalogOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getServices') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/services`);
	} else if (operation === 'getServicesCategories') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/services/categories`);
	} else if (operation === 'getServiceById') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/services/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'getProductsCategories') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/products/categories`);
	} else if (operation === 'getProductById') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/products/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'getProducts') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/products`);
	} else if (operation === 'getProductsUOMs') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/products/uoms`);
	} else if (operation === 'getServicesUOMs') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/services/uoms`);
	} else if (operation === 'getProductsPrices') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/products/prices`);
	} else if (operation === 'getServicesPrices') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/services/prices`);
	}
	return [[{json:{}, 
		pairedItem: {
			item: index, // Зв'язуємо з поточним вхідним індексом
		}}]];
}