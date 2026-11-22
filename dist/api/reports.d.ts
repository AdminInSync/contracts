import { z } from 'zod';
export declare const PaymentHistoryResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    data: z.ZodObject<{
        months: z.ZodArray<z.ZodString>;
        payments: z.ZodArray<z.ZodNumber>;
        period: z.ZodString;
    }, z.core.$strip>;
    message: z.ZodString;
}, z.core.$strip>;
export declare const ExpenseAnalysisResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    data: z.ZodObject<{
        insights: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            title: z.ZodString;
            description: z.ZodString;
            icon: z.ZodString;
            color: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    message: z.ZodString;
}, z.core.$strip>;
export declare const ReportsContracts: {
    getReports: {
        query: z.ZodObject<{
            currency: z.ZodOptional<z.ZodEnum<{
                DOP: "DOP";
                USD: "USD";
                EUR: "EUR";
            }>>;
        }, z.core.$strip>;
        summary: "Get full financial reports";
        description: "Returns financial summary, monthly trend, and expense distribution. Totals default to DOP; the optional currency selects DOP, USD, or EUR.";
        method: "GET";
        path: "/reports";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                data: z.ZodObject<{
                    currency: z.ZodEnum<{
                        DOP: "DOP";
                        USD: "USD";
                        EUR: "EUR";
                    }>;
                    summary: z.ZodObject<{
                        expenses: z.ZodNumber;
                        totalBudget: z.ZodNumber;
                        budgetSpent: z.ZodNumber;
                    }, z.core.$strip>;
                    monthlyTrend: z.ZodObject<{
                        months: z.ZodArray<z.ZodString>;
                        expenses: z.ZodArray<z.ZodNumber>;
                        period: z.ZodString;
                    }, z.core.$strip>;
                    expenseDistribution: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        percentage: z.ZodNumber;
                        amount: z.ZodNumber;
                        color: z.ZodString;
                    }, z.core.$strip>>;
                    expenseInsights: z.ZodArray<z.ZodObject<{
                        type: z.ZodEnum<{
                            warning: "warning";
                            positive: "positive";
                            info: "info";
                        }>;
                        title: z.ZodString;
                        description: z.ZodString;
                        percentageChange: z.ZodNumber;
                        category: z.ZodNullable<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                success: z.ZodLiteral<false>;
                error: z.ZodObject<{
                    message: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                success: z.ZodLiteral<false>;
                error: z.ZodObject<{
                    message: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>;
        };
    };
};
