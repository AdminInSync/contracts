import { z } from 'zod';
// Enums
export const GoalStatusSchema = z.enum(['active', 'completed', 'paused', 'cancelled']);
export const PriorityLevelSchema = z.enum(['low', 'medium', 'high', 'urgent']);
// Base schemas
export const SavingGoalSchema = z.object({
    id: z.number(),
    uuid: z.string().uuid(),
    user_uid: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    target_amount: z.number(),
    current_amount: z.number(),
    monthly_contribution: z.number(),
    currency: z.string(),
    target_date: z.string().date(),
    status: GoalStatusSchema,
    priority: PriorityLevelSchema.nullable(),
    color: z.string().nullable(),
    notes: z.string().nullable(),
    is_public: z.boolean(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    deleted_at: z.string().datetime().nullable(),
});
// Request schemas
export const CreateSavingGoalSchema = z.object({
    name: z.string().min(1).max(255),
    description: z.string().optional(),
    target_amount: z.number().positive(),
    current_amount: z.number().min(0).optional(),
    monthly_contribution: z.number().min(0).optional(),
    currency: z.string().min(1).max(100),
    target_date: z.string().date(),
    status: GoalStatusSchema.optional(),
    priority: PriorityLevelSchema.optional(),
    color: z.string().max(100).optional(),
    notes: z.string().optional(),
    is_public: z.boolean().optional(),
});
export const UpdateSavingGoalSchema = CreateSavingGoalSchema.partial();
export const UpdateProgressSchema = z.object({
    current_amount: z.number().min(0),
});
// Query schemas
export const GetSavingGoalsQuerySchema = z.object({
    status: GoalStatusSchema.optional(),
    priority: PriorityLevelSchema.optional(),
    is_public: z.coerce.boolean().optional(),
    limit: z.coerce.number().min(1).max(100).default(20),
    offset: z.coerce.number().min(0).default(0),
});
// Response schemas
export const SavingGoalResponseSchema = z.object({
    message: z.string(),
    data: SavingGoalSchema,
});
export const SavingGoalsListResponseSchema = z.object({
    message: z.string(),
    data: z.array(SavingGoalSchema),
    pagination: z.object({
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
    }).optional(),
});
export const UpdateProgressResponseSchema = z.object({
    message: z.string(),
    data: SavingGoalSchema,
});
