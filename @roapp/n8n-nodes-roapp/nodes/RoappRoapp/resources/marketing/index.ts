import { INodeProperties, IExecuteFunctions } from 'n8n-workflow';
import { handleGetOne, handleGetAll, BASE_URL } from '../../shared/methods';

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
				action: 'Get Customer Reviews',
				description: 'Get Customer Reviews',
			},
            {
				name: 'Get Ad Campaigns',
				value: 'getAdCampaigns',
				action: 'Get Ad Campaigns',
				description: 'Get Ad Campaigns',
			},
 		
		],
		default: 'getAdCampaigns',
	}
];

export async function executeGetMarketing(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getReviews') {
		return await handleGetAll.call(this, index, `${BASE_URL}marketing/reviews`);
	} 
	if (operation === 'getAdCampaigns') {
		return await handleGetOne.call(this, index, `${BASE_URL}marketing/campaigns/`);
	} 
	return null;
}
