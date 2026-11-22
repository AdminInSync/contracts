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
            reminder_type: z.ZodOptional<z.ZodEnum<{
                custom: "custom";
                credit_card: "credit_card";
                loan: "loan";
                bill: "bill";
                subscription: "subscription";
            }>>;
            amount: z.ZodOptional<z.ZodNumber>;
            currency: z.ZodString;
            due_date: z.ZodString;
            reminder_date: z.ZodOptional<z.ZodString>;
            reminder_status: z.ZodOptional<z.ZodEnum<{
                pending: "pending";
                completed: "completed";
                sent: "sent";
                acknowledged: "acknowledged";
                overdue: "overdue";
            }>>;
            priority: z.ZodOptional<z.ZodEnum<{
                low: "low";
                medium: "medium";
                high: "high";
                urgent: "urgent";
            }>>;
            is_recurring: z.ZodOptional<z.ZodBoolean>;
            recurrence_pattern: z.ZodOptional<z.ZodString>;
            notification_settings: z.ZodOptional<z.ZodAny>;
            notes: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: "/payment-reminders";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
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
    };
    getPaymentReminders: {
        query: z.ZodObject<{
            reminder_status: z.ZodOptional<z.ZodEnum<{
                pending: "pending";
                completed: "completed";
                sent: "sent";
                acknowledged: "acknowledged";
                overdue: "overdue";
            }>>;
            reminder_type: z.ZodOptional<z.ZodEnum<{
                custom: "custom";
                credit_card: "credit_card";
                loan: "loan";
                bill: "bill";
                subscription: "subscription";
            }>>;
            priority: z.ZodOptional<z.ZodEnum<{
                low: "low";
                medium: "medium";
                high: "high";
                urgent: "urgent";
            }>>;
            is_recurring: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
            search: z.ZodOptional<z.ZodString>;
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>;
        summary: "Get all payment reminders";
        description: "Retrieves all payment reminders for the authenticated user with optional filtering";
        method: "GET";
        path: "/payment-reminders";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
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
    };
    getOverdueReminders: {
        summary: "Get overdue payment reminders";
        description: "Retrieves all overdue payment reminders for the authenticated user";
        method: "GET";
        path: "/payment-reminders/overdue";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
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
    };
    getUpcomingReminders: {
        query: z.ZodObject<{
            days: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>;
        summary: "Get upcoming payment reminders";
        description: "Retrieves payment reminders due within the specified number of days";
        method: "GET";
        path: "/payment-reminders/upcoming";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
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
    };
    getRemindersDueToday: {
        summary: "Get payment reminders due today";
        description: "Retrieves all payment reminders due today for the authenticated user";
        method: "GET";
        path: "/payment-reminders/due-today";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
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
    };
    getSentReminderNotifications: {
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>;
        summary: "Get sent reminder notifications";
        description: "Retrieves push notifications that were sent to the user for payment reminders, newest first";
        method: "GET";
        path: "/payment-reminders/notifications";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    uuid: z.ZodString;
                    title: z.ZodString;
                    phase: z.ZodEnum<{
                        overdue: "overdue";
                        early: "early";
                        due: "due";
                    }>;
                    due_date: z.ZodString;
                    sent_at: z.ZodString;
                    payment_reminder_id: z.ZodNumber;
                }, z.core.$strip>>;
                pagination: z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>;
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
    };
    getRemindersByType: {
        pathParams: z.ZodObject<{
            type: z.ZodEnum<{
                custom: "custom";
                credit_card: "credit_card";
                loan: "loan";
                bill: "bill";
                subscription: "subscription";
            }>;
        }, z.core.$strip>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>;
        summary: "Get payment reminders by type";
        description: "Retrieves payment reminders filtered by type";
        method: "GET";
        path: "/payment-reminders/type/:type";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
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
    };
    getRemindersByPriority: {
        pathParams: z.ZodObject<{
            priority: z.ZodEnum<{
                low: "low";
                medium: "medium";
                high: "high";
                urgent: "urgent";
            }>;
        }, z.core.$strip>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>;
        summary: "Get payment reminders by priority";
        description: "Retrieves payment reminders filtered by priority";
        method: "GET";
        path: "/payment-reminders/priority/:priority";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
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
    };
    getPaymentReminder: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Get a specific payment reminder";
        description: "Retrieves a specific payment reminder by ID";
        method: "GET";
        path: "/payment-reminders-by-id/:id/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
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
    };
    updatePaymentReminder: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Update a payment reminder";
        description: "Updates an existing payment reminder";
        method: "PUT";
        body: z.ZodObject<{
            user_connection_id: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            reminder_type: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                custom: "custom";
                credit_card: "credit_card";
                loan: "loan";
                bill: "bill";
                subscription: "subscription";
            }>>>;
            amount: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            currency: z.ZodOptional<z.ZodString>;
            due_date: z.ZodOptional<z.ZodString>;
            reminder_date: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            reminder_status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                pending: "pending";
                completed: "completed";
                sent: "sent";
                acknowledged: "acknowledged";
                overdue: "overdue";
            }>>>;
            priority: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                low: "low";
                medium: "medium";
                high: "high";
                urgent: "urgent";
            }>>>;
            is_recurring: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            recurrence_pattern: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            notification_settings: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
            notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>;
        path: "/payment-reminders-by-id/:id/update/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
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
    };
    deletePaymentReminder: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Delete a payment reminder";
        description: "Soft deletes a payment reminder";
        method: "DELETE";
        path: "/delete-payment-reminders-by-id/:id/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
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
    };
    markAsCompleted: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Mark payment reminder as completed";
        description: "Marks a payment reminder as completed";
        method: "PATCH";
        body: z.ZodObject<{}, z.core.$strip>;
        path: "/complete-payment-reminders-by-id/:id/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
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
    };
    markAsAcknowledged: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Mark payment reminder as acknowledged";
        description: "Marks a payment reminder as acknowledged";
        method: "PATCH";
        body: z.ZodObject<{}, z.core.$strip>;
        path: "/acknowledge-payment-reminders-by-id/:id/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    series_id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    user_connection_id: z.ZodNullable<z.ZodNumber>;
                    title: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reminder_type: z.ZodEnum<{
                        custom: "custom";
                        credit_card: "credit_card";
                        loan: "loan";
                        bill: "bill";
                        subscription: "subscription";
                    }>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodString;
                    due_date: z.ZodString;
                    reminder_date: z.ZodNullable<z.ZodString>;
                    reminder_status: z.ZodEnum<{
                        pending: "pending";
                        completed: "completed";
                        sent: "sent";
                        acknowledged: "acknowledged";
                        overdue: "overdue";
                    }>;
                    priority: z.ZodNullable<z.ZodEnum<{
                        low: "low";
                        medium: "medium";
                        high: "high";
                        urgent: "urgent";
                    }>>;
                    is_recurring: z.ZodBoolean;
                    recurrence_pattern: z.ZodNullable<z.ZodString>;
                    notification_settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    notes: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
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
    };
};
