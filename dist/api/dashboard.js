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
        summary: 'Get full dashboard data',
        description: 'Returns all data for the full user dashboard, including balance, budgets, saving goals, financial indicators, recent activity, and more.'
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
        description: 'Returns essential dashboard data for fast loading: balance, monthly summary, and sync status.'
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
