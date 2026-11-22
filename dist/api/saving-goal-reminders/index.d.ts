export declare const SavingGoalRemindersContracts: {
    get: {
        pathParams: import("zod").ZodObject<{
            goal_type: import("zod").ZodEnum<{
                personal: "personal";
                shared: "shared";
            }>;
            goal_id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>;
        summary: "Get the token user's reminder for a goal (no row = off)";
        method: "GET";
        path: "/saving-goals/:goal_type/:goal_id/reminder";
        responses: {
            200: import("zod").ZodObject<{
                goal_type: import("zod").ZodEnum<{
                    personal: "personal";
                    shared: "shared";
                }>;
                goal_id: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                frequency: import("zod").ZodNullable<import("zod").ZodEnum<{
                    monthly: "monthly";
                    weekly: "weekly";
                    biweekly: "biweekly";
                }>>;
                weekday: import("zod").ZodNullable<import("zod").ZodNumber>;
                month_days: import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodNumber>>;
                next_fire_at: import("zod").ZodNullable<import("zod").ZodString>;
                goal_inactive: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            404: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    put: {
        pathParams: import("zod").ZodObject<{
            goal_type: import("zod").ZodEnum<{
                personal: "personal";
                shared: "shared";
            }>;
            goal_id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>;
        summary: "Create, change or turn off the token user's reminder for a goal";
        method: "PUT";
        body: import("zod").ZodUnion<readonly [import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
            enabled: import("zod").ZodBoolean;
            frequency: import("zod").ZodLiteral<"weekly">;
            weekday: import("zod").ZodNumber;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            enabled: import("zod").ZodBoolean;
            frequency: import("zod").ZodLiteral<"monthly">;
            month_days: import("zod").ZodTuple<[import("zod").ZodNumber], null>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            enabled: import("zod").ZodBoolean;
            frequency: import("zod").ZodLiteral<"biweekly">;
            month_days: import("zod").ZodTuple<[import("zod").ZodNumber, import("zod").ZodNumber], null>;
        }, import("zod/v4/core").$strict>], "frequency">, import("zod").ZodObject<{
            enabled: import("zod").ZodLiteral<false>;
        }, import("zod/v4/core").$strict>]>;
        path: "/saving-goals/:goal_type/:goal_id/reminder";
        responses: {
            200: import("zod").ZodObject<{
                goal_type: import("zod").ZodEnum<{
                    personal: "personal";
                    shared: "shared";
                }>;
                goal_id: import("zod").ZodString;
                enabled: import("zod").ZodBoolean;
                frequency: import("zod").ZodNullable<import("zod").ZodEnum<{
                    monthly: "monthly";
                    weekly: "weekly";
                    biweekly: "biweekly";
                }>>;
                weekday: import("zod").ZodNullable<import("zod").ZodNumber>;
                month_days: import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodNumber>>;
                next_fire_at: import("zod").ZodNullable<import("zod").ZodString>;
                goal_inactive: import("zod").ZodBoolean;
            }, import("zod/v4/core").$strip>;
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            404: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            409: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
};
