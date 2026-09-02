import { INodeProperties , IExecuteFunctions, INodeExecutionData} from 'n8n-workflow';
import { handleGetAll, handleGetOne, BASE_URL, handleCreateUpdate } from '../../shared/methods';
import { getAllDescription } from './getAll';
import { createBundleDescription } from './bundles/create';
import { bundleCreateItemDescription } from './bundles/createItem';
import { createProductDescription } from './products/create';
import { createServiceDescription } from './services/create';

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
				name: 'Create Bundle',
				value: 'createBundle',
				action: 'Create bundle',
			},
			{
				name: 'Create Bundle Item',
				value: 'createBundleItem',
				action: 'Create bundle item',
			},
			{
				name: 'Create Product',
				value: 'createProduct',
				action: 'Create product',
			},
			{
				name: 'Create Service',
				value: 'createService',
				action: 'Create service',
			},
			{
				name: 'Delete Bundle',
				value: 'deleteBundle',
				action: 'Delete bundle by id',
			},
			{
				name: 'Delete Bundle Item',
				value: 'deleteBundleItem',
				action: 'Delete bundle item by id',
			},
			{
				name: 'Delete Product',
				value: 'deleteProduct',
				action: 'Delete product by id',
			},
			{
				name: 'Delete Service',
				value: 'deleteService',
				action: 'Delete service by id',
			},
			{
				name: 'Get Bundle by ID',
				value: 'getBundleById',
				description: 'Retrieve bundle data',
				action: 'Get bundle by id',
			},
			{
				name: 'Get Bundle Items',
				value: 'getBundleItems',
				description: 'Retrieve bundle items data',
				action: 'Get bundle items by bundle id',
			},
			{
				name: 'Get Bundles',
				value: 'getBundles',
				description: 'Retrieve a list of bundles',
				action: 'Get bundles',
			},
			{
				name: 'Get Bundles Categories',
				value: 'getBundlesCategories',
				description: 'Retrieve a list of Bundles categories',
				action: 'Get bundles categiories',
			},
			{
				name: 'Get Product by ID',
				value: 'getProductById',
				action: 'Get product by id',
			},
			{
				name: 'Get Products',
				value: 'getProducts',
				description: 'Retrieve a list of products',
				action: 'Get products',
			},
			{
				name: 'Get Products Categories',
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
				name: 'Get Products Types',
				value: 'getProductsTypes',
				action: 'Get products types',
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
				name: 'Get Services Categories',
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
			{
				name: 'Update Bundle',
				value: 'updateBundle',
				action: 'Update bundle by id',
			},
			{
				name: 'Update Bundle Item',
				value: 'updateBundleItem',
				action: 'Update bundle item by id',
			},
			{
				name: 'Update Product',
				value: 'updateProduct',
				action: 'Update product by id',
			},
			{
				name: 'Update Service',
				value: 'updateService',
				action: 'Update service by id',
			},
		],
		default: 'getServices',
	},
	...getAllDescription,
	...createBundleDescription,
	...bundleCreateItemDescription,
	...createProductDescription,
	...createServiceDescription,
];

export async function executeCatalogOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getServices') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/services`);
	} else if (operation === 'getServicesCategories') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/services/categories`);
	} else if (operation === 'getBundlesCategories') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/bundles/categories`);
	} else if (operation === 'getServiceById') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/services/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'getBundleById') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/bundles/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'getBundleItems') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/bundles/${this.getNodeParameter('Id', index)}/items`);
	} else if (operation === 'getProductsCategories') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/products/categories`);
	} else if (operation === 'getProductsTypes') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/products/types`);
	} else if (operation === 'getProductById') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/products/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'getProducts') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/products`);
	} else if (operation === 'getBundles') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/catalog/bundles`);
	} else if (operation === 'getProductsUOMs') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/products/uoms`);
	} else if (operation === 'getServicesUOMs') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/services/uoms`);
	} else if (operation === 'getProductsPrices') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/products/prices`);
	} else if (operation === 'getServicesPrices') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/catalog/services/prices`);
	} else if (operation === 'deleteProduct') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/products/${this.getNodeParameter('Id', index)}`, 'DELETE');
	} else if (operation === 'deleteService') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/services/${this.getNodeParameter('Id', index)}`, 'DELETE');
	} else if (operation === 'deleteBundle') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/bundles/${this.getNodeParameter('Id', index)}`, 'DELETE');
	} else if (operation === 'createBundle') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/bundles`, 'POST');
	} else if (operation === 'createProduct') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/products`, 'POST');
	} else if (operation === 'createService') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/services`, 'POST');
	} else if (operation === 'updateProduct') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/products/${this.getNodeParameter('product_id', index)}`, 'PATCH');
	} else if (operation === 'updateService') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/services/${this.getNodeParameter('service_id', index)}`, 'PATCH');
	} else if (operation === 'updateBundle') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/bundles/${this.getNodeParameter('bundle_id', index)}`, 'PATCH');
	} else if (operation === 'createBundleItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/bundles/${this.getNodeParameter('bundle_id', index)}/items`, 'POST');
	} else if (operation === 'updateBundleItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/bundles/${this.getNodeParameter('bundle_id', index)}/items/${this.getNodeParameter('item_id', index)}`, 'PATCH');
	} else if (operation === 'deleteBundleItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/catalog/bundles/${this.getNodeParameter('bundle_id', index)}/items/${this.getNodeParameter('item_id', index)}`, 'DELETE');
	}
	return [[{json:{}, 
		pairedItem: {
			item: index, // Link to current input index
		}}]];
}
