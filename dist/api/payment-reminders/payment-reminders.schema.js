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
    user_connection_id: z.number().positive().optional(),
    title: z.string().min(1).max(255),
    description: z.string().optional(),
    reminder_type: ReminderTypeSchema.optional(),
    amount: z.number().min(0).optional(),
    currency: z.string().min(1).max(100),
    due_date: z.string().date(),
    reminder_date: z.string().datetime().optional(),
    reminder_status: ReminderStatusSchema.optional(),
    priority: PriorityLevelSchema.optional(),
    is_recurring: z.boolean().optional(),
    recurrence_pattern: z.string().optional(),
    notification_settings: z.any().optional(),
    notes: z.string().optional(),
});
export const UpdatePaymentReminderSchema = CreatePaymentReminderSchema.partial();
// Query schemas
export const GetPaymentRemindersQuerySchema = z.object({
    reminder_status: ReminderStatusSchema.optional(),
    reminder_type: ReminderTypeSchema.optional(),
    priority: PriorityLevelSchema.optional(),
    is_recurring: z.boolean().optional(),
    search: z.string().optional(),
    limit: z.number().min(1).max(100).default(20),
    offset: z.number().min(0).default(0),
});
// Response schemas
export const PaymentReminderResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: PaymentReminderSchema,
});
export const PaymentRemindersListResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(PaymentReminderSchema),
    pagination: z.object({
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
    }).optional(),
});
