import { z } from 'zod';
export declare const ProductTypeCountSchema: z.ZodObject<{
    product_type: z.ZodString;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    product_type: string;
    count: number;
}, {
    product_type: string;
    count: number;
}>;
export declare const ClientsGrowthPointSchema: z.ZodObject<{
    month: z.ZodString;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    month: string;
    count: number;
}, {
    month: string;
    count: number;
}>;
export declare const DashboardRecentSignupSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>;
    kyc_status: z.ZodEnum<["none", "pending", "on_hold", "approved", "rejected"]>;
    product_count: z.ZodNumber;
    created_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}>;
export declare const DashboardStatsSchema: z.ZodObject<{
    total_clients: z.ZodNumber;
    active_clients: z.ZodNumber;
    new_clients_this_month: z.ZodNumber;
    new_clients_previous_month: z.ZodNumber;
    users_with_products: z.ZodNumber;
    total_products: z.ZodNumber;
    avg_products_per_user: z.ZodNumber;
    kyc_funnel: z.ZodObject<{
        none: z.ZodNumber;
        pending: z.ZodNumber;
        on_hold: z.ZodNumber;
        approved: z.ZodNumber;
        rejected: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    clients_growth: z.ZodArray<z.ZodObject<{
        month: z.ZodString;
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        month: string;
        count: number;
    }, {
        month: string;
        count: number;
    }>, "many">;
    product_type_distribution: z.ZodArray<z.ZodObject<{
        product_type: z.ZodString;
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        product_type: string;
        count: number;
    }, {
        product_type: string;
        count: number;
    }>, "many">;
    recent_signups: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>;
        kyc_status: z.ZodEnum<["none", "pending", "on_hold", "approved", "rejected"]>;
        product_count: z.ZodNumber;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
export declare const DashboardStatsResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        total_clients: z.ZodNumber;
        active_clients: z.ZodNumber;
        new_clients_this_month: z.ZodNumber;
        new_clients_previous_month: z.ZodNumber;
        users_with_products: z.ZodNumber;
        total_products: z.ZodNumber;
        avg_products_per_user: z.ZodNumber;
        kyc_funnel: z.ZodObject<{
            none: z.ZodNumber;
            pending: z.ZodNumber;
            on_hold: z.ZodNumber;
            approved: z.ZodNumber;
            rejected: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
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
        clients_growth: z.ZodArray<z.ZodObject<{
            month: z.ZodString;
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            month: string;
            count: number;
        }, {
            month: string;
            count: number;
        }>, "many">;
        product_type_distribution: z.ZodArray<z.ZodObject<{
            product_type: z.ZodString;
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            product_type: string;
            count: number;
        }, {
            product_type: string;
            count: number;
        }>, "many">;
        recent_signups: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            last_name: z.ZodString;
            email: z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>;
            kyc_status: z.ZodEnum<["none", "pending", "on_hold", "approved", "rejected"]>;
            product_count: z.ZodNumber;
            created_at: z.ZodString;
        }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
