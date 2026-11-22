import { z } from 'zod';
export declare const BudgetPeriodSchema: z.ZodEnum<{
    monthly: "monthly";
    quarterly: "quarterly";
    yearly: "yearly";
}>;
/** Closed expense category catalog (same labels as voice/manual expenses). */
export declare const BUDGET_CATEGORIES: readonly ["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"];
/**
 * Lowercase, no accents, trimmed: how budget and expense categories are compared.
 * Written in plain ES5 on purpose: its source is embedded as-is in the CouchDB
 * `_design/budgets` view (no String.prototype.normalize there), so backend and
 * index always normalize the same way.
 */
export declare function normalizeBudgetCategory(value: unknown): string;
/** Accepts any casing/accents of a catalog label and returns the canonical label. */
export declare const BudgetCategorySchema: z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>;
export declare const BudgetStatusSchema: z.ZodEnum<{
    ok: "ok";
    near_limit: "near_limit";
    exceeded: "exceeded";
}>;
export declare const CountedExpenseTypeSchema: z.ZodEnum<{
    manual: "manual";
    voice: "voice";
}>;
export declare const BudgetSchema: z.ZodObject<{
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
export declare const CreateBudgetSchema: z.ZodObject<{
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
export declare const UpdateBudgetSchema: z.ZodObject<{
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
export declare const UpdateBudgetCategorySchema: z.ZodObject<{
    category: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodPipe<z.ZodString, z.ZodTransform<"Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros", string>>>>;
}, z.core.$strict>;
export declare const UpdateBudgetUsedAmountSchema: z.ZodObject<{
    used_amount: z.ZodNumber;
}, z.core.$strip>;
export declare const GetBudgetsQuerySchema: z.ZodObject<{
    budget_period: z.ZodOptional<z.ZodEnum<{
        monthly: "monthly";
        quarterly: "quarterly";
        yearly: "yearly";
    }>>;
    is_active: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>, z.ZodBoolean>>;
    limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
}, z.core.$strip>;
export declare const BudgetResponseSchema: z.ZodObject<{
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
export declare const BudgetsListResponseSchema: z.ZodObject<{
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
