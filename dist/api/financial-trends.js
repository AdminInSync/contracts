import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
// Schemas for financial trends data types
const MonthlyComparisonSchema = z.object({
    expensesVsPreviousMonth: z.number().nullable(),
    currentExpenses: z.number(),
    previousExpenses: z.number(),
});
const CategoryGrowthItemSchema = z.object({
    name: z.string(),
    percentageChange: z.number().nullable(),
    currentAmount: z.number(),
    previousAmount: z.number(),
    trend: z.enum(['up', 'down', 'neutral']),
});
const MonthEndProjectionSchema = z.object({
    projectedExpenses: z.number(),
    trend: z.enum(['up', 'down', 'neutral'])
});
const SyncStatusSchema = z.object({
    lastSync: z.date().nullable(),
    needsSync: z.boolean()
});
const FinancialTrendsDataSchema = z.object({
    monthlyComparison: MonthlyComparisonSchema,
    categoryGrowth: z.array(CategoryGrowthItemSchema),
    monthEndProjection: MonthEndProjectionSchema,
    syncStatus: SyncStatusSchema
});
// Response schemas
const SuccessResponseSchema = z.object({
    success: z.literal(true),
    data: FinancialTrendsDataSchema,
    message: z.string()
});
const ErrorResponseSchema = z.object({
    success: z.literal(false),
    message: z.string(),
    error: z.any().optional()
});
export const FinancialTrendsContracts = c.router({
    /**
     * Get financial trends data
     * GET /financial-trends
     */
    getFinancialTrends: {
        method: 'GET',
        path: '/financial-trends',
        query: z.object({
            currency: z.enum(['DOP', 'USD', 'EUR']).optional(),
        }),
        responses: {
            200: SuccessResponseSchema,
            401: ErrorResponseSchema,
            500: ErrorResponseSchema
        },
        summary: 'Get financial trends data',
        description: 'Returns expense-only data for the selected currency, including month-over-month comparisons, category growth, and end-of-month spending projections.'
    },
    /**
     * Refresh financial trends data
     * POST /financial-trends/refresh
     */
    refreshFinancialTrends: {
        method: 'POST',
        path: '/financial-trends/refresh',
        body: z.object({}),
        responses: {
            200: SuccessResponseSchema,
            401: ErrorResponseSchema,
            500: ErrorResponseSchema
        },
        summary: 'Refresh financial trends data',
        description: 'Regenerates expense comparisons, category growth, and spending projections from recorded expenses.'
    }
});
