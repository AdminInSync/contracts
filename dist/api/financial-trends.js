import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
// Schemas for financial trends data types
const MonthlyComparisonSchema = z.object({
    savingsVsPreviousMonth: z.number(),
    expensesVsPreviousMonth: z.number()
});
const CategoryGrowthItemSchema = z.object({
    name: z.string(),
    percentageChange: z.number(),
    trend: z.enum(['up', 'down', 'neutral'])
});
const MonthEndProjectionSchema = z.object({
    projectedBalance: z.number(),
    estimatedSavings: z.number(),
    balanceTrend: z.enum(['up', 'down', 'neutral']),
    savingsTrend: z.enum(['up', 'down', 'neutral'])
});
const SavingGoalTrendSchema = z.object({
    id: z.number(),
    name: z.string(),
    currentAmount: z.number(),
    targetAmount: z.number(),
    progress: z.number(),
    color: z.string().optional()
});
const SyncStatusSchema = z.object({
    lastSync: z.date().nullable(),
    needsSync: z.boolean()
});
const FinancialTrendsDataSchema = z.object({
    monthlyComparison: MonthlyComparisonSchema,
    categoryGrowth: z.array(CategoryGrowthItemSchema),
    monthEndProjection: MonthEndProjectionSchema,
    savingGoals: z.array(SavingGoalTrendSchema),
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
        responses: {
            200: SuccessResponseSchema,
            401: ErrorResponseSchema,
            500: ErrorResponseSchema
        },
        summary: 'Obtener datos de tendencias financieras',
        description: 'Retorna todos los datos necesarios para mostrar la pantalla de tendencias financieras, incluyendo comparaciones mensuales, crecimiento por categorías, proyecciones de fin de mes y metas de ahorro.'
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
        summary: 'Actualizar datos de tendencias financieras',
        description: 'Fuerza la sincronización de datos bancarios y regenera los datos de tendencias financieras con información actualizada.'
    }
});
