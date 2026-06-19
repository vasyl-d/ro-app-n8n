import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { warehouseGetWhDescription } from './getWarehouses';
import { warehouseGetStockDescription } from './getStock';
import { handleGetAll, BASE_URL} from '../../shared/methods';

const showOnlyForWarehouse = {
	resource: ['warehouse'],
};

export const warehouseDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForWarehouse,
		},
		options: [
			{
				name: 'Get Warehouses',
				value: 'getWarehouses',
				action: 'Get warehouses',
			},
			{
				name: 'Get Stock',
				value: 'getStock',
				action: 'Get stock by warehouse',
				description: 'Get stock by warehouse',
			},
		],
		default: 'getWarehouses',
	},
	...warehouseGetWhDescription,
	...warehouseGetStockDescription
];

export async function executeWarehouseOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getWarehouses') {
		return await handleGetAll.call(this, index, `${BASE_URL}warehouse/`);
	} else if (operation === 'getStock') {
		return await handleGetAll.call(this, index, `${BASE_URL}warehouse/goods/${this.getNodeParameter('warehouse_id', index)}`);
	}
	return [[{json:{}}]];
}