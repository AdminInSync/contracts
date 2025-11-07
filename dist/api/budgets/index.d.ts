import { z } from 'zod';
export declare const BudgetsContracts: {
    createBudget: {
        summary: "Crear un nuevo presupuesto";
        description: "Crea un nuevo presupuesto para el usuario autenticado";
        method: "POST";
        body: z.ZodEffects<z.ZodObject<{
            name: z.ZodString;
            budget_period: z.ZodOptional<z.ZodEnum<["monthly", "quarterly", "yearly"]>>;
            start_date: z.ZodString;
            end_date: z.ZodString;
            total_amount: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
            is_active: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodString;
            settings: z.ZodOptional<z.ZodAny>;
        }, "strip", z.ZodTypeAny, {
            notes: string;
            name: string;
            currency: string;
            start_date: string;
            end_date: string;
            total_amount: number;
            is_active?: boolean | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            settings?: any;
        }, {
            notes: string;
            name: string;
            start_date: string;
            end_date: string;
            total_amount: number;
            is_active?: boolean | undefined;
            currency?: string | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            settings?: any;
        }>, {
            notes: string;
            name: string;
            currency: string;
            start_date: string;
            end_date: string;
            total_amount: number;
            is_active?: boolean | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            settings?: any;
        }, {
            notes: string;
            name: string;
            start_date: string;
            end_date: string;
            total_amount: number;
            is_active?: boolean | undefined;
            currency?: string | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            settings?: any;
        }>;
        path: "/budgets";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodNullable<z.ZodAny>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                };
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getBudgets: {
        query: z.ZodObject<{
            budget_period: z.ZodOptional<z.ZodEnum<["monthly", "quarterly", "yearly"]>>;
            is_active: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, boolean, string>, z.ZodBoolean>>;
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
            is_active?: boolean | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
        }, {
            limit?: string | undefined;
            is_active?: string | undefined;
            offset?: string | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
        }>;
        summary: "Obtener todos los presupuestos";
        description: "Obtiene todos los presupuestos del usuario autenticado con filtrado opcional";
        method: "GET";
        path: "/budgets";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodNullable<z.ZodAny>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getBudget: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Obtener un presupuesto específico";
        description: "Obtiene un presupuesto específico por ID para el usuario autenticado";
        method: "GET";
        path: "/budgets/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodNullable<z.ZodAny>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                };
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    updateBudget: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Actualizar un presupuesto";
        description: "Actualiza un presupuesto existente para el usuario autenticado";
        method: "PUT";
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            budget_period: z.ZodOptional<z.ZodOptional<z.ZodEnum<["monthly", "quarterly", "yearly"]>>>;
            start_date: z.ZodOptional<z.ZodString>;
            end_date: z.ZodOptional<z.ZodString>;
            total_amount: z.ZodOptional<z.ZodNumber>;
            currency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            is_active: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            notes: z.ZodOptional<z.ZodString>;
            settings: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            is_active?: boolean | undefined;
            notes?: string | undefined;
            name?: string | undefined;
            currency?: string | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            start_date?: string | undefined;
            end_date?: string | undefined;
            total_amount?: number | undefined;
            settings?: any;
        }, {
            is_active?: boolean | undefined;
            notes?: string | undefined;
            name?: string | undefined;
            currency?: string | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            start_date?: string | undefined;
            end_date?: string | undefined;
            total_amount?: number | undefined;
            settings?: any;
        }>;
        path: "/budgets/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodNullable<z.ZodAny>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                };
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    deleteBudget: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Eliminar un presupuesto";
        description: "Elimina suavemente un presupuesto para el usuario autenticado";
        method: "DELETE";
        path: "/budgets/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getActiveBudgets: {
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: string | undefined;
            offset?: string | undefined;
        }>;
        summary: "Obtener presupuestos activos";
        description: "Obtiene todos los presupuestos activos para el usuario autenticado";
        method: "GET";
        path: "/budgets/active";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodNullable<z.ZodAny>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getBudgetsByPeriod: {
        pathParams: z.ZodObject<{
            period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
        }, "strip", z.ZodTypeAny, {
            period: "monthly" | "quarterly" | "yearly";
        }, {
            period: "monthly" | "quarterly" | "yearly";
        }>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: string | undefined;
            offset?: string | undefined;
        }>;
        summary: "Obtener presupuestos por período";
        description: "Obtiene presupuestos filtrados por período para el usuario autenticado";
        method: "GET";
        path: "/budgets/period/:period";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodNullable<z.ZodAny>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    updateBudgetUsedAmount: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Actualizar monto usado del presupuesto";
        description: "Actualiza el monto usado para un presupuesto específico";
        method: "PATCH";
        body: z.ZodObject<{
            used_amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            used_amount: number;
        }, {
            used_amount: number;
        }>;
        path: "/budgets/:id/used-amount";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodNullable<z.ZodAny>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    currency: string;
                    deleted_at: string | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    settings?: any;
                };
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
};
