import { z } from 'zod';
export declare const BudgetsContracts: {
    createBudget: {
        summary: "Create a new budget";
        description: "Creates a new budget for the authenticated user";
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
            category: z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>;
        }, "strip", z.ZodTypeAny, {
            notes: string;
            name: string;
            currency: string;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            start_date: string;
            end_date: string;
            total_amount: number;
            is_active?: boolean | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            settings?: any;
        }, {
            notes: string;
            name: string;
            category: string;
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
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            start_date: string;
            end_date: string;
            total_amount: number;
            is_active?: boolean | undefined;
            budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            settings?: any;
        }, {
            notes: string;
            name: string;
            category: string;
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
                    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<["manual", "voice"]>, "many">;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
        summary: "Get all budgets";
        description: "Returns all budgets for the authenticated user with optional filtering";
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
                    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<["manual", "voice"]>, "many">;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
        summary: "Get a specific budget";
        description: "Returns a specific budget by ID for the authenticated user";
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
                    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<["manual", "voice"]>, "many">;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
        summary: "Update a budget";
        description: "Updates an existing budget for the authenticated user";
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
            category: z.ZodOptional<z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>>;
        }, "strip", z.ZodTypeAny, {
            is_active?: boolean | undefined;
            notes?: string | undefined;
            name?: string | undefined;
            currency?: string | undefined;
            category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | undefined;
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
            category?: string | undefined;
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
                    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<["manual", "voice"]>, "many">;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
        summary: "Delete a budget";
        description: "Soft-deletes a budget for the authenticated user";
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
        summary: "Get active budgets";
        description: "Returns all active budgets for the authenticated user";
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
                    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<["manual", "voice"]>, "many">;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
        summary: "Get budgets by period";
        description: "Returns budgets filtered by period for the authenticated user";
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
                    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<["manual", "voice"]>, "many">;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
        summary: "Update budget used amount (deprecated)";
        description: "Deprecated: spent is computed live from manual and voice expenses. Still writes the stored used_amount for old clients.";
        deprecated: true;
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
                    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<["manual", "voice"]>, "many">;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
    updateBudgetCategory: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Change budget category";
        description: "Sets the expense category the budget counts. Spent is recomputed on read.";
        method: "PATCH";
        body: z.ZodObject<{
            category: z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>;
        }, "strict", z.ZodTypeAny, {
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }, {
            category: string;
        }>;
        path: "/budgets/:id/category";
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
                    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<["ok", "near_limit", "exceeded"]>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<["manual", "voice"]>, "many">;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
                    settings?: any;
                };
            }, {
                message: string;
                data: {
                    status: "ok" | "near_limit" | "exceeded" | null;
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
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | null;
                    budget_period: "monthly" | "quarterly" | "yearly";
                    start_date: string;
                    end_date: string;
                    total_amount: number;
                    used_amount: number;
                    needs_category: boolean;
                    spent: number | null;
                    remaining: number | null;
                    percent: number | null;
                    period_active: boolean | null;
                    counted_expense_types: ("manual" | "voice")[];
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
