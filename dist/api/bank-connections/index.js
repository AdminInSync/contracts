import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { CreateConnectionResponseSchema, GetConnectionResponseSchema, RevokeConnectionResponseSchema, ListAccountsResponseSchema, GetAccountResponseSchema, ListTransactionsResponseSchema, GetTransactionResponseSchema } from './bank-connection.schema';
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
        description: 'Crear una conexión a partir de un ID de sesión.',
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
        description: 'Buscar una conexión por su ID.',
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
        description: 'Revocar una conexión, impidiendo accesos futuros.',
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
        description: 'Listar cuentas asociadas a una conexión.',
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
        description: 'Buscar una cuenta por su ID.',
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
        description: 'Listar todas las transacciones de una cuenta.',
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
        description: 'Buscar una transacción por su identificador.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/bank-connections',
    tags: ['Bank Connections']
});
