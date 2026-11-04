import { z } from 'zod';
import { ExpenseCategorySchema, IncomeCategorySchema, ManualPaymentMethodSchema, } from '../transactions/transactions.schema';
const SharedExpenseTransactionTypeSchema = z.enum(['debit', 'credit']);
export const SharedExpenseCurrencySchema = z.enum(['DOP', 'USD', 'EUR']);
export const SharedExpenseCategorySchema = z.union([ExpenseCategorySchema, IncomeCategorySchema]);
const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD');
export const SharedExpenseGroupMemberSchema = z.object({
    display_name: z.string(),
    is_owner: z.boolean(),
});
export const SharedExpenseGroupSchema = z.object({
    uuid: z.string().uuid(),
    name: z.string(),
    currency: SharedExpenseCurrencySchema,
    invite_code: z.string().regex(/^[0-9]{5}$/).nullable(),
    invite_link: z.string().url().nullable(),
    invite_expires_at: z.string().datetime().nullable(),
    is_owner: z.boolean(),
    members: z.array(SharedExpenseGroupMemberSchema),
});
export const SharedExpenseSummarySchema = z.object({
    currency: SharedExpenseCurrencySchema,
    expense_total: z.number(),
    income_total: z.number(),
    net_total: z.number(),
    expense_distribution: z.array(z.object({ category: ExpenseCategorySchema, amount: z.number() })),
});
export const SharedExpenseGroupDetailSchema = z.object({
    group: SharedExpenseGroupSchema,
    summary: SharedExpenseSummarySchema,
});
export const SharedExpenseTransactionItemSchema = z.object({
    uuid: z.string().uuid(),
    amount: z.number(),
    currency: SharedExpenseCurrencySchema,
    transaction_date: DateSchema,
    transaction_type: SharedExpenseTransactionTypeSchema,
    category: SharedExpenseCategorySchema,
    description: z.enum(['Gasto manual', 'Ingreso manual']),
    is_manual: z.literal(true),
    payment_method: ManualPaymentMethodSchema,
    is_author: z.boolean(),
    created_by_name: z.string(),
});
export const CreateSharedExpenseGroupSchema = z.object({
    name: z.string().trim().min(1).max(100),
    currency: SharedExpenseCurrencySchema,
    display_name: z.string().trim().min(1).max(80),
}).strict();
export const JoinSharedExpenseGroupSchema = z.object({
    invite_code: z.string().regex(/^[0-9]{5}$/),
    display_name: z.string().trim().min(1).max(80),
}).strict();
export const CreateSharedExpenseTransactionSchema = z.object({
    amount: z.number().positive().max(9999999999999.99),
    transaction_date: DateSchema,
    transaction_type: SharedExpenseTransactionTypeSchema.default('debit'),
    category: SharedExpenseCategorySchema,
    payment_method: ManualPaymentMethodSchema.optional(),
}).strict().refine((value) => value.transaction_type === 'debit'
    ? ExpenseCategorySchema.safeParse(value.category).success
    : IncomeCategorySchema.safeParse(value.category).success, { message: 'Category does not match transaction type', path: ['category'] });
export const UpdateSharedExpenseTransactionSchema = z.object({
    amount: z.number().positive().max(9999999999999.99).optional(),
    transaction_date: DateSchema.optional(),
    transaction_type: SharedExpenseTransactionTypeSchema.optional(),
    category: SharedExpenseCategorySchema.optional(),
    payment_method: ManualPaymentMethodSchema.optional(),
}).strict().refine((value) => Object.keys(value).length > 0, {
    message: 'Provide at least one field to update',
}).refine((value) => {
    if (value.transaction_type === undefined || value.category === undefined)
        return true;
    return value.transaction_type === 'debit'
        ? ExpenseCategorySchema.safeParse(value.category).success
        : IncomeCategorySchema.safeParse(value.category).success;
}, { message: 'Category does not match transaction type', path: ['category'] });
export const SharedExpenseTransactionsQuerySchema = z.object({
    limit: z.string().transform(Number).pipe(z.number().int().min(1).max(100)).default('20'),
    offset: z.string().transform(Number).pipe(z.number().int().min(0)).default('0'),
    from: DateSchema.optional(),
    to: DateSchema.optional(),
}).refine((query) => !query.from || !query.to || query.from <= query.to, {
    message: 'The start date must be on or before the end date',
    path: ['from'],
});
export const SharedExpenseGroupResponseSchema = z.object({ message: z.string(), data: SharedExpenseGroupSchema });
export const SharedExpenseGroupsResponseSchema = z.object({ message: z.string(), data: z.array(SharedExpenseGroupSchema) });
export const SharedExpenseGroupDetailResponseSchema = z.object({ message: z.string(), data: SharedExpenseGroupDetailSchema });
export const SharedExpenseTransactionsResponseSchema = z.object({
    message: z.string(),
    data: z.array(SharedExpenseTransactionItemSchema),
    pagination: z.object({ total: z.number(), limit: z.number(), offset: z.number() }),
    summary: SharedExpenseSummarySchema,
});
export const SharedExpenseTransactionResponseSchema = z.object({ message: z.string(), data: SharedExpenseTransactionItemSchema });
export const SharedExpenseTransactionDeletedResponseSchema = z.object({ message: z.string() });
