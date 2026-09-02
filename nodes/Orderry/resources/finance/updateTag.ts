import type { INodeProperties } from 'n8n-workflow';

const showOnlyForFinanceUpdateTag = {
	operation: ['updateTag'],
	resource: ['finance'],
};

export const financeUpdateTagDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForFinanceUpdateTag,
		},
		default: '',
		description: 'Tag name',
	},
	{
		displayName: 'Color',
		name: 'color_name',
		type: 'options',
		displayOptions: {
			show: showOnlyForFinanceUpdateTag,
		},
		options: [
			{ name: 'Blue', value: 'blue' },
			{ name: 'Green', value: 'green' },
			{ name: 'Grey', value: 'grey' },
			{ name: 'Navy', value: 'navy' },
			{ name: 'Orange', value: 'orange' },
			{ name: 'Pink', value: 'pink' },
			{ name: 'Red', value: 'red' },
			{ name: 'Yellow', value: 'yellow' },
		],
		default: 'blue',
		description: 'Tag color name',
	},
];
