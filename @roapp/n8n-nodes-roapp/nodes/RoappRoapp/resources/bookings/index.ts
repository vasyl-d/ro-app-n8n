import type { INodeProperties, IExecuteFunctions } from 'n8n-workflow';
import { bookingsGetManyDescription } from './getAll';
import { bookingsCreateDescription } from './create';
import { bookingsUpdateDescription } from './update';
import { bookingsCreateItemDescription } from './createItem';
import { bookingsUpdateItemDescription } from './updateItem';
import { bookingsDeleteItemDescription } from './deleteItem';
import { handleGetAll, handleGetOne, BASE_URL, handleCreateUpdate } from '../../shared/methods';

const showOnlyForBookings = {
	resource: ['booking'],
};

export const bookingsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForBookings,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get bookings',
				description: 'Get multiple bookings',
			},
			{
				name: 'Get by Id',
				value: 'get',
				action: 'Get booking',
				description: 'Get the data of a single booking',
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create booking',
				description: 'Create a new booking',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update booking',
				description: 'Update a booking',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete booking',
				description: 'Delete a booking',
			},
			{
				name: 'Get Items',
				value: 'getItems',
				action: 'Get booking items',
				description: 'Get items for a booking',
			},
			{
				name: 'Add Item',
				value: 'createItem',
				action: 'Add booking item',
				description: 'Add an item to a booking',
			},
			{
				name: 'Update Item',
				value: 'updateItem',
				action: 'Update booking item',
				description: 'Update a booking item',
			},
			{
				name: 'Delete Item',
				value: 'deleteItem',
				action: 'Delete booking item',
				description: 'Delete a booking item',
			},
		],
		default: 'getAll',
	},
	...bookingsGetManyDescription,
	...bookingsCreateDescription,
	...bookingsUpdateDescription,
	...bookingsCreateItemDescription,
	...bookingsUpdateItemDescription,
	...bookingsDeleteItemDescription,
];

export async function executeBookingOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/bookings`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/bookings/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'delete') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
			method: 'DELETE',
			url: `${BASE_URL}v2/bookings/${this.getNodeParameter('Id', index)}`
		});
	} else if (operation === 'getItems') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/bookings/${this.getNodeParameter('Id', index)}/items`);
	} else if (operation === 'create') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/bookings`, 'POST');
	} else if (operation === 'update') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/bookings/${this.getNodeParameter('Id', index)}`, 'PATCH');
	} else if (operation === 'createItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/bookings/${this.getNodeParameter('bookingId', index)}/items`, 'POST');
	} else if (operation === 'updateItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/bookings/${this.getNodeParameter('bookingId', index)}/items/${this.getNodeParameter('itemId', index)}`, 'PATCH');
	} else if (operation === 'deleteItem') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/bookings/${this.getNodeParameter('bookingId', index)}/items/${this.getNodeParameter('itemId', index)}`, 'DELETE');
	}
	return null;
}