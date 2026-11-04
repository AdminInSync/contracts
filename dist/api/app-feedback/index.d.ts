export declare const AppFeedbackContracts: {
    create: {
        summary: "Submit feedback about the InSync app";
        description: "Stores user-submitted app feedback. The message body is not written to application logs.";
        method: "POST";
        body: import("zod").ZodObject<{
            message: import("zod").ZodString;
        }, "strict", import("zod").ZodTypeAny, {
            message: string;
        }, {
            message: string;
        }>;
        path: "/app-feedback";
        responses: {
            201: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    uuid: import("zod").ZodString;
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    uuid: string;
                    created_at: string;
                }, {
                    uuid: string;
                    created_at: string;
                }>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    uuid: string;
                    created_at: string;
                };
            }, {
                message: string;
                data: {
                    uuid: string;
                    created_at: string;
                };
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
    };
};
