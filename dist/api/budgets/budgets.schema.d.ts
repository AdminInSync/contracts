import { z } from 'zod';
export declare const BudgetPeriodSchema: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
/** Closed expense category catalog (same labels as voice/manual expenses). */
export declare const BUDGET_CATEGORIES: readonly ["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"];
/**
 * Lowercase, no accents, trimmed: how budget and expense categories are compared.
 * Written in plain ES5 on purpose: its source is embedded as-is in the CouchDB
 * `_design/budgets` view (no String.prototype.normalize there), so backend and
 * index always normalize the same way.
 */
export declare function normalizeBudgetCategory(value: unknown): string;
/** Accepts any casing/accents of a catalog label and returns the canonical label. */
export declare const BudgetCategorySchema: z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>;
export declare const BudgetStatusSchema: z.ZodEnum<["ok", "near_limit", "exceeded"]>;
export declare const CountedExpenseTypeSchema: z.ZodEnum<["manual", "voice"]>;
export declare const BudgetSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    name: z.ZodString;
    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
    start_date: z.ZodString;
    end_date: z.ZodString;
    total_amount: z.ZodNumber;
    /** @deprecated Stored value kept for old clients; use `spent`. */
    used_amount: z.ZodNumber;
    currency: z.ZodString;
    is_active: z.ZodBoolean;
    notes: z.ZodNullable<z.ZodString>;
    settings: z.ZodNullable<z.ZodAny>;
    category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
    categories: z.ZodArray<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, "many">;
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
    categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
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
    categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
    needs_category: boolean;
    spent: number | null;
    remaining: number | null;
    percent: number | null;
    period_active: boolean | null;
    counted_expense_types: ("manual" | "voice")[];
    settings?: any;
}>;
export declare const CreateBudgetSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    budget_period: z.ZodOptional<z.ZodEnum<["monthly", "quarterly", "yearly"]>>;
    start_date: z.ZodString;
    end_date: z.ZodString;
    total_amount: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    is_active: z.ZodOptional<z.ZodBoolean>;
    notes: z.ZodString;
    settings: z.ZodOptional<z.ZodAny>;
    category: z.ZodOptional<z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>, "many">>;
}, "strip", z.ZodTypeAny, {
    notes: string;
    name: string;
    currency: string;
    start_date: string;
    end_date: string;
    total_amount: number;
    is_active?: boolean | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | undefined;
    budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
    settings?: any;
    categories?: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[] | undefined;
}, {
    notes: string;
    name: string;
    start_date: string;
    end_date: string;
    total_amount: number;
    is_active?: boolean | undefined;
    currency?: string | undefined;
    category?: string | undefined;
    budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
    settings?: any;
    categories?: string[] | undefined;
}>, {
    notes: string;
    name: string;
    currency: string;
    start_date: string;
    end_date: string;
    total_amount: number;
    is_active?: boolean | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | undefined;
    budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
    settings?: any;
    categories?: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[] | undefined;
}, {
    notes: string;
    name: string;
    start_date: string;
    end_date: string;
    total_amount: number;
    is_active?: boolean | undefined;
    currency?: string | undefined;
    category?: string | undefined;
    budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
    settings?: any;
    categories?: string[] | undefined;
}>, {
    notes: string;
    name: string;
    currency: string;
    start_date: string;
    end_date: string;
    total_amount: number;
    is_active?: boolean | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | undefined;
    budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
    settings?: any;
    categories?: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[] | undefined;
}, {
    notes: string;
    name: string;
    start_date: string;
    end_date: string;
    total_amount: number;
    is_active?: boolean | undefined;
    currency?: string | undefined;
    category?: string | undefined;
    budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
    settings?: any;
    categories?: string[] | undefined;
}>;
export declare const UpdateBudgetSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    budget_period: z.ZodOptional<z.ZodOptional<z.ZodEnum<["monthly", "quarterly", "yearly"]>>>;
    start_date: z.ZodOptional<z.ZodString>;
    end_date: z.ZodOptional<z.ZodString>;
    total_amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    is_active: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    notes: z.ZodOptional<z.ZodString>;
    settings: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    category: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>>>;
    categories: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>, "many">>>;
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
    categories?: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[] | undefined;
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
    categories?: string[] | undefined;
}>;
export declare const UpdateBudgetCategorySchema: z.ZodEffects<z.ZodObject<{
    category: z.ZodOptional<z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros", string>, "many">>;
}, "strict", z.ZodTypeAny, {
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | undefined;
    categories?: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[] | undefined;
}, {
    category?: string | undefined;
    categories?: string[] | undefined;
}>, {
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | undefined;
    categories?: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[] | undefined;
}, {
    category?: string | undefined;
    categories?: string[] | undefined;
}>;
export declare const UpdateBudgetUsedAmountSchema: z.ZodObject<{
    used_amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    used_amount: number;
}, {
    used_amount: number;
}>;
export declare const GetBudgetsQuerySchema: z.ZodObject<{
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
export declare const BudgetResponseSchema: z.ZodObject<{
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
        /** @deprecated Stored value kept for old clients; use `spent`. */
        used_amount: z.ZodNumber;
        currency: z.ZodString;
        is_active: z.ZodBoolean;
        notes: z.ZodNullable<z.ZodString>;
        settings: z.ZodNullable<z.ZodAny>;
        category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
        categories: z.ZodArray<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, "many">;
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
        categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
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
        categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
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
        categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
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
        categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
        needs_category: boolean;
        spent: number | null;
        remaining: number | null;
        percent: number | null;
        period_active: boolean | null;
        counted_expense_types: ("manual" | "voice")[];
        settings?: any;
    };
}>;
export declare const BudgetsListResponseSchema: z.ZodObject<{
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
        /** @deprecated Stored value kept for old clients; use `spent`. */
        used_amount: z.ZodNumber;
        currency: z.ZodString;
        is_active: z.ZodBoolean;
        notes: z.ZodNullable<z.ZodString>;
        settings: z.ZodNullable<z.ZodAny>;
        category: z.ZodNullable<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>>;
        categories: z.ZodArray<z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, "many">;
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
        categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
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
        categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
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
        categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
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
        categories: ("Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros")[];
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
