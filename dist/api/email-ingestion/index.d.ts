import { z } from 'zod';
export declare const EmailIngestionContracts: {
    gmailOAuthStart: {
        query: z.ZodObject<{
            code_challenge: z.ZodString;
        }, z.core.$strip>;
        summary: "Start Gmail OAuth";
        method: "GET";
        path: "/email-ingestion/gmail/oauth/start";
        responses: {
            200: z.ZodObject<{
                authorizationUrl: z.ZodString;
                state: z.ZodString;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    gmailOAuthCallback: {
        query: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            state: z.ZodString;
            error: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        summary: "Gmail OAuth callback";
        method: "GET";
        path: "/email-ingestion/gmail/oauth/callback";
        responses: {
            302: z.ZodOptional<z.ZodObject<{
                redirect: z.ZodString;
            }, z.core.$strip>>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    outlookOAuthStart: {
        query: z.ZodObject<{
            code_challenge: z.ZodString;
        }, z.core.$strip>;
        summary: "Start Outlook OAuth";
        method: "GET";
        path: "/email-ingestion/outlook/oauth/start";
        responses: {
            200: z.ZodObject<{
                authorizationUrl: z.ZodString;
                state: z.ZodString;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    oauthComplete: {
        summary: "Complete a client-bound OAuth callback";
        method: "POST";
        body: z.ZodObject<{
            ticket: z.ZodString;
            code_verifier: z.ZodString;
        }, z.core.$strip>;
        path: "/email-ingestion/oauth/complete";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                provider: z.ZodEnum<typeof import("../..").EmailProvider>;
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
            403: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            409: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    outlookOAuthCallback: {
        query: z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            error_uri: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        summary: "Outlook OAuth callback";
        method: "GET";
        path: "/email-ingestion/outlook/oauth/callback";
        responses: {
            302: z.ZodOptional<z.ZodObject<{
                redirect: z.ZodString;
            }, z.core.$strip>>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
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
                    provider: z.ZodEnum<typeof import("../..").EmailProvider>;
                    status: z.ZodEnum<typeof import("../..").EmailConnectionStatus>;
                    provider_account_id: z.ZodNullable<z.ZodString>;
                    last_successful_sync_at: z.ZodNullable<z.ZodString>;
                    last_error_message: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    disconnectConnection: {
        pathParams: z.ZodObject<{
            connectionUuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Disconnect email provider";
        method: "DELETE";
        path: "/email-ingestion/connections/:connectionUuid";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    syncConnection: {
        pathParams: z.ZodObject<{
            connectionUuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Enqueue manual email sync";
        method: "POST";
        body: z.ZodObject<{
            institution_key: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: "/email-ingestion/connections/:connectionUuid/sync";
        responses: {
            200: z.ZodObject<{
                enqueued: z.ZodLiteral<true>;
                job_uuid: z.ZodString;
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
            403: z.ZodObject<{
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
                }, z.core.$strip>>;
                connections: z.ZodArray<z.ZodObject<{
                    uuid: z.ZodString;
                    provider: z.ZodEnum<typeof import("../..").EmailProvider>;
                    sync_state: z.ZodEnum<{
                        failed: "failed";
                        idle: "idle";
                        syncing: "syncing";
                    }>;
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
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    listEvents: {
        query: z.ZodObject<{
            status: z.ZodOptional<z.ZodEnum<typeof import("../..").FinancialEmailEventStatus>>;
            fromDate: z.ZodOptional<z.ZodString>;
            toDate: z.ZodOptional<z.ZodString>;
            limit: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
            offset: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>>;
        }, z.core.$strip>;
        summary: "List parsed financial email events";
        method: "GET";
        path: "/email-ingestion/events";
        responses: {
            200: z.ZodObject<{
                events: z.ZodArray<z.ZodObject<{
                    uuid: z.ZodString;
                    status: z.ZodEnum<typeof import("../..").FinancialEmailEventStatus>;
                    institution_name: z.ZodNullable<z.ZodString>;
                    institution_logo: z.ZodNullable<z.ZodString>;
                    product_kind: z.ZodNullable<z.ZodEnum<{
                        debit: "debit";
                        credit: "credit";
                    }>>;
                    product_type: z.ZodNullable<z.ZodString>;
                    product_label: z.ZodNullable<z.ZodString>;
                    transaction_description: z.ZodNullable<z.ZodString>;
                    amount: z.ZodNullable<z.ZodCoercedNumber<unknown>>;
                    currency: z.ZodNullable<z.ZodString>;
                    transaction_date: z.ZodNullable<z.ZodString>;
                    transaction_occurred_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    transaction_direction: z.ZodNullable<z.ZodEnum<{
                        debit: "debit";
                        credit: "credit";
                    }>>;
                    category: z.ZodNullable<z.ZodString>;
                    confidence: z.ZodNullable<z.ZodCoercedNumber<unknown>>;
                    source_metadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    created_at: z.ZodString;
                }, z.core.$strip>>;
                total: z.ZodNumber;
                limit: z.ZodNumber;
                offset: z.ZodNumber;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            403: z.ZodObject<{
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
                    product_label: z.ZodString;
                    account_last4: z.ZodString;
                    card_brand: z.ZodNullable<z.ZodEnum<{
                        visa: "visa";
                        mastercard: "mastercard";
                        amex: "amex";
                    }>>;
                    product_line: z.ZodNullable<z.ZodEnum<{
                        gold: "gold";
                        classic: "classic";
                        platinum: "platinum";
                        premia: "premia";
                        infinite: "infinite";
                        signature: "signature";
                        negocios: "negocios";
                        corporate: "corporate";
                        black: "black";
                        gnial: "gnial";
                    }>>;
                    event_count: z.ZodNumber;
                    latest_at: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    linkAccounts: {
        summary: "Link discovered accounts for monitoring and backfill matching events";
        method: "POST";
        body: z.ZodObject<{
            accounts: z.ZodArray<z.ZodObject<{
                institution_id: z.ZodCoercedNumber<unknown>;
                institution_name: z.ZodString;
                product_type: z.ZodPreprocess<z.ZodEnum<{
                    insurance: "insurance";
                    credit_card: "credit_card";
                    debit_card: "debit_card";
                    loan: "loan";
                    savings_account: "savings_account";
                    checking_account: "checking_account";
                    investment: "investment";
                    mortgage: "mortgage";
                }>, unknown>;
                account_last4: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
                card_brand: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    visa: "visa";
                    mastercard: "mastercard";
                    amex: "amex";
                }>>>;
                product_line: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    gold: "gold";
                    classic: "classic";
                    platinum: "platinum";
                    premia: "premia";
                    infinite: "infinite";
                    signature: "signature";
                    negocios: "negocios";
                    corporate: "corporate";
                    black: "black";
                    gnial: "gnial";
                }>>>;
                linked_account: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    product_type: z.ZodEnum<{
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                    }>;
                    account_last4: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        path: "/email-ingestion/link-accounts";
        responses: {
            200: z.ZodObject<{
                requested: z.ZodNumber;
                linked: z.ZodNumber;
                imported_events: z.ZodNumber;
                backfill_failed_events: z.ZodNumber;
                backfill_pending: z.ZodBoolean;
                product_uuids: z.ZodArray<z.ZodString>;
                failed_accounts: z.ZodArray<z.ZodObject<{
                    institution_id: z.ZodNumber;
                    product_type: z.ZodPreprocess<z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>, unknown>;
                    account_last4: z.ZodString;
                }, z.core.$strip>>;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    unlinkAccounts: {
        summary: "Unlink connected user products and restore matching email events as discovered";
        method: "POST";
        body: z.ZodObject<{
            product_uuids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        path: "/email-ingestion/unlink-accounts";
        responses: {
            200: z.ZodObject<{
                requested: z.ZodNumber;
                unlinked: z.ZodNumber;
                failed_uuids: z.ZodArray<z.ZodString>;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    approveEvent: {
        pathParams: z.ZodObject<{
            eventUuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Approve a pending financial email event into a product transaction";
        method: "POST";
        body: z.ZodObject<{
            user_product_uuid: z.ZodString;
            amount: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            transaction_date: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: "/email-ingestion/events/:eventUuid/approve";
        responses: {
            200: z.ZodObject<{
                transaction_uuid: z.ZodString;
                event_uuid: z.ZodString;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
    rejectEvent: {
        pathParams: z.ZodObject<{
            eventUuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Reject a pending financial email event";
        method: "POST";
        body: z.ZodObject<{
            reason: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: "/email-ingestion/events/:eventUuid/reject";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
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
            403: z.ZodObject<{
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
        strictStatusCodes: true;
    };
};
