export declare const AdminWaitlistContracts: {
    list: {
        query: import("zod").ZodObject<{
            source: import("zod").ZodOptional<import("zod").ZodString>;
            is_beta_tester: import("zod").ZodPreprocess<import("zod").ZodOptional<import("zod").ZodBoolean>, unknown>;
        }, import("zod/v4/core").$strip>;
        summary: "List waitlist entries";
        description: "Returns newsletter subscriptions for the admin waitlist view.";
        method: "GET";
        path: "/admin/waitlist/";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    first_name: import("zod").ZodString;
                    last_name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    source: import("zod").ZodNullable<import("zod").ZodString>;
                    is_beta_tester: import("zod").ZodBoolean;
                    created_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    stats: {
        summary: "Waitlist stats";
        description: "Returns aggregate stats for the admin waitlist dashboard cards.";
        method: "GET";
        path: "/admin/waitlist/stats";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    total: import("zod").ZodNumber;
                    this_month: import("zod").ZodNumber;
                    by_source: import("zod").ZodArray<import("zod").ZodObject<{
                        source: import("zod").ZodNullable<import("zod").ZodString>;
                        count: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
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
