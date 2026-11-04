import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
// Schemas for dashboard data types
const MonthlySummarySchema = z.object({
    expenses: z.number(),
});
export const BudgetItemSchema = z.object({
    id: z.number(),
    uuid: z.string().uuid(),
    name: z.string(),
    budget_period: z.enum(['monthly', 'quarterly', 'yearly']),
    start_date: z.date(),
    end_date: z.date(),
    total_amount: z.number(),
    /** @deprecated Stored value kept for old clients; use `spent`. */
    used_amount: z.number(),
    currency: z.string(),
    is_active: z.boolean(),
    notes: z.string().nullable(),
    settings: z.any().nullable(),
    // Live usage, same as /budgets responses.
    spent: z.number().nullable(),
    remaining: z.number().nullable(),
    percent: z.number().nullable(),
    status: z.enum(['ok', 'near_limit', 'exceeded']).nullable(),
    needs_category: z.boolean(),
    period_active: z.boolean().nullable()
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
const MonthlyExpensesIndicatorSchema = z.object({
    amount: z.number(),
    previousMonthAmount: z.number(),
    changePercentage: z.number(),
    status: z.enum(['down', 'up', 'stable'])
});
const BudgetUsageIndicatorSchema = z.object({
    total: z.number(),
    used: z.number(),
    remaining: z.number(),
    percentage: z.number(),
    status: z.enum(['on_track', 'warning', 'over_budget', 'no_budget'])
});
const ExpenseProjectionIndicatorSchema = z.object({
    currentAmount: z.number(),
    projectedAmount: z.number(),
    status: z.enum(['on_track', 'warning', 'over_pace', 'no_data'])
});
const TopCategoryIndicatorSchema = z.object({
    category: z.string().nullable(),
    amount: z.number(),
    percentage: z.number(),
    status: z.enum(['available', 'empty'])
});
const FinancialIndicatorsSchema = z.object({
    monthlyExpenses: MonthlyExpensesIndicatorSchema,
    budgetUsage: BudgetUsageIndicatorSchema,
    expenseProjection: ExpenseProjectionIndicatorSchema,
    topCategory: TopCategoryIndicatorSchema
});
const RecentMovementSchema = z.object({
    id: z.string(),
    description: z.string(),
    amount: z.number(),
    currency: z.string(),
    type: z.literal('expense'),
    date: z.date(),
    status: z.string()
});
const CurrencySummarySchema = z.object({
    currency: z.enum(['DOP', 'USD', 'EUR']),
    expenses: z.number(),
});
const UpcomingEventSchema = z.object({
    id: z.string(),
    description: z.string(),
    date: z.date(),
    amount: z.number(),
    type: z.literal('expense')
});
const ExpenseDistributionSchema = z.object({
    category: z.string(),
    percentage: z.number(),
    amount: z.number(),
    color: z.string()
});
const ExpenseDistributionByCurrencySchema = z.object({
    currency: z.enum(['DOP', 'USD', 'EUR']),
    items: z.array(ExpenseDistributionSchema)
});
const SyncStatusSchema = z.object({
    lastSync: z.date().nullable(),
    needsSync: z.boolean()
});
const DashboardDataSchema = z.object({
    monthlySummary: MonthlySummarySchema,
    currencySummaries: z.array(CurrencySummarySchema),
    budgets: BudgetSummarySchema,
    savingGoals: z.array(SavingGoalSchema),
    financialIndicators: FinancialIndicatorsSchema,
    recentMovements: z.array(RecentMovementSchema),
    upcomingEvents: z.array(UpcomingEventSchema),
    expenseDistribution: z.array(ExpenseDistributionSchema),
    expenseDistributionByCurrency: z.array(ExpenseDistributionByCurrencySchema),
    recommendations: z.array(z.string()),
    syncStatus: SyncStatusSchema
});
const DashboardSummarySchema = z.object({
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
        summary: 'Get full dashboard data',
        description: 'Returns expense summaries, budgets, saving goals, financial indicators, recent expense activity, and expense insights.'
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
        summary: 'Get dashboard summary',
        description: 'Returns the monthly expense summary and email sync status.'
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
        summary: 'Refresh dashboard data',
        description: 'Forces bank data synchronization and regenerates dashboard data with up-to-date information.'
    }
});
