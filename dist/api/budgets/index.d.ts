import { z } from 'zod';
export declare const BudgetsContracts: {
    createBudget: {
        summary: "Create a new budget";
        description: "Creates a new budget for the authenticated user";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            budget_period: z.ZodOptional<z.ZodEnum<{
                monthly: "monthly";
                quarterly: "quarterly";
                yearly: "yearly";
            }>>;
            start_date: z.ZodString;
            end_date: z.ZodString;
            total_amount: z.ZodNumber;
            currency: z.ZodDefault<z.ZodString>;
            is_active: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodString;
            settings: z.ZodOptional<z.ZodAny>;
            category: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>;
            categories: z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>;
        }, z.core.$strip>;
        path: "/budgets";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<{
                        monthly: "monthly";
                        quarterly: "quarterly";
                        yearly: "yearly";
                    }>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    category: z.ZodNullable<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    categories: z.ZodArray<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<{
                        ok: "ok";
                        near_limit: "near_limit";
                        exceeded: "exceeded";
                    }>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<{
                        manual: "manual";
                        voice: "voice";
                    }>>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getBudgets: {
        query: z.ZodObject<{
            budget_period: z.ZodOptional<z.ZodEnum<{
                monthly: "monthly";
                quarterly: "quarterly";
                yearly: "yearly";
            }>>;
            is_active: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>, z.ZodBoolean>>;
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    budget_period: z.ZodEnum<{
                        monthly: "monthly";
                        quarterly: "quarterly";
                        yearly: "yearly";
                    }>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    category: z.ZodNullable<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    categories: z.ZodArray<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<{
                        ok: "ok";
                        near_limit: "near_limit";
                        exceeded: "exceeded";
                    }>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<{
                        manual: "manual";
                        voice: "voice";
                    }>>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getBudget: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
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
                    budget_period: z.ZodEnum<{
                        monthly: "monthly";
                        quarterly: "quarterly";
                        yearly: "yearly";
                    }>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    category: z.ZodNullable<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    categories: z.ZodArray<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<{
                        ok: "ok";
                        near_limit: "near_limit";
                        exceeded: "exceeded";
                    }>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<{
                        manual: "manual";
                        voice: "voice";
                    }>>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    updateBudget: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Update a budget";
        description: "Updates an existing budget for the authenticated user";
        method: "PUT";
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            budget_period: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                monthly: "monthly";
                quarterly: "quarterly";
                yearly: "yearly";
            }>>>;
            start_date: z.ZodOptional<z.ZodString>;
            end_date: z.ZodOptional<z.ZodString>;
            total_amount: z.ZodOptional<z.ZodNumber>;
            currency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            is_active: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            notes: z.ZodOptional<z.ZodString>;
            settings: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
            category: z.ZodOptional<z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>;
            categories: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>>;
        }, z.core.$strip>;
        path: "/budgets/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<{
                        monthly: "monthly";
                        quarterly: "quarterly";
                        yearly: "yearly";
                    }>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    category: z.ZodNullable<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    categories: z.ZodArray<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<{
                        ok: "ok";
                        near_limit: "near_limit";
                        exceeded: "exceeded";
                    }>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<{
                        manual: "manual";
                        voice: "voice";
                    }>>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    deleteBudget: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Delete a budget";
        description: "Soft-deletes a budget for the authenticated user";
        method: "DELETE";
        path: "/budgets/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getActiveBudgets: {
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    budget_period: z.ZodEnum<{
                        monthly: "monthly";
                        quarterly: "quarterly";
                        yearly: "yearly";
                    }>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    category: z.ZodNullable<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    categories: z.ZodArray<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<{
                        ok: "ok";
                        near_limit: "near_limit";
                        exceeded: "exceeded";
                    }>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<{
                        manual: "manual";
                        voice: "voice";
                    }>>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getBudgetsByPeriod: {
        pathParams: z.ZodObject<{
            period: z.ZodEnum<{
                monthly: "monthly";
                quarterly: "quarterly";
                yearly: "yearly";
            }>;
        }, z.core.$strip>;
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    budget_period: z.ZodEnum<{
                        monthly: "monthly";
                        quarterly: "quarterly";
                        yearly: "yearly";
                    }>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    category: z.ZodNullable<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    categories: z.ZodArray<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<{
                        ok: "ok";
                        near_limit: "near_limit";
                        exceeded: "exceeded";
                    }>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<{
                        manual: "manual";
                        voice: "voice";
                    }>>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    updateBudgetUsedAmount: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Update budget used amount (deprecated)";
        description: "Deprecated: spent is computed live from manual and voice expenses. Still writes the stored used_amount for old clients.";
        deprecated: true;
        method: "PATCH";
        body: z.ZodObject<{
            used_amount: z.ZodNumber;
        }, z.core.$strip>;
        path: "/budgets/:id/used-amount";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<{
                        monthly: "monthly";
                        quarterly: "quarterly";
                        yearly: "yearly";
                    }>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    category: z.ZodNullable<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    categories: z.ZodArray<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<{
                        ok: "ok";
                        near_limit: "near_limit";
                        exceeded: "exceeded";
                    }>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<{
                        manual: "manual";
                        voice: "voice";
                    }>>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    updateBudgetCategory: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Change budget category";
        description: "Sets the expense category the budget counts. Spent is recomputed on read.";
        method: "PATCH";
        body: z.ZodObject<{
            category: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>;
            categories: z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>;
        }, z.core.$strict>;
        path: "/budgets/:id/category";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    user_uid: z.ZodString;
                    name: z.ZodString;
                    budget_period: z.ZodEnum<{
                        monthly: "monthly";
                        quarterly: "quarterly";
                        yearly: "yearly";
                    }>;
                    start_date: z.ZodString;
                    end_date: z.ZodString;
                    total_amount: z.ZodNumber;
                    used_amount: z.ZodNumber;
                    currency: z.ZodString;
                    is_active: z.ZodBoolean;
                    notes: z.ZodNullable<z.ZodString>;
                    settings: z.ZodOptional<z.ZodNullable<z.ZodAny>>;
                    category: z.ZodNullable<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    categories: z.ZodArray<z.ZodEnum<{
                        Alimentos: "Alimentos";
                        Transporte: "Transporte";
                        Hogar: "Hogar";
                        Servicios: "Servicios";
                        Suscripciones: "Suscripciones";
                        Compras: "Compras";
                        "Cuidado personal": "Cuidado personal";
                        Salud: "Salud";
                        Educación: "Educación";
                        Entretenimiento: "Entretenimiento";
                        Viajes: "Viajes";
                        Otros: "Otros";
                    }>>;
                    needs_category: z.ZodBoolean;
                    spent: z.ZodNullable<z.ZodNumber>;
                    remaining: z.ZodNullable<z.ZodNumber>;
                    percent: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodNullable<z.ZodEnum<{
                        ok: "ok";
                        near_limit: "near_limit";
                        exceeded: "exceeded";
                    }>>;
                    period_active: z.ZodNullable<z.ZodBoolean>;
                    counted_expense_types: z.ZodArray<z.ZodEnum<{
                        manual: "manual";
                        voice: "voice";
                    }>>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
};
