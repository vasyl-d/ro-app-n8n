import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { financeGetAccountsDescription } from './getAccounts';
import { financeGetTransactionsDescription } from './getTransactions';
import { financeGetTransactionDescription } from './getTransactionById';
import { financeDeleteTransactionDescription } from './deleteTransaction';
import { financeCreateTransactionDescription } from './createTransaction';
import { financeGetRefundsDescription } from './getRefunds';
import { financeGetRefundItemsDescription } from './getRefundItems';
import { financeGetTagsDescription } from './getTags';
import { financeCreateTagDescription } from './createTag';
import { financeUpdateTagDescription } from './updateTag';
import { financeCreateExchangeRateDescription } from './createExchangeRate';
import { financeGetExchangeRateDescription } from './getExchangeRateById';
import { financeUpdateExchangeRateDescription } from './updateExchangeRate';
import { financeDeleteExchangeRateDescription } from './deleteExchangeRate';
import { financeGetExchangeRateHistoryDescription } from './getExchangeRateHistory';
import {
	handleGetAll,
	handleGetOne,
	handlePost,
	handleCreateUpdate,
	BASE_URL
} from '../../shared/methods';

const showOnlyForFinance = {
	resource: ['finance'],
};

export const financeDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFinance,
		},
		options: [
			{
				name: 'Create Exchange Rate',
				value: 'createExchangeRate',
				action: 'Create exchange rate',
				description: 'Create an exchange rate',
			},
			{
				name: 'Create Tag',
				value: 'createTag',
				action: 'Create finance tag',
				description: 'Create a finance transaction tag',
			},
			{
				name: 'Create Transaction',
				value: 'createTransaction',
				action: 'Create transaction',
				description: 'Create a finance account transaction',
			},
			{
				name: 'Delete Exchange Rate',
				value: 'deleteExchangeRate',
				action: 'Delete exchange rate',
				description: 'Delete an exchange rate',
			},
			{
				name: 'Delete Tag',
				value: 'deleteTag',
				action: 'Delete tag',
				description: 'Delete a finance tag',
			},
			{
				name: 'Delete Transaction',
				value: 'deleteTransaction',
				action: 'Delete transaction',
				description: 'Delete a transaction',
			},
			{
				name: 'Get Account',
				value: 'getAccount',
				action: 'Get account by ID',
				description: 'Get a finance account by ID',
			},
			{
				name: 'Get Accounts',
				value: 'getAccounts',
				action: 'Get finance accounts',
				description: 'Get finance accounts',
			},
			{
				name: 'Get Exchange Rate',
				value: 'getExchangeRate',
				action: 'Get exchange rate by ID',
				description: 'Get an exchange rate by currency code',
			},
			{
				name: 'Get Exchange Rate History',
				value: 'getExchangeRateHistory',
				action: 'Get exchange rate history',
			},
			{
				name: 'Get Exchange Rates',
				value: 'getExchangeRates',
				action: 'Get exchange rates',
			},
			{
				name: 'Get Refund',
				value: 'getRefund',
				action: 'Get refund by ID',
				description: 'Get a refund by ID',
			},
			{
				name: 'Get Refund Items',
				value: 'getRefundItems',
				action: 'Get refund items',
				description: 'Get items for a refund',
			},
			{
				name: 'Get Refunds',
				value: 'getRefunds',
				action: 'Get refunds',
			},
			{
				name: 'Get Tag',
				value: 'getTag',
				action: 'Get tag by ID',
				description: 'Get a finance tag by ID',
			},
			{
				name: 'Get Tags',
				value: 'getTags',
				action: 'Get finance tags',
				description: 'Get finance transaction tags',
			},
			{
				name: 'Get Transaction',
				value: 'getTransaction',
				action: 'Get transaction by ID',
				description: 'Get a transaction by account and transaction ID',
			},
			{
				name: 'Get Transactions',
				value: 'getTransactions',
				action: 'Get account transactions',
				description: 'Get transactions for a finance account',
			},
			{
				name: 'Update Exchange Rate',
				value: 'updateExchangeRate',
				action: 'Update exchange rate',
				description: 'Update an exchange rate',
			},
			{
				name: 'Update Tag',
				value: 'updateTag',
				action: 'Update tag',
				description: 'Update a finance tag',
			},
		],
		default: 'getAccounts',
	},
	...financeGetAccountsDescription,
	...financeGetTransactionsDescription,
	...financeGetTransactionDescription,
	...financeDeleteTransactionDescription,
	...financeCreateTransactionDescription,
	...financeGetRefundsDescription,
	...financeGetRefundItemsDescription,
	...financeGetTagsDescription,
	...financeCreateTagDescription,
	...financeUpdateTagDescription,
	...financeCreateExchangeRateDescription,
	...financeGetExchangeRateDescription,
	...financeUpdateExchangeRateDescription,
	...financeDeleteExchangeRateDescription,
	...financeGetExchangeRateHistoryDescription,
];

