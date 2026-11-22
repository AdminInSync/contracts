import { z } from 'zod';
export declare const AdminClientsContracts: {
    listClients: {
        query: z.ZodObject<{
            activation_phase: z.ZodOptional<z.ZodEnum<{
                account_created: "account_created";
                registration_started: "registration_started";
                document_submitted: "document_submitted";
                registration_completed: "registration_completed";
                email_connected: "email_connected";
                product_linked: "product_linked";
            }>>;
            is_beta_tester: z.ZodPreprocess<z.ZodOptional<z.ZodBoolean>, unknown>;
        }, z.core.$strip>;
        summary: "List admin clients";
        description: "Returns clients sourced from user_info enriched with Firebase identity data.";
        method: "GET";
        path: "/admin/clients/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    last_name: z.ZodString;
                    email: z.ZodString;
                    email_verified: z.ZodBoolean;
                    phone: z.ZodNullable<z.ZodString>;
                    activation_phase: z.ZodEnum<{
                        account_created: "account_created";
                        registration_started: "registration_started";
                        document_submitted: "document_submitted";
                        registration_completed: "registration_completed";
                        email_connected: "email_connected";
                        product_linked: "product_linked";
                    }>;
                    is_beta_tester: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    created_at: z.ZodString;
                    last_login_at: z.ZodNullable<z.ZodString>;
                    product_count: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    getClientDetail: {
        pathParams: z.ZodObject<{
            uid: z.ZodString;
        }, z.core.$strip>;
        summary: "Get admin client detail";
        description: "Returns a single client with activation phase, devices, preferences, and products.";
        method: "GET";
        path: "/admin/clients/:uid";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    last_name: z.ZodString;
                    email: z.ZodString;
                    email_verified: z.ZodBoolean;
                    phone: z.ZodNullable<z.ZodString>;
                    activation_phase: z.ZodEnum<{
                        account_created: "account_created";
                        registration_started: "registration_started";
                        document_submitted: "document_submitted";
                        registration_completed: "registration_completed";
                        email_connected: "email_connected";
                        product_linked: "product_linked";
                    }>;
                    is_beta_tester: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    created_at: z.ZodString;
                    last_login_at: z.ZodNullable<z.ZodString>;
                    product_count: z.ZodNumber;
                    document_type: z.ZodNullable<z.ZodEnum<typeof import("../..").DocumentType>>;
                    document_number: z.ZodNullable<z.ZodString>;
                    document_status: z.ZodNullable<z.ZodEnum<typeof import("../..").DocumentStatus>>;
                    devices: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        device_unique_id: z.ZodString;
                        notes: z.ZodString;
                        created_at: z.ZodString;
                    }, z.core.$strip>>;
                    preferences: z.ZodNullable<z.ZodObject<{
                        are_push_notifications_enabled: z.ZodBoolean;
                        are_transaction_alerts_enabled: z.ZodBoolean;
                        are_notification_sounds_enabled: z.ZodBoolean;
                        is_vibration_enabled: z.ZodBoolean;
                        is_biometric_auth_enabled: z.ZodBoolean;
                        auto_lock_after_minutes: z.ZodNumber;
                        is_auto_sync_enabled: z.ZodBoolean;
                        is_cloud_backup_enabled: z.ZodBoolean;
                        preferred_theme: z.ZodEnum<{
                            SYSTEM: "SYSTEM";
                            LIGHT: "LIGHT";
                            DARK: "DARK";
                        }>;
                    }, z.core.$strip>>;
                    products: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        name: z.ZodString;
                        institution_name: z.ZodNullable<z.ZodString>;
                        product_type: z.ZodString;
                        account_last4: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
};
