export declare const AdminDashboardContracts: {
    getStats: {
        summary: "Admin dashboard stats";
        description: "Returns platform-wide dashboard aggregates from Firebase users and Postgres.";
        method: "GET";
        path: "/admin/dashboard/stats";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    total_clients: import("zod").ZodNumber;
                    active_clients: import("zod").ZodNumber;
                    new_clients_this_month: import("zod").ZodNumber;
                    new_clients_previous_month: import("zod").ZodNumber;
                    users_with_products: import("zod").ZodNumber;
                    total_products: import("zod").ZodNumber;
                    avg_products_per_user: import("zod").ZodNumber;
                    kyc_funnel: import("zod").ZodObject<{
                        none: import("zod").ZodNumber;
                        pending: import("zod").ZodNumber;
                        on_hold: import("zod").ZodNumber;
                        approved: import("zod").ZodNumber;
                        rejected: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        none: number;
                        pending: number;
                        on_hold: number;
                        approved: number;
                        rejected: number;
                    }, {
                        none: number;
                        pending: number;
                        on_hold: number;
                        approved: number;
                        rejected: number;
                    }>;
                    clients_growth: import("zod").ZodArray<import("zod").ZodObject<{
                        month: import("zod").ZodString;
                        count: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        month: string;
                        count: number;
                    }, {
                        month: string;
                        count: number;
                    }>, "many">;
                    product_type_distribution: import("zod").ZodArray<import("zod").ZodObject<{
                        product_type: import("zod").ZodString;
                        count: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        product_type: string;
                        count: number;
                    }, {
                        product_type: string;
                        count: number;
                    }>, "many">;
                    recent_signups: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        last_name: import("zod").ZodString;
                        email: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodLiteral<"">]>;
                        kyc_status: import("zod").ZodEnum<["none", "pending", "on_hold", "approved", "rejected"]>;
                        product_count: import("zod").ZodNumber;
                        created_at: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: string;
                        email: string;
                        created_at: string;
                        last_name: string;
                        name: string;
                        kyc_status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                        product_count: number;
                    }, {
                        id: string;
                        email: string;
                        created_at: string;
                        last_name: string;
                        name: string;
                        kyc_status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                        product_count: number;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    total_clients: number;
                    active_clients: number;
                    new_clients_this_month: number;
                    new_clients_previous_month: number;
                    users_with_products: number;
                    total_products: number;
                    avg_products_per_user: number;
                    kyc_funnel: {
                        none: number;
                        pending: number;
                        on_hold: number;
                        approved: number;
                        rejected: number;
                    };
                    clients_growth: {
                        month: string;
                        count: number;
                    }[];
                    product_type_distribution: {
                        product_type: string;
                        count: number;
                    }[];
                    recent_signups: {
                        id: string;
                        email: string;
                        created_at: string;
                        last_name: string;
                        name: string;
                        kyc_status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                        product_count: number;
                    }[];
                }, {
                    total_clients: number;
                    active_clients: number;
                    new_clients_this_month: number;
                    new_clients_previous_month: number;
                    users_with_products: number;
                    total_products: number;
                    avg_products_per_user: number;
                    kyc_funnel: {
                        none: number;
                        pending: number;
                        on_hold: number;
                        approved: number;
                        rejected: number;
                    };
                    clients_growth: {
                        month: string;
                        count: number;
                    }[];
                    product_type_distribution: {
                        product_type: string;
                        count: number;
                    }[];
                    recent_signups: {
                        id: string;
                        email: string;
                        created_at: string;
                        last_name: string;
                        name: string;
                        kyc_status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                        product_count: number;
                    }[];
                }>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    total_clients: number;
                    active_clients: number;
                    new_clients_this_month: number;
                    new_clients_previous_month: number;
                    users_with_products: number;
                    total_products: number;
                    avg_products_per_user: number;
                    kyc_funnel: {
                        none: number;
                        pending: number;
                        on_hold: number;
                        approved: number;
                        rejected: number;
                    };
                    clients_growth: {
                        month: string;
                        count: number;
                    }[];
                    product_type_distribution: {
                        product_type: string;
                        count: number;
                    }[];
                    recent_signups: {
                        id: string;
                        email: string;
                        created_at: string;
                        last_name: string;
                        name: string;
                        kyc_status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                        product_count: number;
                    }[];
                };
            }, {
                message: string;
                data: {
                    total_clients: number;
                    active_clients: number;
                    new_clients_this_month: number;
                    new_clients_previous_month: number;
                    users_with_products: number;
                    total_products: number;
                    avg_products_per_user: number;
                    kyc_funnel: {
                        none: number;
                        pending: number;
                        on_hold: number;
                        approved: number;
                        rejected: number;
                    };
                    clients_growth: {
                        month: string;
                        count: number;
                    }[];
                    product_type_distribution: {
                        product_type: string;
                        count: number;
                    }[];
                    recent_signups: {
                        id: string;
                        email: string;
                        created_at: string;
                        last_name: string;
                        name: string;
                        kyc_status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                        product_count: number;
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
