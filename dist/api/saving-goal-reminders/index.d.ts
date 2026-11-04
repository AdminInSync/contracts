export declare const SavingGoalRemindersContracts: {
    get: {
        pathParams: import("zod").ZodEffects<import("zod").ZodObject<{
            goal_type: import("zod").ZodEnum<["personal", "shared"]>;
            goal_id: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
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
        summary: "Get the token user's reminder for a goal (no row = off)";
        method: "GET";
        path: "/saving-goals/:goal_type/:goal_id/reminder";
        responses: {
            200: import("zod").ZodObject<{
                goal_type: import("zod").ZodEnum<["personal", "shared"]>;
                goal_id: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                frequency: import("zod").ZodNullable<import("zod").ZodEnum<["weekly", "biweekly", "monthly"]>>;
                weekday: import("zod").ZodNullable<import("zod").ZodNumber>;
                month_days: import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                next_fire_at: import("zod").ZodNullable<import("zod").ZodString>;
                goal_inactive: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
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
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                code: string;
            }, {
                message: string;
                code: string;
            }>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
        strictStatusCodes: true;
    };
    put: {
        pathParams: import("zod").ZodEffects<import("zod").ZodObject<{
            goal_type: import("zod").ZodEnum<["personal", "shared"]>;
            goal_id: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
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
        summary: "Create, change or turn off the token user's reminder for a goal";
        method: "PUT";
        body: import("zod").ZodUnion<[import("zod").ZodDiscriminatedUnion<"frequency", [import("zod").ZodObject<{
            enabled: import("zod").ZodBoolean;
            frequency: import("zod").ZodLiteral<"weekly">;
            weekday: import("zod").ZodNumber;
        }, "strict", import("zod").ZodTypeAny, {
            enabled: boolean;
            frequency: "weekly";
            weekday: number;
        }, {
            enabled: boolean;
            frequency: "weekly";
            weekday: number;
        }>, import("zod").ZodObject<{
            enabled: import("zod").ZodBoolean;
            frequency: import("zod").ZodLiteral<"monthly">;
            month_days: import("zod").ZodTuple<[import("zod").ZodNumber], null>;
        }, "strict", import("zod").ZodTypeAny, {
            enabled: boolean;
            frequency: "monthly";
            month_days: [number];
        }, {
            enabled: boolean;
            frequency: "monthly";
            month_days: [number];
        }>, import("zod").ZodObject<{
            enabled: import("zod").ZodBoolean;
            frequency: import("zod").ZodLiteral<"biweekly">;
            month_days: import("zod").ZodEffects<import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber], null>, [number, number], [number, number]>;
        }, "strict", import("zod").ZodTypeAny, {
            enabled: boolean;
            frequency: "biweekly";
            month_days: [number, number];
        }, {
            enabled: boolean;
            frequency: "biweekly";
            month_days: [number, number];
        }>]>, import("zod").ZodObject<{
            enabled: import("zod").ZodLiteral<false>;
        }, "strict", import("zod").ZodTypeAny, {
            enabled: false;
        }, {
            enabled: false;
        }>]>;
        path: "/saving-goals/:goal_type/:goal_id/reminder";
        responses: {
            200: import("zod").ZodObject<{
                goal_type: import("zod").ZodEnum<["personal", "shared"]>;
                goal_id: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                frequency: import("zod").ZodNullable<import("zod").ZodEnum<["weekly", "biweekly", "monthly"]>>;
                weekday: import("zod").ZodNullable<import("zod").ZodNumber>;
                month_days: import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                next_fire_at: import("zod").ZodNullable<import("zod").ZodString>;
                goal_inactive: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
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
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                code: string;
            }, {
                message: string;
                code: string;
            }>;
            409: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                code: string;
            }, {
                message: string;
                code: string;
            }>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
        strictStatusCodes: true;
    };
};
