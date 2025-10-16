import { z } from 'zod';
// Enums
export const BudgetPeriodSchema = z.enum(['monthly', 'quarterly', 'yearly']);
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
    currency: z.string(),
    is_active: z.boolean(),
    notes: z.string().nullable(),
    settings: z.any().nullable(),
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
    currency: z.string().max(100).default('USD'),
    is_active: z.boolean().optional(),
    notes: z.string().min(1).max(255),
    settings: z.any().optional(),
});
export const CreateBudgetSchema = BaseBudgetSchema.refine((data) => {
    const start = new Date(data.start_date);
    const end = new Date(data.end_date);
    return end > start;
}, {
    message: "End date must be after start date",
    path: ["end_date"],
});
export const UpdateBudgetSchema = BaseBudgetSchema.partial();
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
