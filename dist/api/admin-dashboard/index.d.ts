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
                    activation_funnel: import("zod").ZodObject<{
                        account_created: import("zod").ZodNumber;
                        registration_started: import("zod").ZodNumber;
                        document_submitted: import("zod").ZodNumber;
                        registration_completed: import("zod").ZodNumber;
                        email_connected: import("zod").ZodNumber;
                        product_linked: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>;
                    clients_growth: import("zod").ZodArray<import("zod").ZodObject<{
                        month: import("zod").ZodString;
                        count: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                    product_type_distribution: import("zod").ZodArray<import("zod").ZodObject<{
                        product_type: import("zod").ZodString;
                        count: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                    recent_signups: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        last_name: import("zod").ZodString;
                        email: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodLiteral<"">]>;
                        activation_phase: import("zod").ZodEnum<{
                            account_created: "account_created";
                            registration_started: "registration_started";
                            document_submitted: "document_submitted";
                            registration_completed: "registration_completed";
                            email_connected: "email_connected";
                            product_linked: "product_linked";
                        }>;
                        product_count: import("zod").ZodNumber;
                        created_at: import("zod").ZodString;
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
