import { z } from 'zod';
export declare const CreditUtilizationContracts: {
    getCreditUtilization: {
        summary: "Obtener datos de utilización de crédito";
        description: "Retorna todos los datos necesarios para mostrar la pantalla de utilización de crédito, incluyendo métricas de crédito, tarjetas, historial de pagos, gastos mensuales y recomendaciones.";
        method: "GET";
        path: "/credit-utilization";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    creditMetrics: z.ZodObject<{
                        availableCredit: z.ZodNumber;
                        totalLimit: z.ZodNumber;
                        utilizationPercentage: z.ZodNumber;
                        recommendedUtilization: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    }, {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    }>;
                    creditCards: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        bankName: z.ZodString;
                        cardType: z.ZodString;
                        utilizedPercentage: z.ZodNumber;
                        totalLimit: z.ZodNumber;
                        availableAmount: z.ZodNumber;
                        usedAmount: z.ZodNumber;
                        color: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }, {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }>, "many">;
                    paymentHistory: z.ZodObject<{
                        onTimePayments: z.ZodNumber;
                        averagePayment: z.ZodNumber;
                        totalPayments: z.ZodNumber;
                        latePayments: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    }, {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    }>;
                    monthlySpending: z.ZodArray<z.ZodObject<{
                        month: z.ZodString;
                        year: z.ZodNumber;
                        amount: z.ZodNumber;
                        monthName: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }, {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }>, "many">;
                    creditProductsSummary: z.ZodObject<{
                        activeCreditCards: z.ZodNumber;
                        activeLoans: z.ZodNumber;
                        availableCreditLines: z.ZodNumber;
                        totalCreditLimit: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    }, {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    }>;
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
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    creditMetrics: {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    };
                    creditCards: {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }[];
                    paymentHistory: {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    };
                    monthlySpending: {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }[];
                    creditProductsSummary: {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    };
                }, {
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    creditMetrics: {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    };
                    creditCards: {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }[];
                    paymentHistory: {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    };
                    monthlySpending: {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }[];
                    creditProductsSummary: {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    creditMetrics: {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    };
                    creditCards: {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }[];
                    paymentHistory: {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    };
                    monthlySpending: {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }[];
                    creditProductsSummary: {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    creditMetrics: {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    };
                    creditCards: {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }[];
                    paymentHistory: {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    };
                    monthlySpending: {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }[];
                    creditProductsSummary: {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
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
    refreshCreditUtilization: {
        summary: "Actualizar datos de utilización de crédito";
        description: "Fuerza la sincronización de datos bancarios y regenera los datos de utilización de crédito con información actualizada.";
        method: "POST";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/credit-utilization/refresh";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    creditMetrics: z.ZodObject<{
                        availableCredit: z.ZodNumber;
                        totalLimit: z.ZodNumber;
                        utilizationPercentage: z.ZodNumber;
                        recommendedUtilization: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    }, {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    }>;
                    creditCards: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        bankName: z.ZodString;
                        cardType: z.ZodString;
                        utilizedPercentage: z.ZodNumber;
                        totalLimit: z.ZodNumber;
                        availableAmount: z.ZodNumber;
                        usedAmount: z.ZodNumber;
                        color: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }, {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }>, "many">;
                    paymentHistory: z.ZodObject<{
                        onTimePayments: z.ZodNumber;
                        averagePayment: z.ZodNumber;
                        totalPayments: z.ZodNumber;
                        latePayments: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    }, {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    }>;
                    monthlySpending: z.ZodArray<z.ZodObject<{
                        month: z.ZodString;
                        year: z.ZodNumber;
                        amount: z.ZodNumber;
                        monthName: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }, {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }>, "many">;
                    creditProductsSummary: z.ZodObject<{
                        activeCreditCards: z.ZodNumber;
                        activeLoans: z.ZodNumber;
                        availableCreditLines: z.ZodNumber;
                        totalCreditLimit: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    }, {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    }>;
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
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    creditMetrics: {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    };
                    creditCards: {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }[];
                    paymentHistory: {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    };
                    monthlySpending: {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }[];
                    creditProductsSummary: {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    };
                }, {
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    creditMetrics: {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    };
                    creditCards: {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }[];
                    paymentHistory: {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    };
                    monthlySpending: {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }[];
                    creditProductsSummary: {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    };
                }>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    creditMetrics: {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    };
                    creditCards: {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }[];
                    paymentHistory: {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    };
                    monthlySpending: {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }[];
                    creditProductsSummary: {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
                    };
                };
                success: true;
            }, {
                message: string;
                data: {
                    recommendations: string[];
                    syncStatus: {
                        lastSync: Date | null;
                        needsSync: boolean;
                    };
                    creditMetrics: {
                        availableCredit: number;
                        totalLimit: number;
                        utilizationPercentage: number;
                        recommendedUtilization: number;
                    };
                    creditCards: {
                        id: number;
                        name: string;
                        color: string;
                        totalLimit: number;
                        bankName: string;
                        cardType: string;
                        utilizedPercentage: number;
                        availableAmount: number;
                        usedAmount: number;
                    }[];
                    paymentHistory: {
                        onTimePayments: number;
                        averagePayment: number;
                        totalPayments: number;
                        latePayments: number;
                    };
                    monthlySpending: {
                        amount: number;
                        month: string;
                        year: number;
                        monthName: string;
                    }[];
                    creditProductsSummary: {
                        activeCreditCards: number;
                        activeLoans: number;
                        availableCreditLines: number;
                        totalCreditLimit: number;
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
