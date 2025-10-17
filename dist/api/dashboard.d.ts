import { z } from 'zod';
export declare const DashboardContracts: {
    getDashboard: {
        summary: "Obtener datos completos del dashboard";
        description: "Retorna todos los datos necesarios para mostrar el dashboard completo del usuario, incluyendo balance, presupuestos, metas de ahorro, indicadores financieros, movimientos recientes y más.";
        method: "GET";
        path: "/dashboard";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    balance: z.ZodObject<{
                        available: z.ZodNumber;
                        currency: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        currency: string;
                        available: number;
                    }, {
                        currency: string;
                        available: number;
                    }>;
                    monthlySummary: z.ZodObject<{
                        income: z.ZodNumber;
                        expenses: z.ZodNumber;
                        debts: z.ZodNumber;
                        netBalance: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    }, {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    }>;
                    budgets: z.ZodObject<{
                        income: z.ZodObject<{
                            active: z.ZodNumber;
                            flexible: z.ZodNumber;
                        }, "strip", z.ZodTypeAny, {
                            active: number;
                            flexible: number;
                        }, {
                            active: number;
                            flexible: number;
                        }>;
                        expenses: z.ZodObject<{
                            fixed: z.ZodNumber;
                            flexible: z.ZodNumber;
                        }, "strip", z.ZodTypeAny, {
                            fixed: number;
                            flexible: number;
                        }, {
                            fixed: number;
                            flexible: number;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    }, {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
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
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }, {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }>, "many">;
                    financialIndicators: z.ZodObject<{
                        health: z.ZodObject<{
                            score: z.ZodNumber;
                            description: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            description: string;
                            score: number;
                        }, {
                            description: string;
                            score: number;
                        }>;
                        cashFlow: z.ZodObject<{
                            amount: z.ZodNumber;
                            status: z.ZodEnum<["positive", "negative", "neutral"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        }, {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        }>;
                        savingsRate: z.ZodObject<{
                            percentage: z.ZodNumber;
                            status: z.ZodEnum<["excellent", "good", "needs_improvement"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        }, {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        }>;
                        debtToIncomeRatio: z.ZodObject<{
                            percentage: z.ZodNumber;
                            status: z.ZodEnum<["healthy", "moderate", "high_risk"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        }, {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    }, {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    }>;
                    recentMovements: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        amount: z.ZodNumber;
                        type: z.ZodEnum<["income", "expense"]>;
                        date: z.ZodDate;
                        status: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }, {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }>, "many">;
                    upcomingEvents: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        date: z.ZodDate;
                        amount: z.ZodNumber;
                        type: z.ZodEnum<["income", "expense"]>;
                    }, "strip", z.ZodTypeAny, {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }, {
                        type: "income" | "expense";
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
                        percentage: number;
                        category: string;
                    }, {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    budgets: {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    };
                    savingGoals: {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }, {
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    budgets: {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    };
                    savingGoals: {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    budgets: {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    };
                    savingGoals: {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    budgets: {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    };
                    savingGoals: {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
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
        summary: "Obtener resumen del dashboard";
        description: "Retorna solo los datos esenciales del dashboard para carga rápida: balance, resumen mensual y estado de sincronización.";
        method: "GET";
        path: "/dashboard/summary";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    balance: z.ZodObject<{
                        available: z.ZodNumber;
                        currency: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        currency: string;
                        available: number;
                    }, {
                        currency: string;
                        available: number;
                    }>;
                    monthlySummary: z.ZodObject<{
                        income: z.ZodNumber;
                        expenses: z.ZodNumber;
                        debts: z.ZodNumber;
                        netBalance: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    }, {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }, {
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
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
        summary: "Actualizar datos del dashboard";
        description: "Fuerza la sincronización de datos bancarios y regenera los datos del dashboard con información actualizada.";
        method: "POST";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/dashboard/refresh";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    balance: z.ZodObject<{
                        available: z.ZodNumber;
                        currency: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        currency: string;
                        available: number;
                    }, {
                        currency: string;
                        available: number;
                    }>;
                    monthlySummary: z.ZodObject<{
                        income: z.ZodNumber;
                        expenses: z.ZodNumber;
                        debts: z.ZodNumber;
                        netBalance: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    }, {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    }>;
                    budgets: z.ZodObject<{
                        income: z.ZodObject<{
                            active: z.ZodNumber;
                            flexible: z.ZodNumber;
                        }, "strip", z.ZodTypeAny, {
                            active: number;
                            flexible: number;
                        }, {
                            active: number;
                            flexible: number;
                        }>;
                        expenses: z.ZodObject<{
                            fixed: z.ZodNumber;
                            flexible: z.ZodNumber;
                        }, "strip", z.ZodTypeAny, {
                            fixed: number;
                            flexible: number;
                        }, {
                            fixed: number;
                            flexible: number;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    }, {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
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
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }, {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }>, "many">;
                    financialIndicators: z.ZodObject<{
                        health: z.ZodObject<{
                            score: z.ZodNumber;
                            description: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            description: string;
                            score: number;
                        }, {
                            description: string;
                            score: number;
                        }>;
                        cashFlow: z.ZodObject<{
                            amount: z.ZodNumber;
                            status: z.ZodEnum<["positive", "negative", "neutral"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        }, {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        }>;
                        savingsRate: z.ZodObject<{
                            percentage: z.ZodNumber;
                            status: z.ZodEnum<["excellent", "good", "needs_improvement"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        }, {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        }>;
                        debtToIncomeRatio: z.ZodObject<{
                            percentage: z.ZodNumber;
                            status: z.ZodEnum<["healthy", "moderate", "high_risk"]>;
                        }, "strip", z.ZodTypeAny, {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        }, {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    }, {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    }>;
                    recentMovements: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        amount: z.ZodNumber;
                        type: z.ZodEnum<["income", "expense"]>;
                        date: z.ZodDate;
                        status: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }, {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }>, "many">;
                    upcomingEvents: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        date: z.ZodDate;
                        amount: z.ZodNumber;
                        type: z.ZodEnum<["income", "expense"]>;
                    }, "strip", z.ZodTypeAny, {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }, {
                        type: "income" | "expense";
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
                        percentage: number;
                        category: string;
                    }, {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    budgets: {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    };
                    savingGoals: {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
                    }[];
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                }, {
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    budgets: {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    };
                    savingGoals: {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    budgets: {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    };
                    savingGoals: {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
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
                    balance: {
                        currency: string;
                        available: number;
                    };
                    monthlySummary: {
                        income: number;
                        expenses: number;
                        debts: number;
                        netBalance: number;
                    };
                    budgets: {
                        income: {
                            active: number;
                            flexible: number;
                        };
                        expenses: {
                            fixed: number;
                            flexible: number;
                        };
                    };
                    savingGoals: {
                        id: number;
                        name: string;
                        currentAmount: number;
                        targetAmount: number;
                        progress: number;
                        color?: string | undefined;
                    }[];
                    financialIndicators: {
                        health: {
                            description: string;
                            score: number;
                        };
                        cashFlow: {
                            status: "positive" | "negative" | "neutral";
                            amount: number;
                        };
                        savingsRate: {
                            status: "excellent" | "good" | "needs_improvement";
                            percentage: number;
                        };
                        debtToIncomeRatio: {
                            status: "healthy" | "moderate" | "high_risk";
                            percentage: number;
                        };
                    };
                    recentMovements: {
                        type: "income" | "expense";
                        status: string;
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    upcomingEvents: {
                        type: "income" | "expense";
                        id: string;
                        date: Date;
                        description: string;
                        amount: number;
                    }[];
                    expenseDistribution: {
                        color: string;
                        amount: number;
                        percentage: number;
                        category: string;
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
