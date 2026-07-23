import { z } from 'zod';
export declare const EmailIngestionContracts: {
    gmailOAuthStart: {
        summary: "Start Gmail OAuth";
        method: "GET";
        path: "/email-ingestion/gmail/oauth/start";
        responses: {
            200: z.ZodObject<{
                authorizationUrl: z.ZodString;
                state: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                authorizationUrl: string;
                state: string;
            }, {
                authorizationUrl: string;
                state: string;
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
    gmailOAuthCallback: {
        query: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            state: z.ZodString;
            error: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            state: string;
            error?: string | undefined;
            code?: string | undefined;
        }, {
            state: string;
            error?: string | undefined;
            code?: string | undefined;
        }>;
        summary: "Gmail OAuth callback";
        method: "GET";
        path: "/email-ingestion/gmail/oauth/callback";
        responses: {
            302: z.ZodOptional<z.ZodObject<{
                redirect: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                redirect: string;
            }, {
                redirect: string;
            }>>;
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
        };
        strictStatusCodes: true;
    };
    outlookOAuthStart: {
        summary: "Start Outlook OAuth";
        method: "GET";
        path: "/email-ingestion/outlook/oauth/start";
        responses: {
            200: z.ZodObject<{
                authorizationUrl: z.ZodString;
                state: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                authorizationUrl: string;
                state: string;
            }, {
                authorizationUrl: string;
                state: string;
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
    outlookOAuthCallback: {
        query: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            state: z.ZodString;
            error: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            state: string;
            error?: string | undefined;
            code?: string | undefined;
        }, {
            state: string;
            error?: string | undefined;
            code?: string | undefined;
        }>;
        summary: "Outlook OAuth callback";
        method: "GET";
        path: "/email-ingestion/outlook/oauth/callback";
        responses: {
            302: z.ZodOptional<z.ZodObject<{
                redirect: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                redirect: string;
            }, {
                redirect: string;
            }>>;
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
        };
        strictStatusCodes: true;
    };
    listEmailConnections: {
        summary: "List email provider connections";
        method: "GET";
        path: "/email-ingestion/connections";
        responses: {
            200: z.ZodObject<{
                connections: z.ZodArray<z.ZodObject<{
                    uuid: z.ZodString;
                    provider: z.ZodNativeEnum<typeof import("../..").EmailProvider>;
                    status: z.ZodNativeEnum<typeof import("../..").EmailConnectionStatus>;
                    provider_account_id: z.ZodNullable<z.ZodString>;
                    last_successful_sync_at: z.ZodNullable<z.ZodString>;
                    last_error_message: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    status: import("../..").EmailConnectionStatus;
                    uuid: string;
                    created_at: string;
                    provider: import("../..").EmailProvider;
                    provider_account_id: string | null;
                    last_successful_sync_at: string | null;
                    last_error_message: string | null;
                }, {
                    status: import("../..").EmailConnectionStatus;
                    uuid: string;
                    created_at: string;
                    provider: import("../..").EmailProvider;
                    provider_account_id: string | null;
                    last_successful_sync_at: string | null;
                    last_error_message: string | null;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                connections: {
                    status: import("../..").EmailConnectionStatus;
                    uuid: string;
                    created_at: string;
                    provider: import("../..").EmailProvider;
                    provider_account_id: string | null;
                    last_successful_sync_at: string | null;
                    last_error_message: string | null;
                }[];
            }, {
                connections: {
                    status: import("../..").EmailConnectionStatus;
                    uuid: string;
                    created_at: string;
                    provider: import("../..").EmailProvider;
                    provider_account_id: string | null;
                    last_successful_sync_at: string | null;
                    last_error_message: string | null;
                }[];
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
    disconnectConnection: {
        pathParams: z.ZodObject<{
            connectionUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            connectionUuid: string;
        }, {
            connectionUuid: string;
        }>;
        summary: "Disconnect email provider";
        method: "DELETE";
        path: "/email-ingestion/connections/:connectionUuid";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, "strip", z.ZodTypeAny, {
                success: true;
            }, {
                success: true;
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
    syncConnection: {
        pathParams: z.ZodObject<{
            connectionUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            connectionUuid: string;
        }, {
            connectionUuid: string;
        }>;
        summary: "Enqueue manual email sync";
        method: "POST";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/email-ingestion/connections/:connectionUuid/sync";
        responses: {
            200: z.ZodObject<{
                enqueued: z.ZodLiteral<true>;
                job_uuid: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                enqueued: true;
                job_uuid: string;
            }, {
                enqueued: true;
                job_uuid: string;
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
    getSyncStatus: {
        summary: "Email ingestion sync status for the authenticated user";
        method: "GET";
        path: "/email-ingestion/sync-status";
        responses: {
            200: z.ZodObject<{
                is_syncing: z.ZodBoolean;
                imported_total: z.ZodNumber;
                supported_institutions: z.ZodArray<z.ZodObject<{
                    key: z.ZodString;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    key: string;
                }, {
                    name: string;
                    key: string;
                }>, "many">;
                connections: z.ZodArray<z.ZodObject<{
                    uuid: z.ZodString;
                    provider: z.ZodNativeEnum<typeof import("../..").EmailProvider>;
                    sync_state: z.ZodEnum<["idle", "syncing", "failed"]>;
                    last_successful_sync_at: z.ZodNullable<z.ZodString>;
                    active_job_uuid: z.ZodNullable<z.ZodString>;
                    error_message: z.ZodNullable<z.ZodString>;
                    last_summary: z.ZodNullable<z.ZodObject<{
                        messages_seen: z.ZodNumber;
                        messages_routed: z.ZodNumber;
                        duration_ms: z.ZodNumber;
                        imported: z.ZodNumber;
                        discovered: z.ZodNumber;
                        discarded: z.ZodNumber;
                        duplicate_tx: z.ZodNumber;
                        already_imported: z.ZodNumber;
                        pending_review: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        discovered: number;
                        pending_review: number;
                        imported: number;
                        discarded: number;
                        messages_seen: number;
                        messages_routed: number;
                        duration_ms: number;
                        duplicate_tx: number;
                        already_imported: number;
                    }, {
                        discovered: number;
                        pending_review: number;
                        imported: number;
                        discarded: number;
                        messages_seen: number;
                        messages_routed: number;
                        duration_ms: number;
                        duplicate_tx: number;
                        already_imported: number;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    uuid: string;
                    provider: import("../..").EmailProvider;
                    last_successful_sync_at: string | null;
                    sync_state: "failed" | "idle" | "syncing";
                    active_job_uuid: string | null;
                    error_message: string | null;
                    last_summary: {
                        discovered: number;
                        pending_review: number;
                        imported: number;
                        discarded: number;
                        messages_seen: number;
                        messages_routed: number;
                        duration_ms: number;
                        duplicate_tx: number;
                        already_imported: number;
                    } | null;
                }, {
                    uuid: string;
                    provider: import("../..").EmailProvider;
                    last_successful_sync_at: string | null;
                    sync_state: "failed" | "idle" | "syncing";
                    active_job_uuid: string | null;
                    error_message: string | null;
                    last_summary: {
                        discovered: number;
                        pending_review: number;
                        imported: number;
                        discarded: number;
                        messages_seen: number;
                        messages_routed: number;
                        duration_ms: number;
                        duplicate_tx: number;
                        already_imported: number;
                    } | null;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                connections: {
                    uuid: string;
                    provider: import("../..").EmailProvider;
                    last_successful_sync_at: string | null;
                    sync_state: "failed" | "idle" | "syncing";
                    active_job_uuid: string | null;
                    error_message: string | null;
                    last_summary: {
                        discovered: number;
                        pending_review: number;
                        imported: number;
                        discarded: number;
                        messages_seen: number;
                        messages_routed: number;
                        duration_ms: number;
                        duplicate_tx: number;
                        already_imported: number;
                    } | null;
                }[];
                is_syncing: boolean;
                imported_total: number;
                supported_institutions: {
                    name: string;
                    key: string;
                }[];
            }, {
                connections: {
                    uuid: string;
                    provider: import("../..").EmailProvider;
                    last_successful_sync_at: string | null;
                    sync_state: "failed" | "idle" | "syncing";
                    active_job_uuid: string | null;
                    error_message: string | null;
                    last_summary: {
                        discovered: number;
                        pending_review: number;
                        imported: number;
                        discarded: number;
                        messages_seen: number;
                        messages_routed: number;
                        duration_ms: number;
                        duplicate_tx: number;
                        already_imported: number;
                    } | null;
                }[];
                is_syncing: boolean;
                imported_total: number;
                supported_institutions: {
                    name: string;
                    key: string;
                }[];
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
    listEvents: {
        query: z.ZodObject<{
            status: z.ZodOptional<z.ZodNativeEnum<typeof import("../..").FinancialEmailEventStatus>>;
            fromDate: z.ZodOptional<z.ZodString>;
            toDate: z.ZodOptional<z.ZodString>;
            limit: z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>;
            offset: z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>;
        }, "strip", z.ZodTypeAny, {
            status?: import("../..").FinancialEmailEventStatus | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
            fromDate?: string | undefined;
            toDate?: string | undefined;
        }, {
            status?: import("../..").FinancialEmailEventStatus | undefined;
            limit?: string | undefined;
            offset?: string | undefined;
            fromDate?: string | undefined;
            toDate?: string | undefined;
        }>;
        summary: "List parsed financial email events";
        method: "GET";
        path: "/email-ingestion/events";
        responses: {
            200: z.ZodObject<{
                events: z.ZodArray<z.ZodObject<{
                    uuid: z.ZodString;
                    status: z.ZodNativeEnum<typeof import("../..").FinancialEmailEventStatus>;
                    institution_name: z.ZodNullable<z.ZodString>;
                    institution_logo: z.ZodNullable<z.ZodString>;
                    product_kind: z.ZodNullable<z.ZodEnum<["debit", "credit"]>>;
                    product_type: z.ZodNullable<z.ZodString>;
                    product_label: z.ZodNullable<z.ZodString>;
                    transaction_description: z.ZodNullable<z.ZodString>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodNullable<z.ZodString>;
                    transaction_date: z.ZodNullable<z.ZodString>;
                    transaction_occurred_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    transaction_direction: z.ZodNullable<z.ZodEnum<["credit", "debit"]>>;
                    category: z.ZodNullable<z.ZodString>;
                    confidence: z.ZodNullable<z.ZodNumber>;
                    source_metadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    created_at: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    status: import("../..").FinancialEmailEventStatus;
                    uuid: string;
                    created_at: string;
                    currency: string | null;
                    product_type: string | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    product_kind: "debit" | "credit" | null;
                    product_label: string | null;
                    amount: number | null;
                    transaction_date: string | null;
                    category: string | null;
                    transaction_description: string | null;
                    transaction_direction: "debit" | "credit" | null;
                    confidence: number | null;
                    source_metadata: Record<string, unknown> | null;
                    transaction_occurred_at?: string | null | undefined;
                }, {
                    status: import("../..").FinancialEmailEventStatus;
                    uuid: string;
                    created_at: string;
                    currency: string | null;
                    product_type: string | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    product_kind: "debit" | "credit" | null;
                    product_label: string | null;
                    amount: number | null;
                    transaction_date: string | null;
                    category: string | null;
                    transaction_description: string | null;
                    transaction_direction: "debit" | "credit" | null;
                    confidence: number | null;
                    source_metadata: Record<string, unknown> | null;
                    transaction_occurred_at?: string | null | undefined;
                }>, "many">;
                total: z.ZodNumber;
                limit: z.ZodNumber;
                offset: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                limit: number;
                total: number;
                offset: number;
                events: {
                    status: import("../..").FinancialEmailEventStatus;
                    uuid: string;
                    created_at: string;
                    currency: string | null;
                    product_type: string | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    product_kind: "debit" | "credit" | null;
                    product_label: string | null;
                    amount: number | null;
                    transaction_date: string | null;
                    category: string | null;
                    transaction_description: string | null;
                    transaction_direction: "debit" | "credit" | null;
                    confidence: number | null;
                    source_metadata: Record<string, unknown> | null;
                    transaction_occurred_at?: string | null | undefined;
                }[];
            }, {
                limit: number;
                total: number;
                offset: number;
                events: {
                    status: import("../..").FinancialEmailEventStatus;
                    uuid: string;
                    created_at: string;
                    currency: string | null;
                    product_type: string | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    product_kind: "debit" | "credit" | null;
                    product_label: string | null;
                    amount: number | null;
                    transaction_date: string | null;
                    category: string | null;
                    transaction_description: string | null;
                    transaction_direction: "debit" | "credit" | null;
                    confidence: number | null;
                    source_metadata: Record<string, unknown> | null;
                    transaction_occurred_at?: string | null | undefined;
                }[];
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
    listDiscoveredAccounts: {
        summary: "List unique bank accounts discovered from email but not yet linked";
        method: "GET";
        path: "/email-ingestion/discovered-accounts";
        responses: {
            200: z.ZodObject<{
                accounts: z.ZodArray<z.ZodObject<{
                    institution_id: z.ZodNullable<z.ZodNumber>;
                    institution_name: z.ZodNullable<z.ZodString>;
                    institution_logo: z.ZodNullable<z.ZodString>;
                    product_type: z.ZodString;
                    account_last4: z.ZodString;
                    event_count: z.ZodNumber;
                    latest_at: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    product_type: string;
                    institution_id: number | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    account_last4: string;
                    event_count: number;
                    latest_at: string | null;
                }, {
                    product_type: string;
                    institution_id: number | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    account_last4: string;
                    event_count: number;
                    latest_at: string | null;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                accounts: {
                    product_type: string;
                    institution_id: number | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    account_last4: string;
                    event_count: number;
                    latest_at: string | null;
                }[];
            }, {
                accounts: {
                    product_type: string;
                    institution_id: number | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    account_last4: string;
                    event_count: number;
                    latest_at: string | null;
                }[];
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
    linkAccounts: {
        summary: "Link discovered accounts for monitoring and backfill matching events";
        method: "POST";
        body: z.ZodObject<{
            accounts: z.ZodArray<z.ZodObject<{
                institution_id: z.ZodNumber;
                institution_name: z.ZodString;
                product_type: z.ZodEffects<z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>, "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage", unknown>;
                account_last4: z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                institution_id: number;
                institution_name: string;
                account_last4: string;
            }, {
                institution_id: number;
                institution_name: string;
                account_last4: string;
                product_type?: unknown;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            accounts: {
                product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                institution_id: number;
                institution_name: string;
                account_last4: string;
            }[];
        }, {
            accounts: {
                institution_id: number;
                institution_name: string;
                account_last4: string;
                product_type?: unknown;
            }[];
        }>;
        path: "/email-ingestion/link-accounts";
        responses: {
            200: z.ZodObject<{
                requested: z.ZodNumber;
                linked: z.ZodNumber;
                imported_events: z.ZodNumber;
                backfill_failed_events: z.ZodNumber;
                backfill_pending: z.ZodBoolean;
                product_uuids: z.ZodArray<z.ZodString, "many">;
                failed_accounts: z.ZodArray<z.ZodObject<{
                    institution_id: z.ZodNumber;
                    product_type: z.ZodEffects<z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>, "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage", unknown>;
                    account_last4: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    account_last4: string;
                }, {
                    institution_id: number;
                    account_last4: string;
                    product_type?: unknown;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                requested: number;
                linked: number;
                imported_events: number;
                backfill_failed_events: number;
                backfill_pending: boolean;
                product_uuids: string[];
                failed_accounts: {
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    account_last4: string;
                }[];
            }, {
                requested: number;
                linked: number;
                imported_events: number;
                backfill_failed_events: number;
                backfill_pending: boolean;
                product_uuids: string[];
                failed_accounts: {
                    institution_id: number;
                    account_last4: string;
                    product_type?: unknown;
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
    approveEvent: {
        pathParams: z.ZodObject<{
            eventUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            eventUuid: string;
        }, {
            eventUuid: string;
        }>;
        summary: "Approve a pending financial email event into a product transaction";
        method: "POST";
        body: z.ZodObject<{
            user_product_uuid: z.ZodString;
            amount: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            transaction_date: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            user_product_uuid: string;
            description?: string | undefined;
            amount?: number | undefined;
            transaction_date?: string | undefined;
        }, {
            user_product_uuid: string;
            description?: string | undefined;
            amount?: number | undefined;
            transaction_date?: string | undefined;
        }>;
        path: "/email-ingestion/events/:eventUuid/approve";
        responses: {
            200: z.ZodObject<{
                transaction_uuid: z.ZodString;
                event_uuid: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                transaction_uuid: string;
                event_uuid: string;
            }, {
                transaction_uuid: string;
                event_uuid: string;
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
    rejectEvent: {
        pathParams: z.ZodObject<{
            eventUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            eventUuid: string;
        }, {
            eventUuid: string;
        }>;
        summary: "Reject a pending financial email event";
        method: "POST";
        body: z.ZodObject<{
            reason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reason?: string | undefined;
        }, {
            reason?: string | undefined;
        }>;
        path: "/email-ingestion/events/:eventUuid/reject";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, "strip", z.ZodTypeAny, {
                success: true;
            }, {
                success: true;
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
};
