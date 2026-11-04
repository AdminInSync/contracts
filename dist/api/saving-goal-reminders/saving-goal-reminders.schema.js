import { z } from 'zod';
export const ReminderGoalTypeSchema = z.enum(['personal', 'shared']);
export const ReminderFrequencySchema = z.enum(['weekly', 'biweekly', 'monthly']);
/** Personal goals are addressed by numeric id, shared goals by uuid (as in /shared-savings/:uuid). */
export const SavingGoalReminderParamsSchema = z.object({
    goal_type: ReminderGoalTypeSchema,
    goal_id: z.string(),
}).superRefine((params, ctx) => {
    const valid = params.goal_type === 'personal'
        ? /^[1-9]\d{0,17}$/.test(params.goal_id)
        : z.string().uuid().safeParse(params.goal_id).success;
    if (!valid) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['goal_id'],
            message: params.goal_type === 'personal' ? 'goal_id must be a numeric id' : 'goal_id must be a uuid',
        });
    }
});
const MonthDay = z.number().int().min(1).max(31);
const WeeklyRule = z.object({
    enabled: z.boolean(),
    frequency: z.literal('weekly'),
    weekday: z.number().int().min(0).max(6),
}).strict();
const MonthlyRule = z.object({
    enabled: z.boolean(),
    frequency: z.literal('monthly'),
    month_days: z.tuple([MonthDay]),
}).strict();
const BiweeklyRule = z.object({
    enabled: z.boolean(),
    frequency: z.literal('biweekly'),
    month_days: z.tuple([MonthDay, MonthDay]).refine((days) => days[0] !== days[1], 'month_days must be distinct'),
}).strict();
/** Turn off without sending the schedule again (push action "Desactivar mi recordatorio"). */
const DisableOnly = z.object({ enabled: z.literal(false) }).strict();
export const PutSavingGoalReminderRequestSchema = z.union([
    z.discriminatedUnion('frequency', [WeeklyRule, MonthlyRule, BiweeklyRule]),
    DisableOnly,
]);
export const SavingGoalReminderResponseSchema = z.object({
    goal_type: ReminderGoalTypeSchema,
    goal_id: z.string(),
    enabled: z.boolean(),
    frequency: ReminderFrequencySchema.nullable(),
    weekday: z.number().nullable(),
    month_days: z.array(z.number()).nullable(),
    next_fire_at: z.string().nullable(),
    goal_inactive: z.boolean(),
});
export const SavingGoalReminderErrorSchema = z.object({
    code: z.string(),
    message: z.string(),
});
