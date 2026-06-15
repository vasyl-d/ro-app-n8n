import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { saleGetManyDescription } from './getAll';
import { handleGetAll, handleGetOne, BASE_URL} from '../../shared/methods';

const showOnlyForCompanies = {
	resource: ['sale'],
};

export const saleDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCompanies,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get sale by id',
				description: 'Get sale by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get sales',
				description: 'Get sales',
			},
		],
		default: 'getAll',
	},
	...saleGetManyDescription,
];

export async function executeSaleOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/sales`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/sales/${this.getNodeParameter('Id', index)}`);
	}
	return [[{json: {}}]];
}