import { z } from 'zod';
export declare const ReminderGoalTypeSchema: z.ZodEnum<{
    personal: "personal";
    shared: "shared";
}>;
export declare const ReminderFrequencySchema: z.ZodEnum<{
    monthly: "monthly";
    weekly: "weekly";
    biweekly: "biweekly";
}>;
/** Personal goals are addressed by numeric id, shared goals by uuid (as in /shared-savings/:uuid). */
export declare const SavingGoalReminderParamsSchema: z.ZodObject<{
    goal_type: z.ZodEnum<{
        personal: "personal";
        shared: "shared";
    }>;
    goal_id: z.ZodString;
}, z.core.$strip>;
export declare const PutSavingGoalReminderRequestSchema: z.ZodUnion<readonly [z.ZodDiscriminatedUnion<[z.ZodObject<{
    enabled: z.ZodBoolean;
    frequency: z.ZodLiteral<"weekly">;
    weekday: z.ZodNumber;
}, z.core.$strict>, z.ZodObject<{
    enabled: z.ZodBoolean;
    frequency: z.ZodLiteral<"monthly">;
    month_days: z.ZodTuple<[z.ZodNumber], null>;
}, z.core.$strict>, z.ZodObject<{
    enabled: z.ZodBoolean;
    frequency: z.ZodLiteral<"biweekly">;
    month_days: z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>;
}, z.core.$strict>], "frequency">, z.ZodObject<{
    enabled: z.ZodLiteral<false>;
}, z.core.$strict>]>;
export declare const SavingGoalReminderResponseSchema: z.ZodObject<{
    goal_type: z.ZodEnum<{
        personal: "personal";
        shared: "shared";
    }>;
    goal_id: z.ZodString;
    enabled: z.ZodBoolean;
    frequency: z.ZodNullable<z.ZodEnum<{
        monthly: "monthly";
        weekly: "weekly";
        biweekly: "biweekly";
    }>>;
    weekday: z.ZodNullable<z.ZodNumber>;
    month_days: z.ZodNullable<z.ZodArray<z.ZodNumber>>;
    next_fire_at: z.ZodNullable<z.ZodString>;
    goal_inactive: z.ZodBoolean;
}, z.core.$strip>;
export declare const SavingGoalReminderErrorSchema: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
