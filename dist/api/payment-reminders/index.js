import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { CreatePaymentReminderSchema, UpdatePaymentReminderSchema, GetPaymentRemindersQuerySchema, PaymentReminderResponseSchema, PaymentRemindersListResponseSchema } from './payment-reminders.schema';
import { ErrorResSchema } from '../../common/schemas/common.schema';
const c = initContract();
export const PaymentRemindersContracts = c.router({
    // Create payment reminder
    createPaymentReminder: {
        method: 'POST',
        path: '/payment-reminders',
        responses: {
            201: PaymentReminderResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        body: CreatePaymentReminderSchema,
        summary: 'Create a new payment reminder',
        description: 'Creates a new payment reminder for the authenticated user',
    },
    // Get all payment reminders
    getPaymentReminders: {
        method: 'GET',
        path: '/payment-reminders',
        responses: {
            200: PaymentRemindersListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: GetPaymentRemindersQuerySchema,
        summary: 'Get all payment reminders',
        description: 'Retrieves all payment reminders for the authenticated user with optional filtering',
    },
    getOverdueReminders: {
        method: 'GET',
        path: '/payment-reminders/overdue',
        responses: {
            200: PaymentRemindersListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get overdue payment reminders',
        description: 'Retrieves all overdue payment reminders for the authenticated user',
    },
    // Get upcoming reminders
    getUpcomingReminders: {
        method: 'GET',
        path: '/payment-reminders/upcoming',
        responses: {
            200: PaymentRemindersListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            days: z.coerce.number().min(1).max(365).default(7),
        }),
        summary: 'Get upcoming payment reminders',
        description: 'Retrieves payment reminders due within the specified number of days',
    },
    // Get reminders due today
    getRemindersDueToday: {
        method: 'GET',
        path: '/payment-reminders/due-today',
        responses: {
            200: PaymentRemindersListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get payment reminders due today',
        description: 'Retrieves all payment reminders due today for the authenticated user',
    },
    // Get reminders by type
    getRemindersByType: {
        method: 'GET',
        path: '/payment-reminders/type/:type',
        responses: {
            200: PaymentRemindersListResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            type: z.enum(['credit_card', 'loan', 'bill', 'subscription', 'custom']),
        }),
        query: z.object({
            limit: z.coerce.number().min(1).max(100).default(20),
            offset: z.coerce.number().min(0).default(0),
        }),
        summary: 'Get payment reminders by type',
        description: 'Retrieves payment reminders filtered by type',
    },
    // Get reminders by priority
    getRemindersByPriority: {
        method: 'GET',
        path: '/payment-reminders/priority/:priority',
        responses: {
            200: PaymentRemindersListResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            priority: z.enum(['low', 'medium', 'high', 'urgent']),
        }),
        query: z.object({
            limit: z.coerce.number().min(1).max(100).default(20),
            offset: z.coerce.number().min(0).default(0),
        }),
        summary: 'Get payment reminders by priority',
        description: 'Retrieves payment reminders filtered by priority',
    },
    getPaymentReminder: {
        method: 'GET',
        path: '/payment-reminders-by-id/:id/',
        responses: {
            200: PaymentReminderResponseSchema,
            404: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        summary: 'Get a specific payment reminder',
        description: 'Retrieves a specific payment reminder by ID',
    },
    updatePaymentReminder: {
        method: 'PUT',
        path: '/payment-reminders-by-id/:id/update/',
        responses: {
            200: PaymentReminderResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        body: UpdatePaymentReminderSchema,
        summary: 'Update a payment reminder',
        description: 'Updates an existing payment reminder',
    },
    // Delete payment reminder
    deletePaymentReminder: {
        method: 'DELETE',
        path: '/delete-payment-reminders-by-id/:id/',
        responses: {
            200: z.object({
                message: z.string(),
            }),
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        summary: 'Delete a payment reminder',
        description: 'Soft deletes a payment reminder',
    },
    // Mark reminder as completed
    markAsCompleted: {
        method: 'PATCH',
        path: '/complete-payment-reminders-by-id/:id/',
        responses: {
            200: PaymentReminderResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        body: z.object({}),
        summary: 'Mark payment reminder as completed',
        description: 'Marks a payment reminder as completed',
    },
    // Mark reminder as acknowledged
    markAsAcknowledged: {
        method: 'PATCH',
        path: '/acknowledge-payment-reminders-by-id/:id/',
        responses: {
            200: PaymentReminderResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        body: z.object({}),
        summary: 'Mark payment reminder as acknowledged',
        description: 'Marks a payment reminder as acknowledged',
    },
});
