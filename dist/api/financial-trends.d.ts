import { z } from 'zod';
export declare const FinancialTrendsContracts: {
    getFinancialTrends: {
        summary: "Get financial trends data";
        description: "Returns all data needed for the financial trends screen, including monthly comparisons, category growth, end-of-month projections, and saving goals.";
        method: "GET";
        path: "/financial-trends";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    monthlyComparison: z.ZodObject<{
                        savingsVsPreviousMonth: z.ZodNumber;
                        expensesVsPreviousMonth: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    }, {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    }>;
                    categoryGrowth: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        percentageChange: z.ZodNumber;
                        trend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }, {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }>, "many">;
                    monthEndProjection: z.ZodObject<{
                        projectedBalance: z.ZodNumber;
                        estimatedSavings: z.ZodNumber;
                        balanceTrend: z.ZodEnum<["up", "down", "neutral"]>;
                        savingsTrend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
                    }, {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
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
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    };
                    categoryGrowth: {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
                    };
                }, {
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    };
                    categoryGrowth: {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    };
                    categoryGrowth: {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    };
                    categoryGrowth: {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
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
    refreshFinancialTrends: {
        summary: "Refresh financial trends data";
        description: "Forces bank data synchronization and regenerates financial trends with up-to-date information.";
        method: "POST";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/financial-trends/refresh";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    monthlyComparison: z.ZodObject<{
                        savingsVsPreviousMonth: z.ZodNumber;
                        expensesVsPreviousMonth: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    }, {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    }>;
                    categoryGrowth: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        percentageChange: z.ZodNumber;
                        trend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }, {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }>, "many">;
                    monthEndProjection: z.ZodObject<{
                        projectedBalance: z.ZodNumber;
                        estimatedSavings: z.ZodNumber;
                        balanceTrend: z.ZodEnum<["up", "down", "neutral"]>;
                        savingsTrend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
                    }, {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
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
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    };
                    categoryGrowth: {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
                    };
                }, {
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    };
                    categoryGrowth: {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    };
                    categoryGrowth: {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    savingGoals: {
                        id: number;
                        name: string;
                        progress: number;
                        currentAmount: number;
                        targetAmount: number;
                        color?: string | undefined;
                    }[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        savingsVsPreviousMonth: number;
                        expensesVsPreviousMonth: number;
                    };
                    categoryGrowth: {
                        name: string;
                        percentageChange: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "down" | "up" | "neutral";
                        savingsTrend: "down" | "up" | "neutral";
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
