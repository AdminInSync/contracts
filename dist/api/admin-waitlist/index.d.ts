export declare const AdminWaitlistContracts: {
    list: {
        query: import("zod").ZodObject<{
            source: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            source?: string | undefined;
        }, {
            source?: string | undefined;
        }>;
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
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    email: string;
                    created_at: string;
                    first_name: string;
                    last_name: string;
                    source: string | null;
                }, {
                    id: string;
                    email: string;
                    created_at: string;
                    first_name: string;
                    last_name: string;
                    source: string | null;
                }>, "many">;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    id: string;
                    email: string;
                    created_at: string;
                    first_name: string;
                    last_name: string;
                    source: string | null;
                }[];
            }, {
                message: string;
                data: {
                    id: string;
                    email: string;
                    created_at: string;
                    first_name: string;
                    last_name: string;
                    source: string | null;
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
                    }, "strip", import("zod").ZodTypeAny, {
                        source: string | null;
                        count: number;
                    }, {
                        source: string | null;
                        count: number;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    total: number;
                    this_month: number;
                    by_source: {
                        source: string | null;
                        count: number;
                    }[];
                }, {
                    total: number;
                    this_month: number;
                    by_source: {
                        source: string | null;
                        count: number;
                    }[];
                }>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    total: number;
                    this_month: number;
                    by_source: {
                        source: string | null;
                        count: number;
                    }[];
                };
            }, {
                message: string;
                data: {
                    total: number;
                    this_month: number;
                    by_source: {
                        source: string | null;
                        count: number;
                    }[];
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
