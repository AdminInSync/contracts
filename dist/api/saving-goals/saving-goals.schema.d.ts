import { z } from 'zod';
export declare const GoalStatusSchema: z.ZodEnum<{
    active: "active";
    completed: "completed";
    paused: "paused";
    cancelled: "cancelled";
}>;
export declare const PriorityLevelSchema: z.ZodEnum<{
    low: "low";
    medium: "medium";
    high: "high";
    urgent: "urgent";
}>;
export declare const SavingGoalSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    target_amount: z.ZodNumber;
    current_amount: z.ZodNumber;
    monthly_contribution: z.ZodNumber;
    currency: z.ZodString;
    target_date: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        completed: "completed";
        paused: "paused";
        cancelled: "cancelled";
    }>;
    priority: z.ZodNullable<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>>;
    color: z.ZodNullable<z.ZodString>;
    notes: z.ZodNullable<z.ZodString>;
    is_public: z.ZodBoolean;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    deleted_at: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const CreateSavingGoalSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    target_amount: z.ZodNumber;
    current_amount: z.ZodOptional<z.ZodNumber>;
    monthly_contribution: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodString;
    target_date: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        completed: "completed";
        paused: "paused";
        cancelled: "cancelled";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>>;
    color: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    is_public: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateSavingGoalSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    target_amount: z.ZodOptional<z.ZodNumber>;
    current_amount: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    monthly_contribution: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    currency: z.ZodOptional<z.ZodString>;
    target_date: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        active: "active";
        completed: "completed";
        paused: "paused";
        cancelled: "cancelled";
    }>>>;
    priority: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>>>;
    color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    is_public: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const UpdateProgressSchema: z.ZodObject<{
    current_amount: z.ZodNumber;
}, z.core.$strip>;
export declare const GetSavingGoalsQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        completed: "completed";
        paused: "paused";
        cancelled: "cancelled";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>>;
    is_public: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const SavingGoalResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        id: z.ZodNumber;
        uuid: z.ZodString;
        user_uid: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        target_amount: z.ZodNumber;
        current_amount: z.ZodNumber;
        monthly_contribution: z.ZodNumber;
        currency: z.ZodString;
        target_date: z.ZodString;
        status: z.ZodEnum<{
            active: "active";
            completed: "completed";
            paused: "paused";
            cancelled: "cancelled";
        }>;
        priority: z.ZodNullable<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
            urgent: "urgent";
        }>>;
        color: z.ZodNullable<z.ZodString>;
        notes: z.ZodNullable<z.ZodString>;
        is_public: z.ZodBoolean;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        deleted_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SavingGoalsListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        uuid: z.ZodString;
        user_uid: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        target_amount: z.ZodNumber;
        current_amount: z.ZodNumber;
        monthly_contribution: z.ZodNumber;
        currency: z.ZodString;
        target_date: z.ZodString;
        status: z.ZodEnum<{
            active: "active";
            completed: "completed";
            paused: "paused";
            cancelled: "cancelled";
        }>;
        priority: z.ZodNullable<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
            urgent: "urgent";
        }>>;
        color: z.ZodNullable<z.ZodString>;
        notes: z.ZodNullable<z.ZodString>;
        is_public: z.ZodBoolean;
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
export declare const UpdateProgressResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        id: z.ZodNumber;
        uuid: z.ZodString;
        user_uid: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        target_amount: z.ZodNumber;
        current_amount: z.ZodNumber;
        monthly_contribution: z.ZodNumber;
        currency: z.ZodString;
        target_date: z.ZodString;
        status: z.ZodEnum<{
            active: "active";
            completed: "completed";
            paused: "paused";
            cancelled: "cancelled";
        }>;
        priority: z.ZodNullable<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
            urgent: "urgent";
        }>>;
        color: z.ZodNullable<z.ZodString>;
        notes: z.ZodNullable<z.ZodString>;
        is_public: z.ZodBoolean;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        deleted_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
