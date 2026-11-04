import { z } from 'zod';
const CurrencySchema = z.enum(['DOP', 'USD', 'EUR']);
const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD');
export const SharedSavingsGoalSchema = z.object({
    uuid: z.string().uuid(),
    name: z.string(),
    purpose: z.string(),
    target_amount: z.number(),
    current_amount: z.number(),
    currency: CurrencySchema,
    target_date: DateSchema,
    invite_code: z.string().uuid(),
    is_owner: z.boolean(),
    leaderboard: z.array(z.object({
        rank: z.number().int().positive(),
        display_name: z.string(),
        contributed_amount: z.number(),
    })),
});
export const CreateSharedSavingsGoalSchema = z.object({
    name: z.string().trim().min(1).max(100),
    purpose: z.string().trim().min(1).max(500),
    target_amount: z.number().positive().max(9999999999999.99),
    currency: CurrencySchema,
    target_date: DateSchema,
    display_name: z.string().trim().min(1).max(80),
}).strict();
export const JoinSharedSavingsGoalSchema = z.object({
    invite_code: z.string().uuid(),
    display_name: z.string().trim().min(1).max(80),
}).strict();
export const SharedSavingsContributionSchema = z.object({
    amount: z.number().positive().max(9999999999999.99),
}).strict();
export const SharedSavingsGoalResponseSchema = z.object({ message: z.string(), data: SharedSavingsGoalSchema });
export const SharedSavingsGoalsResponseSchema = z.object({ message: z.string(), data: z.array(SharedSavingsGoalSchema) });
