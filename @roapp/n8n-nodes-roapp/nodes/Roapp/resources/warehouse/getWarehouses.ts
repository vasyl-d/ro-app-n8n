import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetWarehouses = {
	operation: ['getWarehouses'],
	resource: ['warehouse'],
};

export const warehouseGetWhDescription: INodeProperties[] = [
    {
        displayName: 'Location ID',
        name: "branch_id",
        type: "string",
        default: '',
        displayOptions: {
            show: showOnlyForGetWarehouses
        },
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
