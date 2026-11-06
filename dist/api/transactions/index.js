import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { CreateManualTransactionSchema, ParseVoiceExpenseResponseSchema, ManualTransactionDeletedResponseSchema, ManualTransactionResponseSchema, ManualTransactionsListResponseSchema, ManualTransactionsQuerySchema, UpdateManualTransactionSchema, } from './transactions.schema';
const c = initContract();
export const TransactionsContracts = c.router({
    parseManualTransactionVoice: {
        method: 'POST',
        path: '/transactions/manual/voice-draft',
        body: z.object({ transcript: z.string().trim().min(1).max(600) }).strict(),
        responses: {
            200: ParseVoiceExpenseResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            403: ErrorResSchema,
        },
        summary: 'Parse an on-device voice transcript into an expense draft',
        description: 'Accepts transcript text only, does not store it, and returns a draft for user confirmation.',
    },
    listManualTransactions: {
        method: 'GET',
        path: '/transactions/manual',
        query: ManualTransactionsQuerySchema,
        responses: {
            200: ManualTransactionsListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List manually recorded transactions',
        description: 'Returns the authenticated user’s manually recorded expenses and income. Email-enabled accounts see income entries only.',
    },
    createManualTransaction: {
        method: 'POST',
        path: '/transactions/manual',
        body: CreateManualTransactionSchema,
        responses: {
            201: ManualTransactionResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            403: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Record a manual transaction',
        description: 'Creates an expense or income without free-text merchant or counterparty details. Email-enabled accounts may create income entries only.',
    },
    updateManualTransaction: {
        method: 'PATCH',
        path: '/transactions/manual/:uuid',
        pathParams: z.object({ uuid: z.string().uuid() }),
        body: UpdateManualTransactionSchema,
        responses: {
            200: ManualTransactionResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            403: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Correct a manual transaction',
        description: 'Corrects a manual entry owned by the authenticated user, including its transaction type. Email-enabled accounts may update income entries only.',
    },
    deleteManualTransaction: {
        method: 'DELETE',
        path: '/transactions/manual/:uuid',
        pathParams: z.object({ uuid: z.string().uuid() }),
        responses: {
            200: ManualTransactionDeletedResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Delete a manual transaction',
        description: 'Soft-deletes a manual entry owned by the authenticated user.',
    },
});
