import { z } from 'zod';
export declare const ReminderGoalTypeSchema: z.ZodEnum<["personal", "shared"]>;
export declare const ReminderFrequencySchema: z.ZodEnum<["weekly", "biweekly", "monthly"]>;
/** Personal goals are addressed by numeric id, shared goals by uuid (as in /shared-savings/:uuid). */
export declare const SavingGoalReminderParamsSchema: z.ZodEffects<z.ZodObject<{
    goal_type: z.ZodEnum<["personal", "shared"]>;
    goal_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    goal_type: "personal" | "shared";
    goal_id: string;
}, {
    goal_type: "personal" | "shared";
    goal_id: string;
}>, {
    goal_type: "personal" | "shared";
    goal_id: string;
}, {
    goal_type: "personal" | "shared";
    goal_id: string;
}>;
export declare const PutSavingGoalReminderRequestSchema: z.ZodUnion<[z.ZodDiscriminatedUnion<"frequency", [z.ZodObject<{
    enabled: z.ZodBoolean;
    frequency: z.ZodLiteral<"weekly">;
    weekday: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    enabled: boolean;
    frequency: "weekly";
    weekday: number;
}, {
    enabled: boolean;
    frequency: "weekly";
    weekday: number;
}>, z.ZodObject<{
    enabled: z.ZodBoolean;
    frequency: z.ZodLiteral<"monthly">;
    month_days: z.ZodTuple<[z.ZodNumber], null>;
}, "strict", z.ZodTypeAny, {
    enabled: boolean;
    frequency: "monthly";
    month_days: [number];
}, {
    enabled: boolean;
    frequency: "monthly";
    month_days: [number];
}>, z.ZodObject<{
    enabled: z.ZodBoolean;
    frequency: z.ZodLiteral<"biweekly">;
    month_days: z.ZodEffects<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>, [number, number], [number, number]>;
}, "strict", z.ZodTypeAny, {
    enabled: boolean;
    frequency: "biweekly";
    month_days: [number, number];
}, {
    enabled: boolean;
    frequency: "biweekly";
    month_days: [number, number];
}>]>, z.ZodObject<{
    enabled: z.ZodLiteral<false>;
}, "strict", z.ZodTypeAny, {
    enabled: false;
}, {
    enabled: false;
}>]>;
export declare const SavingGoalReminderResponseSchema: z.ZodObject<{
    goal_type: z.ZodEnum<["personal", "shared"]>;
    goal_id: z.ZodString;
    enabled: z.ZodBoolean;
    frequency: z.ZodNullable<z.ZodEnum<["weekly", "biweekly", "monthly"]>>;
    weekday: z.ZodNullable<z.ZodNumber>;
    month_days: z.ZodNullable<z.ZodArray<z.ZodNumber, "many">>;
    next_fire_at: z.ZodNullable<z.ZodString>;
    goal_inactive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    goal_type: "personal" | "shared";
    goal_id: string;
    enabled: boolean;
    frequency: "monthly" | "weekly" | "biweekly" | null;
    weekday: number | null;
    month_days: number[] | null;
    next_fire_at: string | null;
    goal_inactive: boolean;
}, {
    goal_type: "personal" | "shared";
    goal_id: string;
    enabled: boolean;
    frequency: "monthly" | "weekly" | "biweekly" | null;
    weekday: number | null;
    month_days: number[] | null;
    next_fire_at: string | null;
    goal_inactive: boolean;
}>;
export declare const SavingGoalReminderErrorSchema: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    code: string;
}, {
    message: string;
    code: string;
}>;
