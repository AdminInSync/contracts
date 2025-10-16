import { z } from 'zod';
export declare const BudgetPeriodSchema: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
export declare const BudgetSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    name: z.ZodString;
    budget_period: z.ZodEnum<["monthly", "quarterly", "yearly"]>;
    start_date: z.ZodString;
    end_date: z.ZodString;
    total_amount: z.ZodNumber;
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
    settings?: any;
}>;
export declare const CreateBudgetSchema: z.ZodEffects<z.ZodObject<{
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
        settings?: any;
    }[];
    pagination?: {
        limit: number;
        total: number;
        offset: number;
    } | undefined;
}>;
