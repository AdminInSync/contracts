import { z } from 'zod';
export declare const PaymentRemindersContracts: {
    createPaymentReminder: {
        summary: "Create a new payment reminder";
        description: "Creates a new payment reminder for the authenticated user";
        method: "POST";
        body: z.ZodObject<{
            user_connection_id: z.ZodOptional<z.ZodNumber>;
            title: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            reminder_type: z.ZodOptional<z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>>;
            amount: z.ZodOptional<z.ZodNumber>;
            currency: z.ZodString;
            due_date: z.ZodString;
            reminder_date: z.ZodOptional<z.ZodString>;
            reminder_status: z.ZodOptional<z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>>;
            priority: z.ZodOptional<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
            is_recurring: z.ZodOptional<z.ZodBoolean>;
            recurrence_pattern: z.ZodOptional<z.ZodString>;
            notification_settings: z.ZodOptional<z.ZodAny>;
            notes: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            currency: string;
            due_date: string;
            description?: string | undefined;
            notes?: string | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            user_connection_id?: number | undefined;
            reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
            amount?: number | undefined;
            reminder_date?: string | undefined;
            reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
            is_recurring?: boolean | undefined;
            recurrence_pattern?: string | undefined;
            notification_settings?: any;
        }, {
            title: string;
            currency: string;
            due_date: string;
            description?: string | undefined;
            notes?: string | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            user_connection_id?: number | undefined;
            reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
            amount?: number | undefined;
            reminder_date?: string | undefined;
            reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
            is_recurring?: boolean | undefined;
            recurrence_pattern?: string | undefined;
            notification_settings?: any;
        }>;
        path: "/payment-reminders";
        responses: {
            201: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getPaymentReminders: {
        query: z.ZodObject<{
            reminder_status: z.ZodOptional<z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>>;
            reminder_type: z.ZodOptional<z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>>;
            priority: z.ZodOptional<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
            is_recurring: z.ZodOptional<z.ZodBoolean>;
            search: z.ZodOptional<z.ZodString>;
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
            search?: string | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
            reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
            is_recurring?: boolean | undefined;
        }, {
            limit?: number | undefined;
            search?: string | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            offset?: number | undefined;
            reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
            reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
            is_recurring?: boolean | undefined;
        }>;
        summary: "Get all payment reminders";
        description: "Retrieves all payment reminders for the authenticated user with optional filtering";
        method: "GET";
        path: "/payment-reminders";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getPaymentReminder: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Get a specific payment reminder";
        description: "Retrieves a specific payment reminder by ID";
        method: "GET";
        path: "/payment-reminders/:id";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    updatePaymentReminder: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Update a payment reminder";
        description: "Updates an existing payment reminder";
        method: "PUT";
        body: z.ZodObject<{
            user_connection_id: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            reminder_type: z.ZodOptional<z.ZodOptional<z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>>>;
            amount: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            currency: z.ZodOptional<z.ZodString>;
            due_date: z.ZodOptional<z.ZodString>;
            reminder_date: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            reminder_status: z.ZodOptional<z.ZodOptional<z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>>>;
            priority: z.ZodOptional<z.ZodOptional<z.ZodEnum<["low", "medium", "high", "urgent"]>>>;
            is_recurring: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            recurrence_pattern: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            notification_settings: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
            notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            description?: string | undefined;
            title?: string | undefined;
            notes?: string | undefined;
            currency?: string | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            user_connection_id?: number | undefined;
            reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
            amount?: number | undefined;
            due_date?: string | undefined;
            reminder_date?: string | undefined;
            reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
            is_recurring?: boolean | undefined;
            recurrence_pattern?: string | undefined;
            notification_settings?: any;
        }, {
            description?: string | undefined;
            title?: string | undefined;
            notes?: string | undefined;
            currency?: string | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            user_connection_id?: number | undefined;
            reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
            amount?: number | undefined;
            due_date?: string | undefined;
            reminder_date?: string | undefined;
            reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
            is_recurring?: boolean | undefined;
            recurrence_pattern?: string | undefined;
            notification_settings?: any;
        }>;
        path: "/payment-reminders/:id";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    deletePaymentReminder: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Delete a payment reminder";
        description: "Soft deletes a payment reminder";
        method: "DELETE";
        path: "/payment-reminders/:id";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                success: boolean;
            }, {
                message: string;
                success: boolean;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    markAsCompleted: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Mark payment reminder as completed";
        description: "Marks a payment reminder as completed";
        method: "PATCH";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/payment-reminders/:id/complete";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    markAsAcknowledged: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Mark payment reminder as acknowledged";
        description: "Marks a payment reminder as acknowledged";
        method: "PATCH";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/payment-reminders/:id/acknowledge";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                };
                success: boolean;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getOverdueReminders: {
        summary: "Get overdue payment reminders";
        description: "Retrieves all overdue payment reminders for the authenticated user";
        method: "GET";
        path: "/payment-reminders/overdue";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getUpcomingReminders: {
        query: z.ZodObject<{
            days: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            days: number;
        }, {
            days?: number | undefined;
        }>;
        summary: "Get upcoming payment reminders";
        description: "Retrieves payment reminders due within the specified number of days";
        method: "GET";
        path: "/payment-reminders/upcoming";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getRemindersDueToday: {
        summary: "Get payment reminders due today";
        description: "Retrieves all payment reminders due today for the authenticated user";
        method: "GET";
        path: "/payment-reminders/due-today";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getRemindersByType: {
        pathParams: z.ZodObject<{
            type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
        }, "strip", z.ZodTypeAny, {
            type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
        }, {
            type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
        }>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: number | undefined;
            offset?: number | undefined;
        }>;
        summary: "Get payment reminders by type";
        description: "Retrieves payment reminders filtered by type";
        method: "GET";
        path: "/payment-reminders/type/:type";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getRemindersByPriority: {
        pathParams: z.ZodObject<{
            priority: z.ZodEnum<["low", "medium", "high", "urgent"]>;
        }, "strip", z.ZodTypeAny, {
            priority: "low" | "medium" | "high" | "urgent";
        }, {
            priority: "low" | "medium" | "high" | "urgent";
        }>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: number | undefined;
            offset?: number | undefined;
        }>;
        summary: "Get payment reminders by priority";
        description: "Retrieves payment reminders filtered by priority";
        method: "GET";
        path: "/payment-reminders/priority/:priority";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodNullable<z.ZodAny>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }, {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    description: string | null;
                    title: string;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    currency: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    user_connection_id: number | null;
                    reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                    amount: number | null;
                    due_date: string;
                    reminder_date: string | null;
                    reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                    is_recurring: boolean;
                    recurrence_pattern: string | null;
                    notification_settings?: any;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
