import { z } from 'zod';
import { EmailConnectionStatus, EmailProvider, FinancialEmailEventStatus } from '../../enums';
export declare const EmailProviderSchema: z.ZodNativeEnum<typeof EmailProvider>;
export declare const EmailConnectionStatusSchema: z.ZodNativeEnum<typeof EmailConnectionStatus>;
export declare const FinancialEmailEventStatusSchema: z.ZodNativeEnum<typeof FinancialEmailEventStatus>;
export declare const OAuthStartResponseSchema: z.ZodObject<{
    authorizationUrl: z.ZodString;
    state: z.ZodString;
}, "strip", z.ZodTypeAny, {
    authorizationUrl: string;
    state: string;
}, {
    authorizationUrl: string;
    state: string;
}>;
export declare const EmailConnectionListItemSchema: z.ZodObject<{
    uuid: z.ZodString;
    provider: z.ZodNativeEnum<typeof EmailProvider>;
    status: z.ZodNativeEnum<typeof EmailConnectionStatus>;
    provider_account_id: z.ZodNullable<z.ZodString>;
    last_successful_sync_at: z.ZodNullable<z.ZodString>;
    last_error_message: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: EmailConnectionStatus;
    uuid: string;
    created_at: string;
    provider: EmailProvider;
    provider_account_id: string | null;
    last_successful_sync_at: string | null;
    last_error_message: string | null;
}, {
    status: EmailConnectionStatus;
    uuid: string;
    created_at: string;
    provider: EmailProvider;
    provider_account_id: string | null;
    last_successful_sync_at: string | null;
    last_error_message: string | null;
}>;
export declare const ListEmailConnectionsResponseSchema: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        provider: z.ZodNativeEnum<typeof EmailProvider>;
        status: z.ZodNativeEnum<typeof EmailConnectionStatus>;
        provider_account_id: z.ZodNullable<z.ZodString>;
        last_successful_sync_at: z.ZodNullable<z.ZodString>;
        last_error_message: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: EmailConnectionStatus;
        uuid: string;
        created_at: string;
        provider: EmailProvider;
        provider_account_id: string | null;
        last_successful_sync_at: string | null;
        last_error_message: string | null;
    }, {
        status: EmailConnectionStatus;
        uuid: string;
        created_at: string;
        provider: EmailProvider;
        provider_account_id: string | null;
        last_successful_sync_at: string | null;
        last_error_message: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    connections: {
        status: EmailConnectionStatus;
        uuid: string;
        created_at: string;
        provider: EmailProvider;
        provider_account_id: string | null;
        last_successful_sync_at: string | null;
        last_error_message: string | null;
    }[];
}, {
    connections: {
        status: EmailConnectionStatus;
        uuid: string;
        created_at: string;
        provider: EmailProvider;
        provider_account_id: string | null;
        last_successful_sync_at: string | null;
        last_error_message: string | null;
    }[];
}>;
export declare const DisconnectEmailConnectionResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    success: true;
}, {
    success: true;
}>;
export declare const SyncEmailConnectionResponseSchema: z.ZodObject<{
    enqueued: z.ZodLiteral<true>;
    job_uuid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    enqueued: true;
    job_uuid: string;
}, {
    enqueued: true;
    job_uuid: string;
}>;
export declare const EmailConnectionSyncStateSchema: z.ZodEnum<["idle", "syncing", "failed"]>;
export declare const EmailSyncStatusConnectionSchema: z.ZodObject<{
    uuid: z.ZodString;
    provider: z.ZodNativeEnum<typeof EmailProvider>;
    sync_state: z.ZodEnum<["idle", "syncing", "failed"]>;
    last_successful_sync_at: z.ZodNullable<z.ZodString>;
    active_job_uuid: z.ZodNullable<z.ZodString>;
    error_message: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    uuid: string;
    provider: EmailProvider;
    last_successful_sync_at: string | null;
    sync_state: "failed" | "idle" | "syncing";
    active_job_uuid: string | null;
    error_message: string | null;
}, {
    uuid: string;
    provider: EmailProvider;
    last_successful_sync_at: string | null;
    sync_state: "failed" | "idle" | "syncing";
    active_job_uuid: string | null;
    error_message: string | null;
}>;
export declare const EmailSyncStatusResponseSchema: z.ZodObject<{
    is_syncing: z.ZodBoolean;
    imported_total: z.ZodNumber;
    connections: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        provider: z.ZodNativeEnum<typeof EmailProvider>;
        sync_state: z.ZodEnum<["idle", "syncing", "failed"]>;
        last_successful_sync_at: z.ZodNullable<z.ZodString>;
        active_job_uuid: z.ZodNullable<z.ZodString>;
        error_message: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
        provider: EmailProvider;
        last_successful_sync_at: string | null;
        sync_state: "failed" | "idle" | "syncing";
        active_job_uuid: string | null;
        error_message: string | null;
    }, {
        uuid: string;
        provider: EmailProvider;
        last_successful_sync_at: string | null;
        sync_state: "failed" | "idle" | "syncing";
        active_job_uuid: string | null;
        error_message: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    connections: {
        uuid: string;
        provider: EmailProvider;
        last_successful_sync_at: string | null;
        sync_state: "failed" | "idle" | "syncing";
        active_job_uuid: string | null;
        error_message: string | null;
    }[];
    is_syncing: boolean;
    imported_total: number;
}, {
    connections: {
        uuid: string;
        provider: EmailProvider;
        last_successful_sync_at: string | null;
        sync_state: "failed" | "idle" | "syncing";
        active_job_uuid: string | null;
        error_message: string | null;
    }[];
    is_syncing: boolean;
    imported_total: number;
}>;
export declare const ProductKindSchema: z.ZodEnum<["debit", "credit"]>;
export declare const FinancialEmailEventResponseSchema: z.ZodObject<{
    uuid: z.ZodString;
    status: z.ZodNativeEnum<typeof FinancialEmailEventStatus>;
    institution_name: z.ZodNullable<z.ZodString>;
    institution_logo: z.ZodNullable<z.ZodString>;
    product_kind: z.ZodNullable<z.ZodEnum<["debit", "credit"]>>;
    product_type: z.ZodNullable<z.ZodString>;
    product_label: z.ZodNullable<z.ZodString>;
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
    status: FinancialEmailEventStatus;
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
}, {
    status: FinancialEmailEventStatus;
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
}>;
export declare const ListFinancialEmailEventsResponseSchema: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        status: z.ZodNativeEnum<typeof FinancialEmailEventStatus>;
        institution_name: z.ZodNullable<z.ZodString>;
        institution_logo: z.ZodNullable<z.ZodString>;
        product_kind: z.ZodNullable<z.ZodEnum<["debit", "credit"]>>;
        product_type: z.ZodNullable<z.ZodString>;
        product_label: z.ZodNullable<z.ZodString>;
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
        status: FinancialEmailEventStatus;
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
    }, {
        status: FinancialEmailEventStatus;
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
    }>, "many">;
    total: z.ZodNumber;
    limit: z.ZodNumber;
    offset: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    limit: number;
    total: number;
    offset: number;
    events: {
        status: FinancialEmailEventStatus;
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
    }[];
}, {
    limit: number;
    total: number;
    offset: number;
    events: {
        status: FinancialEmailEventStatus;
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
    }[];
}>;
export declare const ApproveFinancialEmailEventBodySchema: z.ZodObject<{
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
export declare const ApproveFinancialEmailEventResponseSchema: z.ZodObject<{
    transaction_uuid: z.ZodString;
    event_uuid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transaction_uuid: string;
    event_uuid: string;
}, {
    transaction_uuid: string;
    event_uuid: string;
}>;
export declare const RejectFinancialEmailEventBodySchema: z.ZodObject<{
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    reason?: string | undefined;
}, {
    reason?: string | undefined;
}>;
export declare const RejectFinancialEmailEventResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    success: true;
}, {
    success: true;
}>;
export declare const ConvertFinancialEmailEventResponseSchema: z.ZodObject<{
    transaction_uuid: z.ZodString;
    event_uuid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transaction_uuid: string;
    event_uuid: string;
}, {
    transaction_uuid: string;
    event_uuid: string;
}>;
export declare const DiscoveredAccountSchema: z.ZodObject<{
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
}>;
export declare const ListDiscoveredAccountsResponseSchema: z.ZodObject<{
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
export declare const LinkAccountItemSchema: z.ZodObject<{
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
}>;
export declare const LinkAccountsBodySchema: z.ZodObject<{
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
export declare const LinkAccountsResponseSchema: z.ZodObject<{
    linked: z.ZodNumber;
    imported_events: z.ZodNumber;
    product_uuids: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    linked: number;
    imported_events: number;
    product_uuids: string[];
}, {
    linked: number;
    imported_events: number;
    product_uuids: string[];
}>;
