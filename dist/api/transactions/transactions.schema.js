import { z } from 'zod';
import { INCOME_CATEGORY_LABELS } from '../../common/income-categories';
import { BUDGET_CATEGORIES } from '../budgets/budgets.schema';
export const ExpenseCategorySchema = z.enum(BUDGET_CATEGORIES);
export const IncomeCategorySchema = z.enum(INCOME_CATEGORY_LABELS);
export const ManualTransactionTypeSchema = z.enum(['debit', 'credit', 'payment']);
export const ManualTransactionCategorySchema = z.union([ExpenseCategorySchema, IncomeCategorySchema, z.literal('Pago de crédito')]);
const CurrencySchema = z.enum(['DOP', 'USD', 'EUR']);
export const ManualPaymentMethodSchema = z.enum(['cash', 'card', 'apple_pay', 'google_pay', 'other']);
const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD');
export const CreateManualTransactionSchema = z.object({
    request_id: z.string().uuid().optional(),
    amount: z.number().positive().max(9999999999999.99),
    currency: CurrencySchema,
    transaction_date: DateSchema,
    transaction_type: ManualTransactionTypeSchema.default('debit'),
    category: ManualTransactionCategorySchema,
    payment_method: ManualPaymentMethodSchema.optional(),
    product_uuid: z.string().uuid().nullable().optional(),
    budget_uuid: z.string().uuid().nullable().optional(),
    group_uuid: z.string().uuid().nullable().optional(),
    goal_income_allocation: z.object({
        goal_id: z.union([z.number(), z.string().regex(/^[1-9]\d*$/).transform(Number)]).pipe(z.number().int().positive().safe()),
        amount: z.number().positive().max(999999999999.99),
    }).optional(),
}).strict().refine((value) => value.transaction_type === 'payment'
    ? value.category === 'Pago de crédito'
    : value.transaction_type === 'debit'
        ? ExpenseCategorySchema.safeParse(value.category).success
        : IncomeCategorySchema.safeParse(value.category).success, { message: 'Category does not match transaction type', path: ['category'] })
    .refine((value) => !value.goal_income_allocation || value.transaction_type === 'credit', {
    message: 'Savings goal allocations are available for income only',
    path: ['goal_income_allocation'],
});
export const UpdateManualTransactionSchema = z.object({
    amount: z.number().positive().max(9999999999999.99).optional(),
    currency: CurrencySchema.optional(),
    transaction_date: DateSchema.optional(),
    transaction_type: ManualTransactionTypeSchema.optional(),
    category: ManualTransactionCategorySchema.optional(),
    payment_method: ManualPaymentMethodSchema.optional(),
    product_uuid: z.string().uuid().nullable().optional(),
}).strict().refine((value) => Object.keys(value).length > 0, {
    message: 'Provide at least one field to update',
}).refine((value) => {
    if (value.transaction_type === undefined || value.category === undefined)
        return true;
    return value.transaction_type === 'payment'
        ? value.category === 'Pago de crédito'
        : value.transaction_type === 'debit'
            ? ExpenseCategorySchema.safeParse(value.category).success
            : IncomeCategorySchema.safeParse(value.category).success;
}, { message: 'Category does not match transaction type', path: ['category'] });
export const ManualTransactionsQuerySchema = z.object({
    limit: z.string().transform(Number).pipe(z.number().int().min(1).max(100)).default('20'),
    offset: z.string().transform(Number).pipe(z.number().int().min(0)).default('0'),
});
export const ManualTransactionItemSchema = z.object({
    uuid: z.string().uuid(),
    amount: z.number(),
    currency: CurrencySchema,
    transaction_date: z.string(),
    transaction_type: ManualTransactionTypeSchema,
    category: ManualTransactionCategorySchema,
    description: z.enum(['Gasto manual', 'Ingreso manual', 'Pago manual']),
    is_manual: z.literal(true),
    payment_method: ManualPaymentMethodSchema,
    product_uuid: z.string().uuid().nullable(),
    budget_uuid: z.string().uuid().nullable().optional(),
    excluded_budget_uuids: z.array(z.string().uuid()).optional(),
    group_uuid: z.string().uuid().nullable().optional(),
    destination_pending: z.string().nullable().optional(),
    budget_pending: z.string().nullable().optional(),
    group_pending: z.string().nullable().optional(),
}).refine((value) => value.transaction_type === 'payment'
    ? value.category === 'Pago de crédito' && value.description === 'Pago manual'
    : value.transaction_type === 'debit'
        ? ExpenseCategorySchema.safeParse(value.category).success && value.description === 'Gasto manual'
        : IncomeCategorySchema.safeParse(value.category).success && value.description === 'Ingreso manual', { message: 'Category and description must match transaction type' });
export const VoiceExpenseDraftSchema = z.object({
    transaction_type: ManualTransactionTypeSchema,
    amount: z.number().positive(),
    currency: CurrencySchema,
    transaction_date: DateSchema,
    category: ManualTransactionCategorySchema,
}).refine((value) => value.transaction_type === 'payment'
    ? value.category === 'Pago de crédito'
    : value.transaction_type === 'debit'
        ? ExpenseCategorySchema.safeParse(value.category).success
        : IncomeCategorySchema.safeParse(value.category).success);
export const ParseVoiceExpenseResponseSchema = z.object({
    message: z.string(),
    data: VoiceExpenseDraftSchema,
});
export const ManualTransactionResponseSchema = z.object({
    message: z.string(),
    data: ManualTransactionItemSchema,
});
export const ManualTransactionsListResponseSchema = z.object({
    message: z.string(),
    data: z.array(ManualTransactionItemSchema),
    pagination: z.object({ total: z.number(), limit: z.number(), offset: z.number() }),
});
export const ManualTransactionDeletedResponseSchema = z.object({
    message: z.string(),
});
