import { NodeConnectionTypes, 
	type INodeType, 
	type INodeTypeDescription, 
	type IExecuteFunctions,
	type INodeExecutionData,
	ResourceMapperFields,
	INodePropertyOptions,
	ILoadOptionsFunctions,
	NodeApiError 
} from 'n8n-workflow';
import { globalFields } from './shared/sharedFields';
import { personDescription, executePersonOperation } from './resources/person';
import { organizationDescription, executeOrganizationOperation } from './resources/organization';
import { ordersDescription, executeOrderOperation } from './resources/orders';
import { saleDescription, executeSaleOperation } from './resources/sale';
import { invoiceDescription, executeInvoiceOperation } from './resources/invoices';
import { companyDescription, executeCompanyOperations } from './resources/company';
import { marketingDescription, executeGetMarketing } from './resources/marketing';
import { assetDescription, executeAssetOperation } from './resources/assets';
import { warehouseDescription, executeWarehouseOperation } from './resources/warehouse';
import { leadDescription, executeLeadOperation } from './resources/lead';
import { estimatesDescription, executeEstimateOperation } from './resources/estimates';
import { catalogDescription, executeCatalogOperation } from './resources/catalog';
import { bookingsDescription, executeBookingOperation } from './resources/bookings';
import {
			fetchCustomFieldsData,
			getAdCampaigns,
			getEmployees,
			getLocationResources,
			getLocations,
			getResourceStatuses,
			getResourceTypes
		} from './shared/methods';
		
export class Orderry implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Orderry',
		name: 'orderry',
		icon: { light: 'file:./or_app_white.svg', dark: 'file:./or_app_black.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Orderry.com API',
		defaults: {
			name: 'Orderry',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'orderryApi', required: true }],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
			options: [
				{
					name: 'Asset',
					value: 'asset',
				},
				{
					name: 'Booking',
					value: 'booking',
				},
				{
					name: 'Catalog',
					value: 'catalog',
				},
				{
					name: 'Company',
					value: 'company',
				},
				{
					name: 'Estimate',
					value: 'estimate',
				},
				{
					name: 'Invoice',
					value: 'invoice',
				},
				{
					name: 'Lead',
					value: 'lead',
				},
				{
					name: 'Marketing',
					value: 'marketing',
				},
				{
					name: 'Order',
					value: 'order',
				},
				{
					name: 'Organization',
					value: 'organization',
				},
				{
					name: 'Person',
					value: 'person',
				},
				{
					name: 'Sale',
					value: 'sale',
				},
				{
					name: 'Warehouse',
					value: 'warehouse',
				},
			],
			default: 'catalog',
			},
			...companyDescription,
			...marketingDescription,
			...personDescription,
			...ordersDescription,
			...leadDescription,
			...organizationDescription,
			...saleDescription,
			...invoiceDescription,
			...assetDescription,
			...bookingsDescription,
			...estimatesDescription,
			...warehouseDescription,
			...catalogDescription,
			...globalFields,
		],
	};
	methods = {
		loadOptions: {
			async getStatuses(
				this: ILoadOptionsFunctions) : Promise<INodePropertyOptions[]>  {
					const resource = this.getCurrentNodeParameter('resource') as string;
					const fields = await getResourceStatuses.call(this, resource);
					return fields;
				},
			async getTypes(
				this: ILoadOptionsFunctions) : Promise<INodePropertyOptions[]>  {
					const resource = this.getCurrentNodeParameter('resource') as string;
					const fields = await getResourceTypes.call(this, resource);
					return fields;
				},
			async getAdCampaigns(this: ILoadOptionsFunctions) : Promise<INodePropertyOptions[]>  {
				return await getAdCampaigns.call(this);
			},
			async getEmployees(this: ILoadOptionsFunctions) : Promise<INodePropertyOptions[]>  {
				const fields = await getEmployees.call(this);
				return fields;
			},
			async getLocations(this: ILoadOptionsFunctions) : Promise<INodePropertyOptions[]>  {
				const fields = await getLocations.call(this);
				return fields;
			},
			async getLocationResources(this: ILoadOptionsFunctions) : Promise<INodePropertyOptions[]>  {
				const branch_id = this.getCurrentNodeParameter('branch_id') as string;
				if (!branch_id) {
					return [];
				};
				const fields = await getLocationResources.call(this, branch_id);
				return fields;
			},
		},
		resourceMapping: {
			async getCustomFields(this: ILoadOptionsFunctions): Promise<ResourceMapperFields> {
				// Get currently selected resource from UI
				const resource = this.getCurrentNodeParameter('resource') as string;
				return await fetchCustomFieldsData.call(this, resource);
			}
		}
	};
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[][] = [];

		for (let i = 0; i < items.length; i++) {
			const resource = this.getNodeParameter('resource', i) as string;
			const operation = this.getNodeParameter('operation', i) as string;

			let response: INodeExecutionData[][] ;
			try {
				switch (resource) {
					case 'order':
						response = await executeOrderOperation.call(this, operation, i);
						break;
					case 'person':
						response = await executePersonOperation.call(this, operation, i);
						break;
					case 'invoice':
						response = await executeInvoiceOperation.call(this, operation, i);
						break;
					case 'organization':
						response = await executeOrganizationOperation.call(this, operation, i);
						break;
					case 'sale':
						response = await executeSaleOperation.call(this, operation, i);
						break;
					case 'company':
						response = await executeCompanyOperations.call(this, operation, i);
						break;
					case 'catalog':
						response = await executeCatalogOperation.call(this, operation, i);
						break;
					case 'booking':
						response = await executeBookingOperation.call(this, operation, i);
						break;
					case 'marketing':
						response = await executeGetMarketing.call(this, operation, i);
						break;
					case 'asset':
						response = await executeAssetOperation.call(this, operation, i);
						break;
				case 'warehouse':
					response = await executeWarehouseOperation.call(this, operation, i);
					break;
				case 'estimate':
					response = await executeEstimateOperation.call(this, operation, i);
					break;
				case 'lead':
						response = await executeLeadOperation.call(this, operation, i);
						break;
					// case 'deduplication':
					// 	response = await executeDeduplicationOperation.call(this, operation, i);
					// 	break;

					default:
						response = [[{json:{}, 
									pairedItem: {
										item: i, // Link to current input index
									}}]];
				}
			} catch (error) {
			if (this.continueOnFail()) {
				returnData.push([{ json: { error: error.message }, 
									pairedItem: {
										item: i, // Link to current input index
									} }]);
				continue;
			}
			throw new NodeApiError(this.getNode(), error, { 
							message: error.message,
							itemIndex: i
						});
			}

			returnData.push(...response);
			// returnData.push({
			// 	json: response[0][0].json,
			// 	pairedItem: { item: i },
			// });
		}

		return returnData;
	}
}
