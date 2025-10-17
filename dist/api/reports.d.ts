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
        summary: "Obtener reportes financieros completos";
        description: "Retorna resumen financiero, tendencia mensual y distribución de gastos";
        method: "GET";
        path: "/reports";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                data: z.ZodObject<{
                    summary: z.ZodObject<{
                        income: z.ZodNumber;
                        expenses: z.ZodNumber;
                        netSavings: z.ZodNumber;
                        savingsRate: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        income: number;
                        expenses: number;
                        savingsRate: number;
                        netSavings: number;
                    }, {
                        income: number;
                        expenses: number;
                        savingsRate: number;
                        netSavings: number;
                    }>;
                    monthlyTrend: z.ZodObject<{
                        months: z.ZodArray<z.ZodString, "many">;
                        income: z.ZodArray<z.ZodNumber, "many">;
                        expenses: z.ZodArray<z.ZodNumber, "many">;
                        period: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        period: string;
                        income: number[];
                        expenses: number[];
                        months: string[];
                    }, {
                        period: string;
                        income: number[];
                        expenses: number[];
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
                }, "strip", z.ZodTypeAny, {
                    summary: {
                        income: number;
                        expenses: number;
                        savingsRate: number;
                        netSavings: number;
                    };
                    expenseDistribution: {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }[];
                    monthlyTrend: {
                        period: string;
                        income: number[];
                        expenses: number[];
                        months: string[];
                    };
                }, {
                    summary: {
                        income: number;
                        expenses: number;
                        savingsRate: number;
                        netSavings: number;
                    };
                    expenseDistribution: {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }[];
                    monthlyTrend: {
                        period: string;
                        income: number[];
                        expenses: number[];
                        months: string[];
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    summary: {
                        income: number;
                        expenses: number;
                        savingsRate: number;
                        netSavings: number;
                    };
                    expenseDistribution: {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }[];
                    monthlyTrend: {
                        period: string;
                        income: number[];
                        expenses: number[];
                        months: string[];
                    };
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    summary: {
                        income: number;
                        expenses: number;
                        savingsRate: number;
                        netSavings: number;
                    };
                    expenseDistribution: {
                        name: string;
                        color: string;
                        amount: number;
                        percentage: number;
                    }[];
                    monthlyTrend: {
                        period: string;
                        income: number[];
                        expenses: number[];
                        months: string[];
                    };
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
