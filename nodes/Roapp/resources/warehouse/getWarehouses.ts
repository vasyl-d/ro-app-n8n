import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetWarehouses = {
	operation: ['getWarehouses'],
	resource: ['warehouse'],
};

export const warehouseGetWhDescription: INodeProperties[] = [
	{
		displayName: 'Location Name or ID',
		name: 'branch_id',
		type: 'options',		
		required: true,
		displayOptions: {
			show: showOnlyForGetWarehouses,
		},		
		typeOptions: {
			loadOptionsDependsOn: [
				'resource',
				'operation',
			],
			loadOptionsMethod: 'getLocations',
			reloadNodeOptions: true, 
		},
		default: [],
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
    {
        displayName: "Type",
        name: "type",
        type: "options",
        default: 'product',
        options: [
            { name: 'Product', value: 'product' },
            { name: 'Asset', value: 'asset' },
            { name: 'All', value: '' },
        ],
        displayOptions: {
            show: showOnlyForGetWarehouses
        },
    }
];
