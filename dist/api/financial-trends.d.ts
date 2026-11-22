import { z } from 'zod';
export declare const FinancialTrendsContracts: {
    getFinancialTrends: {
        query: z.ZodObject<{
            currency: z.ZodOptional<z.ZodEnum<{
                DOP: "DOP";
                USD: "USD";
                EUR: "EUR";
            }>>;
        }, z.core.$strip>;
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
                    }, z.core.$strip>;
                    categoryGrowth: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        percentageChange: z.ZodNullable<z.ZodNumber>;
                        currentAmount: z.ZodNumber;
                        previousAmount: z.ZodNumber;
                        trend: z.ZodEnum<{
                            down: "down";
                            up: "up";
                            neutral: "neutral";
                        }>;
                    }, z.core.$strip>>;
                    monthEndProjection: z.ZodObject<{
                        projectedExpenses: z.ZodNumber;
                        trend: z.ZodEnum<{
                            down: "down";
                            up: "up";
                            neutral: "neutral";
                        }>;
                    }, z.core.$strip>;
                    syncStatus: z.ZodObject<{
                        lastSync: z.ZodNullable<z.ZodDate>;
                        needsSync: z.ZodBoolean;
                    }, z.core.$strip>;
                }, z.core.$strip>;
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>;
        };
    };
    refreshFinancialTrends: {
        summary: "Refresh financial trends data";
        description: "Regenerates expense comparisons, category growth, and spending projections from recorded expenses.";
        method: "POST";
        body: z.ZodObject<{}, z.core.$strip>;
        path: "/financial-trends/refresh";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    monthlyComparison: z.ZodObject<{
                        expensesVsPreviousMonth: z.ZodNullable<z.ZodNumber>;
                        currentExpenses: z.ZodNumber;
                        previousExpenses: z.ZodNumber;
                    }, z.core.$strip>;
                    categoryGrowth: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        percentageChange: z.ZodNullable<z.ZodNumber>;
                        currentAmount: z.ZodNumber;
                        previousAmount: z.ZodNumber;
                        trend: z.ZodEnum<{
                            down: "down";
                            up: "up";
                            neutral: "neutral";
                        }>;
                    }, z.core.$strip>>;
                    monthEndProjection: z.ZodObject<{
                        projectedExpenses: z.ZodNumber;
                        trend: z.ZodEnum<{
                            down: "down";
                            up: "up";
                            neutral: "neutral";
                        }>;
                    }, z.core.$strip>;
                    syncStatus: z.ZodObject<{
                        lastSync: z.ZodNullable<z.ZodDate>;
                        needsSync: z.ZodBoolean;
                    }, z.core.$strip>;
                }, z.core.$strip>;
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                success: z.ZodLiteral<false>;
                message: z.ZodString;
                error: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>;
        };
    };
};
