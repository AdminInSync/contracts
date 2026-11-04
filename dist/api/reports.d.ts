import { z } from 'zod';
export declare const PaymentHistoryResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    data: z.ZodObject<{
        months: z.ZodArray<z.ZodString, "many">;
        payments: z.ZodArray<z.ZodNumber, "many">;
        period: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        period: string;
        months: string[];
        payments: number[];
    }, {
        period: string;
        months: string[];
        payments: number[];
    }>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        period: string;
        months: string[];
        payments: number[];
    };
    success: boolean;
}, {
    message: string;
    data: {
        period: string;
        months: string[];
        payments: number[];
    };
    success: boolean;
}>;
export declare const ExpenseAnalysisResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    data: z.ZodObject<{
        insights: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            title: z.ZodString;
            description: z.ZodString;
            icon: z.ZodString;
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            description: string;
            title: string;
            color: string;
            icon: string;
        }, {
            type: string;
            description: string;
            title: string;
            color: string;
            icon: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        insights: {
            type: string;
            description: string;
            title: string;
            color: string;
            icon: string;
        }[];
    }, {
        insights: {
            type: string;
            description: string;
            title: string;
            color: string;
            icon: string;
        }[];
    }>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        insights: {
            type: string;
            description: string;
            title: string;
            color: string;
            icon: string;
        }[];
    };
    success: boolean;
}, {
    message: string;
    data: {
        insights: {
            type: string;
            description: string;
            title: string;
            color: string;
            icon: string;
        }[];
    };
    success: boolean;
}>;
export declare const ReportsContracts: {
    getReports: {
        query: z.ZodObject<{
            currency: z.ZodOptional<z.ZodEnum<["DOP", "USD", "EUR"]>>;
        }, "strip", z.ZodTypeAny, {
            currency?: "DOP" | "USD" | "EUR" | undefined;
        }, {
            currency?: "DOP" | "USD" | "EUR" | undefined;
        }>;
        summary: "Get full financial reports";
        description: "Returns financial summary, monthly trend, and expense distribution. Totals default to DOP; the optional currency selects DOP, USD, or EUR.";
        method: "GET";
        path: "/reports";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                data: z.ZodObject<{
                    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                    summary: z.ZodObject<{
                        expenses: z.ZodNumber;
                        totalBudget: z.ZodNumber;
                        budgetSpent: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        expenses: number;
                        totalBudget: number;
                        budgetSpent: number;
                    }, {
                        expenses: number;
                        totalBudget: number;
                        budgetSpent: number;
                    }>;
                    monthlyTrend: z.ZodObject<{
                        months: z.ZodArray<z.ZodString, "many">;
                        expenses: z.ZodArray<z.ZodNumber, "many">;
                        period: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        expenses: number[];
                        period: string;
                        months: string[];
                    }, {
                        expenses: number[];
                        period: string;
                        months: string[];
                    }>;
                    expenseDistribution: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        percentage: z.ZodNumber;
                        amount: z.ZodNumber;
                        color: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }, {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }>, "many">;
                    expenseInsights: z.ZodArray<z.ZodObject<{
                        type: z.ZodEnum<["positive", "warning", "info"]>;
                        title: z.ZodString;
                        description: z.ZodString;
                        percentageChange: z.ZodNumber;
                        category: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        type: "warning" | "positive" | "info";
                        description: string;
                        title: string;
                        category: string | null;
                        percentageChange: number;
                    }, {
                        type: "warning" | "positive" | "info";
                        description: string;
                        title: string;
                        category: string | null;
                        percentageChange: number;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    summary: {
                        expenses: number;
                        totalBudget: number;
                        budgetSpent: number;
                    };
                    currency: "DOP" | "USD" | "EUR";
                    expenseDistribution: {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }[];
                    monthlyTrend: {
                        expenses: number[];
                        period: string;
                        months: string[];
                    };
                    expenseInsights: {
                        type: "warning" | "positive" | "info";
                        description: string;
                        title: string;
                        category: string | null;
                        percentageChange: number;
                    }[];
                }, {
                    summary: {
                        expenses: number;
                        totalBudget: number;
                        budgetSpent: number;
                    };
                    currency: "DOP" | "USD" | "EUR";
                    expenseDistribution: {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }[];
                    monthlyTrend: {
                        expenses: number[];
                        period: string;
                        months: string[];
                    };
                    expenseInsights: {
                        type: "warning" | "positive" | "info";
                        description: string;
                        title: string;
                        category: string | null;
                        percentageChange: number;
                    }[];
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    summary: {
                        expenses: number;
                        totalBudget: number;
                        budgetSpent: number;
                    };
                    currency: "DOP" | "USD" | "EUR";
                    expenseDistribution: {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }[];
                    monthlyTrend: {
                        expenses: number[];
                        period: string;
                        months: string[];
                    };
                    expenseInsights: {
                        type: "warning" | "positive" | "info";
                        description: string;
                        title: string;
                        category: string | null;
                        percentageChange: number;
                    }[];
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    summary: {
                        expenses: number;
                        totalBudget: number;
                        budgetSpent: number;
                    };
                    currency: "DOP" | "USD" | "EUR";
                    expenseDistribution: {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }[];
                    monthlyTrend: {
                        expenses: number[];
                        period: string;
                        months: string[];
                    };
                    expenseInsights: {
                        type: "warning" | "positive" | "info";
                        description: string;
                        title: string;
                        category: string | null;
                        percentageChange: number;
                    }[];
                };
                success: boolean;
            }>;
            401: z.ZodObject<{
                success: z.ZodLiteral<false>;
                error: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                error: {
                    message: string;
                };
                success: false;
            }, {
                error: {
                    message: string;
                };
                success: false;
            }>;
            500: z.ZodObject<{
                success: z.ZodLiteral<false>;
                error: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                error: {
                    message: string;
                };
                success: false;
            }, {
                error: {
                    message: string;
                };
                success: false;
            }>;
        };
    };
};
