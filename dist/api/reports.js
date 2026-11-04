import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
const FinancialSummarySchema = z.object({
    expenses: z.number(),
    totalBudget: z.number(),
    budgetSpent: z.number(),
});
const MonthlyTrendSchema = z.object({
    months: z.array(z.string()),
    expenses: z.array(z.number()),
    period: z.string()
});
const ExpenseInsightSchema = z.object({
    type: z.enum(['positive', 'warning', 'info']),
    title: z.string(),
    description: z.string(),
    percentageChange: z.number(),
    category: z.string().nullable(),
});
// Esquemas para distribución de gastos
const ExpenseDistributionSchema = z.object({
    name: z.string(),
    percentage: z.number(),
    amount: z.number(),
    color: z.string()
});
// Esquemas para historial de pagos
const PaymentHistorySchema = z.object({
    months: z.array(z.string()),
    payments: z.array(z.number()),
    period: z.string()
});
// Esquemas para análisis de gastos
const ExpenseAnalysisInsightSchema = z.object({
    type: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.string()
});
const ExpenseAnalysisSchema = z.object({
    insights: z.array(ExpenseAnalysisInsightSchema)
});
const ReportsResponseSchema = z.object({
    currency: z.enum(['DOP', 'USD', 'EUR']),
    summary: FinancialSummarySchema,
    monthlyTrend: MonthlyTrendSchema,
    expenseDistribution: z.array(ExpenseDistributionSchema),
    expenseInsights: z.array(ExpenseInsightSchema),
});
export const PaymentHistoryResponseSchema = z.object({
    success: z.boolean(),
    data: PaymentHistorySchema,
    message: z.string()
});
export const ExpenseAnalysisResponseSchema = z.object({
    success: z.boolean(),
    data: ExpenseAnalysisSchema,
    message: z.string()
});
const ReportsResponseSchemaWithMeta = z.object({
    success: z.boolean(),
    data: ReportsResponseSchema,
    message: z.string()
});
// Contrato para los endpoints de Reportes
export const ReportsContracts = c.router({
    getReports: {
        method: 'GET',
        path: '/reports',
        query: z.object({
            currency: z.enum(['DOP', 'USD', 'EUR']).optional(),
        }),
        responses: {
            200: ReportsResponseSchemaWithMeta,
            401: z.object({
                success: z.literal(false),
                error: z.object({
                    message: z.string()
                })
            }),
            500: z.object({
                success: z.literal(false),
                error: z.object({
                    message: z.string()
                })
            })
        },
        summary: 'Get full financial reports',
        description: 'Returns financial summary, monthly trend, and expense distribution. Totals default to DOP; the optional currency selects DOP, USD, or EUR.'
    }
});
