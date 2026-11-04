import { z } from 'zod';
export declare const FinancialTrendsContracts: {
    getFinancialTrends: {
        query: z.ZodObject<{
            currency: z.ZodOptional<z.ZodEnum<["DOP", "USD", "EUR"]>>;
        }, "strip", z.ZodTypeAny, {
            currency?: "DOP" | "USD" | "EUR" | undefined;
        }, {
            currency?: "DOP" | "USD" | "EUR" | undefined;
        }>;
        summary: "Get financial trends data";
        description: "Returns expense-only data for the selected currency, including month-over-month comparisons, category growth, and end-of-month spending projections.";
        method: "GET";
        path: "/financial-trends";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    monthlyComparison: z.ZodObject<{
                        expensesVsPreviousMonth: z.ZodNullable<z.ZodNumber>;
                        currentExpenses: z.ZodNumber;
                        previousExpenses: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    }, {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    }>;
                    categoryGrowth: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        percentageChange: z.ZodNullable<z.ZodNumber>;
                        currentAmount: z.ZodNumber;
                        previousAmount: z.ZodNumber;
                        trend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }, {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }>, "many">;
                    monthEndProjection: z.ZodObject<{
                        projectedExpenses: z.ZodNumber;
                        trend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
                    }, {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
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
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    };
                    categoryGrowth: {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
                    };
                }, {
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    };
                    categoryGrowth: {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    };
                    categoryGrowth: {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    };
                    categoryGrowth: {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
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
        description: "Regenerates expense comparisons, category growth, and spending projections from recorded expenses.";
        method: "POST";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/financial-trends/refresh";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    monthlyComparison: z.ZodObject<{
                        expensesVsPreviousMonth: z.ZodNullable<z.ZodNumber>;
                        currentExpenses: z.ZodNumber;
                        previousExpenses: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    }, {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    }>;
                    categoryGrowth: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        percentageChange: z.ZodNullable<z.ZodNumber>;
                        currentAmount: z.ZodNumber;
                        previousAmount: z.ZodNumber;
                        trend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }, {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }>, "many">;
                    monthEndProjection: z.ZodObject<{
                        projectedExpenses: z.ZodNumber;
                        trend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
                    }, {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
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
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    };
                    categoryGrowth: {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
                    };
                }, {
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    };
                    categoryGrowth: {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    };
                    categoryGrowth: {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    monthlyComparison: {
                        expensesVsPreviousMonth: number | null;
                        currentExpenses: number;
                        previousExpenses: number;
                    };
                    categoryGrowth: {
                        name: string;
                        currentAmount: number;
                        percentageChange: number | null;
                        previousAmount: number;
                        trend: "down" | "up" | "neutral";
                    }[];
                    monthEndProjection: {
                        trend: "down" | "up" | "neutral";
                        projectedExpenses: number;
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
