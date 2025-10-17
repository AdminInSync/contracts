import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
// Schemas for credit utilization data types
const CreditMetricsSchema = z.object({
    availableCredit: z.number(),
    totalLimit: z.number(),
    utilizationPercentage: z.number(),
    recommendedUtilization: z.number()
});
const CreditCardSchema = z.object({
    id: z.number(),
    name: z.string(),
    bankName: z.string(),
    cardType: z.string(),
    utilizedPercentage: z.number(),
    totalLimit: z.number(),
    availableAmount: z.number(),
    usedAmount: z.number(),
    color: z.string()
});
const PaymentHistorySchema = z.object({
    onTimePayments: z.number(),
    averagePayment: z.number(),
    totalPayments: z.number(),
    latePayments: z.number()
});
const MonthlySpendingSchema = z.object({
    month: z.string(),
    year: z.number(),
    amount: z.number(),
    monthName: z.string()
});
const CreditProductsSummarySchema = z.object({
    activeCreditCards: z.number(),
    activeLoans: z.number(),
    availableCreditLines: z.number(),
    totalCreditLimit: z.number()
});
const SyncStatusSchema = z.object({
    lastSync: z.date().nullable(),
    needsSync: z.boolean()
});
const CreditUtilizationDataSchema = z.object({
    creditMetrics: CreditMetricsSchema,
    creditCards: z.array(CreditCardSchema),
    paymentHistory: PaymentHistorySchema,
    monthlySpending: z.array(MonthlySpendingSchema),
    creditProductsSummary: CreditProductsSummarySchema,
    recommendations: z.array(z.string()),
    syncStatus: SyncStatusSchema
});
// Response schemas
const SuccessResponseSchema = z.object({
    success: z.literal(true),
    data: CreditUtilizationDataSchema,
    message: z.string()
});
const ErrorResponseSchema = z.object({
    success: z.literal(false),
    message: z.string(),
    error: z.any().optional()
});
export const CreditUtilizationContracts = c.router({
    /**
     * Get credit utilization data
     * GET /credit-utilization
     */
    getCreditUtilization: {
        method: 'GET',
        path: '/credit-utilization',
        responses: {
            200: SuccessResponseSchema,
            401: ErrorResponseSchema,
            500: ErrorResponseSchema
        },
        summary: 'Obtener datos de utilización de crédito',
        description: 'Retorna todos los datos necesarios para mostrar la pantalla de utilización de crédito, incluyendo métricas de crédito, tarjetas, historial de pagos, gastos mensuales y recomendaciones.'
    },
    /**
     * Refresh credit utilization data
     * POST /credit-utilization/refresh
     */
    refreshCreditUtilization: {
        method: 'POST',
        path: '/credit-utilization/refresh',
        body: z.object({}).openapi({
            description: 'Empty body for refresh endpoint'
        }),
        responses: {
            200: SuccessResponseSchema,
            401: ErrorResponseSchema,
            500: ErrorResponseSchema
        },
        summary: 'Actualizar datos de utilización de crédito',
        description: 'Fuerza la sincronización de datos bancarios y regenera los datos de utilización de crédito con información actualizada.'
    }
});
