export declare const AdminAppFeedbackContracts: {
    list: {
        query: import("zod").ZodObject<{
            status: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                new: "new";
                reviewed: "reviewed";
                resolved: "resolved";
            }>, import("zod").ZodLiteral<"all">]>>;
        }, import("zod/v4/core").$strip>;
        summary: "List app feedback";
        description: "Returns user-submitted app feedback for the admin panel.";
        method: "GET";
        path: "/admin/app-feedback/";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    message: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        new: "new";
                        reviewed: "reviewed";
                        resolved: "resolved";
                    }>;
                    user_uid: import("zod").ZodString;
                    user_name: import("zod").ZodString;
                    user_email: import("zod").ZodNullable<import("zod").ZodString>;
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
    updateStatus: {
        pathParams: import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, import("zod/v4/core").$strip>;
        summary: "Update feedback status";
        description: "Sets an app feedback entry to new, reviewed, or resolved.";
        method: "PATCH";
        body: import("zod").ZodObject<{
            status: import("zod").ZodEnum<{
                new: "new";
                reviewed: "reviewed";
                resolved: "resolved";
            }>;
        }, import("zod/v4/core").$strip>;
        path: "/admin/app-feedback/:id/status";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    message: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        new: "new";
                        reviewed: "reviewed";
                        resolved: "resolved";
                    }>;
                    user_uid: import("zod").ZodString;
                    user_name: import("zod").ZodString;
                    user_email: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            404: import("zod").ZodObject<{
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
