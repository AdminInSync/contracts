export declare const AdminAppFeedbackContracts: {
    list: {
        query: import("zod").ZodObject<{
            status: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodEnum<["new", "reviewed", "resolved"]>, import("zod").ZodLiteral<"all">]>>;
        }, "strip", import("zod").ZodTypeAny, {
            status?: "all" | "new" | "reviewed" | "resolved" | undefined;
        }, {
            status?: "all" | "new" | "reviewed" | "resolved" | undefined;
        }>;
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
                    status: import("zod").ZodEnum<["new", "reviewed", "resolved"]>;
                    user_uid: import("zod").ZodString;
                    user_name: import("zod").ZodString;
                    user_email: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    status: "new" | "reviewed" | "resolved";
                    id: string;
                    user_uid: string;
                    created_at: string;
                    user_name: string;
                    user_email: string | null;
                }, {
                    message: string;
                    status: "new" | "reviewed" | "resolved";
                    id: string;
                    user_uid: string;
                    created_at: string;
                    user_name: string;
                    user_email: string | null;
                }>, "many">;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    message: string;
                    status: "new" | "reviewed" | "resolved";
                    id: string;
                    user_uid: string;
                    created_at: string;
                    user_name: string;
                    user_email: string | null;
                }[];
            }, {
                message: string;
                data: {
                    message: string;
                    status: "new" | "reviewed" | "resolved";
                    id: string;
                    user_uid: string;
                    created_at: string;
                    user_name: string;
                    user_email: string | null;
                }[];
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
        strictStatusCodes: true;
    };
    updateStatus: {
        pathParams: import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        summary: "Update feedback status";
        description: "Sets an app feedback entry to new, reviewed, or resolved.";
        method: "PATCH";
        body: import("zod").ZodObject<{
            status: import("zod").ZodEnum<["new", "reviewed", "resolved"]>;
        }, "strip", import("zod").ZodTypeAny, {
            status: "new" | "reviewed" | "resolved";
        }, {
            status: "new" | "reviewed" | "resolved";
        }>;
        path: "/admin/app-feedback/:id/status";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    message: import("zod").ZodString;
                    status: import("zod").ZodEnum<["new", "reviewed", "resolved"]>;
                    user_uid: import("zod").ZodString;
                    user_name: import("zod").ZodString;
                    user_email: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    status: "new" | "reviewed" | "resolved";
                    id: string;
                    user_uid: string;
                    created_at: string;
                    user_name: string;
                    user_email: string | null;
                }, {
                    message: string;
                    status: "new" | "reviewed" | "resolved";
                    id: string;
                    user_uid: string;
                    created_at: string;
                    user_name: string;
                    user_email: string | null;
                }>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    message: string;
                    status: "new" | "reviewed" | "resolved";
                    id: string;
                    user_uid: string;
                    created_at: string;
                    user_name: string;
                    user_email: string | null;
                };
            }, {
                message: string;
                data: {
                    message: string;
                    status: "new" | "reviewed" | "resolved";
                    id: string;
                    user_uid: string;
                    created_at: string;
                    user_name: string;
                    user_email: string | null;
                };
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
        strictStatusCodes: true;
    };
};