export async function executeFinanceOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<INodeExecutionData[][]> {
	if (operation === 'getAccounts') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/finance/accounts`);
	} else if (operation === 'getAccount') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/finance/accounts/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'getTransactions') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/finance/accounts/${this.getNodeParameter('Id', index)}/transactions`);
	} else if (operation === 'getTransaction') {
		const accountId = this.getNodeParameter('account_id', index) as string;
		const transactionId = this.getNodeParameter('transaction_id', index) as string;
		return await handleGetOne.call(this, index, `${BASE_URL}v2/finance/accounts/${accountId}/transactions/${transactionId}`);
	} else if (operation === 'deleteTransaction') {
		const accountId = this.getNodeParameter('account_id', index) as string;
		const transactionId = this.getNodeParameter('transaction_id', index) as string;
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: 'DELETE',
			url: `${BASE_URL}v2/finance/accounts/${accountId}/transactions/${transactionId}`
		});
	} else if (operation === 'createTransaction') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/finance/accounts/${this.getNodeParameter('Id', index)}/transactions`, 'POST');
	} else if (operation === 'getRefunds') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/finance/refunds`);
	} else if (operation === 'getRefund') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/finance/refunds/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'getRefundItems') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/finance/refunds/${this.getNodeParameter('Id', index)}/items`);
	} else if (operation === 'getTags') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/finance/tags`);
	} else if (operation === 'createTag') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/finance/tags`, 'POST');
	} else if (operation === 'getTag') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/finance/tags/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'updateTag') {
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/finance/tags/${this.getNodeParameter('Id', index)}`, 'PATCH');
	} else if (operation === 'deleteTag') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: 'DELETE',
			url: `${BASE_URL}v2/finance/tags/${this.getNodeParameter('Id', index)}`
		});
	} else if (operation === 'getExchangeRates') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/finance/exchange-rates`);
	} else if (operation === 'createExchangeRate') {
		// const currency = this.getNodeParameter('currency', index) as string;
		// const rate = this.getNodeParameter('rate', index) as string;
		return await handleCreateUpdate.call(this, index, `${BASE_URL}v2/finance/exchange-rates`, 'POST');
	} else if (operation === 'getExchangeRate') {
		return await handleGetOne.call(this, index, `${BASE_URL}v2/finance/exchange-rates/${this.getNodeParameter('Id', index)}`);
	} else if (operation === 'updateExchangeRate') {
		const rate = this.getNodeParameter('rate', index) as string;
		return await handlePost.call(this, index, `${BASE_URL}v2/finance/exchange-rates/${this.getNodeParameter('Id', index)}`, { rate }, 'PATCH');
	} else if (operation === 'deleteExchangeRate') {
		return await this.helpers.httpRequestWithAuthentication.call(this, 'roappApi', {
			method: 'DELETE',
			url: `${BASE_URL}v2/finance/exchange-rates/${this.getNodeParameter('Id', index)}`
		});
	} else if (operation === 'getExchangeRateHistory') {
		return await handleGetAll.call(this, index, `${BASE_URL}v2/finance/exchange-rates/${this.getNodeParameter('Id', index)}/history`);
	}
	return [[{json:{},
		pairedItem: {
			item: index, // Link to current input index
		}}]];
}
