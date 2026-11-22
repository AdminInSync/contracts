export declare const ApiContracts: {
    AdminAuth: {
        activateInvitation: {
            strictStatusCodes: true;
            summary: "Activate an administrator invitation";
            description: "Set an administrator password using a single-use invitation token that expires after 30 minutes.";
            method: "POST";
            body: import("zod").ZodObject<{
                token: import("zod").ZodString;
                new_password: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/admin/auth/activate";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
                429: import("zod").ZodObject<{
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
        };
        login: {
            strictStatusCodes: true;
            summary: "Admin login";
            description: "Authenticate an admin with email, password, and a TOTP or one-time recovery code. A correct password without a second factor does not return a token.";
            method: "POST";
            body: import("zod").ZodObject<{
                email: import("zod").ZodString;
                password: import("zod").ZodString;
                totp_code: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/admin/auth/login";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        token: import("zod").ZodString;
                        admin: import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            email: import("zod").ZodString;
                            role: import("zod").ZodEnum<{
                                superadmin: "superadmin";
                            }>;
                            is_active: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
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
                429: import("zod").ZodObject<{
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
        };
        setupTotp: {
            strictStatusCodes: true;
            summary: "Start admin TOTP enrollment";
            description: "Verify the admin password and return a TOTP secret, otpauth URL, and one-time recovery codes. Does not return a JWT. Confirm with a code before login will succeed.";
            method: "POST";
            body: import("zod").ZodObject<{
                email: import("zod").ZodString;
                password: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            path: "/api/admin/auth/totp/setup";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        otpauth_url: import("zod").ZodString;
                        secret: import("zod").ZodString;
                        recovery_codes: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                409: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                429: import("zod").ZodObject<{
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
        };
        confirmTotp: {
            strictStatusCodes: true;
            summary: "Confirm admin TOTP enrollment";
            description: "Verify the admin password and a 6-digit authenticator code, then enable TOTP. Does not return a JWT.";
            method: "POST";
            body: import("zod").ZodObject<{
                email: import("zod").ZodString;
                password: import("zod").ZodString;
                code: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            path: "/api/admin/auth/totp/confirm";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
                409: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                429: import("zod").ZodObject<{
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
        };
        getMe: {
            strictStatusCodes: true;
            summary: "Get current admin";
            description: "Get the currently authenticated admin user.";
            method: "GET";
            path: "/api/admin/auth/me";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        admin: import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            email: import("zod").ZodString;
                            role: import("zod").ZodEnum<{
                                superadmin: "superadmin";
                            }>;
                            is_active: import("zod").ZodBoolean;
                            totp_enabled: import("zod").ZodBoolean;
                            last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                            created_at: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>;
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
        };
        updateMe: {
            strictStatusCodes: true;
            summary: "Update current admin profile";
            description: "Update the display name of the authenticated administrator.";
            method: "PATCH";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            path: "/api/admin/auth/me";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        admin: import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            email: import("zod").ZodString;
                            role: import("zod").ZodEnum<{
                                superadmin: "superadmin";
                            }>;
                            is_active: import("zod").ZodBoolean;
                            totp_enabled: import("zod").ZodBoolean;
                            last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                            created_at: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        changePassword: {
            strictStatusCodes: true;
            summary: "Change admin password";
            description: "Change the authenticated administrator password after verifying the current one.";
            method: "POST";
            body: import("zod").ZodObject<{
                current_password: import("zod").ZodString;
                new_password: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/admin/auth/password";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        logout: {
            strictStatusCodes: true;
            summary: "Admin logout";
            description: "Revoke the current admin JWT until it expires.";
            method: "POST";
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            path: "/api/admin/auth/logout";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
        };
    };
    AdminWaitlist: {
        list: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                source: import("zod").ZodOptional<import("zod").ZodString>;
                is_beta_tester: import("zod").ZodPreprocess<import("zod").ZodOptional<import("zod").ZodBoolean>, unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "List waitlist entries";
            description: "Returns newsletter subscriptions for the admin waitlist view.";
            method: "GET";
            path: "/api/admin/waitlist/";
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
        };
        stats: {
            strictStatusCodes: true;
            summary: "Waitlist stats";
            description: "Returns aggregate stats for the admin waitlist dashboard cards.";
            method: "GET";
            path: "/api/admin/waitlist/stats";
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
        };
    };
    AdminClients: {
        listClients: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                activation_phase: import("zod").ZodOptional<import("zod").ZodEnum<{
                    account_created: "account_created";
                    registration_started: "registration_started";
                    document_submitted: "document_submitted";
                    registration_completed: "registration_completed";
                    email_connected: "email_connected";
                    product_linked: "product_linked";
                }>>;
                is_beta_tester: import("zod").ZodPreprocess<import("zod").ZodOptional<import("zod").ZodBoolean>, unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "List admin clients";
            description: "Returns clients sourced from user_info enriched with Firebase identity data.";
            method: "GET";
            path: "/api/admin/clients/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        last_name: import("zod").ZodString;
                        email: import("zod").ZodString;
                        email_verified: import("zod").ZodBoolean;
                        phone: import("zod").ZodNullable<import("zod").ZodString>;
                        activation_phase: import("zod").ZodEnum<{
                            account_created: "account_created";
                            registration_started: "registration_started";
                            document_submitted: "document_submitted";
                            registration_completed: "registration_completed";
                            email_connected: "email_connected";
                            product_linked: "product_linked";
                        }>;
                        is_beta_tester: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                        product_count: import("zod").ZodNumber;
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
        };
        getClientDetail: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                uid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Get admin client detail";
            description: "Returns a single client with activation phase, devices, preferences, and products.";
            method: "GET";
            path: "/api/admin/clients/:uid";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        last_name: import("zod").ZodString;
                        email: import("zod").ZodString;
                        email_verified: import("zod").ZodBoolean;
                        phone: import("zod").ZodNullable<import("zod").ZodString>;
                        activation_phase: import("zod").ZodEnum<{
                            account_created: "account_created";
                            registration_started: "registration_started";
                            document_submitted: "document_submitted";
                            registration_completed: "registration_completed";
                            email_connected: "email_connected";
                            product_linked: "product_linked";
                        }>;
                        is_beta_tester: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                        product_count: import("zod").ZodNumber;
                        document_type: import("zod").ZodNullable<import("zod").ZodEnum<typeof import("..").DocumentType>>;
                        document_number: import("zod").ZodNullable<import("zod").ZodString>;
                        document_status: import("zod").ZodNullable<import("zod").ZodEnum<typeof import("..").DocumentStatus>>;
                        devices: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            device_unique_id: import("zod").ZodString;
                            notes: import("zod").ZodString;
                            created_at: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        preferences: import("zod").ZodNullable<import("zod").ZodObject<{
                            are_push_notifications_enabled: import("zod").ZodBoolean;
                            are_transaction_alerts_enabled: import("zod").ZodBoolean;
                            are_notification_sounds_enabled: import("zod").ZodBoolean;
                            is_vibration_enabled: import("zod").ZodBoolean;
                            is_biometric_auth_enabled: import("zod").ZodBoolean;
                            auto_lock_after_minutes: import("zod").ZodNumber;
                            is_auto_sync_enabled: import("zod").ZodBoolean;
                            is_cloud_backup_enabled: import("zod").ZodBoolean;
                            preferred_theme: import("zod").ZodEnum<{
                                SYSTEM: "SYSTEM";
                                LIGHT: "LIGHT";
                                DARK: "DARK";
                            }>;
                        }, import("zod/v4/core").$strip>>;
                        products: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            name: import("zod").ZodString;
                            institution_name: import("zod").ZodNullable<import("zod").ZodString>;
                            product_type: import("zod").ZodString;
                            account_last4: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
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
        };
    };
    AdminDashboard: {
        getStats: {
            strictStatusCodes: true;
            summary: "Admin dashboard stats";
            description: "Returns platform-wide dashboard aggregates from Firebase users and Postgres.";
            method: "GET";
            path: "/api/admin/dashboard/stats";
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
        };
    };
    AdminBetaTesters: {
        list: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                has_app_account: import("zod").ZodPreprocess<import("zod").ZodOptional<import("zod").ZodBoolean>, unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "List beta testers";
            description: "Returns beta waitlist entries for the admin panel, with whether each email already has an app account.";
            method: "GET";
            path: "/api/admin/beta-testers/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        full_name: import("zod").ZodString;
                        bank_email: import("zod").ZodString;
                        operating_system: import("zod").ZodEnum<{
                            android: "android";
                            ios: "ios";
                            both: "both";
                        }>;
                        interests: import("zod").ZodArray<import("zod").ZodEnum<{
                            other: "other";
                            expense_categories: "expense_categories";
                            automatic_expense_tracking: "automatic_expense_tracking";
                            budgets_and_alerts: "budgets_and_alerts";
                            savings_goals: "savings_goals";
                            debts_loans_and_credit_cards: "debts_loans_and_credit_cards";
                            payment_reminders: "payment_reminders";
                            financial_reports_and_charts: "financial_reports_and_charts";
                            multiple_accounts_and_banks: "multiple_accounts_and_banks";
                        }>>;
                        other_interest: import("zod").ZodNullable<import("zod").ZodString>;
                        has_app_account: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        download_email_sent_at: import("zod").ZodNullable<import("zod").ZodString>;
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
        };
        sendDownloadEmail: {
            strictStatusCodes: true;
            summary: "Send download emails";
            description: "Sends the InSync download email to all beta testers or to a selected set of UUIDs.";
            method: "POST";
            body: import("zod").ZodObject<{
                scope: import("zod").ZodEnum<{
                    all: "all";
                    selected: "selected";
                }>;
                uuids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/admin/beta-testers/send-download-email";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        requested: import("zod").ZodNumber;
                        sent: import("zod").ZodNumber;
                        failed: import("zod").ZodNumber;
                        failures: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            message: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
                503: import("zod").ZodObject<{
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
        };
    };
    AdminAppFeedback: {
        list: {
            strictStatusCodes: true;
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
            path: "/api/admin/app-feedback/";
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
        };
        updateStatus: {
            strictStatusCodes: true;
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
            path: "/api/admin/app-feedback/:id/status";
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
        };
    };
    AdminUsers: {
        list: {
            strictStatusCodes: true;
            summary: "List admin users";
            description: "Returns administrators who can access the control panel.";
            method: "GET";
            path: "/api/admin/users/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        email: import("zod").ZodString;
                        totp_enabled: import("zod").ZodBoolean;
                        invitation_pending: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
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
        };
        invite: {
            strictStatusCodes: true;
            summary: "Invite an admin";
            description: "Creates an administrator and emails a single-use activation link to choose a password.";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                email: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            path: "/api/admin/users/invite";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        name: import("zod").ZodString;
                        email: import("zod").ZodString;
                        totp_enabled: import("zod").ZodBoolean;
                        invitation_pending: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>;
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
                409: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                503: import("zod").ZodObject<{
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
        };
    };
    Auth: {
        me: {
            strictStatusCodes: true;
            summary: "Get current user endpoint";
            description: "Get current authenticated user information from Firebase.";
            method: "GET";
            path: "/api/auth/me";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        user: import("zod").ZodObject<{
                            firebase_uid: import("zod").ZodString;
                            email: import("zod").ZodString;
                            display_name: import("zod").ZodNullable<import("zod").ZodString>;
                            photo_url: import("zod").ZodNullable<import("zod").ZodString>;
                            email_verified: import("zod").ZodBoolean;
                            is_active: import("zod").ZodBoolean;
                            phone_number: import("zod").ZodNullable<import("zod").ZodString>;
                            creation_time: import("zod").ZodNullable<import("zod").ZodString>;
                            last_sign_in_time: import("zod").ZodNullable<import("zod").ZodString>;
                            last_refresh_time: import("zod").ZodNullable<import("zod").ZodString>;
                            provider_data: import("zod").ZodArray<import("zod").ZodObject<{
                                providerId: import("zod").ZodString;
                                uid: import("zod").ZodString;
                                email: import("zod").ZodNullable<import("zod").ZodString>;
                                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                                photoURL: import("zod").ZodNullable<import("zod").ZodString>;
                                phoneNumber: import("zod").ZodNullable<import("zod").ZodString>;
                            }, import("zod/v4/core").$strip>>;
                            provider_id: import("zod").ZodString;
                            custom_claims: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>;
                            tenant_id: import("zod").ZodNullable<import("zod").ZodString>;
                            multi_factor: import("zod").ZodObject<{
                                enrolled_factors: import("zod").ZodArray<import("zod").ZodObject<{
                                    uid: import("zod").ZodString;
                                    display_name: import("zod").ZodNullable<import("zod").ZodString>;
                                    enrollment_time: import("zod").ZodString;
                                    factor_id: import("zod").ZodString;
                                }, import("zod/v4/core").$strip>>;
                            }, import("zod/v4/core").$strip>;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
    };
    Kyc: {
        token: {
            strictStatusCodes: true;
            summary: "Generate Sumsub WebSDK access token";
            description: "Generate a Sumsub WebSDK access token for the authenticated user to start KYC process.";
            method: "POST";
            body: import("zod").ZodObject<{
                ttlInSecs: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/kyc/token";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        token: import("zod").ZodString;
                        userId: import("zod").ZodString;
                        levelName: import("zod").ZodString;
                        expiresIn: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                502: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        status: {
            strictStatusCodes: true;
            summary: "Get KYC status";
            description: "Get the current KYC status for the authenticated user.";
            method: "GET";
            path: "/api/kyc/status";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uid: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            none: "none";
                            pending: "pending";
                            on_hold: "on_hold";
                            approved: "approved";
                            rejected: "rejected";
                        }>;
                        reviewedAt: import("zod").ZodNullable<import("zod").ZodString>;
                        applicantId: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
    };
    UserInfo: {
        createUserInfo: {
            strictStatusCodes: true;
            summary: "Create new user info document";
            description: "Create a new user info document for the authenticated user";
            method: "POST";
            body: import("zod").ZodObject<{
                info_type: import("zod").ZodEnum<typeof import("..").DocumentType>;
                document_number: import("zod").ZodOptional<import("zod").ZodString>;
                document_url: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/user-info/";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    info_type: import("zod").ZodEnum<typeof import("..").DocumentType>;
                    status: import("zod").ZodEnum<typeof import("..").DocumentStatus>;
                    document_number: import("zod").ZodNullable<import("zod").ZodString>;
                    document_url: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        getUserInfo: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                info_type: import("zod").ZodOptional<import("zod").ZodEnum<typeof import("..").DocumentType>>;
                status: import("zod").ZodOptional<import("zod").ZodEnum<typeof import("..").DocumentStatus>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get user info documents";
            description: "Get all user info documents for the authenticated user with optional filtering by document type and status";
            method: "GET";
            path: "/api/user-info/";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    info_type: import("zod").ZodEnum<typeof import("..").DocumentType>;
                    status: import("zod").ZodEnum<typeof import("..").DocumentStatus>;
                    document_number: import("zod").ZodNullable<import("zod").ZodString>;
                    document_url: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
    };
    Devices: {
        createDevice: {
            strictStatusCodes: true;
            summary: "Register a new device";
            description: "Registers a new device for the authenticated user";
            method: "POST";
            body: import("zod").ZodObject<{
                user_uid: import("zod").ZodString;
                device_unique_id: import("zod").ZodString;
                notes: import("zod").ZodString;
                notification_token: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/devices/";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    notes: import("zod").ZodString;
                    notification_token: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        getDevices: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                device_unique_id: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            summary: "Get user devices";
            description: "Returns all devices for the authenticated user with optional device ID filter";
            method: "GET";
            path: "/api/devices/";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    notes: import("zod").ZodString;
                    notification_token: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        createDevicePreferences: {
            strictStatusCodes: true;
            summary: "Create device preferences";
            description: "Creates preferences for a specific device";
            method: "POST";
            body: import("zod").ZodObject<{
                device_unique_id: import("zod").ZodString;
                arePushNotificationsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                areTransactionAlertsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                areNotificationSoundsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isVibrationEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isBiometricAuthEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                autoLockAfterMinutes: import("zod").ZodOptional<import("zod").ZodNumber>;
                isPrivacySettingsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isAutoSyncEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isCloudBackupEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                canExportData: import("zod").ZodOptional<import("zod").ZodBoolean>;
                preferredTheme: import("zod").ZodOptional<import("zod").ZodEnum<{
                    SYSTEM: "SYSTEM";
                    LIGHT: "LIGHT";
                    DARK: "DARK";
                }>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/devices/preferences";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    arePushNotificationsEnabled: import("zod").ZodBoolean;
                    areTransactionAlertsEnabled: import("zod").ZodBoolean;
                    areNotificationSoundsEnabled: import("zod").ZodBoolean;
                    isVibrationEnabled: import("zod").ZodBoolean;
                    isBiometricAuthEnabled: import("zod").ZodBoolean;
                    autoLockAfterMinutes: import("zod").ZodNumber;
                    isPrivacySettingsEnabled: import("zod").ZodBoolean;
                    isAutoSyncEnabled: import("zod").ZodBoolean;
                    isCloudBackupEnabled: import("zod").ZodBoolean;
                    canExportData: import("zod").ZodBoolean;
                    preferredTheme: import("zod").ZodEnum<{
                        SYSTEM: "SYSTEM";
                        LIGHT: "LIGHT";
                        DARK: "DARK";
                    }>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        getDevicePreferences: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                device_id: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            summary: "Get device preferences";
            description: "Returns all device preferences for the authenticated user with optional device ID filter";
            method: "GET";
            path: "/api/devices/preferences";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    arePushNotificationsEnabled: import("zod").ZodBoolean;
                    areTransactionAlertsEnabled: import("zod").ZodBoolean;
                    areNotificationSoundsEnabled: import("zod").ZodBoolean;
                    isVibrationEnabled: import("zod").ZodBoolean;
                    isBiometricAuthEnabled: import("zod").ZodBoolean;
                    autoLockAfterMinutes: import("zod").ZodNumber;
                    isPrivacySettingsEnabled: import("zod").ZodBoolean;
                    isAutoSyncEnabled: import("zod").ZodBoolean;
                    isCloudBackupEnabled: import("zod").ZodBoolean;
                    canExportData: import("zod").ZodBoolean;
                    preferredTheme: import("zod").ZodEnum<{
                        SYSTEM: "SYSTEM";
                        LIGHT: "LIGHT";
                        DARK: "DARK";
                    }>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
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
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        updateDevicePreferences: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Update device preferences";
            description: "Updates preferences for a specific device";
            method: "PUT";
            body: import("zod").ZodObject<{
                arePushNotificationsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                areTransactionAlertsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                areNotificationSoundsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isVibrationEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isBiometricAuthEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                autoLockAfterMinutes: import("zod").ZodOptional<import("zod").ZodNumber>;
                isPrivacySettingsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isAutoSyncEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isCloudBackupEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                canExportData: import("zod").ZodOptional<import("zod").ZodBoolean>;
                preferredTheme: import("zod").ZodOptional<import("zod").ZodEnum<{
                    SYSTEM: "SYSTEM";
                    LIGHT: "LIGHT";
                    DARK: "DARK";
                }>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/devices/preferences/:id";
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    arePushNotificationsEnabled: import("zod").ZodBoolean;
                    areTransactionAlertsEnabled: import("zod").ZodBoolean;
                    areNotificationSoundsEnabled: import("zod").ZodBoolean;
                    isVibrationEnabled: import("zod").ZodBoolean;
                    isBiometricAuthEnabled: import("zod").ZodBoolean;
                    autoLockAfterMinutes: import("zod").ZodNumber;
                    isPrivacySettingsEnabled: import("zod").ZodBoolean;
                    isAutoSyncEnabled: import("zod").ZodBoolean;
                    isCloudBackupEnabled: import("zod").ZodBoolean;
                    canExportData: import("zod").ZodBoolean;
                    preferredTheme: import("zod").ZodEnum<{
                        SYSTEM: "SYSTEM";
                        LIGHT: "LIGHT";
                        DARK: "DARK";
                    }>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        updateNotificationToken: {
            strictStatusCodes: true;
            summary: "Update notification token";
            description: "Updates the FCM notification token for a specific device";
            method: "PUT";
            body: import("zod").ZodObject<{
                device_unique_id: import("zod").ZodString;
                notification_token: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            path: "/api/devices/notification-token";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        device_id: import("zod").ZodNumber;
                        device_unique_id: import("zod").ZodString;
                        notification_token_updated: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
    };
    Webhooks: {
        sumsub: {
            strictStatusCodes: true;
            summary: "Sumsub webhook endpoint";
            description: "Webhook endpoint for receiving KYC status updates from Sumsub.";
            method: "POST";
            body: import("zod").ZodAny;
            path: "/api/webhooks/sumsub";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodBoolean;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            };
        };
    };
    Newsletter: {
        subscribe: {
            strictStatusCodes: true;
            summary: "Subscribe to newsletter";
            description: "Subscribe a user to the newsletter with their first name, last name, and email.";
            method: "POST";
            body: import("zod").ZodObject<{
                first_name: import("zod").ZodString;
                last_name: import("zod").ZodString;
                email: import("zod").ZodString;
                source: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/newsletter/subscribe";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    first_name: import("zod").ZodString;
                    last_name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    source: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            };
        };
    };
    SavingGoals: {
        createSavingGoal: {
            summary: "Create a new saving goal";
            description: "Creates a new saving goal for the authenticated user";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                target_amount: import("zod").ZodNumber;
                current_amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                monthly_contribution: import("zod").ZodOptional<import("zod").ZodNumber>;
                currency: import("zod").ZodString;
                target_date: import("zod").ZodString;
                status: import("zod").ZodOptional<import("zod").ZodEnum<{
                    active: "active";
                    completed: "completed";
                    paused: "paused";
                    cancelled: "cancelled";
                }>>;
                priority: import("zod").ZodOptional<import("zod").ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    urgent: "urgent";
                }>>;
                color: import("zod").ZodOptional<import("zod").ZodString>;
                notes: import("zod").ZodOptional<import("zod").ZodString>;
                is_public: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod/v4/core").$strip>;
            path: "/api/saving-goals";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            active: "active";
                            completed: "completed";
                            paused: "paused";
                            cancelled: "cancelled";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getSavingGoals: {
            query: import("zod").ZodObject<{
                status: import("zod").ZodOptional<import("zod").ZodEnum<{
                    active: "active";
                    completed: "completed";
                    paused: "paused";
                    cancelled: "cancelled";
                }>>;
                priority: import("zod").ZodOptional<import("zod").ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    urgent: "urgent";
                }>>;
                is_public: import("zod").ZodOptional<import("zod").ZodCoercedBoolean<unknown>>;
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
                offset: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get all saving goals";
            description: "Returns all saving goals for the authenticated user with optional filtering";
            method: "GET";
            path: "/api/saving-goals";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            active: "active";
                            completed: "completed";
                            paused: "paused";
                            cancelled: "cancelled";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        getSavingGoal: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Get a specific saving goal";
            description: "Returns a specific saving goal by ID";
            method: "GET";
            path: "/api/get-saving-goals-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            active: "active";
                            completed: "completed";
                            paused: "paused";
                            cancelled: "cancelled";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
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
        updateSavingGoal: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Update a saving goal";
            description: "Updates an existing saving goal";
            method: "PUT";
            body: import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                target_amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                current_amount: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                monthly_contribution: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                currency: import("zod").ZodOptional<import("zod").ZodString>;
                target_date: import("zod").ZodOptional<import("zod").ZodString>;
                status: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    active: "active";
                    completed: "completed";
                    paused: "paused";
                    cancelled: "cancelled";
                }>>>;
                priority: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    urgent: "urgent";
                }>>>;
                color: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                notes: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                is_public: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/update-saving-goals-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            active: "active";
                            completed: "completed";
                            paused: "paused";
                            cancelled: "cancelled";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
        updateProgress: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Update saving goal progress";
            description: "Updates the current amount of a saving goal";
            method: "PATCH";
            body: import("zod").ZodObject<{
                current_amount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
            path: "/api/update-saving-goals-by-id/:id/progress/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            active: "active";
                            completed: "completed";
                            paused: "paused";
                            cancelled: "cancelled";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
        deleteSavingGoal: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Delete a saving goal";
            description: "Soft-deletes a saving goal";
            method: "DELETE";
            path: "/api/delete-saving-goals-by-id/:id/soft/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
        getPublicSavingGoals: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
                offset: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get public saving goals";
            description: "Returns public saving goals from all users";
            method: "GET";
            path: "/api/get-saving-goals-public/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            active: "active";
                            completed: "completed";
                            paused: "paused";
                            cancelled: "cancelled";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getGoalsDueSoon: {
            query: import("zod").ZodObject<{
                days: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get upcoming saving goals";
            description: "Returns saving goals due within the specified number of days";
            method: "GET";
            path: "/api/get-saving-goals-due-soon/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            active: "active";
                            completed: "completed";
                            paused: "paused";
                            cancelled: "cancelled";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
    };
    Institutions: {
        createInstitution: {
            summary: "Create a new financial institution";
            description: "Creates a new financial institution (admin only)";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                institution_type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    bank: "bank";
                    credit_union: "credit_union";
                    investment_firm: "investment_firm";
                    insurance: "insurance";
                    fintech: "fintech";
                }>>;
                logo_url: import("zod").ZodOptional<import("zod").ZodString>;
                website: import("zod").ZodOptional<import("zod").ZodString>;
                country: import("zod").ZodOptional<import("zod").ZodString>;
                region: import("zod").ZodOptional<import("zod").ZodString>;
                is_active: import("zod").ZodOptional<import("zod").ZodBoolean>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/institutions";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<{
                            bank: "bank";
                            credit_union: "credit_union";
                            investment_firm: "investment_firm";
                            insurance: "insurance";
                            fintech: "fintech";
                        }>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>;
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
                409: import("zod").ZodObject<{
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
        getInstitutions: {
            query: import("zod").ZodObject<{
                institution_type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    bank: "bank";
                    credit_union: "credit_union";
                    investment_firm: "investment_firm";
                    insurance: "insurance";
                    fintech: "fintech";
                }>>;
                country: import("zod").ZodOptional<import("zod").ZodString>;
                region: import("zod").ZodOptional<import("zod").ZodString>;
                search: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get all financial institutions";
            description: "Returns all active financial institutions with optional filtering";
            method: "GET";
            path: "/api/institutions";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<{
                            bank: "bank";
                            credit_union: "credit_union";
                            investment_firm: "investment_firm";
                            insurance: "insurance";
                            fintech: "fintech";
                        }>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getInstitution: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get a specific financial institution";
            description: "Returns a specific financial institution by ID";
            method: "GET";
            path: "/api/institutions/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<{
                            bank: "bank";
                            credit_union: "credit_union";
                            investment_firm: "investment_firm";
                            insurance: "insurance";
                            fintech: "fintech";
                        }>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>;
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
        updateInstitution: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Update a financial institution";
            description: "Updates an existing financial institution (admin only)";
            method: "PUT";
            body: import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
                institution_type: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    bank: "bank";
                    credit_union: "credit_union";
                    investment_firm: "investment_firm";
                    insurance: "insurance";
                    fintech: "fintech";
                }>>>;
                logo_url: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                website: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                country: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                region: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                is_active: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/institutions/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<{
                            bank: "bank";
                            credit_union: "credit_union";
                            investment_firm: "investment_firm";
                            insurance: "insurance";
                            fintech: "fintech";
                        }>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>;
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
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
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
        deleteInstitution: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Delete a financial institution";
            description: "Soft-deletes a financial institution (admin only)";
            method: "DELETE";
            path: "/api/institutions/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
        searchInstitutions: {
            query: import("zod").ZodObject<{
                q: import("zod").ZodString;
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Search financial institutions";
            description: "Searches financial institutions by name";
            method: "GET";
            path: "/api/institutions/search";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<{
                            bank: "bank";
                            credit_union: "credit_union";
                            investment_firm: "investment_firm";
                            insurance: "insurance";
                            fintech: "fintech";
                        }>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getInstitutionsByType: {
            pathParams: import("zod").ZodObject<{
                type: import("zod").ZodEnum<{
                    bank: "bank";
                    credit_union: "credit_union";
                    investment_firm: "investment_firm";
                    insurance: "insurance";
                    fintech: "fintech";
                }>;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get institutions by type";
            description: "Returns financial institutions filtered by type";
            method: "GET";
            path: "/api/institutions/type/:type";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<{
                            bank: "bank";
                            credit_union: "credit_union";
                            investment_firm: "investment_firm";
                            insurance: "insurance";
                            fintech: "fintech";
                        }>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
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
        getInstitutionsWithProducts: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get institutions with products";
            description: "Returns financial institutions that have active products";
            method: "GET";
            path: "/api/institutions/with-products";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<{
                            bank: "bank";
                            credit_union: "credit_union";
                            investment_firm: "investment_firm";
                            insurance: "insurance";
                            fintech: "fintech";
                        }>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
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
    Products: {
        createProduct: {
            summary: "Create a new financial product";
            description: "Creates a new financial product (admin only)";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                product_type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    insurance: "insurance";
                    credit_card: "credit_card";
                    debit_card: "debit_card";
                    loan: "loan";
                    savings_account: "savings_account";
                    checking_account: "checking_account";
                    investment: "investment";
                    mortgage: "mortgage";
                }>>;
                institution_id: import("zod").ZodNumber;
                interest_rate: import("zod").ZodOptional<import("zod").ZodNumber>;
                annual_fee: import("zod").ZodOptional<import("zod").ZodNumber>;
                minimum_balance: import("zod").ZodOptional<import("zod").ZodNumber>;
                credit_score_requirement: import("zod").ZodOptional<import("zod").ZodEnum<{
                    excellent: "excellent";
                    good: "good";
                    fair: "fair";
                    poor: "poor";
                }>>;
                benefits: import("zod").ZodOptional<import("zod").ZodString>;
                features: import("zod").ZodOptional<import("zod").ZodString>;
                terms_conditions: import("zod").ZodOptional<import("zod").ZodString>;
                is_spotlight: import("zod").ZodOptional<import("zod").ZodBoolean>;
                is_active: import("zod").ZodOptional<import("zod").ZodBoolean>;
                currency: import("zod").ZodOptional<import("zod").ZodString>;
                valid_from: import("zod").ZodOptional<import("zod").ZodString>;
                valid_until: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/products";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
                409: import("zod").ZodObject<{
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
        getProducts: {
            query: import("zod").ZodObject<{
                product_type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    insurance: "insurance";
                    credit_card: "credit_card";
                    debit_card: "debit_card";
                    loan: "loan";
                    savings_account: "savings_account";
                    checking_account: "checking_account";
                    investment: "investment";
                    mortgage: "mortgage";
                }>>;
                institution_id: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                credit_score_requirement: import("zod").ZodOptional<import("zod").ZodEnum<{
                    excellent: "excellent";
                    good: "good";
                    fair: "fair";
                    poor: "poor";
                }>>;
                is_spotlight: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<boolean, string>>, import("zod").ZodBoolean>>;
                search: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get all financial products";
            description: "Returns all active financial products with optional filtering and search";
            method: "GET";
            path: "/api/products";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getProductsByType: {
            pathParams: import("zod").ZodObject<{
                type: import("zod").ZodEnum<{
                    insurance: "insurance";
                    credit_card: "credit_card";
                    debit_card: "debit_card";
                    loan: "loan";
                    savings_account: "savings_account";
                    checking_account: "checking_account";
                    investment: "investment";
                    mortgage: "mortgage";
                }>;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get products by type";
            description: "Returns financial products filtered by type";
            method: "GET";
            path: "/api/products/type/:type";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
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
        getProductsByInstitution: {
            pathParams: import("zod").ZodObject<{
                institutionId: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get products by institution";
            description: "Returns financial products for a specific institution";
            method: "GET";
            path: "/api/products/institution/:institutionId";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getSpotlightProducts: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get featured products";
            description: "Returns featured financial products";
            method: "GET";
            path: "/api/products/spotlight";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getNoAnnualFeeProducts: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get no-annual-fee products";
            description: "Returns financial products with no annual fee";
            method: "GET";
            path: "/api/products/no-annual-fee";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getProductsByCreditScore: {
            pathParams: import("zod").ZodObject<{
                requirement: import("zod").ZodEnum<{
                    excellent: "excellent";
                    good: "good";
                    fair: "fair";
                    poor: "poor";
                }>;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get products by credit score requirement";
            description: "Returns financial products filtered by credit score requirement";
            method: "GET";
            path: "/api/products/credit-score/:requirement";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
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
        getMyProducts: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get my saved products";
            description: "Returns products saved by the authenticated user";
            method: "GET";
            path: "/api/products/all-my-products/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        removeFromMyProducts: {
            pathParams: import("zod").ZodObject<{
                productId: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Remove product from my list";
            description: "Removes a product from the authenticated user product list";
            method: "DELETE";
            path: "/api/products/my-products/:productId";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
        getProduct: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get a specific financial product";
            description: "Returns a specific financial product by ID";
            method: "GET";
            path: "/api/products/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
        updateProduct: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Update a financial product";
            description: "Updates an existing financial product (admin only)";
            method: "PUT";
            body: import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
                product_type: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    insurance: "insurance";
                    credit_card: "credit_card";
                    debit_card: "debit_card";
                    loan: "loan";
                    savings_account: "savings_account";
                    checking_account: "checking_account";
                    investment: "investment";
                    mortgage: "mortgage";
                }>>>;
                institution_id: import("zod").ZodOptional<import("zod").ZodNumber>;
                interest_rate: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                annual_fee: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                minimum_balance: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                credit_score_requirement: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    excellent: "excellent";
                    good: "good";
                    fair: "fair";
                    poor: "poor";
                }>>>;
                benefits: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                features: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                terms_conditions: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                is_spotlight: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                is_active: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                currency: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                valid_from: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                valid_until: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/products/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<{
                            excellent: "excellent";
                            good: "good";
                            fair: "fair";
                            poor: "poor";
                        }>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
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
        deleteProduct: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Delete a financial product";
            description: "Soft-deletes a financial product (admin only)";
            method: "DELETE";
            path: "/api/products/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
        getMyConnectedProducts: {
            pathParams: import("zod").ZodObject<{
                type: import("zod").ZodEnum<{
                    accounts: "accounts";
                    cards: "cards";
                    loans: "loans";
                    "financial-certificate": "financial-certificate";
                }>;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                from: import("zod").ZodOptional<import("zod").ZodString>;
                to: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            summary: "Get my connected products by type";
            description: "Returns products from bank connections filtered by type. Optional from/to (YYYY-MM-DD) limit debit spend totals. Account products include optional bank_balance and period_spend values with separate currency fields; bank_balance is null when no balance has been reported or recorded.";
            method: "GET";
            path: "/api/products/my-products/connected/:type";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        summary: import("zod").ZodOptional<import("zod").ZodObject<{
                            pending_balance: import("zod").ZodOptional<import("zod").ZodNumber>;
                            initial_debt: import("zod").ZodOptional<import("zod").ZodNumber>;
                            monthly_payment: import("zod").ZodOptional<import("zod").ZodNumber>;
                            total_balance: import("zod").ZodOptional<import("zod").ZodNumber>;
                            monthly_change: import("zod").ZodOptional<import("zod").ZodNumber>;
                            active_count: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
                        products: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            type: import("zod").ZodString;
                            name: import("zod").ZodString;
                            institution: import("zod").ZodString;
                            institution_logo: import("zod").ZodNullable<import("zod").ZodString>;
                            product_kind: import("zod").ZodEnum<{
                                debit: "debit";
                                credit: "credit";
                            }>;
                            product_label: import("zod").ZodString;
                            lastFour: import("zod").ZodString;
                            expense_destination: import("zod").ZodObject<{
                                budget_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                                group_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                            }, import("zod/v4/core").$strip>;
                            is_manual: import("zod").ZodBoolean;
                            card_brand: import("zod").ZodNullable<import("zod").ZodEnum<{
                                visa: "visa";
                                mastercard: "mastercard";
                                amex: "amex";
                            }>>;
                            linked_account_id: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                            balance: import("zod").ZodObject<{
                                current: import("zod").ZodNumber;
                                available: import("zod").ZodNumber;
                                limit: import("zod").ZodNullable<import("zod").ZodNumber>;
                            }, import("zod/v4/core").$strip>;
                            bank_balance: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            bank_balance_currency: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                            period_spend: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
                            period_spend_currency: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                            metadata: import("zod").ZodObject<{
                                utilization: import("zod").ZodNullable<import("zod").ZodNumber>;
                                next_payment: import("zod").ZodNullable<import("zod").ZodString>;
                                minimum_payment: import("zod").ZodNullable<import("zod").ZodNumber>;
                                monthly_payment: import("zod").ZodNullable<import("zod").ZodNumber>;
                                remaining_payments: import("zod").ZodNullable<import("zod").ZodNumber>;
                                progress: import("zod").ZodNullable<import("zod").ZodNumber>;
                                annual_rate: import("zod").ZodNullable<import("zod").ZodString>;
                                investment_contract_months: import("zod").ZodNullable<import("zod").ZodNumber>;
                                risk_level: import("zod").ZodNullable<import("zod").ZodString>;
                                interest_payment: import("zod").ZodNullable<import("zod").ZodString>;
                                initial_value: import("zod").ZodNullable<import("zod").ZodNumber>;
                                accumulated_gain: import("zod").ZodNullable<import("zod").ZodNumber>;
                            }, import("zod/v4/core").$strip>;
                            percentage_change: import("zod").ZodString;
                            currency: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        setMyProductExpenseDestination: {
            pathParams: import("zod").ZodObject<{
                productUuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Set expense destinations for a connected product";
            description: "Sets optional budget and shared group destinations for future imported expenses from this connected product.";
            method: "PATCH";
            body: import("zod").ZodObject<{
                budget_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                group_uuid: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>;
            path: "/api/products/my-products/:productUuid/expense-destination";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        budget_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                        group_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
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
        setMyTransactionExpenseDestination: {
            pathParams: import("zod").ZodObject<{
                transactionUuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Set destinations for a personal expense";
            description: "Assigns an expense to a budget regardless of category, sets its shared group, or excludes it from one category-based budget without changing other budgets.";
            method: "PATCH";
            body: import("zod").ZodObject<{
                budget_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                group_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                excluded_budget_uuid: import("zod").ZodOptional<import("zod").ZodString>;
                budget_excluded: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod/v4/core").$strict>;
            path: "/api/products/my-transactions/:transactionUuid/expense-destination";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        budget_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                        group_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                        excluded_budget_uuids: import("zod").ZodArray<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
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
        getMyTransactions: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                currency: import("zod").ZodOptional<import("zod").ZodEnum<{
                    DOP: "DOP";
                    USD: "USD";
                    EUR: "EUR";
                }>>;
                from: import("zod").ZodOptional<import("zod").ZodString>;
                to: import("zod").ZodOptional<import("zod").ZodString>;
                search: import("zod").ZodOptional<import("zod").ZodString>;
                type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    debit: "debit";
                    credit: "credit";
                    payment: "payment";
                }>>;
                product_uuid: import("zod").ZodOptional<import("zod").ZodString>;
                category: import("zod").ZodOptional<import("zod").ZodString>;
                assignment_candidates: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<boolean, string>>, import("zod").ZodBoolean>>;
                statement_upload_uuid: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            summary: "Get my product transactions";
            description: "Returns product transactions for the authenticated user. Optional currency limits results to DOP, USD, or EUR. Optional from/to (YYYY-MM-DD) limit results to an inclusive date range. Optional search matches description, institution, product, card brand, or last 4. Optional product_uuid limits results to one connected product. assignment_candidates=true includes manual and imported personal expenses regardless of tracking mode for destination assignment. Optional statement_upload_uuid limits results to one accepted statement upload.";
            method: "GET";
            path: "/api/products/my-transactions";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        product_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        transaction_date: import("zod").ZodString;
                        transaction_occurred_at: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        transaction_type: import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                            payment: "payment";
                        }>;
                        category: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        can_edit_category: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        can_assign_to_budget: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        is_imported: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        is_manual: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        institution_name: import("zod").ZodNullable<import("zod").ZodString>;
                        institution_logo: import("zod").ZodNullable<import("zod").ZodString>;
                        product_type: import("zod").ZodNullable<import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>>;
                        product_kind: import("zod").ZodNullable<import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                        }>>;
                        product_label: import("zod").ZodNullable<import("zod").ZodString>;
                        card_brand: import("zod").ZodNullable<import("zod").ZodEnum<{
                            visa: "visa";
                            mastercard: "mastercard";
                            amex: "amex";
                        }>>;
                        linked_account_label: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        budget_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        group_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        excluded_budget_uuids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                        destination_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        budget_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        group_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>;
                    summary: import("zod").ZodObject<{
                        income: import("zod").ZodNumber;
                        expenses: import("zod").ZodNumber;
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
    Transactions: {
        updateEmailExpenseCategory: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Change the category of a personal email expense";
            method: "PATCH";
            body: import("zod").ZodObject<{
                category: import("zod").ZodEnum<{
                    Alimentos: "Alimentos";
                    Transporte: "Transporte";
                    Hogar: "Hogar";
                    Servicios: "Servicios";
                    Suscripciones: "Suscripciones";
                    Compras: "Compras";
                    "Cuidado personal": "Cuidado personal";
                    Salud: "Salud";
                    Educación: "Educación";
                    Entretenimiento: "Entretenimiento";
                    Viajes: "Viajes";
                    Otros: "Otros";
                }>;
            }, import("zod/v4/core").$strict>;
            path: "/api/transactions/email/:uuid/category";
            responses: {
                200: import("zod").ZodObject<{
                    category: import("zod").ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>;
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
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
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
        parseManualTransactionVoice: {
            summary: "Parse an on-device voice transcript into an expense draft";
            description: "Accepts transcript text only, does not store it, and returns a draft for user confirmation.";
            method: "POST";
            body: import("zod").ZodObject<{
                transcript: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/transactions/manual/voice-draft";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        transaction_type: import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                            payment: "payment";
                        }>;
                        amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        transaction_date: import("zod").ZodString;
                        category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>, import("zod").ZodEnum<{
                            Salario: "Salario";
                            "Trabajo independiente": "Trabajo independiente";
                            Ventas: "Ventas";
                            Inversiones: "Inversiones";
                            "Otros ingresos": "Otros ingresos";
                        }>, import("zod").ZodLiteral<"Pago de crédito">]>;
                    }, import("zod/v4/core").$strip>;
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
                403: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        listManualTransactions: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "List manually recorded transactions";
            description: "Returns the authenticated user’s manually recorded expenses and income. Email-enabled accounts see income entries only.";
            method: "GET";
            path: "/api/transactions/manual";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        transaction_date: import("zod").ZodString;
                        transaction_type: import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                            payment: "payment";
                        }>;
                        category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>, import("zod").ZodEnum<{
                            Salario: "Salario";
                            "Trabajo independiente": "Trabajo independiente";
                            Ventas: "Ventas";
                            Inversiones: "Inversiones";
                            "Otros ingresos": "Otros ingresos";
                        }>, import("zod").ZodLiteral<"Pago de crédito">]>;
                        description: import("zod").ZodEnum<{
                            "Gasto manual": "Gasto manual";
                            "Ingreso manual": "Ingreso manual";
                            "Pago manual": "Pago manual";
                        }>;
                        is_manual: import("zod").ZodLiteral<true>;
                        payment_method: import("zod").ZodEnum<{
                            other: "other";
                            cash: "cash";
                            card: "card";
                            apple_pay: "apple_pay";
                            google_pay: "google_pay";
                        }>;
                        product_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                        budget_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        excluded_budget_uuids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                        group_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        destination_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        budget_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        group_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        createManualTransaction: {
            summary: "Record a manual transaction";
            description: "Creates an expense or income without free-text merchant or counterparty details. Email-enabled accounts may create income entries only.";
            method: "POST";
            body: import("zod").ZodObject<{
                request_id: import("zod").ZodOptional<import("zod").ZodString>;
                amount: import("zod").ZodNumber;
                currency: import("zod").ZodEnum<{
                    DOP: "DOP";
                    USD: "USD";
                    EUR: "EUR";
                }>;
                transaction_date: import("zod").ZodString;
                transaction_type: import("zod").ZodDefault<import("zod").ZodEnum<{
                    debit: "debit";
                    credit: "credit";
                    payment: "payment";
                }>>;
                category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                    Alimentos: "Alimentos";
                    Transporte: "Transporte";
                    Hogar: "Hogar";
                    Servicios: "Servicios";
                    Suscripciones: "Suscripciones";
                    Compras: "Compras";
                    "Cuidado personal": "Cuidado personal";
                    Salud: "Salud";
                    Educación: "Educación";
                    Entretenimiento: "Entretenimiento";
                    Viajes: "Viajes";
                    Otros: "Otros";
                }>, import("zod").ZodEnum<{
                    Salario: "Salario";
                    "Trabajo independiente": "Trabajo independiente";
                    Ventas: "Ventas";
                    Inversiones: "Inversiones";
                    "Otros ingresos": "Otros ingresos";
                }>, import("zod").ZodLiteral<"Pago de crédito">]>;
                payment_method: import("zod").ZodOptional<import("zod").ZodEnum<{
                    other: "other";
                    cash: "cash";
                    card: "card";
                    apple_pay: "apple_pay";
                    google_pay: "google_pay";
                }>>;
                product_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                budget_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                group_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                goal_income_allocation: import("zod").ZodOptional<import("zod").ZodObject<{
                    goal_id: import("zod").ZodPipe<import("zod").ZodUnion<readonly [import("zod").ZodNumber, import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>]>, import("zod").ZodNumber>;
                    amount: import("zod").ZodNumber;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strict>;
            path: "/api/transactions/manual";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        transaction_date: import("zod").ZodString;
                        transaction_type: import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                            payment: "payment";
                        }>;
                        category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>, import("zod").ZodEnum<{
                            Salario: "Salario";
                            "Trabajo independiente": "Trabajo independiente";
                            Ventas: "Ventas";
                            Inversiones: "Inversiones";
                            "Otros ingresos": "Otros ingresos";
                        }>, import("zod").ZodLiteral<"Pago de crédito">]>;
                        description: import("zod").ZodEnum<{
                            "Gasto manual": "Gasto manual";
                            "Ingreso manual": "Ingreso manual";
                            "Pago manual": "Pago manual";
                        }>;
                        is_manual: import("zod").ZodLiteral<true>;
                        payment_method: import("zod").ZodEnum<{
                            other: "other";
                            cash: "cash";
                            card: "card";
                            apple_pay: "apple_pay";
                            google_pay: "google_pay";
                        }>;
                        product_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                        budget_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        excluded_budget_uuids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                        group_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        destination_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        budget_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        group_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                    }, import("zod/v4/core").$strip>;
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
                403: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
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
        updateManualTransaction: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Correct a manual transaction";
            description: "Corrects a manual entry owned by the authenticated user, including its transaction type. Email-enabled accounts may update income entries only.";
            method: "PATCH";
            body: import("zod").ZodObject<{
                amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                currency: import("zod").ZodOptional<import("zod").ZodEnum<{
                    DOP: "DOP";
                    USD: "USD";
                    EUR: "EUR";
                }>>;
                transaction_date: import("zod").ZodOptional<import("zod").ZodString>;
                transaction_type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    debit: "debit";
                    credit: "credit";
                    payment: "payment";
                }>>;
                category: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                    Alimentos: "Alimentos";
                    Transporte: "Transporte";
                    Hogar: "Hogar";
                    Servicios: "Servicios";
                    Suscripciones: "Suscripciones";
                    Compras: "Compras";
                    "Cuidado personal": "Cuidado personal";
                    Salud: "Salud";
                    Educación: "Educación";
                    Entretenimiento: "Entretenimiento";
                    Viajes: "Viajes";
                    Otros: "Otros";
                }>, import("zod").ZodEnum<{
                    Salario: "Salario";
                    "Trabajo independiente": "Trabajo independiente";
                    Ventas: "Ventas";
                    Inversiones: "Inversiones";
                    "Otros ingresos": "Otros ingresos";
                }>, import("zod").ZodLiteral<"Pago de crédito">]>>;
                payment_method: import("zod").ZodOptional<import("zod").ZodEnum<{
                    other: "other";
                    cash: "cash";
                    card: "card";
                    apple_pay: "apple_pay";
                    google_pay: "google_pay";
                }>>;
                product_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            }, import("zod/v4/core").$strict>;
            path: "/api/transactions/manual/:uuid";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        transaction_date: import("zod").ZodString;
                        transaction_type: import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                            payment: "payment";
                        }>;
                        category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>, import("zod").ZodEnum<{
                            Salario: "Salario";
                            "Trabajo independiente": "Trabajo independiente";
                            Ventas: "Ventas";
                            Inversiones: "Inversiones";
                            "Otros ingresos": "Otros ingresos";
                        }>, import("zod").ZodLiteral<"Pago de crédito">]>;
                        description: import("zod").ZodEnum<{
                            "Gasto manual": "Gasto manual";
                            "Ingreso manual": "Ingreso manual";
                            "Pago manual": "Pago manual";
                        }>;
                        is_manual: import("zod").ZodLiteral<true>;
                        payment_method: import("zod").ZodEnum<{
                            other: "other";
                            cash: "cash";
                            card: "card";
                            apple_pay: "apple_pay";
                            google_pay: "google_pay";
                        }>;
                        product_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                        budget_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        excluded_budget_uuids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                        group_uuid: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        destination_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        budget_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        group_pending: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                    }, import("zod/v4/core").$strip>;
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
                403: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
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
        deleteManualTransaction: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Delete a manual transaction";
            description: "Soft-deletes a manual entry owned by the authenticated user.";
            method: "DELETE";
            path: "/api/transactions/manual/:uuid";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
    SharedSavings: {
        list: {
            summary: "List shared savings goals for the authenticated user";
            method: "GET";
            path: "/api/shared-savings";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        purpose: import("zod").ZodString;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        target_date: import("zod").ZodString;
                        invite_code: import("zod").ZodString;
                        is_owner: import("zod").ZodBoolean;
                        leaderboard: import("zod").ZodArray<import("zod").ZodObject<{
                            rank: import("zod").ZodNumber;
                            display_name: import("zod").ZodString;
                            contributed_amount: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
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
        create: {
            summary: "Create a shared savings goal";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                purpose: import("zod").ZodString;
                target_amount: import("zod").ZodNumber;
                currency: import("zod").ZodEnum<{
                    DOP: "DOP";
                    USD: "USD";
                    EUR: "EUR";
                }>;
                target_date: import("zod").ZodString;
                display_name: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/shared-savings";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        purpose: import("zod").ZodString;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        target_date: import("zod").ZodString;
                        invite_code: import("zod").ZodString;
                        is_owner: import("zod").ZodBoolean;
                        leaderboard: import("zod").ZodArray<import("zod").ZodObject<{
                            rank: import("zod").ZodNumber;
                            display_name: import("zod").ZodString;
                            contributed_amount: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        join: {
            summary: "Join a shared savings goal with an invite code";
            method: "POST";
            body: import("zod").ZodObject<{
                invite_code: import("zod").ZodString;
                display_name: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/shared-savings/join";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        purpose: import("zod").ZodString;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        target_date: import("zod").ZodString;
                        invite_code: import("zod").ZodString;
                        is_owner: import("zod").ZodBoolean;
                        leaderboard: import("zod").ZodArray<import("zod").ZodObject<{
                            rank: import("zod").ZodNumber;
                            display_name: import("zod").ZodString;
                            contributed_amount: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
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
        contribute: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Add a contribution to a shared savings goal";
            method: "POST";
            body: import("zod").ZodObject<{
                amount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strict>;
            path: "/api/shared-savings/:uuid/contributions";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        purpose: import("zod").ZodString;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        target_date: import("zod").ZodString;
                        invite_code: import("zod").ZodString;
                        is_owner: import("zod").ZodBoolean;
                        leaderboard: import("zod").ZodArray<import("zod").ZodObject<{
                            rank: import("zod").ZodNumber;
                            display_name: import("zod").ZodString;
                            contributed_amount: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
    SharedExpenses: {
        listGroups: {
            summary: "List shared expense groups for the authenticated user";
            method: "GET";
            path: "/api/shared-expenses/groups";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        invite_code: import("zod").ZodNullable<import("zod").ZodString>;
                        invite_link: import("zod").ZodNullable<import("zod").ZodString>;
                        invite_expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_owner: import("zod").ZodBoolean;
                        members: import("zod").ZodArray<import("zod").ZodObject<{
                            display_name: import("zod").ZodString;
                            is_owner: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>;
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
        createGroup: {
            summary: "Create a shared expense group and invite link";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                currency: import("zod").ZodEnum<{
                    DOP: "DOP";
                    USD: "USD";
                    EUR: "EUR";
                }>;
                display_name: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/shared-expenses/groups";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        invite_code: import("zod").ZodNullable<import("zod").ZodString>;
                        invite_link: import("zod").ZodNullable<import("zod").ZodString>;
                        invite_expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_owner: import("zod").ZodBoolean;
                        members: import("zod").ZodArray<import("zod").ZodObject<{
                            display_name: import("zod").ZodString;
                            is_owner: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getGroup: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Get shared expense group and totals";
            method: "GET";
            path: "/api/shared-expenses/groups/:uuid";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        group: import("zod").ZodObject<{
                            uuid: import("zod").ZodString;
                            name: import("zod").ZodString;
                            currency: import("zod").ZodEnum<{
                                DOP: "DOP";
                                USD: "USD";
                                EUR: "EUR";
                            }>;
                            invite_code: import("zod").ZodNullable<import("zod").ZodString>;
                            invite_link: import("zod").ZodNullable<import("zod").ZodString>;
                            invite_expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                            is_owner: import("zod").ZodBoolean;
                            members: import("zod").ZodArray<import("zod").ZodObject<{
                                display_name: import("zod").ZodString;
                                is_owner: import("zod").ZodBoolean;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>;
                        summary: import("zod").ZodObject<{
                            currency: import("zod").ZodEnum<{
                                DOP: "DOP";
                                USD: "USD";
                                EUR: "EUR";
                            }>;
                            expense_total: import("zod").ZodNumber;
                            income_total: import("zod").ZodNumber;
                            net_total: import("zod").ZodNumber;
                            expense_distribution: import("zod").ZodArray<import("zod").ZodObject<{
                                category: import("zod").ZodEnum<{
                                    Alimentos: "Alimentos";
                                    Transporte: "Transporte";
                                    Hogar: "Hogar";
                                    Servicios: "Servicios";
                                    Suscripciones: "Suscripciones";
                                    Compras: "Compras";
                                    "Cuidado personal": "Cuidado personal";
                                    Salud: "Salud";
                                    Educación: "Educación";
                                    Entretenimiento: "Entretenimiento";
                                    Viajes: "Viajes";
                                    Otros: "Otros";
                                }>;
                                amount: import("zod").ZodNumber;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>;
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
        renewInvite: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Replace an expired shared expense invitation";
            method: "POST";
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            path: "/api/shared-expenses/groups/:uuid/invite";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        invite_code: import("zod").ZodNullable<import("zod").ZodString>;
                        invite_link: import("zod").ZodNullable<import("zod").ZodString>;
                        invite_expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_owner: import("zod").ZodBoolean;
                        members: import("zod").ZodArray<import("zod").ZodObject<{
                            display_name: import("zod").ZodString;
                            is_owner: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>>;
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
        joinGroup: {
            summary: "Join a shared expense group with an invite code";
            method: "POST";
            body: import("zod").ZodObject<{
                invite_code: import("zod").ZodString;
                display_name: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/shared-expenses/join";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        group: import("zod").ZodObject<{
                            uuid: import("zod").ZodString;
                            name: import("zod").ZodString;
                            currency: import("zod").ZodEnum<{
                                DOP: "DOP";
                                USD: "USD";
                                EUR: "EUR";
                            }>;
                            invite_code: import("zod").ZodNullable<import("zod").ZodString>;
                            invite_link: import("zod").ZodNullable<import("zod").ZodString>;
                            invite_expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                            is_owner: import("zod").ZodBoolean;
                            members: import("zod").ZodArray<import("zod").ZodObject<{
                                display_name: import("zod").ZodString;
                                is_owner: import("zod").ZodBoolean;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>;
                        summary: import("zod").ZodObject<{
                            currency: import("zod").ZodEnum<{
                                DOP: "DOP";
                                USD: "USD";
                                EUR: "EUR";
                            }>;
                            expense_total: import("zod").ZodNumber;
                            income_total: import("zod").ZodNumber;
                            net_total: import("zod").ZodNumber;
                            expense_distribution: import("zod").ZodArray<import("zod").ZodObject<{
                                category: import("zod").ZodEnum<{
                                    Alimentos: "Alimentos";
                                    Transporte: "Transporte";
                                    Hogar: "Hogar";
                                    Servicios: "Servicios";
                                    Suscripciones: "Suscripciones";
                                    Compras: "Compras";
                                    "Cuidado personal": "Cuidado personal";
                                    Salud: "Salud";
                                    Educación: "Educación";
                                    Entretenimiento: "Entretenimiento";
                                    Viajes: "Viajes";
                                    Otros: "Otros";
                                }>;
                                amount: import("zod").ZodNumber;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
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
        listTransactions: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                from: import("zod").ZodOptional<import("zod").ZodString>;
                to: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            summary: "List group expenses and income with totals";
            method: "GET";
            path: "/api/shared-expenses/groups/:uuid/transactions";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        transaction_date: import("zod").ZodString;
                        transaction_type: import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                        }>;
                        category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>, import("zod").ZodEnum<{
                            Salario: "Salario";
                            "Trabajo independiente": "Trabajo independiente";
                            Ventas: "Ventas";
                            Inversiones: "Inversiones";
                            "Otros ingresos": "Otros ingresos";
                        }>]>;
                        description: import("zod").ZodString;
                        is_manual: import("zod").ZodBoolean;
                        payment_method: import("zod").ZodEnum<{
                            other: "other";
                            cash: "cash";
                            card: "card";
                            apple_pay: "apple_pay";
                            google_pay: "google_pay";
                        }>;
                        is_author: import("zod").ZodBoolean;
                        created_by_name: import("zod").ZodString;
                        read_only: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>;
                    summary: import("zod").ZodObject<{
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        expense_total: import("zod").ZodNumber;
                        income_total: import("zod").ZodNumber;
                        net_total: import("zod").ZodNumber;
                        expense_distribution: import("zod").ZodArray<import("zod").ZodObject<{
                            category: import("zod").ZodEnum<{
                                Alimentos: "Alimentos";
                                Transporte: "Transporte";
                                Hogar: "Hogar";
                                Servicios: "Servicios";
                                Suscripciones: "Suscripciones";
                                Compras: "Compras";
                                "Cuidado personal": "Cuidado personal";
                                Salud: "Salud";
                                Educación: "Educación";
                                Entretenimiento: "Entretenimiento";
                                Viajes: "Viajes";
                                Otros: "Otros";
                            }>;
                            amount: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
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
        createTransaction: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Record a shared expense or income";
            method: "POST";
            body: import("zod").ZodObject<{
                amount: import("zod").ZodNumber;
                transaction_date: import("zod").ZodString;
                transaction_type: import("zod").ZodDefault<import("zod").ZodEnum<{
                    debit: "debit";
                    credit: "credit";
                }>>;
                category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                    Alimentos: "Alimentos";
                    Transporte: "Transporte";
                    Hogar: "Hogar";
                    Servicios: "Servicios";
                    Suscripciones: "Suscripciones";
                    Compras: "Compras";
                    "Cuidado personal": "Cuidado personal";
                    Salud: "Salud";
                    Educación: "Educación";
                    Entretenimiento: "Entretenimiento";
                    Viajes: "Viajes";
                    Otros: "Otros";
                }>, import("zod").ZodEnum<{
                    Salario: "Salario";
                    "Trabajo independiente": "Trabajo independiente";
                    Ventas: "Ventas";
                    Inversiones: "Inversiones";
                    "Otros ingresos": "Otros ingresos";
                }>]>;
                payment_method: import("zod").ZodOptional<import("zod").ZodEnum<{
                    other: "other";
                    cash: "cash";
                    card: "card";
                    apple_pay: "apple_pay";
                    google_pay: "google_pay";
                }>>;
            }, import("zod/v4/core").$strict>;
            path: "/api/shared-expenses/groups/:uuid/transactions";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        transaction_date: import("zod").ZodString;
                        transaction_type: import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                        }>;
                        category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>, import("zod").ZodEnum<{
                            Salario: "Salario";
                            "Trabajo independiente": "Trabajo independiente";
                            Ventas: "Ventas";
                            Inversiones: "Inversiones";
                            "Otros ingresos": "Otros ingresos";
                        }>]>;
                        description: import("zod").ZodString;
                        is_manual: import("zod").ZodBoolean;
                        payment_method: import("zod").ZodEnum<{
                            other: "other";
                            cash: "cash";
                            card: "card";
                            apple_pay: "apple_pay";
                            google_pay: "google_pay";
                        }>;
                        is_author: import("zod").ZodBoolean;
                        created_by_name: import("zod").ZodString;
                        read_only: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
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
        updateTransaction: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
                transactionUuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Correct a shared transaction created by the authenticated user";
            method: "PATCH";
            body: import("zod").ZodObject<{
                amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                transaction_date: import("zod").ZodOptional<import("zod").ZodString>;
                transaction_type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    debit: "debit";
                    credit: "credit";
                }>>;
                category: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                    Alimentos: "Alimentos";
                    Transporte: "Transporte";
                    Hogar: "Hogar";
                    Servicios: "Servicios";
                    Suscripciones: "Suscripciones";
                    Compras: "Compras";
                    "Cuidado personal": "Cuidado personal";
                    Salud: "Salud";
                    Educación: "Educación";
                    Entretenimiento: "Entretenimiento";
                    Viajes: "Viajes";
                    Otros: "Otros";
                }>, import("zod").ZodEnum<{
                    Salario: "Salario";
                    "Trabajo independiente": "Trabajo independiente";
                    Ventas: "Ventas";
                    Inversiones: "Inversiones";
                    "Otros ingresos": "Otros ingresos";
                }>]>>;
                payment_method: import("zod").ZodOptional<import("zod").ZodEnum<{
                    other: "other";
                    cash: "cash";
                    card: "card";
                    apple_pay: "apple_pay";
                    google_pay: "google_pay";
                }>>;
            }, import("zod/v4/core").$strict>;
            path: "/api/shared-expenses/groups/:uuid/transactions/:transactionUuid";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        transaction_date: import("zod").ZodString;
                        transaction_type: import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                        }>;
                        category: import("zod").ZodUnion<readonly [import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>, import("zod").ZodEnum<{
                            Salario: "Salario";
                            "Trabajo independiente": "Trabajo independiente";
                            Ventas: "Ventas";
                            Inversiones: "Inversiones";
                            "Otros ingresos": "Otros ingresos";
                        }>]>;
                        description: import("zod").ZodString;
                        is_manual: import("zod").ZodBoolean;
                        payment_method: import("zod").ZodEnum<{
                            other: "other";
                            cash: "cash";
                            card: "card";
                            apple_pay: "apple_pay";
                            google_pay: "google_pay";
                        }>;
                        is_author: import("zod").ZodBoolean;
                        created_by_name: import("zod").ZodString;
                        read_only: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
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
        deleteTransaction: {
            pathParams: import("zod").ZodObject<{
                uuid: import("zod").ZodString;
                transactionUuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Delete a shared transaction created by the authenticated user";
            method: "DELETE";
            path: "/api/shared-expenses/groups/:uuid/transactions/:transactionUuid";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
    AppFeedback: {
        create: {
            summary: "Submit feedback about the InSync app";
            description: "Stores user-submitted app feedback. The message body is not written to application logs.";
            method: "POST";
            body: import("zod").ZodObject<{
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/app-feedback";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        created_at: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
    };
    BetaTesters: {
        register: {
            strictStatusCodes: true;
            summary: "Register for the InSync beta test group";
            description: "Stores a beta tester registration and updates it when the bank email already exists.";
            method: "POST";
            body: import("zod").ZodObject<{
                full_name: import("zod").ZodString;
                bank_email: import("zod").ZodString;
                operating_system: import("zod").ZodEnum<{
                    android: "android";
                    ios: "ios";
                    both: "both";
                }>;
                interests: import("zod").ZodArray<import("zod").ZodEnum<{
                    other: "other";
                    expense_categories: "expense_categories";
                    automatic_expense_tracking: "automatic_expense_tracking";
                    budgets_and_alerts: "budgets_and_alerts";
                    savings_goals: "savings_goals";
                    debts_loans_and_credit_cards: "debts_loans_and_credit_cards";
                    payment_reminders: "payment_reminders";
                    financial_reports_and_charts: "financial_reports_and_charts";
                    multiple_accounts_and_banks: "multiple_accounts_and_banks";
                }>>;
                other_interest: import("zod").ZodOptional<import("zod").ZodString>;
                consent_accepted: import("zod").ZodLiteral<true>;
            }, import("zod/v4/core").$strict>;
            path: "/api/beta-testers/register";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                400: import("zod").ZodObject<{
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
        };
    };
    Registration: {
        start: {
            strictStatusCodes: true;
            summary: "Start or resume the step-by-step registration";
            description: "Upserts the registration of the token user. The email is taken from the token.";
            method: "POST";
            body: import("zod").ZodObject<{
                first_name: import("zod").ZodString;
                last_name: import("zod").ZodString;
                email: import("zod").ZodOptional<import("zod").ZodUnknown>;
            }, import("zod/v4/core").$strict>;
            path: "/api/registration";
            responses: {
                200: import("zod").ZodObject<{
                    status: import("zod").ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        abandoned: "abandoned";
                    }>;
                    current_step: import("zod").ZodEnum<{
                        document: "document";
                        pin: "pin";
                        done: "done";
                    }>;
                    email: import("zod").ZodNullable<import("zod").ZodString>;
                    first_name: import("zod").ZodNullable<import("zod").ZodString>;
                    last_name: import("zod").ZodNullable<import("zod").ZodString>;
                    last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                    completed_at: import("zod").ZodNullable<import("zod").ZodString>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        submitStep: {
            strictStatusCodes: true;
            summary: "Complete one registration step";
            method: "PATCH";
            body: import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
                step: import("zod").ZodLiteral<"document">;
                info_type: import("zod").ZodEnum<{
                    passport: import("..").DocumentType.PASSPORT;
                    national_id: import("..").DocumentType.NATIONAL_ID;
                }>;
                document_number: import("zod").ZodOptional<import("zod").ZodString>;
                document_url: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
                step: import("zod").ZodLiteral<"pin">;
            }, import("zod/v4/core").$strict>], "step">;
            path: "/api/registration/step";
            responses: {
                200: import("zod").ZodObject<{
                    status: import("zod").ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        abandoned: "abandoned";
                    }>;
                    current_step: import("zod").ZodEnum<{
                        document: "document";
                        pin: "pin";
                        done: "done";
                    }>;
                    email: import("zod").ZodNullable<import("zod").ZodString>;
                    first_name: import("zod").ZodNullable<import("zod").ZodString>;
                    last_name: import("zod").ZodNullable<import("zod").ZodString>;
                    last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                    completed_at: import("zod").ZodNullable<import("zod").ZodString>;
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
        };
        get: {
            strictStatusCodes: true;
            summary: "Get the registration state of the token user";
            method: "GET";
            path: "/api/registration";
            responses: {
                200: import("zod").ZodObject<{
                    status: import("zod").ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        abandoned: "abandoned";
                    }>;
                    current_step: import("zod").ZodEnum<{
                        document: "document";
                        pin: "pin";
                        done: "done";
                    }>;
                    email: import("zod").ZodNullable<import("zod").ZodString>;
                    first_name: import("zod").ZodNullable<import("zod").ZodString>;
                    last_name: import("zod").ZodNullable<import("zod").ZodString>;
                    last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                    completed_at: import("zod").ZodNullable<import("zod").ZodString>;
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
        };
    };
    UserPreferences: {
        upsert: {
            strictStatusCodes: true;
            summary: "Save the token user preferences (IANA timezone)";
            method: "PUT";
            body: import("zod").ZodObject<{
                timezone: import("zod").ZodString;
            }, import("zod/v4/core").$strict>;
            path: "/api/user-preferences";
            responses: {
                200: import("zod").ZodObject<{
                    timezone: import("zod").ZodString;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
    };
    SavingGoalReminders: {
        get: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                goal_type: import("zod").ZodEnum<{
                    personal: "personal";
                    shared: "shared";
                }>;
                goal_id: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Get the token user's reminder for a goal (no row = off)";
            method: "GET";
            path: "/api/saving-goals/:goal_type/:goal_id/reminder";
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
        };
        put: {
            strictStatusCodes: true;
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
            path: "/api/saving-goals/:goal_type/:goal_id/reminder";
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
        };
    };
    PaymentReminders: {
        createPaymentReminder: {
            summary: "Create a new payment reminder";
            description: "Creates a new payment reminder for the authenticated user";
            method: "POST";
            body: import("zod").ZodObject<{
                user_connection_id: import("zod").ZodOptional<import("zod").ZodNumber>;
                title: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                reminder_type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    custom: "custom";
                    credit_card: "credit_card";
                    loan: "loan";
                    bill: "bill";
                    subscription: "subscription";
                }>>;
                amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                currency: import("zod").ZodString;
                due_date: import("zod").ZodString;
                reminder_date: import("zod").ZodOptional<import("zod").ZodString>;
                reminder_status: import("zod").ZodOptional<import("zod").ZodEnum<{
                    pending: "pending";
                    completed: "completed";
                    sent: "sent";
                    acknowledged: "acknowledged";
                    overdue: "overdue";
                }>>;
                priority: import("zod").ZodOptional<import("zod").ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    urgent: "urgent";
                }>>;
                is_recurring: import("zod").ZodOptional<import("zod").ZodBoolean>;
                recurrence_pattern: import("zod").ZodOptional<import("zod").ZodString>;
                notification_settings: import("zod").ZodOptional<import("zod").ZodAny>;
                notes: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/payment-reminders";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getPaymentReminders: {
            query: import("zod").ZodObject<{
                reminder_status: import("zod").ZodOptional<import("zod").ZodEnum<{
                    pending: "pending";
                    completed: "completed";
                    sent: "sent";
                    acknowledged: "acknowledged";
                    overdue: "overdue";
                }>>;
                reminder_type: import("zod").ZodOptional<import("zod").ZodEnum<{
                    custom: "custom";
                    credit_card: "credit_card";
                    loan: "loan";
                    bill: "bill";
                    subscription: "subscription";
                }>>;
                priority: import("zod").ZodOptional<import("zod").ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    urgent: "urgent";
                }>>;
                is_recurring: import("zod").ZodOptional<import("zod").ZodCoercedBoolean<unknown>>;
                search: import("zod").ZodOptional<import("zod").ZodString>;
                from: import("zod").ZodOptional<import("zod").ZodString>;
                to: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
                offset: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get all payment reminders";
            description: "Retrieves all payment reminders for the authenticated user with optional filtering";
            method: "GET";
            path: "/api/payment-reminders";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        getOverdueReminders: {
            summary: "Get overdue payment reminders";
            description: "Retrieves all overdue payment reminders for the authenticated user";
            method: "GET";
            path: "/api/payment-reminders/overdue";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        getUpcomingReminders: {
            query: import("zod").ZodObject<{
                days: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get upcoming payment reminders";
            description: "Retrieves payment reminders due within the specified number of days";
            method: "GET";
            path: "/api/payment-reminders/upcoming";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        getRemindersDueToday: {
            summary: "Get payment reminders due today";
            description: "Retrieves all payment reminders due today for the authenticated user";
            method: "GET";
            path: "/api/payment-reminders/due-today";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        getSentReminderNotifications: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
                offset: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get sent reminder notifications";
            description: "Retrieves push notifications that were sent to the user for payment reminders, newest first";
            method: "GET";
            path: "/api/payment-reminders/notifications";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        title: import("zod").ZodString;
                        phase: import("zod").ZodEnum<{
                            overdue: "overdue";
                            early: "early";
                            due: "due";
                        }>;
                        due_date: import("zod").ZodString;
                        sent_at: import("zod").ZodString;
                        payment_reminder_id: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        getRemindersByType: {
            pathParams: import("zod").ZodObject<{
                type: import("zod").ZodEnum<{
                    custom: "custom";
                    credit_card: "credit_card";
                    loan: "loan";
                    bill: "bill";
                    subscription: "subscription";
                }>;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
                offset: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get payment reminders by type";
            description: "Retrieves payment reminders filtered by type";
            method: "GET";
            path: "/api/payment-reminders/type/:type";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getRemindersByPriority: {
            pathParams: import("zod").ZodObject<{
                priority: import("zod").ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    urgent: "urgent";
                }>;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
                offset: import("zod").ZodDefault<import("zod").ZodCoercedNumber<unknown>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get payment reminders by priority";
            description: "Retrieves payment reminders filtered by priority";
            method: "GET";
            path: "/api/payment-reminders/priority/:priority";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getPaymentReminder: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Get a specific payment reminder";
            description: "Retrieves a specific payment reminder by ID";
            method: "GET";
            path: "/api/payment-reminders-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
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
        updatePaymentReminder: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Update a payment reminder";
            description: "Updates an existing payment reminder";
            method: "PUT";
            body: import("zod").ZodObject<{
                user_connection_id: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                title: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                reminder_type: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    custom: "custom";
                    credit_card: "credit_card";
                    loan: "loan";
                    bill: "bill";
                    subscription: "subscription";
                }>>>;
                amount: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                currency: import("zod").ZodOptional<import("zod").ZodString>;
                due_date: import("zod").ZodOptional<import("zod").ZodString>;
                reminder_date: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                reminder_status: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    pending: "pending";
                    completed: "completed";
                    sent: "sent";
                    acknowledged: "acknowledged";
                    overdue: "overdue";
                }>>>;
                priority: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    urgent: "urgent";
                }>>>;
                is_recurring: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                recurrence_pattern: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                notification_settings: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodAny>>;
                notes: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/payment-reminders-by-id/:id/update/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
        deletePaymentReminder: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Delete a payment reminder";
            description: "Soft deletes a payment reminder";
            method: "DELETE";
            path: "/api/delete-payment-reminders-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
        markAsCompleted: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Mark payment reminder as completed";
            description: "Marks a payment reminder as completed";
            method: "PATCH";
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            path: "/api/complete-payment-reminders-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
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
        markAsAcknowledged: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodCoercedNumber<unknown>;
            }, import("zod/v4/core").$strip>;
            summary: "Mark payment reminder as acknowledged";
            description: "Marks a payment reminder as acknowledged";
            method: "PATCH";
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            path: "/api/acknowledge-payment-reminders-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        series_id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<{
                            custom: "custom";
                            credit_card: "credit_card";
                            loan: "loan";
                            bill: "bill";
                            subscription: "subscription";
                        }>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            sent: "sent";
                            acknowledged: "acknowledged";
                            overdue: "overdue";
                        }>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<{
                            low: "low";
                            medium: "medium";
                            high: "high";
                            urgent: "urgent";
                        }>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
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
    BankConnections: {
        createConnection: {
            strictStatusCodes: true;
            summary: "Create Connection";
            description: "Create a connection from a session ID.";
            method: "POST";
            body: import("zod").ZodObject<{
                sessionId: import("zod").ZodString;
                institution_id: import("zod").ZodNumber;
                nickname: import("zod").ZodOptional<import("zod").ZodString>;
                notes: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/bank-connections/connections";
            responses: {
                200: import("zod").ZodObject<{
                    connection: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        institution_id: import("zod").ZodNumber;
                        external_connection_id: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            error: "error";
                            pending: "pending";
                            active: "active";
                            revoked: "revoked";
                            disconnected: "disconnected";
                        }>;
                        nickname: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        last_sync_at: import("zod").ZodNullable<import("zod").ZodString>;
                        revoked_at: import("zod").ZodNullable<import("zod").ZodString>;
                        expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
                    accessToken: import("zod").ZodString;
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
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                501: import("zod").ZodObject<{
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
        };
        listConnections: {
            strictStatusCodes: true;
            summary: "List Connections";
            description: "List all connections for the authenticated user.";
            method: "GET";
            path: "/api/bank-connections/connections";
            responses: {
                200: import("zod").ZodObject<{
                    connections: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        institution_id: import("zod").ZodNumber;
                        external_connection_id: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            error: "error";
                            pending: "pending";
                            active: "active";
                            revoked: "revoked";
                            disconnected: "disconnected";
                        }>;
                        nickname: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        last_sync_at: import("zod").ZodNullable<import("zod").ZodString>;
                        revoked_at: import("zod").ZodNullable<import("zod").ZodString>;
                        expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
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
        };
        getConnection: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Get Connection";
            description: "Look up a connection by its ID.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId";
            responses: {
                200: import("zod").ZodObject<{
                    connection: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        institution_id: import("zod").ZodNumber;
                        external_connection_id: import("zod").ZodString;
                        status: import("zod").ZodEnum<{
                            error: "error";
                            pending: "pending";
                            active: "active";
                            revoked: "revoked";
                            disconnected: "disconnected";
                        }>;
                        nickname: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        last_sync_at: import("zod").ZodNullable<import("zod").ZodString>;
                        revoked_at: import("zod").ZodNullable<import("zod").ZodString>;
                        expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                    }, import("zod/v4/core").$strip>;
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
        };
        revokeConnection: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Revoke Connection";
            description: "Revoke a connection, blocking future access.";
            method: "DELETE";
            path: "/api/bank-connections/connections/:connectionId";
            responses: {
                204: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
                403: import("zod").ZodObject<{
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
        };
        listAccounts: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "List Accounts";
            description: "List accounts linked to a connection.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId/accounts";
            responses: {
                200: import("zod").ZodObject<{
                    accounts: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        connectionId: import("zod").ZodString;
                        type: import("zod").ZodEnum<{
                            other: "other";
                            credit_card: "credit_card";
                            loan: "loan";
                            investment: "investment";
                            checking: "checking";
                            savings: "savings";
                            depository: "depository";
                        }>;
                        name: import("zod").ZodString;
                        lastFour: import("zod").ZodNullable<import("zod").ZodString>;
                        balance: import("zod").ZodObject<{
                            current: import("zod").ZodNullable<import("zod").ZodNumber>;
                            available: import("zod").ZodNullable<import("zod").ZodNumber>;
                            limit: import("zod").ZodNullable<import("zod").ZodNumber>;
                        }, import("zod/v4/core").$strip>;
                        currency: import("zod").ZodString;
                        lastTransactionRefresh: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
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
                403: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                502: import("zod").ZodObject<{
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
        };
        getAccount: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                accountId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Get Account";
            description: "Look up an account by its ID.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId/accounts/:accountId";
            responses: {
                200: import("zod").ZodObject<{
                    account: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        connectionId: import("zod").ZodString;
                        type: import("zod").ZodEnum<{
                            other: "other";
                            credit_card: "credit_card";
                            loan: "loan";
                            investment: "investment";
                            checking: "checking";
                            savings: "savings";
                            depository: "depository";
                        }>;
                        name: import("zod").ZodString;
                        lastFour: import("zod").ZodNullable<import("zod").ZodString>;
                        balance: import("zod").ZodObject<{
                            current: import("zod").ZodNullable<import("zod").ZodNumber>;
                            available: import("zod").ZodNullable<import("zod").ZodNumber>;
                            limit: import("zod").ZodNullable<import("zod").ZodNumber>;
                        }, import("zod/v4/core").$strip>;
                        currency: import("zod").ZodString;
                        lastTransactionRefresh: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                403: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                502: import("zod").ZodObject<{
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
        };
        listTransactions: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                accountId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                refreshedSince: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>>;
                offset: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>>;
            }, import("zod/v4/core").$strip>;
            summary: "List Transactions";
            description: "List all transactions for an account.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId/accounts/:accountId/transactions";
            responses: {
                200: import("zod").ZodObject<{
                    transactions: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        accountId: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        date: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reference: import("zod").ZodNullable<import("zod").ZodString>;
                        status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            cancelled: "cancelled";
                            failed: "failed";
                        }>;
                        transactionRefresh: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
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
                403: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                502: import("zod").ZodObject<{
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
        };
        getTransaction: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                accountId: import("zod").ZodString;
                transactionId: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Get Transaction";
            description: "Look up a transaction by its identifier.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId/accounts/:accountId/transactions/:transactionId";
            responses: {
                200: import("zod").ZodObject<{
                    transaction: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        accountId: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        date: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reference: import("zod").ZodNullable<import("zod").ZodString>;
                        status: import("zod").ZodEnum<{
                            pending: "pending";
                            completed: "completed";
                            cancelled: "cancelled";
                            failed: "failed";
                        }>;
                        transactionRefresh: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                403: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                404: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                502: import("zod").ZodObject<{
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
        };
    };
    Budgets: {
        createBudget: {
            summary: "Create a new budget";
            description: "Creates a new budget for the authenticated user";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                budget_period: import("zod").ZodOptional<import("zod").ZodEnum<{
                    monthly: "monthly";
                    quarterly: "quarterly";
                    yearly: "yearly";
                }>>;
                start_date: import("zod").ZodString;
                end_date: import("zod").ZodString;
                total_amount: import("zod").ZodNumber;
                currency: import("zod").ZodDefault<import("zod").ZodString>;
                is_active: import("zod").ZodOptional<import("zod").ZodBoolean>;
                notes: import("zod").ZodString;
                settings: import("zod").ZodOptional<import("zod").ZodAny>;
                category: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>;
                categories: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/budgets";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<{
                            monthly: "monthly";
                            quarterly: "quarterly";
                            yearly: "yearly";
                        }>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        used_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        category: import("zod").ZodNullable<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        categories: import("zod").ZodArray<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        needs_category: import("zod").ZodBoolean;
                        spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                        percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        status: import("zod").ZodNullable<import("zod").ZodEnum<{
                            ok: "ok";
                            near_limit: "near_limit";
                            exceeded: "exceeded";
                        }>>;
                        period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        counted_expense_types: import("zod").ZodArray<import("zod").ZodEnum<{
                            manual: "manual";
                            voice: "voice";
                        }>>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getBudgets: {
            query: import("zod").ZodObject<{
                budget_period: import("zod").ZodOptional<import("zod").ZodEnum<{
                    monthly: "monthly";
                    quarterly: "quarterly";
                    yearly: "yearly";
                }>>;
                is_active: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<boolean, string>>, import("zod").ZodBoolean>>;
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get all budgets";
            description: "Returns all budgets for the authenticated user with optional filtering";
            method: "GET";
            path: "/api/budgets";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<{
                            monthly: "monthly";
                            quarterly: "quarterly";
                            yearly: "yearly";
                        }>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        used_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        category: import("zod").ZodNullable<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        categories: import("zod").ZodArray<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        needs_category: import("zod").ZodBoolean;
                        spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                        percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        status: import("zod").ZodNullable<import("zod").ZodEnum<{
                            ok: "ok";
                            near_limit: "near_limit";
                            exceeded: "exceeded";
                        }>>;
                        period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        counted_expense_types: import("zod").ZodArray<import("zod").ZodEnum<{
                            manual: "manual";
                            voice: "voice";
                        }>>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        getBudget: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get a specific budget";
            description: "Returns a specific budget by ID for the authenticated user";
            method: "GET";
            path: "/api/budgets/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<{
                            monthly: "monthly";
                            quarterly: "quarterly";
                            yearly: "yearly";
                        }>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        used_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        category: import("zod").ZodNullable<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        categories: import("zod").ZodArray<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        needs_category: import("zod").ZodBoolean;
                        spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                        percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        status: import("zod").ZodNullable<import("zod").ZodEnum<{
                            ok: "ok";
                            near_limit: "near_limit";
                            exceeded: "exceeded";
                        }>>;
                        period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        counted_expense_types: import("zod").ZodArray<import("zod").ZodEnum<{
                            manual: "manual";
                            voice: "voice";
                        }>>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
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
        updateBudget: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Update a budget";
            description: "Updates an existing budget for the authenticated user";
            method: "PUT";
            body: import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
                budget_period: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<{
                    monthly: "monthly";
                    quarterly: "quarterly";
                    yearly: "yearly";
                }>>>;
                start_date: import("zod").ZodOptional<import("zod").ZodString>;
                end_date: import("zod").ZodOptional<import("zod").ZodString>;
                total_amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                currency: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodString>>;
                is_active: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                notes: import("zod").ZodOptional<import("zod").ZodString>;
                settings: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodAny>>;
                category: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>;
                categories: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/budgets/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<{
                            monthly: "monthly";
                            quarterly: "quarterly";
                            yearly: "yearly";
                        }>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        used_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        category: import("zod").ZodNullable<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        categories: import("zod").ZodArray<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        needs_category: import("zod").ZodBoolean;
                        spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                        percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        status: import("zod").ZodNullable<import("zod").ZodEnum<{
                            ok: "ok";
                            near_limit: "near_limit";
                            exceeded: "exceeded";
                        }>>;
                        period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        counted_expense_types: import("zod").ZodArray<import("zod").ZodEnum<{
                            manual: "manual";
                            voice: "voice";
                        }>>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
        deleteBudget: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Delete a budget";
            description: "Soft-deletes a budget for the authenticated user";
            method: "DELETE";
            path: "/api/budgets/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
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
        getActiveBudgets: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get active budgets";
            description: "Returns all active budgets for the authenticated user";
            method: "GET";
            path: "/api/budgets/active";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<{
                            monthly: "monthly";
                            quarterly: "quarterly";
                            yearly: "yearly";
                        }>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        used_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        category: import("zod").ZodNullable<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        categories: import("zod").ZodArray<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        needs_category: import("zod").ZodBoolean;
                        spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                        percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        status: import("zod").ZodNullable<import("zod").ZodEnum<{
                            ok: "ok";
                            near_limit: "near_limit";
                            exceeded: "exceeded";
                        }>>;
                        period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        counted_expense_types: import("zod").ZodArray<import("zod").ZodEnum<{
                            manual: "manual";
                            voice: "voice";
                        }>>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
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
        getBudgetsByPeriod: {
            pathParams: import("zod").ZodObject<{
                period: import("zod").ZodEnum<{
                    monthly: "monthly";
                    quarterly: "quarterly";
                    yearly: "yearly";
                }>;
            }, import("zod/v4/core").$strip>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
                offset: import("zod").ZodPrefault<import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>, import("zod").ZodNumber>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get budgets by period";
            description: "Returns budgets filtered by period for the authenticated user";
            method: "GET";
            path: "/api/budgets/period/:period";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<{
                            monthly: "monthly";
                            quarterly: "quarterly";
                            yearly: "yearly";
                        }>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        used_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        category: import("zod").ZodNullable<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        categories: import("zod").ZodArray<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        needs_category: import("zod").ZodBoolean;
                        spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                        percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        status: import("zod").ZodNullable<import("zod").ZodEnum<{
                            ok: "ok";
                            near_limit: "near_limit";
                            exceeded: "exceeded";
                        }>>;
                        period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        counted_expense_types: import("zod").ZodArray<import("zod").ZodEnum<{
                            manual: "manual";
                            voice: "voice";
                        }>>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, import("zod/v4/core").$strip>>;
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
                500: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        updateBudgetUsedAmount: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Update budget used amount (deprecated)";
            description: "Deprecated: spent is computed live from manual and voice expenses. Still writes the stored used_amount for old clients.";
            deprecated: true;
            method: "PATCH";
            body: import("zod").ZodObject<{
                used_amount: import("zod").ZodNumber;
            }, import("zod/v4/core").$strip>;
            path: "/api/budgets/:id/used-amount";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<{
                            monthly: "monthly";
                            quarterly: "quarterly";
                            yearly: "yearly";
                        }>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        used_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        category: import("zod").ZodNullable<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        categories: import("zod").ZodArray<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        needs_category: import("zod").ZodBoolean;
                        spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                        percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        status: import("zod").ZodNullable<import("zod").ZodEnum<{
                            ok: "ok";
                            near_limit: "near_limit";
                            exceeded: "exceeded";
                        }>>;
                        period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        counted_expense_types: import("zod").ZodArray<import("zod").ZodEnum<{
                            manual: "manual";
                            voice: "voice";
                        }>>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
        updateBudgetCategory: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>;
            }, import("zod/v4/core").$strip>;
            summary: "Change budget category";
            description: "Sets the expense category the budget counts. Spent is recomputed on read.";
            method: "PATCH";
            body: import("zod").ZodObject<{
                category: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>;
                categories: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>;
            }, import("zod/v4/core").$strict>;
            path: "/api/budgets/:id/category";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<{
                            monthly: "monthly";
                            quarterly: "quarterly";
                            yearly: "yearly";
                        }>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        used_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                        category: import("zod").ZodNullable<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        categories: import("zod").ZodArray<import("zod").ZodEnum<{
                            Alimentos: "Alimentos";
                            Transporte: "Transporte";
                            Hogar: "Hogar";
                            Servicios: "Servicios";
                            Suscripciones: "Suscripciones";
                            Compras: "Compras";
                            "Cuidado personal": "Cuidado personal";
                            Salud: "Salud";
                            Educación: "Educación";
                            Entretenimiento: "Entretenimiento";
                            Viajes: "Viajes";
                            Otros: "Otros";
                        }>>;
                        needs_category: import("zod").ZodBoolean;
                        spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                        percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                        status: import("zod").ZodNullable<import("zod").ZodEnum<{
                            ok: "ok";
                            near_limit: "near_limit";
                            exceeded: "exceeded";
                        }>>;
                        period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                        counted_expense_types: import("zod").ZodArray<import("zod").ZodEnum<{
                            manual: "manual";
                            voice: "voice";
                        }>>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>;
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
    Dashboard: {
        getDashboard: {
            summary: "Get full dashboard data";
            description: "Returns expense summaries, budgets, saving goals, financial indicators, recent expense activity, and expense insights.";
            method: "GET";
            path: "/api/dashboard";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        monthlySummary: import("zod").ZodObject<{
                            expenses: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        currencySummaries: import("zod").ZodArray<import("zod").ZodObject<{
                            currency: import("zod").ZodEnum<{
                                DOP: "DOP";
                                USD: "USD";
                                EUR: "EUR";
                            }>;
                            expenses: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
                        budgets: import("zod").ZodObject<{
                            overview: import("zod").ZodObject<{
                                total: import("zod").ZodNumber;
                                totalUsed: import("zod").ZodNumber;
                            }, import("zod/v4/core").$strip>;
                            budgets: import("zod").ZodArray<import("zod").ZodObject<{
                                id: import("zod").ZodNumber;
                                uuid: import("zod").ZodString;
                                name: import("zod").ZodString;
                                budget_period: import("zod").ZodEnum<{
                                    monthly: "monthly";
                                    quarterly: "quarterly";
                                    yearly: "yearly";
                                }>;
                                start_date: import("zod").ZodDate;
                                end_date: import("zod").ZodDate;
                                total_amount: import("zod").ZodNumber;
                                used_amount: import("zod").ZodNumber;
                                currency: import("zod").ZodString;
                                is_active: import("zod").ZodBoolean;
                                notes: import("zod").ZodNullable<import("zod").ZodString>;
                                settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                                spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                                remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                                percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                                status: import("zod").ZodNullable<import("zod").ZodEnum<{
                                    ok: "ok";
                                    near_limit: "near_limit";
                                    exceeded: "exceeded";
                                }>>;
                                needs_category: import("zod").ZodBoolean;
                                period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>;
                        savingGoals: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            currentAmount: import("zod").ZodNumber;
                            targetAmount: import("zod").ZodNumber;
                            progress: import("zod").ZodNumber;
                            color: import("zod").ZodOptional<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        financialIndicators: import("zod").ZodObject<{
                            monthlyExpenses: import("zod").ZodObject<{
                                amount: import("zod").ZodNumber;
                                previousMonthAmount: import("zod").ZodNumber;
                                changePercentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<{
                                    down: "down";
                                    up: "up";
                                    stable: "stable";
                                }>;
                            }, import("zod/v4/core").$strip>;
                            budgetUsage: import("zod").ZodObject<{
                                total: import("zod").ZodNumber;
                                used: import("zod").ZodNumber;
                                remaining: import("zod").ZodNumber;
                                percentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<{
                                    on_track: "on_track";
                                    warning: "warning";
                                    over_budget: "over_budget";
                                    no_budget: "no_budget";
                                }>;
                            }, import("zod/v4/core").$strip>;
                            expenseProjection: import("zod").ZodObject<{
                                currentAmount: import("zod").ZodNumber;
                                projectedAmount: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<{
                                    on_track: "on_track";
                                    warning: "warning";
                                    over_pace: "over_pace";
                                    no_data: "no_data";
                                }>;
                            }, import("zod/v4/core").$strip>;
                            topCategory: import("zod").ZodObject<{
                                category: import("zod").ZodNullable<import("zod").ZodString>;
                                amount: import("zod").ZodNumber;
                                percentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<{
                                    available: "available";
                                    empty: "empty";
                                }>;
                            }, import("zod/v4/core").$strip>;
                        }, import("zod/v4/core").$strip>;
                        recentMovements: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            description: import("zod").ZodString;
                            amount: import("zod").ZodNumber;
                            currency: import("zod").ZodString;
                            type: import("zod").ZodLiteral<"expense">;
                            date: import("zod").ZodDate;
                            status: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        upcomingEvents: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            description: import("zod").ZodString;
                            date: import("zod").ZodDate;
                            amount: import("zod").ZodNumber;
                            type: import("zod").ZodLiteral<"expense">;
                        }, import("zod/v4/core").$strip>>;
                        expenseDistribution: import("zod").ZodArray<import("zod").ZodObject<{
                            category: import("zod").ZodString;
                            percentage: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        expenseDistributionByCurrency: import("zod").ZodArray<import("zod").ZodObject<{
                            currency: import("zod").ZodEnum<{
                                DOP: "DOP";
                                USD: "USD";
                                EUR: "EUR";
                            }>;
                            items: import("zod").ZodArray<import("zod").ZodObject<{
                                category: import("zod").ZodString;
                                percentage: import("zod").ZodNumber;
                                amount: import("zod").ZodNumber;
                                color: import("zod").ZodString;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>>;
                        recommendations: import("zod").ZodArray<import("zod").ZodString>;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        getDashboardSummary: {
            summary: "Get dashboard summary";
            description: "Returns the monthly expense summary and email sync status.";
            method: "GET";
            path: "/api/dashboard/summary";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        monthlySummary: import("zod").ZodObject<{
                            expenses: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        refreshDashboard: {
            summary: "Refresh dashboard data";
            description: "Forces bank data synchronization and regenerates dashboard data with up-to-date information.";
            method: "POST";
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            path: "/api/dashboard/refresh";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        monthlySummary: import("zod").ZodObject<{
                            expenses: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        currencySummaries: import("zod").ZodArray<import("zod").ZodObject<{
                            currency: import("zod").ZodEnum<{
                                DOP: "DOP";
                                USD: "USD";
                                EUR: "EUR";
                            }>;
                            expenses: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
                        budgets: import("zod").ZodObject<{
                            overview: import("zod").ZodObject<{
                                total: import("zod").ZodNumber;
                                totalUsed: import("zod").ZodNumber;
                            }, import("zod/v4/core").$strip>;
                            budgets: import("zod").ZodArray<import("zod").ZodObject<{
                                id: import("zod").ZodNumber;
                                uuid: import("zod").ZodString;
                                name: import("zod").ZodString;
                                budget_period: import("zod").ZodEnum<{
                                    monthly: "monthly";
                                    quarterly: "quarterly";
                                    yearly: "yearly";
                                }>;
                                start_date: import("zod").ZodDate;
                                end_date: import("zod").ZodDate;
                                total_amount: import("zod").ZodNumber;
                                used_amount: import("zod").ZodNumber;
                                currency: import("zod").ZodString;
                                is_active: import("zod").ZodBoolean;
                                notes: import("zod").ZodNullable<import("zod").ZodString>;
                                settings: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>;
                                spent: import("zod").ZodNullable<import("zod").ZodNumber>;
                                remaining: import("zod").ZodNullable<import("zod").ZodNumber>;
                                percent: import("zod").ZodNullable<import("zod").ZodNumber>;
                                status: import("zod").ZodNullable<import("zod").ZodEnum<{
                                    ok: "ok";
                                    near_limit: "near_limit";
                                    exceeded: "exceeded";
                                }>>;
                                needs_category: import("zod").ZodBoolean;
                                period_active: import("zod").ZodNullable<import("zod").ZodBoolean>;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>;
                        savingGoals: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            currentAmount: import("zod").ZodNumber;
                            targetAmount: import("zod").ZodNumber;
                            progress: import("zod").ZodNumber;
                            color: import("zod").ZodOptional<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        financialIndicators: import("zod").ZodObject<{
                            monthlyExpenses: import("zod").ZodObject<{
                                amount: import("zod").ZodNumber;
                                previousMonthAmount: import("zod").ZodNumber;
                                changePercentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<{
                                    down: "down";
                                    up: "up";
                                    stable: "stable";
                                }>;
                            }, import("zod/v4/core").$strip>;
                            budgetUsage: import("zod").ZodObject<{
                                total: import("zod").ZodNumber;
                                used: import("zod").ZodNumber;
                                remaining: import("zod").ZodNumber;
                                percentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<{
                                    on_track: "on_track";
                                    warning: "warning";
                                    over_budget: "over_budget";
                                    no_budget: "no_budget";
                                }>;
                            }, import("zod/v4/core").$strip>;
                            expenseProjection: import("zod").ZodObject<{
                                currentAmount: import("zod").ZodNumber;
                                projectedAmount: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<{
                                    on_track: "on_track";
                                    warning: "warning";
                                    over_pace: "over_pace";
                                    no_data: "no_data";
                                }>;
                            }, import("zod/v4/core").$strip>;
                            topCategory: import("zod").ZodObject<{
                                category: import("zod").ZodNullable<import("zod").ZodString>;
                                amount: import("zod").ZodNumber;
                                percentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<{
                                    available: "available";
                                    empty: "empty";
                                }>;
                            }, import("zod/v4/core").$strip>;
                        }, import("zod/v4/core").$strip>;
                        recentMovements: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            description: import("zod").ZodString;
                            amount: import("zod").ZodNumber;
                            currency: import("zod").ZodString;
                            type: import("zod").ZodLiteral<"expense">;
                            date: import("zod").ZodDate;
                            status: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        upcomingEvents: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            description: import("zod").ZodString;
                            date: import("zod").ZodDate;
                            amount: import("zod").ZodNumber;
                            type: import("zod").ZodLiteral<"expense">;
                        }, import("zod/v4/core").$strip>>;
                        expenseDistribution: import("zod").ZodArray<import("zod").ZodObject<{
                            category: import("zod").ZodString;
                            percentage: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        expenseDistributionByCurrency: import("zod").ZodArray<import("zod").ZodObject<{
                            currency: import("zod").ZodEnum<{
                                DOP: "DOP";
                                USD: "USD";
                                EUR: "EUR";
                            }>;
                            items: import("zod").ZodArray<import("zod").ZodObject<{
                                category: import("zod").ZodString;
                                percentage: import("zod").ZodNumber;
                                amount: import("zod").ZodNumber;
                                color: import("zod").ZodString;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>>;
                        recommendations: import("zod").ZodArray<import("zod").ZodString>;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
    };
    CreditUtilization: {
        getCreditUtilization: {
            summary: "Get credit utilization data";
            description: "Returns all data for the credit utilization screen, including credit metrics, cards, payment history, monthly spending, and recommendations.";
            method: "GET";
            path: "/api/credit-utilization";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        creditMetrics: import("zod").ZodObject<{
                            availableCredit: import("zod").ZodNumber;
                            totalLimit: import("zod").ZodNumber;
                            utilizationPercentage: import("zod").ZodNumber;
                            recommendedUtilization: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        creditCards: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            bankName: import("zod").ZodString;
                            cardType: import("zod").ZodString;
                            utilizedPercentage: import("zod").ZodNumber;
                            totalLimit: import("zod").ZodNumber;
                            availableAmount: import("zod").ZodNumber;
                            usedAmount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        paymentHistory: import("zod").ZodObject<{
                            onTimePayments: import("zod").ZodNumber;
                            averagePayment: import("zod").ZodNumber;
                            totalPayments: import("zod").ZodNumber;
                            latePayments: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        monthlySpending: import("zod").ZodArray<import("zod").ZodObject<{
                            month: import("zod").ZodString;
                            year: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            monthName: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        creditProductsSummary: import("zod").ZodObject<{
                            activeCreditCards: import("zod").ZodNumber;
                            activeLoans: import("zod").ZodNumber;
                            availableCreditLines: import("zod").ZodNumber;
                            totalCreditLimit: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        recommendations: import("zod").ZodArray<import("zod").ZodString>;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        refreshCreditUtilization: {
            summary: "Refresh credit utilization data";
            description: "Forces bank data synchronization and regenerates credit utilization data with up-to-date information.";
            method: "POST";
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            path: "/api/credit-utilization/refresh";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        creditMetrics: import("zod").ZodObject<{
                            availableCredit: import("zod").ZodNumber;
                            totalLimit: import("zod").ZodNumber;
                            utilizationPercentage: import("zod").ZodNumber;
                            recommendedUtilization: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        creditCards: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            bankName: import("zod").ZodString;
                            cardType: import("zod").ZodString;
                            utilizedPercentage: import("zod").ZodNumber;
                            totalLimit: import("zod").ZodNumber;
                            availableAmount: import("zod").ZodNumber;
                            usedAmount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        paymentHistory: import("zod").ZodObject<{
                            onTimePayments: import("zod").ZodNumber;
                            averagePayment: import("zod").ZodNumber;
                            totalPayments: import("zod").ZodNumber;
                            latePayments: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        monthlySpending: import("zod").ZodArray<import("zod").ZodObject<{
                            month: import("zod").ZodString;
                            year: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            monthName: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        creditProductsSummary: import("zod").ZodObject<{
                            activeCreditCards: import("zod").ZodNumber;
                            activeLoans: import("zod").ZodNumber;
                            availableCreditLines: import("zod").ZodNumber;
                            totalCreditLimit: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        recommendations: import("zod").ZodArray<import("zod").ZodString>;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
    };
    FinancialTrends: {
        getFinancialTrends: {
            query: import("zod").ZodObject<{
                currency: import("zod").ZodOptional<import("zod").ZodEnum<{
                    DOP: "DOP";
                    USD: "USD";
                    EUR: "EUR";
                }>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get financial trends data";
            description: "Returns expense-only data for the selected currency, including month-over-month comparisons, category growth, and end-of-month spending projections.";
            method: "GET";
            path: "/api/financial-trends";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        monthlyComparison: import("zod").ZodObject<{
                            expensesVsPreviousMonth: import("zod").ZodNullable<import("zod").ZodNumber>;
                            currentExpenses: import("zod").ZodNumber;
                            previousExpenses: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        categoryGrowth: import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            percentageChange: import("zod").ZodNullable<import("zod").ZodNumber>;
                            currentAmount: import("zod").ZodNumber;
                            previousAmount: import("zod").ZodNumber;
                            trend: import("zod").ZodEnum<{
                                down: "down";
                                up: "up";
                                neutral: "neutral";
                            }>;
                        }, import("zod/v4/core").$strip>>;
                        monthEndProjection: import("zod").ZodObject<{
                            projectedExpenses: import("zod").ZodNumber;
                            trend: import("zod").ZodEnum<{
                                down: "down";
                                up: "up";
                                neutral: "neutral";
                            }>;
                        }, import("zod/v4/core").$strip>;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
        refreshFinancialTrends: {
            summary: "Refresh financial trends data";
            description: "Regenerates expense comparisons, category growth, and spending projections from recorded expenses.";
            method: "POST";
            body: import("zod").ZodObject<{}, import("zod/v4/core").$strip>;
            path: "/api/financial-trends/refresh";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        monthlyComparison: import("zod").ZodObject<{
                            expensesVsPreviousMonth: import("zod").ZodNullable<import("zod").ZodNumber>;
                            currentExpenses: import("zod").ZodNumber;
                            previousExpenses: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        categoryGrowth: import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            percentageChange: import("zod").ZodNullable<import("zod").ZodNumber>;
                            currentAmount: import("zod").ZodNumber;
                            previousAmount: import("zod").ZodNumber;
                            trend: import("zod").ZodEnum<{
                                down: "down";
                                up: "up";
                                neutral: "neutral";
                            }>;
                        }, import("zod/v4/core").$strip>>;
                        monthEndProjection: import("zod").ZodObject<{
                            projectedExpenses: import("zod").ZodNumber;
                            trend: import("zod").ZodEnum<{
                                down: "down";
                                up: "up";
                                neutral: "neutral";
                            }>;
                        }, import("zod/v4/core").$strip>;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
    };
    Reports: {
        getReports: {
            query: import("zod").ZodObject<{
                currency: import("zod").ZodOptional<import("zod").ZodEnum<{
                    DOP: "DOP";
                    USD: "USD";
                    EUR: "EUR";
                }>>;
            }, import("zod/v4/core").$strip>;
            summary: "Get full financial reports";
            description: "Returns financial summary, monthly trend, and expense distribution. Totals default to DOP; the optional currency selects DOP, USD, or EUR.";
            method: "GET";
            path: "/api/reports";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodBoolean;
                    data: import("zod").ZodObject<{
                        currency: import("zod").ZodEnum<{
                            DOP: "DOP";
                            USD: "USD";
                            EUR: "EUR";
                        }>;
                        summary: import("zod").ZodObject<{
                            expenses: import("zod").ZodNumber;
                            totalBudget: import("zod").ZodNumber;
                            budgetSpent: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>;
                        monthlyTrend: import("zod").ZodObject<{
                            months: import("zod").ZodArray<import("zod").ZodString>;
                            expenses: import("zod").ZodArray<import("zod").ZodNumber>;
                            period: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>;
                        expenseDistribution: import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            percentage: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, import("zod/v4/core").$strip>>;
                        expenseInsights: import("zod").ZodArray<import("zod").ZodObject<{
                            type: import("zod").ZodEnum<{
                                warning: "warning";
                                positive: "positive";
                                info: "info";
                            }>;
                            title: import("zod").ZodString;
                            description: import("zod").ZodString;
                            percentageChange: import("zod").ZodNumber;
                            category: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>;
                    message: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodObject<{
                        message: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodObject<{
                        message: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>;
                }, import("zod/v4/core").$strip>;
            };
            strictStatusCodes: true;
        };
    };
    EmailIngestion: {
        gmailOAuthStart: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                code_challenge: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Start Gmail OAuth";
            method: "GET";
            path: "/api/email-ingestion/gmail/oauth/start";
            responses: {
                200: import("zod").ZodObject<{
                    authorizationUrl: import("zod").ZodString;
                    state: import("zod").ZodString;
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
                403: import("zod").ZodObject<{
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
        };
        gmailOAuthCallback: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                code: import("zod").ZodOptional<import("zod").ZodString>;
                state: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            summary: "Gmail OAuth callback";
            method: "GET";
            path: "/api/email-ingestion/gmail/oauth/callback";
            responses: {
                302: import("zod").ZodOptional<import("zod").ZodObject<{
                    redirect: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
                400: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        outlookOAuthStart: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                code_challenge: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Start Outlook OAuth";
            method: "GET";
            path: "/api/email-ingestion/outlook/oauth/start";
            responses: {
                200: import("zod").ZodObject<{
                    authorizationUrl: import("zod").ZodString;
                    state: import("zod").ZodString;
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
                403: import("zod").ZodObject<{
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
        };
        oauthComplete: {
            strictStatusCodes: true;
            summary: "Complete a client-bound OAuth callback";
            method: "POST";
            body: import("zod").ZodObject<{
                ticket: import("zod").ZodString;
                code_verifier: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            path: "/api/email-ingestion/oauth/complete";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    provider: import("zod").ZodEnum<typeof import("..").EmailProvider>;
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
                403: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                409: import("zod").ZodObject<{
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
        };
        outlookOAuthCallback: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                code: import("zod").ZodOptional<import("zod").ZodString>;
                state: import("zod").ZodOptional<import("zod").ZodString>;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                error_description: import("zod").ZodOptional<import("zod").ZodString>;
                error_uri: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            summary: "Outlook OAuth callback";
            method: "GET";
            path: "/api/email-ingestion/outlook/oauth/callback";
            responses: {
                302: import("zod").ZodOptional<import("zod").ZodObject<{
                    redirect: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
                400: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
            };
        };
        listEmailConnections: {
            strictStatusCodes: true;
            summary: "List email provider connections";
            method: "GET";
            path: "/api/email-ingestion/connections";
            responses: {
                200: import("zod").ZodObject<{
                    connections: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        provider: import("zod").ZodEnum<typeof import("..").EmailProvider>;
                        status: import("zod").ZodEnum<typeof import("..").EmailConnectionStatus>;
                        provider_account_id: import("zod").ZodNullable<import("zod").ZodString>;
                        last_successful_sync_at: import("zod").ZodNullable<import("zod").ZodString>;
                        last_error_message: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                403: import("zod").ZodObject<{
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
        };
        disconnectConnection: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionUuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Disconnect email provider";
            method: "DELETE";
            path: "/api/email-ingestion/connections/:connectionUuid";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
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
                403: import("zod").ZodObject<{
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
        };
        syncConnection: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionUuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Enqueue manual email sync";
            method: "POST";
            body: import("zod").ZodObject<{
                institution_key: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/email-ingestion/connections/:connectionUuid/sync";
            responses: {
                200: import("zod").ZodObject<{
                    enqueued: import("zod").ZodLiteral<true>;
                    job_uuid: import("zod").ZodString;
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
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                403: import("zod").ZodObject<{
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
        };
        getSyncStatus: {
            strictStatusCodes: true;
            summary: "Email ingestion sync status for the authenticated user";
            method: "GET";
            path: "/api/email-ingestion/sync-status";
            responses: {
                200: import("zod").ZodObject<{
                    is_syncing: import("zod").ZodBoolean;
                    imported_total: import("zod").ZodNumber;
                    supported_institutions: import("zod").ZodArray<import("zod").ZodObject<{
                        key: import("zod").ZodString;
                        name: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    connections: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        provider: import("zod").ZodEnum<typeof import("..").EmailProvider>;
                        sync_state: import("zod").ZodEnum<{
                            failed: "failed";
                            idle: "idle";
                            syncing: "syncing";
                        }>;
                        last_successful_sync_at: import("zod").ZodNullable<import("zod").ZodString>;
                        active_job_uuid: import("zod").ZodNullable<import("zod").ZodString>;
                        error_message: import("zod").ZodNullable<import("zod").ZodString>;
                        last_summary: import("zod").ZodNullable<import("zod").ZodObject<{
                            messages_seen: import("zod").ZodNumber;
                            messages_routed: import("zod").ZodNumber;
                            duration_ms: import("zod").ZodNumber;
                            imported: import("zod").ZodNumber;
                            discovered: import("zod").ZodNumber;
                            discarded: import("zod").ZodNumber;
                            duplicate_tx: import("zod").ZodNumber;
                            already_imported: import("zod").ZodNumber;
                            pending_review: import("zod").ZodNumber;
                        }, import("zod/v4/core").$strip>>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                403: import("zod").ZodObject<{
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
        };
        listEvents: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                status: import("zod").ZodOptional<import("zod").ZodEnum<typeof import("..").FinancialEmailEventStatus>>;
                fromDate: import("zod").ZodOptional<import("zod").ZodString>;
                toDate: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>>;
                offset: import("zod").ZodOptional<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<number, string>>>;
            }, import("zod/v4/core").$strip>;
            summary: "List parsed financial email events";
            method: "GET";
            path: "/api/email-ingestion/events";
            responses: {
                200: import("zod").ZodObject<{
                    events: import("zod").ZodArray<import("zod").ZodObject<{
                        uuid: import("zod").ZodString;
                        status: import("zod").ZodEnum<typeof import("..").FinancialEmailEventStatus>;
                        institution_name: import("zod").ZodNullable<import("zod").ZodString>;
                        institution_logo: import("zod").ZodNullable<import("zod").ZodString>;
                        product_kind: import("zod").ZodNullable<import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                        }>>;
                        product_type: import("zod").ZodNullable<import("zod").ZodString>;
                        product_label: import("zod").ZodNullable<import("zod").ZodString>;
                        transaction_description: import("zod").ZodNullable<import("zod").ZodString>;
                        amount: import("zod").ZodNullable<import("zod").ZodCoercedNumber<unknown>>;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        transaction_date: import("zod").ZodNullable<import("zod").ZodString>;
                        transaction_occurred_at: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
                        transaction_direction: import("zod").ZodNullable<import("zod").ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                        }>>;
                        category: import("zod").ZodNullable<import("zod").ZodString>;
                        confidence: import("zod").ZodNullable<import("zod").ZodCoercedNumber<unknown>>;
                        source_metadata: import("zod").ZodNullable<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnknown>>;
                        created_at: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                    total: import("zod").ZodNumber;
                    limit: import("zod").ZodNumber;
                    offset: import("zod").ZodNumber;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                403: import("zod").ZodObject<{
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
        };
        listDiscoveredAccounts: {
            strictStatusCodes: true;
            summary: "List unique bank accounts discovered from email but not yet linked";
            method: "GET";
            path: "/api/email-ingestion/discovered-accounts";
            responses: {
                200: import("zod").ZodObject<{
                    accounts: import("zod").ZodArray<import("zod").ZodObject<{
                        institution_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        institution_name: import("zod").ZodNullable<import("zod").ZodString>;
                        institution_logo: import("zod").ZodNullable<import("zod").ZodString>;
                        product_type: import("zod").ZodString;
                        product_label: import("zod").ZodString;
                        account_last4: import("zod").ZodString;
                        card_brand: import("zod").ZodNullable<import("zod").ZodEnum<{
                            visa: "visa";
                            mastercard: "mastercard";
                            amex: "amex";
                        }>>;
                        product_line: import("zod").ZodNullable<import("zod").ZodEnum<{
                            gold: "gold";
                            classic: "classic";
                            platinum: "platinum";
                            premia: "premia";
                            infinite: "infinite";
                            signature: "signature";
                            negocios: "negocios";
                            corporate: "corporate";
                            black: "black";
                            gnial: "gnial";
                        }>>;
                        event_count: import("zod").ZodNumber;
                        latest_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
                401: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodString>;
                    statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, import("zod/v4/core").$strip>;
                403: import("zod").ZodObject<{
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
        };
        linkAccounts: {
            strictStatusCodes: true;
            summary: "Link discovered accounts for monitoring and backfill matching events";
            method: "POST";
            body: import("zod").ZodObject<{
                accounts: import("zod").ZodArray<import("zod").ZodObject<{
                    institution_id: import("zod").ZodCoercedNumber<unknown>;
                    institution_name: import("zod").ZodString;
                    product_type: import("zod").ZodPreprocess<import("zod").ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>, unknown>;
                    account_last4: import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<string, string>>, import("zod").ZodString>;
                    card_brand: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodEnum<{
                        visa: "visa";
                        mastercard: "mastercard";
                        amex: "amex";
                    }>>>;
                    product_line: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodEnum<{
                        gold: "gold";
                        classic: "classic";
                        platinum: "platinum";
                        premia: "premia";
                        infinite: "infinite";
                        signature: "signature";
                        negocios: "negocios";
                        corporate: "corporate";
                        black: "black";
                        gnial: "gnial";
                    }>>>;
                    linked_account: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodObject<{
                        product_type: import("zod").ZodEnum<{
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                        }>;
                        account_last4: import("zod").ZodPipe<import("zod").ZodPipe<import("zod").ZodString, import("zod").ZodTransform<string, string>>, import("zod").ZodString>;
                    }, import("zod/v4/core").$strip>>>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
            path: "/api/email-ingestion/link-accounts";
            responses: {
                200: import("zod").ZodObject<{
                    requested: import("zod").ZodNumber;
                    linked: import("zod").ZodNumber;
                    imported_events: import("zod").ZodNumber;
                    backfill_failed_events: import("zod").ZodNumber;
                    backfill_pending: import("zod").ZodBoolean;
                    product_uuids: import("zod").ZodArray<import("zod").ZodString>;
                    failed_accounts: import("zod").ZodArray<import("zod").ZodObject<{
                        institution_id: import("zod").ZodNumber;
                        product_type: import("zod").ZodPreprocess<import("zod").ZodEnum<{
                            insurance: "insurance";
                            credit_card: "credit_card";
                            debit_card: "debit_card";
                            loan: "loan";
                            savings_account: "savings_account";
                            checking_account: "checking_account";
                            investment: "investment";
                            mortgage: "mortgage";
                        }>, unknown>;
                        account_last4: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
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
                403: import("zod").ZodObject<{
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
        };
        unlinkAccounts: {
            strictStatusCodes: true;
            summary: "Unlink connected user products and restore matching email events as discovered";
            method: "POST";
            body: import("zod").ZodObject<{
                product_uuids: import("zod").ZodArray<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/email-ingestion/unlink-accounts";
            responses: {
                200: import("zod").ZodObject<{
                    requested: import("zod").ZodNumber;
                    unlinked: import("zod").ZodNumber;
                    failed_uuids: import("zod").ZodArray<import("zod").ZodString>;
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
                403: import("zod").ZodObject<{
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
        };
        approveEvent: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                eventUuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Approve a pending financial email event into a product transaction";
            method: "POST";
            body: import("zod").ZodObject<{
                user_product_uuid: import("zod").ZodString;
                amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                transaction_date: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/email-ingestion/events/:eventUuid/approve";
            responses: {
                200: import("zod").ZodObject<{
                    transaction_uuid: import("zod").ZodString;
                    event_uuid: import("zod").ZodString;
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
                403: import("zod").ZodObject<{
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
        };
        rejectEvent: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                eventUuid: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            summary: "Reject a pending financial email event";
            method: "POST";
            body: import("zod").ZodObject<{
                reason: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            path: "/api/email-ingestion/events/:eventUuid/reject";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
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
                403: import("zod").ZodObject<{
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
        };
    };
    FeatureFlags: {
        getTrackingMode: {
            summary: "Get the authenticated account tracking mode";
            description: "Returns whether email synchronization is enabled for the authenticated account.";
            method: "GET";
            path: "/api/profile/tracking-mode";
            responses: {
                200: import("zod").ZodObject<{
                    emailSync: import("zod").ZodBoolean;
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
};
