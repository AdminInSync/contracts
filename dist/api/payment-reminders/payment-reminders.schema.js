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
        description: 'Opcional - Vincula el recordatorio a una conexión financiera específica (cuenta bancaria, tarjeta de crédito, etc.). Omitir para recordatorios generales.'
    }),
    title: z.string().min(1).max(255).openapi({
        description: 'Título del recordatorio de pago',
        example: 'Credit Card Payment'
    }),
    description: z.string().optional().openapi({
        description: 'Detalles adicionales sobre el pago',
        example: 'Monthly Chase Visa payment'
    }),
    reminder_type: ReminderTypeSchema.optional().openapi({
        description: 'Tipo de recordatorio. Opciones: credit_card, loan, bill, subscription, custom'
    }),
    amount: z.number().min(0).optional().openapi({
        description: 'Monto del pago',
        example: 1200.50
    }),
    currency: z.string().min(1).max(100).openapi({
        description: 'Código de moneda',
        example: 'USD'
    }),
    due_date: z.string().date().openapi({
        description: 'Fecha de vencimiento del pago (YYYY-MM-DD)',
        example: '2025-10-08'
    }),
    reminder_date: z.string().datetime().optional().openapi({
        description: 'Cuándo enviar la notificación del recordatorio',
        example: '2025-10-07T19:21:45.752Z'
    }),
    reminder_status: ReminderStatusSchema.optional().openapi({
        description: 'Estado del recordatorio. Opciones: pending, sent, acknowledged, completed, overdue'
    }),
    priority: PriorityLevelSchema.optional().openapi({
        description: 'Nivel de prioridad. Opciones: low, medium, high, urgent'
    }),
    is_recurring: z.boolean().optional().openapi({
        description: 'Si este es un pago recurrente',
        example: true
    }),
    recurrence_pattern: z.string().optional().openapi({
        description: 'Con qué frecuencia se repite el pago. Ejemplos: "monthly", "quarterly", "yearly", "weekly"',
        example: 'monthly'
    }),
    notification_settings: z.any().optional().openapi({
        description: 'Objeto JSON con preferencias de notificación (email, push, SMS). Ejemplo: {"email": true, "push": true, "sms": false}',
        example: { email: true, push: true, sms: false }
    }),
    notes: z.string().optional().openapi({
        description: 'Notas o comentarios adicionales',
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
