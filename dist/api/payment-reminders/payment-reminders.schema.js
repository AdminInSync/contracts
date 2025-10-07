import { z } from 'zod';
// Enums
export const ReminderTypeSchema = z.enum(['credit_card', 'loan', 'bill', 'subscription', 'custom']);
export const ReminderStatusSchema = z.enum(['pending', 'sent', 'acknowledged', 'completed', 'overdue']);
export const PriorityLevelSchema = z.enum(['low', 'medium', 'high', 'urgent']);
// Base schemas
export const PaymentReminderSchema = z.object({
    id: z.number(),
    uuid: z.string().uuid(),
    user_uid: z.string(),
    user_connection_id: z.number().nullable(),
    title: z.string(),
    description: z.string().nullable(),
    reminder_type: ReminderTypeSchema,
    amount: z.number().nullable(),
    currency: z.string(),
    due_date: z.string().date(),
    reminder_date: z.string().datetime().nullable(),
    reminder_status: ReminderStatusSchema,
    priority: PriorityLevelSchema.nullable(),
    is_recurring: z.boolean(),
    recurrence_pattern: z.string().nullable(),
    notification_settings: z.any().nullable(),
    notes: z.string().nullable(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    deleted_at: z.string().datetime().nullable(),
});
// Request schemas
export const CreatePaymentReminderSchema = z.object({
    user_connection_id: z.number().positive().optional().openapi({
        description: 'Optional - Links reminder to a specific financial connection (bank account, credit card, etc.). Omit for general reminders.'
    }),
    title: z.string().min(1).max(255).openapi({
        description: 'Title of the payment reminder',
        example: 'Credit Card Payment'
    }),
    description: z.string().optional().openapi({
        description: 'Additional details about the payment',
        example: 'Monthly Chase Visa payment'
    }),
    reminder_type: ReminderTypeSchema.optional().openapi({
        description: 'Type of reminder. Options: credit_card, loan, bill, subscription, custom'
    }),
    amount: z.number().min(0).optional().openapi({
        description: 'Payment amount',
        example: 1200.50
    }),
    currency: z.string().min(1).max(100).openapi({
        description: 'Currency code',
        example: 'USD'
    }),
    due_date: z.string().date().openapi({
        description: 'Payment due date (YYYY-MM-DD)',
        example: '2025-10-08'
    }),
    reminder_date: z.string().datetime().optional().openapi({
        description: 'When to send the reminder notification',
        example: '2025-10-07T19:21:45.752Z'
    }),
    reminder_status: ReminderStatusSchema.optional().openapi({
        description: 'Status of the reminder. Options: pending, sent, acknowledged, completed, overdue'
    }),
    priority: PriorityLevelSchema.optional().openapi({
        description: 'Priority level. Options: low, medium, high, urgent'
    }),
    is_recurring: z.boolean().optional().openapi({
        description: 'Whether this is a recurring payment',
        example: true
    }),
    recurrence_pattern: z.string().optional().openapi({
        description: 'How often the payment recurs. Examples: "monthly", "quarterly", "yearly", "weekly"',
        example: 'monthly'
    }),
    notification_settings: z.any().optional().openapi({
        description: 'JSON object with notification preferences (email, push, SMS). Example: {"email": true, "push": true, "sms": false}',
        example: { email: true, push: true, sms: false }
    }),
    notes: z.string().optional().openapi({
        description: 'Additional notes or comments',
        example: 'Auto-pay enabled'
    }),
});
export const UpdatePaymentReminderSchema = CreatePaymentReminderSchema.partial();
// Query schemas
export const GetPaymentRemindersQuerySchema = z.object({
    reminder_status: ReminderStatusSchema.optional(),
    reminder_type: ReminderTypeSchema.optional(),
    priority: PriorityLevelSchema.optional(),
    is_recurring: z.coerce.boolean().optional(),
    search: z.string().optional(),
    limit: z.coerce.number().min(1).max(100).default(20),
    offset: z.coerce.number().min(0).default(0),
});
// Response schemas
export const PaymentReminderResponseSchema = z.object({
    message: z.string(),
    data: PaymentReminderSchema,
});
export const PaymentRemindersListResponseSchema = z.object({
    message: z.string(),
    data: z.array(PaymentReminderSchema),
    pagination: z.object({
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
    }).optional(),
});
