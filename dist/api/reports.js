import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
// Esquemas para el resumen financiero
const FinancialSummarySchema = z.object({
    income: z.number(),
    expenses: z.number(),
    netSavings: z.number(),
    savingsRate: z.number()
});
// Esquemas para tendencia mensual
const MonthlyTrendSchema = z.object({
    months: z.array(z.string()),
    income: z.array(z.number()),
    expenses: z.array(z.number()),
    period: z.string()
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
const ExpenseInsightSchema = z.object({
    type: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.string()
});
const ExpenseAnalysisSchema = z.object({
    insights: z.array(ExpenseInsightSchema)
});
const ReportsResponseSchema = z.object({
    summary: FinancialSummarySchema,
    monthlyTrend: MonthlyTrendSchema,
    expenseDistribution: z.array(ExpenseDistributionSchema)
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
        summary: 'Obtener reportes financieros completos',
        description: 'Retorna resumen financiero, tendencia mensual y distribución de gastos'
    }
});
