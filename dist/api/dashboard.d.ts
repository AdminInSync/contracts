import { z } from 'zod';
export declare const BudgetItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    name: z.ZodString;
    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
    start_date: z.ZodDate;
    end_date: z.ZodDate;
    total_amount: z.ZodNumber;
    /** @deprecated Stored value kept for old clients; use `spent`. */
    used_amount: z.ZodNumber;
    currency: z.ZodString;
    is_active: z.ZodBoolean;
    notes: z.ZodNullable<z.ZodString>;
    settings: z.ZodNullable<z.ZodAny>;
    spent: z.ZodNullable<z.ZodNumber>;
    remaining: z.ZodNullable<z.ZodNumber>;
    percent: z.ZodNullable<z.ZodNumber>;
    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
    needs_category: z.ZodBoolean;
    period_active: z.ZodNullable<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    status: "ok" | "near_limit" | "exceeded" | null;
    id: number;
    is_active: boolean;
    uuid: string;
    notes: string | null;
    name: string;
    currency: string;
    budget_period: "monthly" | "quarterly" | "yearly";
    start_date: Date;
    end_date: Date;
    total_amount: number;
    used_amount: number;
    needs_category: boolean;
    spent: number | null;
    remaining: number | null;
    percent: number | null;
    period_active: boolean | null;
    settings?: any;
}, {
    status: "ok" | "near_limit" | "exceeded" | null;
    id: number;
    is_active: boolean;
    uuid: string;
    notes: string | null;
    name: string;
    currency: string;
    budget_period: "monthly" | "quarterly" | "yearly";
    start_date: Date;
    end_date: Date;
    total_amount: number;
    used_amount: number;
    needs_category: boolean;
    spent: number | null;
    remaining: number | null;
    percent: number | null;
    period_active: boolean | null;
    settings?: any;
}>;
export declare const DashboardContracts: {
    getDashboard: {
        summary: "Get full dashboard data";
        description: "Returns expense summaries, budgets, saving goals, financial indicators, recent expense activity, and expense insights.";
        method: "GET";
        path: "/dashboard";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    monthlySummary: z.ZodObject<{
                        expenses: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        expenses: number;
                    }, {
                        expenses: number;
                    }>;
                    currencySummaries: z.ZodArray<z.ZodObject<{
                        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                        expenses: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }, {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }>, "many">;
                    budgets: z.ZodObject<{
                        overview: z.ZodObject<{
                            total: z.ZodNumber;
                            totalUsed: z.ZodNumber;
                        }, "strip", z.ZodTypeAny, {
                            total: number;
                            totalUsed: number;
                        }, {
                            total: number;
                            totalUsed: number;
                        }>;
                        budgets: z.ZodArray<z.ZodObject<{
                            id: z.ZodNumber;
                            uuid: z.ZodString;
                            name: z.ZodString;
                            budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                            start_date: z.ZodDate;
                            end_date: z.ZodDate;
                            total_amount: z.ZodNumber;
                            /** @deprecated Stored value kept for old clients; use `spent`. */
                            used_amount: z.ZodNumber;
                            currency: z.ZodString;
                            is_active: z.ZodBoolean;
                            notes: z.ZodNullable<z.ZodString>;
                            settings: z.ZodNullable<z.ZodAny>;
                            spent: z.ZodNullable<z.ZodNumber>;
                            remaining: z.ZodNullable<z.ZodNumber>;
                            percent: z.ZodNullable<z.ZodNumber>;
                            status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                            needs_category: z.ZodBoolean;
                            period_active: z.ZodNullable<z.ZodBoolean>;
                        }, "strip", z.ZodTypeAny, {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }, {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    }, {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    }>;
                    savingGoals: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        currentAmount: z.ZodNumber;
                        targetAmount: z.ZodNumber;
                        progress: z.ZodNumber;
                        color: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }, {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }>, "many">;
                    financialIndicators: z.ZodObject<{
                        monthlyExpenses: z.ZodObject<{
                            amount: z.ZodNumber;
                            previousMonthAmount: z.ZodNumber;
                            changePercentage: z.ZodNumber;
                            status: z.ZodEnum<["down", "up", "stable"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        }, {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        }>;
                        budgetUsage: z.ZodObject<{
                            total: z.ZodNumber;
                            used: z.ZodNumber;
                            remaining: z.ZodNumber;
                            percentage: z.ZodNumber;
                            status: z.ZodEnum<["on_track", "warning", "over_budget", "no_budget"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        }, {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        }>;
                        expenseProjection: z.ZodObject<{
                            currentAmount: z.ZodNumber;
                            projectedAmount: z.ZodNumber;
                            status: z.ZodEnum<["on_track", "warning", "over_pace", "no_data"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        }, {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        }>;
                        topCategory: z.ZodObject<{
                            category: z.ZodNullable<z.ZodString>;
                            amount: z.ZodNumber;
                            percentage: z.ZodNumber;
                            status: z.ZodEnum<["available", "empty"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        }, {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    }, {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    }>;
                    recentMovements: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        amount: z.ZodNumber;
                        currency: z.ZodString;
                        type: z.ZodLiteral<"expense">;
                        date: z.ZodDate;
                        status: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }, {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }>, "many">;
                    upcomingEvents: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        date: z.ZodDate;
                        amount: z.ZodNumber;
                        type: z.ZodLiteral<"expense">;
                    }, "strip", z.ZodTypeAny, {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }, {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }>, "many">;
                    expenseDistribution: z.ZodArray<z.ZodObject<{
                        category: z.ZodString;
                        percentage: z.ZodNumber;
                        amount: z.ZodNumber;
                        color: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }, {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }>, "many">;
                    expenseDistributionByCurrency: z.ZodArray<z.ZodObject<{
                        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                        items: z.ZodArray<z.ZodObject<{
                            category: z.ZodString;
                            percentage: z.ZodNumber;
                            amount: z.ZodNumber;
                            color: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }, {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }, {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }>, "many">;
                    recommendations: z.ZodArray<z.ZodString, "many">;
                    syncStatus: z.ZodObject<{
                        lastSync: z.ZodNullable<z.ZodDate>;
                        needsSync: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        lastSync: Date | null;
                        needsSync: boolean;
                    }, {
                        lastSync: Date | null;
                        needsSync: boolean;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    budgets: {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    };
                    monthlySummary: {
                        expenses: number;
                    };
                    currencySummaries: {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }[];
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }[];
                    expenseDistributionByCurrency: {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }, {
                    budgets: {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    };
                    monthlySummary: {
                        expenses: number;
                    };
                    currencySummaries: {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }[];
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }[];
                    expenseDistributionByCurrency: {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    budgets: {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    };
                    monthlySummary: {
                        expenses: number;
                    };
                    currencySummaries: {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }[];
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }[];
                    expenseDistributionByCurrency: {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    budgets: {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    };
                    monthlySummary: {
                        expenses: number;
                    };
                    currencySummaries: {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }[];
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }[];
                    expenseDistributionByCurrency: {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                };
                success: true;
            }>;
            401: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                success: false;
                error?: any;
            }, {
                message: string;
                success: false;
                error?: any;
            }>;
            500: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                success: false;
                error?: any;
            }, {
                message: string;
                success: false;
                error?: any;
            }>;
        };
    };
    getDashboardSummary: {
        summary: "Get dashboard summary";
        description: "Returns the monthly expense summary and email sync status.";
        method: "GET";
        path: "/dashboard/summary";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    monthlySummary: z.ZodObject<{
                        expenses: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        expenses: number;
                    }, {
                        expenses: number;
                    }>;
                    syncStatus: z.ZodObject<{
                        lastSync: z.ZodNullable<z.ZodDate>;
                        needsSync: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        lastSync: Date | null;
                        needsSync: boolean;
                    }, {
                        lastSync: Date | null;
                        needsSync: boolean;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    monthlySummary: {
                        expenses: number;
                    };
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }, {
                    monthlySummary: {
                        expenses: number;
                    };
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    monthlySummary: {
                        expenses: number;
                    };
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    monthlySummary: {
                        expenses: number;
                    };
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                };
                success: true;
            }>;
            401: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                success: false;
                error?: any;
            }, {
                message: string;
                success: false;
                error?: any;
            }>;
            500: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                success: false;
                error?: any;
            }, {
                message: string;
                success: false;
                error?: any;
            }>;
        };
    };
    refreshDashboard: {
        summary: "Refresh dashboard data";
        description: "Forces bank data synchronization and regenerates dashboard data with up-to-date information.";
        method: "POST";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/dashboard/refresh";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    monthlySummary: z.ZodObject<{
                        expenses: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        expenses: number;
                    }, {
                        expenses: number;
                    }>;
                    currencySummaries: z.ZodArray<z.ZodObject<{
                        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                        expenses: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }, {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }>, "many">;
                    budgets: z.ZodObject<{
                        overview: z.ZodObject<{
                            total: z.ZodNumber;
                            totalUsed: z.ZodNumber;
                        }, "strip", z.ZodTypeAny, {
                            total: number;
                            totalUsed: number;
                        }, {
                            total: number;
                            totalUsed: number;
                        }>;
                        budgets: z.ZodArray<z.ZodObject<{
                            id: z.ZodNumber;
                            uuid: z.ZodString;
                            name: z.ZodString;
                            budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                            start_date: z.ZodDate;
                            end_date: z.ZodDate;
                            total_amount: z.ZodNumber;
                            /** @deprecated Stored value kept for old clients; use `spent`. */
                            used_amount: z.ZodNumber;
                            currency: z.ZodString;
                            is_active: z.ZodBoolean;
                            notes: z.ZodNullable<z.ZodString>;
                            settings: z.ZodNullable<z.ZodAny>;
                            spent: z.ZodNullable<z.ZodNumber>;
                            remaining: z.ZodNullable<z.ZodNumber>;
                            percent: z.ZodNullable<z.ZodNumber>;
                            status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                            needs_category: z.ZodBoolean;
                            period_active: z.ZodNullable<z.ZodBoolean>;
                        }, "strip", z.ZodTypeAny, {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }, {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    }, {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    }>;
                    savingGoals: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        currentAmount: z.ZodNumber;
                        targetAmount: z.ZodNumber;
                        progress: z.ZodNumber;
                        color: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }, {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }>, "many">;
                    financialIndicators: z.ZodObject<{
                        monthlyExpenses: z.ZodObject<{
                            amount: z.ZodNumber;
                            previousMonthAmount: z.ZodNumber;
                            changePercentage: z.ZodNumber;
                            status: z.ZodEnum<["down", "up", "stable"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        }, {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        }>;
                        budgetUsage: z.ZodObject<{
                            total: z.ZodNumber;
                            used: z.ZodNumber;
                            remaining: z.ZodNumber;
                            percentage: z.ZodNumber;
                            status: z.ZodEnum<["on_track", "warning", "over_budget", "no_budget"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        }, {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        }>;
                        expenseProjection: z.ZodObject<{
                            currentAmount: z.ZodNumber;
                            projectedAmount: z.ZodNumber;
                            status: z.ZodEnum<["on_track", "warning", "over_pace", "no_data"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        }, {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        }>;
                        topCategory: z.ZodObject<{
                            category: z.ZodNullable<z.ZodString>;
                            amount: z.ZodNumber;
                            percentage: z.ZodNumber;
                            status: z.ZodEnum<["available", "empty"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        }, {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    }, {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    }>;
                    recentMovements: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        amount: z.ZodNumber;
                        currency: z.ZodString;
                        type: z.ZodLiteral<"expense">;
                        date: z.ZodDate;
                        status: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }, {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }>, "many">;
                    upcomingEvents: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        date: z.ZodDate;
                        amount: z.ZodNumber;
                        type: z.ZodLiteral<"expense">;
                    }, "strip", z.ZodTypeAny, {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }, {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }>, "many">;
                    expenseDistribution: z.ZodArray<z.ZodObject<{
                        category: z.ZodString;
                        percentage: z.ZodNumber;
                        amount: z.ZodNumber;
                        color: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }, {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }>, "many">;
                    expenseDistributionByCurrency: z.ZodArray<z.ZodObject<{
                        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                        items: z.ZodArray<z.ZodObject<{
                            category: z.ZodString;
                            percentage: z.ZodNumber;
                            amount: z.ZodNumber;
                            color: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }, {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }, {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }>, "many">;
                    recommendations: z.ZodArray<z.ZodString, "many">;
                    syncStatus: z.ZodObject<{
                        lastSync: z.ZodNullable<z.ZodDate>;
                        needsSync: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        lastSync: Date | null;
                        needsSync: boolean;
                    }, {
                        lastSync: Date | null;
                        needsSync: boolean;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    budgets: {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    };
                    monthlySummary: {
                        expenses: number;
                    };
                    currencySummaries: {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }[];
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }[];
                    expenseDistributionByCurrency: {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }, {
                    budgets: {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    };
                    monthlySummary: {
                        expenses: number;
                    };
                    currencySummaries: {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }[];
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }[];
                    expenseDistributionByCurrency: {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    budgets: {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    };
                    monthlySummary: {
                        expenses: number;
                    };
                    currencySummaries: {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }[];
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }[];
                    expenseDistributionByCurrency: {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    budgets: {
                        overview: {
                            total: number;
                            totalUsed: number;
                        };
                        budgets: {
                            status: "ok" | "near_limit" | "exceeded" | null;
                            id: number;
                            is_active: boolean;
                            uuid: string;
                            notes: string | null;
                            name: string;
                            currency: string;
                            budget_period: "monthly" | "quarterly" | "yearly";
                            start_date: Date;
                            end_date: Date;
                            total_amount: number;
                            used_amount: number;
                            needs_category: boolean;
                            spent: number | null;
                            remaining: number | null;
                            percent: number | null;
                            period_active: boolean | null;
                            settings?: any;
                        }[];
                    };
                    monthlySummary: {
                        expenses: number;
                    };
                    currencySummaries: {
                        currency: "DOP" | "USD" | "EUR";
                        expenses: number;
                    }[];
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        monthlyExpenses: {
                            status: "down" | "up" | "stable";
                            amount: number;
                            previousMonthAmount: number;
                            changePercentage: number;
                        };
                        budgetUsage: {
                            status: "on_track" | "warning" | "over_budget" | "no_budget";
                            total: number;
                            remaining: number;
                            used: number;
                            percentage: number;
                        };
                        expenseProjection: {
                            status: "on_track" | "warning" | "over_pace" | "no_data";
                            currentAmount: number;
                            projectedAmount: number;
                        };
                        topCategory: {
                            status: "available" | "empty";
                            amount: number;
                            category: string | null;
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        currency: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        category: string;
                        percentage: number;
                    }[];
                    expenseDistributionByCurrency: {
                        items: {
                            color: string;
                            amount: number;
                            category: string;
                            percentage: number;
                        }[];
                        currency: "DOP" | "USD" | "EUR";
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                };
                success: true;
            }>;
            401: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                success: false;
                error?: any;
            }, {
                message: string;
                success: false;
                error?: any;
            }>;
            500: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                success: false;
                error?: any;
            }, {
                message: string;
                success: false;
                error?: any;
            }>;
        };
    };
};
