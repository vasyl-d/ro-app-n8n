import { NodeConnectionTypes, 
	type INodeType, 
	type INodeTypeDescription, 
	type IExecuteFunctions,
	type INodeExecutionData,
	ResourceMapperFields,
	INodePropertyOptions,
	ILoadOptionsFunctions 
} from 'n8n-workflow';
import { globalFields } from './shared/sharedFields';
import { personDescription } from './resources/person';
import { organizationDescription } from './resources/organization';
import { orderDescription } from './resources/order';
import { saleDescription, executeSaleOperation } from './resources/sale';
import { invoiceDescription, executeInvoiceOperation } from './resources/invoices';	
import { companyDescription, executeGetCompany } from './resources/company';
import { marketingDescription, executeGetMarketing } from './resources/marketing';
import { assetDescription, executeAssetOperation } from './resources/assets';
import { warehouseDescription, executeWarehouseOperation } from './resources/warehouse';
import { 
			fetchCustomFieldsData,
			getResourceStatuses
		} from './shared/methods';
		
export class RoappRoapp implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Roapp',
		name: 'Roapp',
		icon: { light: 'file:roapp_logo.png', dark: 'file:roapp_logo.dark.png' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Roapp Roapp API',
		defaults: {
			name: 'Roapp',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'roappRoappApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.roapp.io/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Company',
						value: 'company',
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
						name: 'Invoice',
						value: 'invoice',
					},
					{
						name: 'Asset',
						value: 'asset',
					},
					{
						name: 'Warehouse',
						value: 'warehouse',
					},
				],
				default: 'Order',
			},
			...companyDescription,
			...marketingDescription,
			...personDescription,
			...orderDescription,
			...organizationDescription,
			...saleDescription,
			...invoiceDescription,
			...assetDescription,
			...warehouseDescription,
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
				}
		},
		resourceMapping: {
			async getCustomFields(this: ILoadOptionsFunctions): Promise<ResourceMapperFields> {
				// Отримуємо поточний обраний ресурс з UI
				const resource = this.getCurrentNodeParameter('resource') as string;
				return await fetchCustomFieldsData.call(this, resource);
			}
		}
	};
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const { executeOrderOperation, executePersonOperation, executeOrganizationOperation } = await import('./shared/methods');

		for (let i = 0; i < items.length; i++) {
			const resource = this.getNodeParameter('resource', i) as string;
			const operation = this.getNodeParameter('operation', i) as string;

			let response: any;

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
					response = await executeGetCompany.call(this, operation, i);
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
				default:
					response = {};
			}

			returnData.push({
				json: response || {},
				pairedItem: { item: i },
			});
		}

		return [returnData];
	}
}
