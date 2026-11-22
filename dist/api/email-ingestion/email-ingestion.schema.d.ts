import { z } from 'zod';
import { EmailConnectionStatus, EmailProvider, FinancialEmailEventStatus } from '../../enums';
export declare const EmailProviderSchema: z.ZodEnum<typeof EmailProvider>;
export declare const EmailConnectionStatusSchema: z.ZodEnum<typeof EmailConnectionStatus>;
export declare const FinancialEmailEventStatusSchema: z.ZodEnum<typeof FinancialEmailEventStatus>;
export declare const OAuthStartResponseSchema: z.ZodObject<{
    authorizationUrl: z.ZodString;
    state: z.ZodString;
}, z.core.$strip>;
export declare const OAuthStartQuerySchema: z.ZodObject<{
    code_challenge: z.ZodString;
}, z.core.$strip>;
export declare const OAuthCompleteBodySchema: z.ZodObject<{
    ticket: z.ZodString;
    code_verifier: z.ZodString;
}, z.core.$strip>;
export declare const OAuthCompleteResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    provider: z.ZodEnum<typeof EmailProvider>;
}, z.core.$strip>;
export declare const EmailConnectionListItemSchema: z.ZodObject<{
    uuid: z.ZodString;
    provider: z.ZodEnum<typeof EmailProvider>;
    status: z.ZodEnum<typeof EmailConnectionStatus>;
    provider_account_id: z.ZodNullable<z.ZodString>;
    last_successful_sync_at: z.ZodNullable<z.ZodString>;
    last_error_message: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, z.core.$strip>;
export declare const ListEmailConnectionsResponseSchema: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        provider: z.ZodEnum<typeof EmailProvider>;
        status: z.ZodEnum<typeof EmailConnectionStatus>;
        provider_account_id: z.ZodNullable<z.ZodString>;
        last_successful_sync_at: z.ZodNullable<z.ZodString>;
        last_error_message: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const DisconnectEmailConnectionResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const SyncEmailConnectionResponseSchema: z.ZodObject<{
    enqueued: z.ZodLiteral<true>;
    job_uuid: z.ZodString;
}, z.core.$strip>;
export declare const EmailConnectionSyncStateSchema: z.ZodEnum<{
    failed: "failed";
    idle: "idle";
    syncing: "syncing";
}>;
export declare const EmailSyncSummarySchema: z.ZodObject<{
    messages_seen: z.ZodNumber;
    messages_routed: z.ZodNumber;
    duration_ms: z.ZodNumber;
    imported: z.ZodNumber;
    discovered: z.ZodNumber;
    discarded: z.ZodNumber;
    duplicate_tx: z.ZodNumber;
    already_imported: z.ZodNumber;
    pending_review: z.ZodNumber;
}, z.core.$strip>;
export declare const EmailSyncStatusConnectionSchema: z.ZodObject<{
    uuid: z.ZodString;
    provider: z.ZodEnum<typeof EmailProvider>;
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
}, z.core.$strip>;
export declare const EmailSyncStatusResponseSchema: z.ZodObject<{
    is_syncing: z.ZodBoolean;
    imported_total: z.ZodNumber;
    supported_institutions: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    connections: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        provider: z.ZodEnum<typeof EmailProvider>;
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
export declare const ProductKindSchema: z.ZodEnum<{
    debit: "debit";
    credit: "credit";
}>;
export declare const CardBrandSchema: z.ZodEnum<{
    visa: "visa";
    mastercard: "mastercard";
    amex: "amex";
}>;
export declare const FinancialEmailEventResponseSchema: z.ZodObject<{
    uuid: z.ZodString;
    status: z.ZodEnum<typeof FinancialEmailEventStatus>;
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
}, z.core.$strip>;
export declare const ListFinancialEmailEventsResponseSchema: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        status: z.ZodEnum<typeof FinancialEmailEventStatus>;
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
export declare const ApproveFinancialEmailEventBodySchema: z.ZodObject<{
    user_product_uuid: z.ZodString;
    amount: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    transaction_date: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ApproveFinancialEmailEventResponseSchema: z.ZodObject<{
    transaction_uuid: z.ZodString;
    event_uuid: z.ZodString;
}, z.core.$strip>;
export declare const RejectFinancialEmailEventBodySchema: z.ZodObject<{
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const RejectFinancialEmailEventResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const ConvertFinancialEmailEventResponseSchema: z.ZodObject<{
    transaction_uuid: z.ZodString;
    event_uuid: z.ZodString;
}, z.core.$strip>;
export declare const ProductLineSchema: z.ZodEnum<{
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
}>;
export declare const DiscoveredAccountSchema: z.ZodObject<{
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
}, z.core.$strip>;
export declare const ListDiscoveredAccountsResponseSchema: z.ZodObject<{
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
export declare const LinkedAccountRefSchema: z.ZodObject<{
    product_type: z.ZodEnum<{
        savings_account: "savings_account";
        checking_account: "checking_account";
    }>;
    account_last4: z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodString>;
}, z.core.$strip>;
export declare const LinkAccountItemSchema: z.ZodObject<{
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
}, z.core.$strip>;
export declare const LinkAccountsBodySchema: z.ZodObject<{
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
export declare const LinkAccountsResponseSchema: z.ZodObject<{
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
export declare const UnlinkAccountsBodySchema: z.ZodObject<{
    product_uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const UnlinkAccountsResponseSchema: z.ZodObject<{
    requested: z.ZodNumber;
    unlinked: z.ZodNumber;
    failed_uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
