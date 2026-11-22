import { z } from 'zod';
export declare const SharedSavingsGoalSchema: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
    purpose: z.ZodString;
    target_amount: z.ZodNumber;
    current_amount: z.ZodNumber;
    currency: z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>;
    target_date: z.ZodString;
    invite_code: z.ZodString;
    is_owner: z.ZodBoolean;
    leaderboard: z.ZodArray<z.ZodObject<{
        rank: z.ZodNumber;
        display_name: z.ZodString;
        contributed_amount: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CreateSharedSavingsGoalSchema: z.ZodObject<{
    name: z.ZodString;
    purpose: z.ZodString;
    target_amount: z.ZodNumber;
    currency: z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>;
    target_date: z.ZodString;
    display_name: z.ZodString;
}, z.core.$strict>;
export declare const JoinSharedSavingsGoalSchema: z.ZodObject<{
    invite_code: z.ZodString;
    display_name: z.ZodString;
}, z.core.$strict>;
export declare const SharedSavingsContributionSchema: z.ZodObject<{
    amount: z.ZodNumber;
}, z.core.$strict>;
export declare const SharedSavingsGoalResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        purpose: z.ZodString;
        target_amount: z.ZodNumber;
        current_amount: z.ZodNumber;
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        target_date: z.ZodString;
        invite_code: z.ZodString;
        is_owner: z.ZodBoolean;
        leaderboard: z.ZodArray<z.ZodObject<{
            rank: z.ZodNumber;
            display_name: z.ZodString;
            contributed_amount: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SharedSavingsGoalsResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        purpose: z.ZodString;
        target_amount: z.ZodNumber;
        current_amount: z.ZodNumber;
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        target_date: z.ZodString;
        invite_code: z.ZodString;
        is_owner: z.ZodBoolean;
        leaderboard: z.ZodArray<z.ZodObject<{
            rank: z.ZodNumber;
            display_name: z.ZodString;
            contributed_amount: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
