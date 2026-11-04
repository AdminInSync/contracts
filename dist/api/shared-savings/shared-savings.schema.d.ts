import { z } from 'zod';
export declare const SharedSavingsGoalSchema: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
    purpose: z.ZodString;
    target_amount: z.ZodNumber;
    current_amount: z.ZodNumber;
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    target_date: z.ZodString;
    invite_code: z.ZodString;
    is_owner: z.ZodBoolean;
    leaderboard: z.ZodArray<z.ZodObject<{
        rank: z.ZodNumber;
        display_name: z.ZodString;
        contributed_amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        display_name: string;
        rank: number;
        contributed_amount: number;
    }, {
        display_name: string;
        rank: number;
        contributed_amount: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    uuid: string;
    name: string;
    target_amount: number;
    current_amount: number;
    currency: "DOP" | "USD" | "EUR";
    target_date: string;
    purpose: string;
    invite_code: string;
    is_owner: boolean;
    leaderboard: {
        display_name: string;
        rank: number;
        contributed_amount: number;
    }[];
}, {
    uuid: string;
    name: string;
    target_amount: number;
    current_amount: number;
    currency: "DOP" | "USD" | "EUR";
    target_date: string;
    purpose: string;
    invite_code: string;
    is_owner: boolean;
    leaderboard: {
        display_name: string;
        rank: number;
        contributed_amount: number;
    }[];
}>;
export declare const CreateSharedSavingsGoalSchema: z.ZodObject<{
    name: z.ZodString;
    purpose: z.ZodString;
    target_amount: z.ZodNumber;
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    target_date: z.ZodString;
    display_name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    display_name: string;
    name: string;
    target_amount: number;
    currency: "DOP" | "USD" | "EUR";
    target_date: string;
    purpose: string;
}, {
    display_name: string;
    name: string;
    target_amount: number;
    currency: "DOP" | "USD" | "EUR";
    target_date: string;
    purpose: string;
}>;
export declare const JoinSharedSavingsGoalSchema: z.ZodObject<{
    invite_code: z.ZodString;
    display_name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    display_name: string;
    invite_code: string;
}, {
    display_name: string;
    invite_code: string;
}>;
export declare const SharedSavingsContributionSchema: z.ZodObject<{
    amount: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    amount: number;
}, {
    amount: number;
}>;
export declare const SharedSavingsGoalResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        purpose: z.ZodString;
        target_amount: z.ZodNumber;
        current_amount: z.ZodNumber;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        target_date: z.ZodString;
        invite_code: z.ZodString;
        is_owner: z.ZodBoolean;
        leaderboard: z.ZodArray<z.ZodObject<{
            rank: z.ZodNumber;
            display_name: z.ZodString;
            contributed_amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }, {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
        name: string;
        target_amount: number;
        current_amount: number;
        currency: "DOP" | "USD" | "EUR";
        target_date: string;
        purpose: string;
        invite_code: string;
        is_owner: boolean;
        leaderboard: {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }[];
    }, {
        uuid: string;
        name: string;
        target_amount: number;
        current_amount: number;
        currency: "DOP" | "USD" | "EUR";
        target_date: string;
        purpose: string;
        invite_code: string;
        is_owner: boolean;
        leaderboard: {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        uuid: string;
        name: string;
        target_amount: number;
        current_amount: number;
        currency: "DOP" | "USD" | "EUR";
        target_date: string;
        purpose: string;
        invite_code: string;
        is_owner: boolean;
        leaderboard: {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }[];
    };
}, {
    message: string;
    data: {
        uuid: string;
        name: string;
        target_amount: number;
        current_amount: number;
        currency: "DOP" | "USD" | "EUR";
        target_date: string;
        purpose: string;
        invite_code: string;
        is_owner: boolean;
        leaderboard: {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }[];
    };
}>;
export declare const SharedSavingsGoalsResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        purpose: z.ZodString;
        target_amount: z.ZodNumber;
        current_amount: z.ZodNumber;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        target_date: z.ZodString;
        invite_code: z.ZodString;
        is_owner: z.ZodBoolean;
        leaderboard: z.ZodArray<z.ZodObject<{
            rank: z.ZodNumber;
            display_name: z.ZodString;
            contributed_amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }, {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
        name: string;
        target_amount: number;
        current_amount: number;
        currency: "DOP" | "USD" | "EUR";
        target_date: string;
        purpose: string;
        invite_code: string;
        is_owner: boolean;
        leaderboard: {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }[];
    }, {
        uuid: string;
        name: string;
        target_amount: number;
        current_amount: number;
        currency: "DOP" | "USD" | "EUR";
        target_date: string;
        purpose: string;
        invite_code: string;
        is_owner: boolean;
        leaderboard: {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        uuid: string;
        name: string;
        target_amount: number;
        current_amount: number;
        currency: "DOP" | "USD" | "EUR";
        target_date: string;
        purpose: string;
        invite_code: string;
        is_owner: boolean;
        leaderboard: {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }[];
    }[];
}, {
    message: string;
    data: {
        uuid: string;
        name: string;
        target_amount: number;
        current_amount: number;
        currency: "DOP" | "USD" | "EUR";
        target_date: string;
        purpose: string;
        invite_code: string;
        is_owner: boolean;
        leaderboard: {
            display_name: string;
            rank: number;
            contributed_amount: number;
        }[];
    }[];
}>;
