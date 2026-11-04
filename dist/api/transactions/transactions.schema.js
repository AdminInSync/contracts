import { z } from 'zod';
import { INCOME_CATEGORY_LABELS } from '../../common/income-categories';
export const ExpenseCategorySchema = z.enum([
    'Alimentos',
    'Transporte',
    'Hogar',
    'Servicios',
    'Educación',
    'Salud',
    'Entretenimiento',
    'Otros',
]);
export const IncomeCategorySchema = z.enum(INCOME_CATEGORY_LABELS);
export const ManualTransactionTypeSchema = z.enum(['debit', 'credit', 'payment']);
export const ManualTransactionCategorySchema = z.union([ExpenseCategorySchema, IncomeCategorySchema, z.literal('Pago de crédito')]);
const CurrencySchema = z.enum(['DOP', 'USD', 'EUR']);
export const ManualPaymentMethodSchema = z.enum(['cash', 'card', 'apple_pay', 'google_pay', 'other']);
const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD');
export const CreateManualTransactionSchema = z.object({
    amount: z.number().positive().max(9999999999999.99),
    currency: CurrencySchema,
    transaction_date: DateSchema,
    transaction_type: ManualTransactionTypeSchema.default('debit'),
    category: ManualTransactionCategorySchema,
    payment_method: ManualPaymentMethodSchema.optional(),
    product_uuid: z.string().uuid().nullable().optional(),
}).strict().refine((value) => value.transaction_type === 'payment'
    ? value.category === 'Pago de crédito'
    : value.transaction_type === 'debit'
        ? ExpenseCategorySchema.safeParse(value.category).success
        : IncomeCategorySchema.safeParse(value.category).success, { message: 'Category does not match transaction type', path: ['category'] });
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
