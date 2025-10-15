import { z } from 'zod';
export declare const BankConnectionContracts: {
    createConnection: {
        summary: "Create Connection";
        description: "Crear una conexión a partir de un ID de sesión.";
        method: "POST";
        body: z.ZodObject<{
            sessionId: z.ZodString;
            institution_id: z.ZodNumber;
            nickname: z.ZodOptional<z.ZodString>;
            notes: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            institution_id: number;
            sessionId: string;
            notes?: string | undefined;
            nickname?: string | undefined;
        }, {
            institution_id: number;
            sessionId: string;
            notes?: string | undefined;
            nickname?: string | undefined;
        }>;
        path: "/bank-connections/connections";
        responses: {
            200: z.ZodObject<{
                connection: z.ZodObject<{
                    id: z.ZodString;
                    institution_id: z.ZodNumber;
                    external_connection_id: z.ZodString;
                    status: z.ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
                    nickname: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    last_sync_at: z.ZodNullable<z.ZodString>;
                    revoked_at: z.ZodNullable<z.ZodString>;
                    expires_at: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    status: "error" | "pending" | "active" | "disconnected" | "revoked";
                    id: string;
                    is_active: boolean;
                    created_at: string;
                    institution_id: number;
                    external_connection_id: string;
                    nickname: string | null;
                    last_sync_at: string | null;
                    revoked_at: string | null;
                    expires_at: string | null;
                }, {
                    status: "error" | "pending" | "active" | "disconnected" | "revoked";
                    id: string;
                    is_active: boolean;
                    created_at: string;
                    institution_id: number;
                    external_connection_id: string;
                    nickname: string | null;
                    last_sync_at: string | null;
                    revoked_at: string | null;
                    expires_at: string | null;
                }>;
                accessToken: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                connection: {
                    status: "error" | "pending" | "active" | "disconnected" | "revoked";
                    id: string;
                    is_active: boolean;
                    created_at: string;
                    institution_id: number;
                    external_connection_id: string;
                    nickname: string | null;
                    last_sync_at: string | null;
                    revoked_at: string | null;
                    expires_at: string | null;
                };
                accessToken: string;
            }, {
                connection: {
                    status: "error" | "pending" | "active" | "disconnected" | "revoked";
                    id: string;
                    is_active: boolean;
                    created_at: string;
                    institution_id: number;
                    external_connection_id: string;
                    nickname: string | null;
                    last_sync_at: string | null;
                    revoked_at: string | null;
                    expires_at: string | null;
                };
                accessToken: string;
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
        strictStatusCodes: true;
    };
    getConnection: {
        pathParams: z.ZodObject<{
            connectionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            connectionId: string;
        }, {
            connectionId: string;
        }>;
        summary: "Get Connection";
        description: "Buscar una conexión por su ID.";
        method: "GET";
        path: "/bank-connections/connections/:connectionId";
        responses: {
            200: z.ZodObject<{
                connection: z.ZodObject<{
                    id: z.ZodString;
                    institution_id: z.ZodNumber;
                    external_connection_id: z.ZodString;
                    status: z.ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
                    nickname: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    last_sync_at: z.ZodNullable<z.ZodString>;
                    revoked_at: z.ZodNullable<z.ZodString>;
                    expires_at: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    status: "error" | "pending" | "active" | "disconnected" | "revoked";
                    id: string;
                    is_active: boolean;
                    created_at: string;
                    institution_id: number;
                    external_connection_id: string;
                    nickname: string | null;
                    last_sync_at: string | null;
                    revoked_at: string | null;
                    expires_at: string | null;
                }, {
                    status: "error" | "pending" | "active" | "disconnected" | "revoked";
                    id: string;
                    is_active: boolean;
                    created_at: string;
                    institution_id: number;
                    external_connection_id: string;
                    nickname: string | null;
                    last_sync_at: string | null;
                    revoked_at: string | null;
                    expires_at: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                connection: {
                    status: "error" | "pending" | "active" | "disconnected" | "revoked";
                    id: string;
                    is_active: boolean;
                    created_at: string;
                    institution_id: number;
                    external_connection_id: string;
                    nickname: string | null;
                    last_sync_at: string | null;
                    revoked_at: string | null;
                    expires_at: string | null;
                };
            }, {
                connection: {
                    status: "error" | "pending" | "active" | "disconnected" | "revoked";
                    id: string;
                    is_active: boolean;
                    created_at: string;
                    institution_id: number;
                    external_connection_id: string;
                    nickname: string | null;
                    last_sync_at: string | null;
                    revoked_at: string | null;
                    expires_at: string | null;
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
        strictStatusCodes: true;
    };
    revokeConnection: {
        pathParams: z.ZodObject<{
            connectionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            connectionId: string;
        }, {
            connectionId: string;
        }>;
        summary: "Revoke Connection";
        description: "Revocar una conexión, impidiendo accesos futuros.";
        method: "DELETE";
        path: "/bank-connections/connections/:connectionId";
        responses: {
            204: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    listAccounts: {
        pathParams: z.ZodObject<{
            connectionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            connectionId: string;
        }, {
            connectionId: string;
        }>;
        summary: "List Accounts";
        description: "Listar cuentas asociadas a una conexión.";
        method: "GET";
        path: "/bank-connections/connections/:connectionId/accounts";
        responses: {
            200: z.ZodObject<{
                accounts: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    connectionId: z.ZodString;
                    type: z.ZodEnum<["checking", "savings", "credit_card", "loan", "investment", "depository", "other"]>;
                    name: z.ZodString;
                    lastFour: z.ZodNullable<z.ZodString>;
                    balance: z.ZodObject<{
                        current: z.ZodNullable<z.ZodNumber>;
                        available: z.ZodNullable<z.ZodNumber>;
                        limit: z.ZodNullable<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    }, {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    }>;
                    currency: z.ZodString;
                    lastTransactionRefresh: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                    id: string;
                    name: string;
                    currency: string;
                    connectionId: string;
                    lastFour: string | null;
                    balance: {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    };
                    lastTransactionRefresh: string | null;
                }, {
                    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                    id: string;
                    name: string;
                    currency: string;
                    connectionId: string;
                    lastFour: string | null;
                    balance: {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    };
                    lastTransactionRefresh: string | null;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                accounts: {
                    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                    id: string;
                    name: string;
                    currency: string;
                    connectionId: string;
                    lastFour: string | null;
                    balance: {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    };
                    lastTransactionRefresh: string | null;
                }[];
            }, {
                accounts: {
                    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                    id: string;
                    name: string;
                    currency: string;
                    connectionId: string;
                    lastFour: string | null;
                    balance: {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    };
                    lastTransactionRefresh: string | null;
                }[];
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    getAccount: {
        pathParams: z.ZodObject<{
            connectionId: z.ZodString;
            accountId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            connectionId: string;
            accountId: string;
        }, {
            connectionId: string;
            accountId: string;
        }>;
        summary: "Get Account";
        description: "Buscar una cuenta por su ID.";
        method: "GET";
        path: "/bank-connections/connections/:connectionId/accounts/:accountId";
        responses: {
            200: z.ZodObject<{
                account: z.ZodObject<{
                    id: z.ZodString;
                    connectionId: z.ZodString;
                    type: z.ZodEnum<["checking", "savings", "credit_card", "loan", "investment", "depository", "other"]>;
                    name: z.ZodString;
                    lastFour: z.ZodNullable<z.ZodString>;
                    balance: z.ZodObject<{
                        current: z.ZodNullable<z.ZodNumber>;
                        available: z.ZodNullable<z.ZodNumber>;
                        limit: z.ZodNullable<z.ZodNumber>;
                    }, "strip", z.ZodTypeAny, {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    }, {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    }>;
                    currency: z.ZodString;
                    lastTransactionRefresh: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                    id: string;
                    name: string;
                    currency: string;
                    connectionId: string;
                    lastFour: string | null;
                    balance: {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    };
                    lastTransactionRefresh: string | null;
                }, {
                    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                    id: string;
                    name: string;
                    currency: string;
                    connectionId: string;
                    lastFour: string | null;
                    balance: {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    };
                    lastTransactionRefresh: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                account: {
                    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                    id: string;
                    name: string;
                    currency: string;
                    connectionId: string;
                    lastFour: string | null;
                    balance: {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    };
                    lastTransactionRefresh: string | null;
                };
            }, {
                account: {
                    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                    id: string;
                    name: string;
                    currency: string;
                    connectionId: string;
                    lastFour: string | null;
                    balance: {
                        limit: number | null;
                        current: number | null;
                        available: number | null;
                    };
                    lastTransactionRefresh: string | null;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    listTransactions: {
        pathParams: z.ZodObject<{
            connectionId: z.ZodString;
            accountId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            connectionId: string;
            accountId: string;
        }, {
            connectionId: string;
            accountId: string;
        }>;
        query: z.ZodObject<{
            refreshedSince: z.ZodOptional<z.ZodString>;
            limit: z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>;
            offset: z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>;
        }, "strip", z.ZodTypeAny, {
            limit?: number | undefined;
            offset?: number | undefined;
            refreshedSince?: string | undefined;
        }, {
            limit?: string | undefined;
            offset?: string | undefined;
            refreshedSince?: string | undefined;
        }>;
        summary: "List Transactions";
        description: "Listar todas las transacciones de una cuenta.";
        method: "GET";
        path: "/bank-connections/connections/:connectionId/accounts/:accountId/transactions";
        responses: {
            200: z.ZodObject<{
                transactions: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    accountId: z.ZodString;
                    amount: z.ZodNumber;
                    date: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reference: z.ZodNullable<z.ZodString>;
                    status: z.ZodEnum<["pending", "completed", "cancelled", "failed"]>;
                    transactionRefresh: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "pending" | "completed" | "cancelled" | "failed";
                    id: string;
                    date: string;
                    description: string | null;
                    amount: number;
                    accountId: string;
                    reference: string | null;
                    transactionRefresh: string | null;
                }, {
                    status: "pending" | "completed" | "cancelled" | "failed";
                    id: string;
                    date: string;
                    description: string | null;
                    amount: number;
                    accountId: string;
                    reference: string | null;
                    transactionRefresh: string | null;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                transactions: {
                    status: "pending" | "completed" | "cancelled" | "failed";
                    id: string;
                    date: string;
                    description: string | null;
                    amount: number;
                    accountId: string;
                    reference: string | null;
                    transactionRefresh: string | null;
                }[];
            }, {
                transactions: {
                    status: "pending" | "completed" | "cancelled" | "failed";
                    id: string;
                    date: string;
                    description: string | null;
                    amount: number;
                    accountId: string;
                    reference: string | null;
                    transactionRefresh: string | null;
                }[];
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    getTransaction: {
        pathParams: z.ZodObject<{
            connectionId: z.ZodString;
            accountId: z.ZodString;
            transactionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            connectionId: string;
            accountId: string;
            transactionId: string;
        }, {
            connectionId: string;
            accountId: string;
            transactionId: string;
        }>;
        summary: "Get Transaction";
        description: "Buscar una transacción por su identificador.";
        method: "GET";
        path: "/bank-connections/connections/:connectionId/accounts/:accountId/transactions/:transactionId";
        responses: {
            200: z.ZodObject<{
                transaction: z.ZodObject<{
                    id: z.ZodString;
                    accountId: z.ZodString;
                    amount: z.ZodNumber;
                    date: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    reference: z.ZodNullable<z.ZodString>;
                    status: z.ZodEnum<["pending", "completed", "cancelled", "failed"]>;
                    transactionRefresh: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    status: "pending" | "completed" | "cancelled" | "failed";
                    id: string;
                    date: string;
                    description: string | null;
                    amount: number;
                    accountId: string;
                    reference: string | null;
                    transactionRefresh: string | null;
                }, {
                    status: "pending" | "completed" | "cancelled" | "failed";
                    id: string;
                    date: string;
                    description: string | null;
                    amount: number;
                    accountId: string;
                    reference: string | null;
                    transactionRefresh: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                transaction: {
                    status: "pending" | "completed" | "cancelled" | "failed";
                    id: string;
                    date: string;
                    description: string | null;
                    amount: number;
                    accountId: string;
                    reference: string | null;
                    transactionRefresh: string | null;
                };
            }, {
                transaction: {
                    status: "pending" | "completed" | "cancelled" | "failed";
                    id: string;
                    date: string;
                    description: string | null;
                    amount: number;
                    accountId: string;
                    reference: string | null;
                    transactionRefresh: string | null;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
};
