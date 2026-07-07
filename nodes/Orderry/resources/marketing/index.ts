import { INodeProperties, IExecuteFunctions,INodeExecutionData } from 'n8n-workflow';
import { handleGetAll, BASE_URL } from '../../shared/methods';

const showOnlyForMarketing = {
    resource: ['marketing'],
};

export const marketingDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
            show: showOnlyForMarketing,
		},
		options: [
            {
				name: 'Get Reviews',
				value: 'getReviews',
				action: 'Get customer reviews',
				description: 'Get customer reviews',
			},
            {
				name: 'Get Ad Campaigns',
				value: 'getAdCampaigns',
				action: 'Get ad campaigns',
			},
 		
		],
		default: 'getAdCampaigns',
	}
];

export async function executeGetMarketing(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]>  {
	if (operation === 'getReviews') {
		return await handleGetAll.call(this, index, `${BASE_URL}marketing/reviews`);
	} 
	if (operation === 'getAdCampaigns') {
		return await handleGetAll.call(this, index, `${BASE_URL}marketing/campaigns/`);
	} 
	return [[{json:{}, 
		pairedItem: {
			item: index, // Link to current input index
		}}]];
}
