import { z } from 'zod';
import '../../openapi-extensions';
export declare const ReminderTypeSchema: z.ZodEnum<{
    custom: "custom";
    credit_card: "credit_card";
    loan: "loan";
    bill: "bill";
    subscription: "subscription";
}>;
export declare const ReminderStatusSchema: z.ZodEnum<{
    pending: "pending";
    completed: "completed";
    sent: "sent";
    acknowledged: "acknowledged";
    overdue: "overdue";
}>;
export declare const PriorityLevelSchema: z.ZodEnum<{
    low: "low";
    medium: "medium";
    high: "high";
    urgent: "urgent";
}>;
export declare const PaymentReminderSchema: z.ZodObject<{
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
export declare const CreatePaymentReminderSchema: z.ZodObject<{
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
export declare const UpdatePaymentReminderSchema: z.ZodObject<{
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
export declare const GetPaymentRemindersQuerySchema: z.ZodObject<{
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
export declare const PaymentReminderResponseSchema: z.ZodObject<{
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
export declare const PaymentRemindersListResponseSchema: z.ZodObject<{
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
export declare const ReminderNotificationPhaseSchema: z.ZodEnum<{
    overdue: "overdue";
    early: "early";
    due: "due";
}>;
export declare const SentReminderNotificationSchema: z.ZodObject<{
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
}, z.core.$strip>;
export declare const GetSentReminderNotificationsQuerySchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const SentReminderNotificationsListResponseSchema: z.ZodObject<{
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
