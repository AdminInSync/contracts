import { z } from 'zod';
export declare const SavingGoalsContracts: {
    createSavingGoal: {
        summary: "Crear una nueva meta de ahorro";
        description: "Crea una nueva meta de ahorro para el usuario autenticado";
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                };
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
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
        summary: "Obtener todas las metas de ahorro";
        description: "Obtiene todas las metas de ahorro del usuario autenticado con filtrado opcional";
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }[];
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
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
    getSavingGoal: {
        pathParams: z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>;
        summary: "Obtener una meta de ahorro específica";
        description: "Obtiene una meta de ahorro específica por ID";
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                };
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                };
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
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>;
        summary: "Actualizar una meta de ahorro";
        description: "Actualiza una meta de ahorro existente";
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                };
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
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
    updateProgress: {
        pathParams: z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>;
        summary: "Actualizar progreso de meta de ahorro";
        description: "Actualiza el monto actual de una meta de ahorro";
        method: "PATCH";
        body: z.ZodObject<{
            current_amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            current_amount: number;
        }, {
            current_amount: number;
        }>;
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                };
            }, {
                message: string;
                data: {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
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
    deleteSavingGoal: {
        pathParams: z.ZodObject<{
            id: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>;
        summary: "Eliminar una meta de ahorro";
        description: "Elimina suavemente una meta de ahorro";
        method: "DELETE";
        path: "/delete-saving-goals-by-id/:id/soft/";
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
        summary: "Obtener metas de ahorro públicas";
        description: "Obtiene metas de ahorro públicas de todos los usuarios";
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }[];
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }[];
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
        summary: "Obtener metas próximas a vencer";
        description: "Obtiene metas de ahorro que vencen dentro del número de días especificado";
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }, {
                    status: "active" | "completed" | "paused" | "cancelled";
                    id: number;
                    description: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
                }[];
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
                    created_at: string;
                    notes: string | null;
                    updated_at: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    monthly_contribution: number;
                    currency: string;
                    target_date: string;
                    priority: "low" | "medium" | "high" | "urgent" | null;
                    color: string | null;
                    is_public: boolean;
                    deleted_at: string | null;
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
};
