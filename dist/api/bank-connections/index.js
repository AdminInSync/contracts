import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { CreateConnectionResponseSchema, GetConnectionResponseSchema, ListConnectionsResponseSchema, RevokeConnectionResponseSchema, ListAccountsResponseSchema, GetAccountResponseSchema, ListTransactionsResponseSchema, GetTransactionResponseSchema } from './bank-connection.schema';
const c = initContract();
export const BankConnectionContracts = c.router({
    // Connection Management
    createConnection: {
        method: 'POST',
        path: '/connections',
        body: z.object({
            sessionId: z.string(),
            institution_id: z.number(),
            nickname: z.string().optional(),
            notes: z.string().optional(),
        }),
        responses: {
            200: CreateConnectionResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Create Connection',
        description: 'Create a connection from a session ID.',
    },
    listConnections: {
        method: 'GET',
        path: '/connections',
        responses: {
            200: ListConnectionsResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List Connections',
        description: 'List all connections for the authenticated user.',
    },
    getConnection: {
        method: 'GET',
        path: '/connections/:connectionId',
        pathParams: z.object({
            connectionId: z.string(),
        }),
        responses: {
            200: GetConnectionResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get Connection',
        description: 'Look up a connection by its ID.',
    },
    revokeConnection: {
        method: 'DELETE',
        path: '/connections/:connectionId',
        pathParams: z.object({
            connectionId: z.string(),
        }),
        responses: {
            204: RevokeConnectionResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            403: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Revoke Connection',
        description: 'Revoke a connection, blocking future access.',
    },
    // Account Management
    listAccounts: {
        method: 'GET',
        path: '/connections/:connectionId/accounts',
        pathParams: z.object({
            connectionId: z.string(),
        }),
        responses: {
            200: ListAccountsResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            403: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List Accounts',
        description: 'List accounts linked to a connection.',
    },
    getAccount: {
        method: 'GET',
        path: '/connections/:connectionId/accounts/:accountId',
        pathParams: z.object({
            connectionId: z.string(),
            accountId: z.string(),
        }),
        responses: {
            200: GetAccountResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            403: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get Account',
        description: 'Look up an account by its ID.',
    },
    // Transaction Management
    listTransactions: {
        method: 'GET',
        path: '/connections/:connectionId/accounts/:accountId/transactions',
        pathParams: z.object({
            connectionId: z.string(),
            accountId: z.string(),
        }),
        query: z.object({
            refreshedSince: z.string().optional(),
            limit: z.string().transform(Number).optional(),
            offset: z.string().transform(Number).optional(),
        }),
        responses: {
            200: ListTransactionsResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            403: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List Transactions',
        description: 'List all transactions for an account.',
    },
    getTransaction: {
        method: 'GET',
        path: '/connections/:connectionId/accounts/:accountId/transactions/:transactionId',
        pathParams: z.object({
            connectionId: z.string(),
            accountId: z.string(),
            transactionId: z.string(),
        }),
        responses: {
            200: GetTransactionResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            403: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get Transaction',
        description: 'Look up a transaction by its identifier.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/bank-connections',
    tags: ['Bank Connections']
});
