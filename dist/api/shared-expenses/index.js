import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { CreateSharedExpenseGroupSchema, CreateSharedExpenseTransactionSchema, JoinSharedExpenseGroupSchema, SharedExpenseGroupDetailResponseSchema, SharedExpenseGroupResponseSchema, SharedExpenseGroupsResponseSchema, SharedExpenseTransactionDeletedResponseSchema, SharedExpenseTransactionResponseSchema, SharedExpenseTransactionsQuerySchema, SharedExpenseTransactionsResponseSchema, UpdateSharedExpenseTransactionSchema, } from './shared-expenses.schema';
const c = initContract();
export const SharedExpenseContracts = c.router({
    listGroups: {
        method: 'GET', path: '/shared-expenses/groups',
        responses: { 200: SharedExpenseGroupsResponseSchema, 401: ErrorResSchema, 500: ErrorResSchema },
        summary: 'List shared expense groups for the authenticated user',
    },
    createGroup: {
        method: 'POST', path: '/shared-expenses/groups', body: CreateSharedExpenseGroupSchema,
        responses: { 201: SharedExpenseGroupResponseSchema, 400: ErrorResSchema, 401: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Create a shared expense group and invite link',
    },
    getGroup: {
        method: 'GET', path: '/shared-expenses/groups/:uuid', pathParams: z.object({ uuid: z.string().uuid() }),
        responses: { 200: SharedExpenseGroupDetailResponseSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Get shared expense group and totals',
    },
    renewInvite: {
        method: 'POST', path: '/shared-expenses/groups/:uuid/invite', pathParams: z.object({ uuid: z.string().uuid() }), body: z.object({}),
        responses: { 200: SharedExpenseGroupResponseSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Replace an expired shared expense invitation',
    },
    joinGroup: {
        method: 'POST', path: '/shared-expenses/join', body: JoinSharedExpenseGroupSchema,
        responses: { 200: SharedExpenseGroupDetailResponseSchema, 400: ErrorResSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Join a shared expense group with an invite code',
    },
    listTransactions: {
        method: 'GET', path: '/shared-expenses/groups/:uuid/transactions',
        pathParams: z.object({ uuid: z.string().uuid() }), query: SharedExpenseTransactionsQuerySchema,
        responses: { 200: SharedExpenseTransactionsResponseSchema, 400: ErrorResSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'List group expenses and income with totals',
    },
    createTransaction: {
        method: 'POST', path: '/shared-expenses/groups/:uuid/transactions',
        pathParams: z.object({ uuid: z.string().uuid() }), body: CreateSharedExpenseTransactionSchema,
        responses: { 201: SharedExpenseTransactionResponseSchema, 400: ErrorResSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Record a shared expense or income',
    },
    updateTransaction: {
        method: 'PATCH', path: '/shared-expenses/groups/:uuid/transactions/:transactionUuid',
        pathParams: z.object({ uuid: z.string().uuid(), transactionUuid: z.string().uuid() }),
        body: UpdateSharedExpenseTransactionSchema,
        responses: { 200: SharedExpenseTransactionResponseSchema, 400: ErrorResSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Correct a shared transaction created by the authenticated user',
    },
    deleteTransaction: {
        method: 'DELETE', path: '/shared-expenses/groups/:uuid/transactions/:transactionUuid',
        pathParams: z.object({ uuid: z.string().uuid(), transactionUuid: z.string().uuid() }),
        responses: { 200: SharedExpenseTransactionDeletedResponseSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Delete a shared transaction created by the authenticated user',
    },
});
