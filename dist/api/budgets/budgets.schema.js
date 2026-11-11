import { z } from 'zod';
// Enums
export const BudgetPeriodSchema = z.enum(['monthly', 'quarterly', 'yearly']);
/** Closed expense category catalog (same labels as voice/manual expenses). */
export const BUDGET_CATEGORIES = [
    'Alimentos',
    'Transporte',
    'Hogar',
    'Servicios',
    'Educación',
    'Salud',
    'Entretenimiento',
    'Otros',
];
/**
 * Lowercase, no accents, trimmed: how budget and expense categories are compared.
 * Written in plain ES5 on purpose: its source is embedded as-is in the CouchDB
 * `_design/budgets` view (no String.prototype.normalize there), so backend and
 * index always normalize the same way.
 */
export function normalizeBudgetCategory(value) {
    var accents = { 'á': 'a', 'à': 'a', 'ä': 'a', 'â': 'a', 'ã': 'a', 'é': 'e', 'è': 'e', 'ë': 'e', 'ê': 'e', 'í': 'i', 'ì': 'i', 'ï': 'i', 'î': 'i', 'ó': 'o', 'ò': 'o', 'ö': 'o', 'ô': 'o', 'õ': 'o', 'ú': 'u', 'ù': 'u', 'ü': 'u', 'û': 'u', 'ñ': 'n', 'ç': 'c' };
    var input = String(value === null || value === undefined ? '' : value).toLowerCase().replace(/[\u0300-\u036f]/g, '');
    var output = '';
    for (var i = 0; i < input.length; i++) {
        var character = input.charAt(i);
        output += accents[character] || character;
    }
    return output.replace(/^\s+|\s+$/g, '');
}
/** Accepts any casing/accents of a catalog label and returns the canonical label. */
export const BudgetCategorySchema = z.string().transform((value, ctx) => {
    const label = BUDGET_CATEGORIES.find((item) => normalizeBudgetCategory(item) === normalizeBudgetCategory(value));
    if (!label) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: `category must be one of: ${BUDGET_CATEGORIES.join(', ')}` });
        return z.NEVER;
    }
    return label;
});
export const BudgetStatusSchema = z.enum(['ok', 'near_limit', 'exceeded']);
export const CountedExpenseTypeSchema = z.enum(['manual', 'voice']);
// Base schemas
export const BudgetSchema = z.object({
    id: z.number(),
    uuid: z.string().uuid(),
    user_uid: z.string(),
    name: z.string(),
    budget_period: BudgetPeriodSchema,
    start_date: z.string().date(),
    end_date: z.string().date(),
    total_amount: z.number(),
    /** @deprecated Stored value kept for old clients; use `spent`. */
    used_amount: z.number(),
    currency: z.string(),
    is_active: z.boolean(),
    notes: z.string().nullable(),
    settings: z.any().nullable(),
    category: z.enum(BUDGET_CATEGORIES).nullable(),
    categories: z.array(z.enum(BUDGET_CATEGORIES)),
    needs_category: z.boolean(),
    spent: z.number().nullable(),
    remaining: z.number().nullable(),
    percent: z.number().nullable(),
    status: BudgetStatusSchema.nullable(),
    period_active: z.boolean().nullable(),
    counted_expense_types: z.array(CountedExpenseTypeSchema),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    deleted_at: z.string().datetime().nullable(),
});
// Request schemas
const BaseBudgetSchema = z.object({
    name: z.string().min(1).max(255),
    budget_period: BudgetPeriodSchema.optional(),
    start_date: z.string().date(),
    end_date: z.string().date(),
    total_amount: z.number().positive(),
    currency: z.string().max(100).default('DOP'),
    is_active: z.boolean().optional(),
    notes: z.string().min(1).max(255),
    settings: z.any().optional(),
    category: BudgetCategorySchema.optional(),
    categories: z.array(BudgetCategorySchema).min(1).optional(),
});
export const CreateBudgetSchema = BaseBudgetSchema.superRefine((data, ctx) => {
    if (!data.category && !(data.categories && data.categories.length > 0)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Selecciona al menos una categoría', path: ['categories'] });
    }
}).refine((data) => {
    const start = new Date(data.start_date);
    const end = new Date(data.end_date);
    return end > start;
}, {
    message: "End date must be after start date",
    path: ["end_date"],
});
export const UpdateBudgetSchema = BaseBudgetSchema.partial();
export const UpdateBudgetCategorySchema = z.object({
    category: BudgetCategorySchema.optional(),
    categories: z.array(BudgetCategorySchema).min(1).optional(),
}).strict().superRefine((data, ctx) => {
    if (!data.category && !(data.categories && data.categories.length > 0)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Selecciona al menos una categoría', path: ['categories'] });
    }
});
export const UpdateBudgetUsedAmountSchema = z.object({
    used_amount: z.number().min(0),
});
// Query schemas
export const GetBudgetsQuerySchema = z.object({
    budget_period: BudgetPeriodSchema.optional(),
    is_active: z.string().transform(val => val === 'true').pipe(z.boolean()).optional(),
    limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
    offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
});
// Response schemas
export const BudgetResponseSchema = z.object({
    message: z.string(),
    data: BudgetSchema,
});
export const BudgetsListResponseSchema = z.object({
    message: z.string(),
    data: z.array(BudgetSchema),
    pagination: z.object({
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
    }).optional(),
});
