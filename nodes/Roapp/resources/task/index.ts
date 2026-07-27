import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { handleGetAll, handleGetOne, handleCreateUpdate, handlePost, BASE_URL } from '../../shared/methods';
import { taskGetAllDescription } from './getAll';
import { taskGetDescription } from './get';
import { taskCreateDescription } from './createTask';
import { taskUpdateDescription } from './updateTask';
import { taskCloseDescription } from './closeTask';
import { taskReopenDescription } from './reopenTask';
import { taskCommentDescription } from './createCommentOnTask';

const showOnlyForTask = {
	resource: ['task'],
};

export const taskDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTask,
		},
		options: [
			{
				name: 'Close Task',
				value: 'closeTask',
				action: 'Close task',
				description: 'Close a task',
			},
			{
				name: 'Create Comment',
				value: 'createComment',
				action: 'Create comment on task',
				description: 'Add a comment to a task',
			},
			{
				name: 'Create Task',
				value: 'createTask',
				action: 'Create task',
				description: 'Create a new task',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get task',
				description: 'Get the data of a single task',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get tasks',
				description: 'Get a list of tasks',
			},
			{
				name: 'Reopen Task',
				value: 'reopenTask',
				action: 'Reopen task',
				description: 'Reopen a closed task',
			},
			{
				name: 'Update Task',
				value: 'updateTask',
				action: 'Update task',
				description: 'Update an existing task',
			},
		],
		default: 'getAll',
	},
	...taskGetAllDescription,
	...taskGetDescription,
	...taskCreateDescription,
	...taskUpdateDescription,
	...taskCloseDescription,
	...taskReopenDescription,
	...taskCommentDescription,
];

export async function executeTaskOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getAll') {
		return await handleGetAll.call(this, index, `${BASE_URL}tasks`);
	} else if (operation === 'get') {
		return await handleGetOne.call(this, index, `${BASE_URL}tasks/${this.getNodeParameter('taskId', index)}`);
	} else if (operation === 'createTask') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}tasks`, 'POST');
	} else if (operation === 'updateTask') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}tasks/${this.getNodeParameter('task_id', index)}`, 'PUT');
	} else if (operation === 'closeTask') {
		const task_id = this.getNodeParameter('task_id', index) as string;
		return await handlePost.call(this, index, `${BASE_URL}tasks/${task_id}/close`, {});
	} else if (operation === 'reopenTask') {
		const task_id = this.getNodeParameter('task_id', index) as string;
		return await handlePost.call(this, index, `${BASE_URL}tasks/${task_id}/reopen`, {});
	} else if (operation === 'createComment') {
		const task_id = this.getNodeParameter('task_id', index) as string;
		const message = this.getNodeParameter('message', index) as string;
		const is_private = this.getNodeParameter('is_private', index) as boolean;
		return await handlePost.call(this, index, `${BASE_URL}tasks/${task_id}/comments`, {
			message,
			is_private,
		});
	}
	return [[{ json: {}, pairedItem: { item: index } }]];
}
