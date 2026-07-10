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
                    transaction_description: z.ZodNullable<z.ZodString>;
                    amount: z.ZodNullable<z.ZodNumber>;
                    currency: z.ZodNullable<z.ZodString>;
                    transaction_date: z.ZodNullable<z.ZodString>;
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
                    institution_name: string | null;
                    amount: number | null;
                    transaction_date: string | null;
                    category: string | null;
                    transaction_description: string | null;
                    transaction_direction: "credit" | "debit" | null;
                    confidence: number | null;
                    source_metadata: Record<string, unknown> | null;
                }, {
                    status: import("../..").FinancialEmailEventStatus;
                    uuid: string;
                    created_at: string;
                    currency: string | null;
                    institution_name: string | null;
                    amount: number | null;
                    transaction_date: string | null;
                    category: string | null;
                    transaction_description: string | null;
                    transaction_direction: "credit" | "debit" | null;
                    confidence: number | null;
                    source_metadata: Record<string, unknown> | null;
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
                    institution_name: string | null;
                    amount: number | null;
                    transaction_date: string | null;
                    category: string | null;
                    transaction_description: string | null;
                    transaction_direction: "credit" | "debit" | null;
                    confidence: number | null;
                    source_metadata: Record<string, unknown> | null;
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
                    institution_name: string | null;
                    amount: number | null;
                    transaction_date: string | null;
                    category: string | null;
                    transaction_description: string | null;
                    transaction_direction: "credit" | "debit" | null;
                    confidence: number | null;
                    source_metadata: Record<string, unknown> | null;
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
    approveEvent: {
        pathParams: z.ZodObject<{
            eventUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            eventUuid: string;
        }, {
            eventUuid: string;
        }>;
        summary: "Approve event and import as product transaction";
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
            409: z.ZodObject<{
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
        summary: "Reject parsed financial email event";
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
    convertEvent: {
        pathParams: z.ZodObject<{
            eventUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            eventUuid: string;
        }, {
            eventUuid: string;
        }>;
        summary: "Convert event (same as approve)";
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
        path: "/email-ingestion/events/:eventUuid/convert";
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
            409: z.ZodObject<{
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
