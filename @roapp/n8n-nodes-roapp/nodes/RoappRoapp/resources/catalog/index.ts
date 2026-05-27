import { INodeProperties , IExecuteFunctions} from 'n8n-workflow';
import { handleGetAll, handleGetOne } from '../../shared/methods';
import { getAllDescription } from './get';
import { BASE_URL } from '../../shared/methods';

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
				name: 'Get Services',
				value: 'getServices',
				description: 'Retrieve a list of services',
				action: 'Get services',
			},
			{
				name: 'Get Products',
				value: 'getProducts',
				description: 'Retrieve a list of products',
				action: 'Get Products',
			},
			{
				name: 'Get Service by Id',
				value: 'getServiceById',
				description: 'Retrieve service data',
				action: 'Get services by id',
			},
			{
				name: 'Get Product by Id',
				value: 'getProductById',
				description: 'Retrieve Product data',
				action: 'Get Product by id',
			},
			{
				name: 'Get Services Categiories',
				value: 'getServicesCategories',
				description: 'Retrieve a list of services categories',
				action: 'Get Services Categiories',
			},
			{
				name: 'Get Products Categiories',
				value: 'getProductsCategories',
				description: 'Retrieve a list of Products categories',
				action: 'Get Products Categiories',
			},
			{
				name: 'Get Services Unit Of Measures',
				value: 'getServicesUOMs',
				description: 'Get Services Unit Of Measures',
				action: 'Get Services Unit Of Measures',
			},
			{
				name: 'Get Product Unit Of Measures',
				value: 'getProductsUOMs',
				description: 'Get Product Unit Of Measures',
				action: 'Get Product Unit Of Measures',
			},
			{
				name: 'Get Services Prices',
				value: 'getServicesPrices',
				description: 'Get Services Prices',
				action: 'Get Services Prices',
			},
			{
				name: 'Get Products Prices',
				value: 'getProductsPrices',
				description: 'Get Products Prices',
				action: 'Get Products Prices',
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
): Promise<any> {
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
	return null;
}