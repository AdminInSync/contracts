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
            status: z.ZodOptional<z.ZodEnum<["active", "completed", "paused", "cancelled"]>>;
            priority: z.ZodOptional<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
            color: z.ZodOptional<z.ZodString>;
            notes: z.ZodOptional<z.ZodString>;
            is_public: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            target_amount: number;
            currency: string;
            target_date: string;
            status?: "active" | "completed" | "paused" | "cancelled" | undefined;
            description?: string | undefined;
            notes?: string | undefined;
            current_amount?: number | undefined;
            monthly_contribution?: number | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            color?: string | undefined;
            is_public?: boolean | undefined;
        }, {
            name: string;
            target_amount: number;
            currency: string;
            target_date: string;
            status?: "active" | "completed" | "paused" | "cancelled" | undefined;
            description?: string | undefined;
            notes?: string | undefined;
            current_amount?: number | undefined;
            monthly_contribution?: number | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            color?: string | undefined;
            is_public?: boolean | undefined;
        }>;
        path: "/saving-goals";
        responses: {
            201: z.ZodObject<{
                success: z.ZodBoolean;
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
                    status: z.ZodEnum<["active", "completed", "paused", "cancelled"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    color: z.ZodNullable<z.ZodString>;
                    notes: z.ZodNullable<z.ZodString>;
                    is_public: z.ZodBoolean;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                };
                success: boolean;
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
    getSavingGoals: {
        query: z.ZodObject<{
            status: z.ZodOptional<z.ZodEnum<["active", "completed", "paused", "cancelled"]>>;
            priority: z.ZodOptional<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
            is_public: z.ZodOptional<z.ZodBoolean>;
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
            status?: "active" | "completed" | "paused" | "cancelled" | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            is_public?: boolean | undefined;
        }, {
            status?: "active" | "completed" | "paused" | "cancelled" | undefined;
            limit?: number | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            is_public?: boolean | undefined;
            offset?: number | undefined;
        }>;
        summary: "Get all saving goals";
        description: "Retrieves all saving goals for the authenticated user with optional filtering";
        method: "GET";
        path: "/saving-goals";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
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
                    status: z.ZodEnum<["active", "completed", "paused", "cancelled"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    color: z.ZodNullable<z.ZodString>;
                    notes: z.ZodNullable<z.ZodString>;
                    is_public: z.ZodBoolean;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
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
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }[];
                success: boolean;
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
    getSavingGoal: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Get a specific saving goal";
        description: "Retrieves a specific saving goal by ID";
        method: "GET";
        path: "/saving-goals/:id";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
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
                    status: z.ZodEnum<["active", "completed", "paused", "cancelled"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    color: z.ZodNullable<z.ZodString>;
                    notes: z.ZodNullable<z.ZodString>;
                    is_public: z.ZodBoolean;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                };
                success: boolean;
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
    updateSavingGoal: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
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
            status: z.ZodOptional<z.ZodOptional<z.ZodEnum<["active", "completed", "paused", "cancelled"]>>>;
            priority: z.ZodOptional<z.ZodOptional<z.ZodEnum<["low", "medium", "high", "urgent"]>>>;
            color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            is_public: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            status?: "active" | "completed" | "paused" | "cancelled" | undefined;
            description?: string | undefined;
            notes?: string | undefined;
            name?: string | undefined;
            target_amount?: number | undefined;
            current_amount?: number | undefined;
            monthly_contribution?: number | undefined;
            currency?: string | undefined;
            target_date?: string | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            color?: string | undefined;
            is_public?: boolean | undefined;
        }, {
            status?: "active" | "completed" | "paused" | "cancelled" | undefined;
            description?: string | undefined;
            notes?: string | undefined;
            name?: string | undefined;
            target_amount?: number | undefined;
            current_amount?: number | undefined;
            monthly_contribution?: number | undefined;
            currency?: string | undefined;
            target_date?: string | undefined;
            priority?: "low" | "medium" | "high" | "urgent" | undefined;
            color?: string | undefined;
            is_public?: boolean | undefined;
        }>;
        path: "/saving-goals/:id";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
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
                    status: z.ZodEnum<["active", "completed", "paused", "cancelled"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    color: z.ZodNullable<z.ZodString>;
                    notes: z.ZodNullable<z.ZodString>;
                    is_public: z.ZodBoolean;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                };
                success: boolean;
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
    updateProgress: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Update saving goal progress";
        description: "Updates the current amount of a saving goal";
        method: "PATCH";
        body: z.ZodObject<{
            current_amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            current_amount: number;
        }, {
            current_amount: number;
        }>;
        path: "/saving-goals/:id/progress";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
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
                    status: z.ZodEnum<["active", "completed", "paused", "cancelled"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    color: z.ZodNullable<z.ZodString>;
                    notes: z.ZodNullable<z.ZodString>;
                    is_public: z.ZodBoolean;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                };
                success: boolean;
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
    deleteSavingGoal: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Delete a saving goal";
        description: "Soft deletes a saving goal";
        method: "DELETE";
        path: "/saving-goals/:id";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                success: boolean;
            }, {
                message: string;
                success: boolean;
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
    getPublicSavingGoals: {
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: number | undefined;
            offset?: number | undefined;
        }>;
        summary: "Get public saving goals";
        description: "Retrieves public saving goals from all users";
        method: "GET";
        path: "/saving-goals/public";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
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
                    status: z.ZodEnum<["active", "completed", "paused", "cancelled"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    color: z.ZodNullable<z.ZodString>;
                    notes: z.ZodNullable<z.ZodString>;
                    is_public: z.ZodBoolean;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
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
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
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
    getGoalsDueSoon: {
        query: z.ZodObject<{
            days: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            days: number;
        }, {
            days?: number | undefined;
        }>;
        summary: "Get goals due soon";
        description: "Retrieves saving goals that are due within the specified number of days";
        method: "GET";
        path: "/saving-goals/due-soon";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
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
                    status: z.ZodEnum<["active", "completed", "paused", "cancelled"]>;
                    priority: z.ZodNullable<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
                    color: z.ZodNullable<z.ZodString>;
                    notes: z.ZodNullable<z.ZodString>;
                    is_public: z.ZodBoolean;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
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
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }[];
                success: boolean;
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    notes: string | null;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                }[];
                success: boolean;
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
};
