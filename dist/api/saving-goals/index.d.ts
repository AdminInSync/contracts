import { z } from 'zod';
export declare const SavingGoalsContracts: {
    createSavingGoal: {
        summary: "Create a new saving goal";
        description: "Creates a new saving goal for the authenticated user";
        method: "POST";
        body: z.ZodObject<{
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
        path: "/saving-goals";
        responses: {
            201: z.ZodObject<{
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
    getSavingGoals: {
        query: z.ZodObject<{
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
        summary: "Get all saving goals";
        description: "Returns all saving goals for the authenticated user with optional filtering";
        method: "GET";
        path: "/saving-goals";
        responses: {
            200: z.ZodObject<{
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
    getSavingGoal: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Get a specific saving goal";
        description: "Returns a specific saving goal by ID";
        method: "GET";
        path: "/get-saving-goals-by-id/:id/";
        responses: {
            200: z.ZodObject<{
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
            404: z.ZodObject<{
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
    updateSavingGoal: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Update a saving goal";
        description: "Updates an existing saving goal";
        method: "PUT";
        body: z.ZodObject<{
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
        path: "/update-saving-goals-by-id/:id/";
        responses: {
            200: z.ZodObject<{
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
    updateProgress: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Update saving goal progress";
        description: "Updates the current amount of a saving goal";
        method: "PATCH";
        body: z.ZodObject<{
            current_amount: z.ZodNumber;
        }, z.core.$strip>;
        path: "/update-saving-goals-by-id/:id/progress/";
        responses: {
            200: z.ZodObject<{
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
    deleteSavingGoal: {
        pathParams: z.ZodObject<{
            id: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>;
        summary: "Delete a saving goal";
        description: "Soft-deletes a saving goal";
        method: "DELETE";
        path: "/delete-saving-goals-by-id/:id/soft/";
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
    getPublicSavingGoals: {
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
            offset: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>;
        summary: "Get public saving goals";
        description: "Returns public saving goals from all users";
        method: "GET";
        path: "/get-saving-goals-public/";
        responses: {
            200: z.ZodObject<{
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
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getGoalsDueSoon: {
        query: z.ZodObject<{
            days: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>;
        summary: "Get upcoming saving goals";
        description: "Returns saving goals due within the specified number of days";
        method: "GET";
        path: "/get-saving-goals-due-soon/";
        responses: {
            200: z.ZodObject<{
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
};
