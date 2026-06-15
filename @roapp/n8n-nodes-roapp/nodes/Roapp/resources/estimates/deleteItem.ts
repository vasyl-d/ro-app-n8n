import type { INodeProperties } from 'n8n-workflow';

const showOnlyForEstimatesDeleteItem = {
	operation: ['deleteItem'],
	resource: ['estimate'],
};

export const estimatesDeleteItemDescription: INodeProperties[] = [
	{
		displayName: 'Estimate ID',
		name: 'estimate_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the estimate',
		displayOptions: {
			show: showOnlyForEstimatesDeleteItem,
		},
	},
	{
		displayName: 'Item ID',
		name: 'item_id',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the estimate item to delete',
		displayOptions: {
			show: showOnlyForEstimatesDeleteItem,
		},
	},
];
