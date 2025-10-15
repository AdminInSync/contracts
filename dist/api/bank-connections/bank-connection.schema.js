import { z } from 'zod';
// Bank Connection Schemas
export const BankConnectionSchema = z.object({
    id: z.string(),
    institution_id: z.number(),
    external_connection_id: z.string(),
    status: z.enum(['active', 'pending', 'disconnected', 'error', 'revoked']),
    nickname: z.string().nullable(),
    created_at: z.string(),
    last_sync_at: z.string().nullable(),
    revoked_at: z.string().nullable(),
    expires_at: z.string().nullable(),
    is_active: z.boolean(),
});
export const CreateConnectionRequestSchema = z.object({
    sessionId: z.string(),
    institution_id: z.number(),
    nickname: z.string().optional(),
    notes: z.string().optional(),
});
export const CreateConnectionResponseSchema = z.object({
    connection: BankConnectionSchema,
    accessToken: z.string(),
});
export const GetConnectionResponseSchema = z.object({
    connection: BankConnectionSchema,
});
export const RevokeConnectionResponseSchema = z.object({
    message: z.string(),
});
// Bank Account Schemas
export const AccountBalanceSchema = z.object({
    current: z.number().nullable(),
    available: z.number().nullable(),
    limit: z.number().nullable(),
});
export const BankAccountSchema = z.object({
    id: z.string(),
    connectionId: z.string(),
    type: z.enum(['checking', 'savings', 'credit_card', 'loan', 'investment', 'depository', 'other']),
    name: z.string(),
    lastFour: z.string().nullable(),
    balance: AccountBalanceSchema,
    currency: z.string(),
    lastTransactionRefresh: z.string().nullable(),
});
export const ListAccountsResponseSchema = z.object({
    accounts: z.array(BankAccountSchema),
});
export const GetAccountResponseSchema = z.object({
    account: BankAccountSchema,
});
// Bank Transaction Schemas
export const BankTransactionSchema = z.object({
    id: z.string(),
    accountId: z.string(),
    amount: z.number(),
    date: z.string(),
    description: z.string().nullable(),
    reference: z.string().nullable(),
    status: z.enum(['pending', 'completed', 'cancelled', 'failed']),
    transactionRefresh: z.string().nullable(),
});
export const ListTransactionsRequestSchema = z.object({
    refreshedSince: z.string().optional(),
    limit: z.number().min(1).max(100).optional(),
    offset: z.number().min(0).optional(),
});
export const ListTransactionsResponseSchema = z.object({
    transactions: z.array(BankTransactionSchema),
});
export const GetTransactionResponseSchema = z.object({
    transaction: BankTransactionSchema,
});
// Error Response Schema
export const ErrorResponseSchema = z.object({
    error: z.string(),
    message: z.string(),
});
