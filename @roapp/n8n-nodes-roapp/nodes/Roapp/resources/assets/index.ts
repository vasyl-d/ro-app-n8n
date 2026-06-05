import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { assetGetManyDescription } from './getAll';
import { handleGetAll, 
	handleGetOne, 
	handleCreateUpdate,
	BASE_URL} from '../../shared/methods';
import { assetCreateDescription } from './create';

const showOnlyForAssets = {
	resource: ['asset'],
};

export const assetDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAssets,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create asset',
				description: 'Create a new asset',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get an asset',
				description: 'Get the data of a single asset',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get assets',
				description: 'Get assets',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update asset',
				description: 'Update a new asset',
			},
		],
		default: 'getAll',
	},
	...assetGetManyDescription,
	...assetCreateDescription,
];

export async function executeAssetOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}warehouse/assets`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}warehouse/assets${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}warehouse/assets`, 'POST');
	} else if  (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}warehouse/assets/${this.getNodeParameter('asset_id', index)}`, 'POST')
	}
	return [[{json:{}, 
		pairedItem: {
			item: index, // Зв'язуємо з поточним вхідним індексом
		}}]];
}