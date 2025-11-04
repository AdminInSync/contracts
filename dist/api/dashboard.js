import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
// Schemas for dashboard data types
const BalanceSchema = z.object({
    available: z.number(),
    currency: z.string()
});
const MonthlySummarySchema = z.object({
    income: z.number(),
    expenses: z.number(),
    debts: z.number(),
    netBalance: z.number()
});
const BudgetItemSchema = z.object({
    id: z.number(),
    uuid: z.string().uuid(),
    name: z.string(),
    budget_period: z.enum(['monthly', 'quarterly', 'yearly']),
    start_date: z.date(),
    end_date: z.date(),
    total_amount: z.number(),
    used_amount: z.number(),
    currency: z.string(),
    is_active: z.boolean(),
    notes: z.string().nullable(),
    settings: z.any().nullable()
});
const BudgetOverviewSchema = z.object({
    total: z.number(),
    totalUsed: z.number()
});
const BudgetSummarySchema = z.object({
    overview: BudgetOverviewSchema,
    budgets: z.array(BudgetItemSchema)
});
const SavingGoalSchema = z.object({
    id: z.number(),
    name: z.string(),
    currentAmount: z.number(),
    targetAmount: z.number(),
    progress: z.number(),
    color: z.string().optional()
});
const FinancialHealthSchema = z.object({
    score: z.number(),
    description: z.string()
});
const CashFlowSchema = z.object({
    amount: z.number(),
    status: z.enum(['positive', 'negative', 'neutral'])
});
const SavingsRateSchema = z.object({
    percentage: z.number(),
    status: z.enum(['excellent', 'good', 'needs_improvement'])
});
const DebtToIncomeRatioSchema = z.object({
    percentage: z.number(),
    status: z.enum(['healthy', 'moderate', 'high_risk'])
});
const FinancialIndicatorsSchema = z.object({
    health: FinancialHealthSchema,
    cashFlow: CashFlowSchema,
    savingsRate: SavingsRateSchema,
    debtToIncomeRatio: DebtToIncomeRatioSchema
});
const RecentMovementSchema = z.object({
    id: z.string(),
    description: z.string(),
    amount: z.number(),
    type: z.enum(['income', 'expense']),
    date: z.date(),
    status: z.string()
});
const UpcomingEventSchema = z.object({
    id: z.string(),
    description: z.string(),
    date: z.date(),
    amount: z.number(),
    type: z.enum(['income', 'expense'])
});
const ExpenseDistributionSchema = z.object({
    category: z.string(),
    percentage: z.number(),
    amount: z.number(),
    color: z.string()
});
const SyncStatusSchema = z.object({
    lastSync: z.date().nullable(),
    needsSync: z.boolean()
});
const DashboardDataSchema = z.object({
    balance: BalanceSchema,
    monthlySummary: MonthlySummarySchema,
    budgets: BudgetSummarySchema,
    savingGoals: z.array(SavingGoalSchema),
    financialIndicators: FinancialIndicatorsSchema,
    recentMovements: z.array(RecentMovementSchema),
    upcomingEvents: z.array(UpcomingEventSchema),
    expenseDistribution: z.array(ExpenseDistributionSchema),
    recommendations: z.array(z.string()),
    syncStatus: SyncStatusSchema
});
const DashboardSummarySchema = z.object({
    balance: BalanceSchema,
    monthlySummary: MonthlySummarySchema,
    syncStatus: SyncStatusSchema
});
// Response schemas
const SuccessResponseSchema = z.object({
    success: z.literal(true),
    data: DashboardDataSchema,
    message: z.string()
});
const SummaryResponseSchema = z.object({
    success: z.literal(true),
    data: DashboardSummarySchema,
    message: z.string()
});
const ErrorResponseSchema = z.object({
    success: z.literal(false),
    message: z.string(),
    error: z.any().optional()
});
export const DashboardContracts = c.router({
    /**
     * Get complete dashboard data
     * GET /dashboard
     */
    getDashboard: {
        method: 'GET',
        path: '/dashboard',
        responses: {
            200: SuccessResponseSchema,
            401: ErrorResponseSchema,
            500: ErrorResponseSchema
        },
        summary: 'Obtener datos completos del dashboard',
        description: 'Retorna todos los datos necesarios para mostrar el dashboard completo del usuario, incluyendo balance, presupuestos, metas de ahorro, indicadores financieros, movimientos recientes y más.'
    },
    /**
     * Get dashboard summary (lightweight)
     * GET /dashboard/summary
     */
    getDashboardSummary: {
        method: 'GET',
        path: '/dashboard/summary',
        responses: {
            200: SummaryResponseSchema,
            401: ErrorResponseSchema,
            500: ErrorResponseSchema
        },
        summary: 'Obtener resumen del dashboard',
        description: 'Retorna solo los datos esenciales del dashboard para carga rápida: balance, resumen mensual y estado de sincronización.'
    },
    /**
     * Refresh dashboard data
     * POST /dashboard/refresh
     */
    refreshDashboard: {
        method: 'POST',
        path: '/dashboard/refresh',
        body: z.object({}),
        responses: {
            200: SuccessResponseSchema,
            401: ErrorResponseSchema,
            500: ErrorResponseSchema
        },
        summary: 'Actualizar datos del dashboard',
        description: 'Fuerza la sincronización de datos bancarios y regenera los datos del dashboard con información actualizada.'
    }
});
