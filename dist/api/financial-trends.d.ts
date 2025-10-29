import { z } from 'zod';
export declare const FinancialTrendsContracts: {
    getFinancialTrends: {
        summary: "Obtener datos de tendencias financieras";
        description: "Retorna todos los datos necesarios para mostrar la pantalla de tendencias financieras, incluyendo comparaciones mensuales, crecimiento por categorías, proyecciones de fin de mes y metas de ahorro.";
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
                        trend: "neutral" | "up" | "down";
                    }, {
                        name: string;
                        percentageChange: number;
                        trend: "neutral" | "up" | "down";
                    }>, "many">;
                    monthEndProjection: z.ZodObject<{
                        projectedBalance: z.ZodNumber;
                        estimatedSavings: z.ZodNumber;
                        balanceTrend: z.ZodEnum<["up", "down", "neutral"]>;
                        savingsTrend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
                    }, {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
                        trend: "neutral" | "up" | "down";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
                        trend: "neutral" | "up" | "down";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
                        trend: "neutral" | "up" | "down";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
                        trend: "neutral" | "up" | "down";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
        summary: "Actualizar datos de tendencias financieras";
        description: "Fuerza la sincronización de datos bancarios y regenera los datos de tendencias financieras con información actualizada.";
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
                        trend: "neutral" | "up" | "down";
                    }, {
                        name: string;
                        percentageChange: number;
                        trend: "neutral" | "up" | "down";
                    }>, "many">;
                    monthEndProjection: z.ZodObject<{
                        projectedBalance: z.ZodNumber;
                        estimatedSavings: z.ZodNumber;
                        balanceTrend: z.ZodEnum<["up", "down", "neutral"]>;
                        savingsTrend: z.ZodEnum<["up", "down", "neutral"]>;
                    }, "strip", z.ZodTypeAny, {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
                    }, {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
                        trend: "neutral" | "up" | "down";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
                        trend: "neutral" | "up" | "down";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
                        trend: "neutral" | "up" | "down";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
                        trend: "neutral" | "up" | "down";
                    }[];
                    monthEndProjection: {
                        projectedBalance: number;
                        estimatedSavings: number;
                        balanceTrend: "neutral" | "up" | "down";
                        savingsTrend: "neutral" | "up" | "down";
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
