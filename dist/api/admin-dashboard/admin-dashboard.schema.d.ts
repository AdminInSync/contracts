import { z } from 'zod';
export declare const ActivationPhaseSchema: z.ZodEnum<{
    account_created: "account_created";
    registration_started: "registration_started";
    document_submitted: "document_submitted";
    registration_completed: "registration_completed";
    email_connected: "email_connected";
    product_linked: "product_linked";
}>;
export declare const ActivationFunnelSchema: z.ZodObject<{
    account_created: z.ZodNumber;
    registration_started: z.ZodNumber;
    document_submitted: z.ZodNumber;
    registration_completed: z.ZodNumber;
    email_connected: z.ZodNumber;
    product_linked: z.ZodNumber;
}, z.core.$strip>;
export declare const ProductTypeCountSchema: z.ZodObject<{
    product_type: z.ZodString;
    count: z.ZodNumber;
}, z.core.$strip>;
export declare const ClientsGrowthPointSchema: z.ZodObject<{
    month: z.ZodString;
    count: z.ZodNumber;
}, z.core.$strip>;
export declare const DashboardRecentSignupSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>;
    activation_phase: z.ZodEnum<{
        account_created: "account_created";
        registration_started: "registration_started";
        document_submitted: "document_submitted";
        registration_completed: "registration_completed";
        email_connected: "email_connected";
        product_linked: "product_linked";
    }>;
    product_count: z.ZodNumber;
    created_at: z.ZodString;
}, z.core.$strip>;
export declare const DashboardStatsSchema: z.ZodObject<{
    total_clients: z.ZodNumber;
    active_clients: z.ZodNumber;
    new_clients_this_month: z.ZodNumber;
    new_clients_previous_month: z.ZodNumber;
    users_with_products: z.ZodNumber;
    total_products: z.ZodNumber;
    avg_products_per_user: z.ZodNumber;
    activation_funnel: z.ZodObject<{
        account_created: z.ZodNumber;
        registration_started: z.ZodNumber;
        document_submitted: z.ZodNumber;
        registration_completed: z.ZodNumber;
        email_connected: z.ZodNumber;
        product_linked: z.ZodNumber;
    }, z.core.$strip>;
    clients_growth: z.ZodArray<z.ZodObject<{
        month: z.ZodString;
        count: z.ZodNumber;
    }, z.core.$strip>>;
    product_type_distribution: z.ZodArray<z.ZodObject<{
        product_type: z.ZodString;
        count: z.ZodNumber;
    }, z.core.$strip>>;
    recent_signups: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>;
        activation_phase: z.ZodEnum<{
            account_created: "account_created";
            registration_started: "registration_started";
            document_submitted: "document_submitted";
            registration_completed: "registration_completed";
            email_connected: "email_connected";
            product_linked: "product_linked";
        }>;
        product_count: z.ZodNumber;
        created_at: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
        activation_funnel: z.ZodObject<{
            account_created: z.ZodNumber;
            registration_started: z.ZodNumber;
            document_submitted: z.ZodNumber;
            registration_completed: z.ZodNumber;
            email_connected: z.ZodNumber;
            product_linked: z.ZodNumber;
        }, z.core.$strip>;
        clients_growth: z.ZodArray<z.ZodObject<{
            month: z.ZodString;
            count: z.ZodNumber;
        }, z.core.$strip>>;
        product_type_distribution: z.ZodArray<z.ZodObject<{
            product_type: z.ZodString;
            count: z.ZodNumber;
        }, z.core.$strip>>;
        recent_signups: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            last_name: z.ZodString;
            email: z.ZodUnion<[z.ZodString, z.ZodLiteral<"">]>;
            activation_phase: z.ZodEnum<{
                account_created: "account_created";
                registration_started: "registration_started";
                document_submitted: "document_submitted";
                registration_completed: "registration_completed";
                email_connected: "email_connected";
                product_linked: "product_linked";
            }>;
            product_count: z.ZodNumber;
            created_at: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
