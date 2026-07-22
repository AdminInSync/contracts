import { z } from 'zod';
import { EmailConnectionStatus, EmailProvider, FinancialEmailEventStatus } from '../../enums';
export const EmailProviderSchema = z.nativeEnum(EmailProvider);
export const EmailConnectionStatusSchema = z.nativeEnum(EmailConnectionStatus);
export const FinancialEmailEventStatusSchema = z.nativeEnum(FinancialEmailEventStatus);
export const OAuthStartResponseSchema = z.object({
    authorizationUrl: z.string().url(),
    state: z.string(),
});
export const EmailConnectionListItemSchema = z.object({
    uuid: z.string().uuid(),
    provider: EmailProviderSchema,
    status: EmailConnectionStatusSchema,
    provider_account_id: z.string().nullable(),
    last_successful_sync_at: z.string().datetime().nullable(),
    last_error_message: z.string().nullable(),
    created_at: z.string().datetime(),
});
export const ListEmailConnectionsResponseSchema = z.object({
    connections: z.array(EmailConnectionListItemSchema),
});
export const DisconnectEmailConnectionResponseSchema = z.object({
    success: z.literal(true),
});
export const SyncEmailConnectionResponseSchema = z.object({
    enqueued: z.literal(true),
    job_uuid: z.string().uuid(),
});
export const EmailConnectionSyncStateSchema = z.enum(['idle', 'syncing', 'failed']);
export const EmailSyncSummarySchema = z.object({
    messages_seen: z.number().int().nonnegative(),
    messages_routed: z.number().int().nonnegative(),
    duration_ms: z.number().int().nonnegative(),
    imported: z.number().int().nonnegative(),
    discovered: z.number().int().nonnegative(),
    discarded: z.number().int().nonnegative(),
    duplicate_tx: z.number().int().nonnegative(),
    already_imported: z.number().int().nonnegative(),
    pending_review: z.number().int().nonnegative(),
});
export const EmailSyncStatusConnectionSchema = z.object({
    uuid: z.string().uuid(),
    provider: EmailProviderSchema,
    sync_state: EmailConnectionSyncStateSchema,
    last_successful_sync_at: z.string().datetime().nullable(),
    active_job_uuid: z.string().uuid().nullable(),
    error_message: z.string().nullable(),
    last_summary: EmailSyncSummarySchema.nullable(),
});
export const EmailSyncStatusResponseSchema = z.object({
    is_syncing: z.boolean(),
    imported_total: z.number(),
    supported_institutions: z.array(z.object({
        key: z.string(),
        name: z.string(),
    })),
    connections: z.array(EmailSyncStatusConnectionSchema),
});
export const ProductKindSchema = z.enum(['debit', 'credit']);
export const FinancialEmailEventResponseSchema = z.object({
    uuid: z.string().uuid(),
    status: FinancialEmailEventStatusSchema,
    institution_name: z.string().nullable(),
    institution_logo: z.string().nullable(),
    product_kind: ProductKindSchema.nullable(),
    product_type: z.string().nullable(),
    product_label: z.string().nullable(),
    transaction_description: z.string().nullable(),
    amount: z.coerce.number().nullable(),
    currency: z.string().nullable(),
    transaction_date: z.string().nullable(),
    transaction_occurred_at: z.string().datetime().nullable().optional(),
    transaction_direction: z.enum(['credit', 'debit']).nullable(),
    category: z.string().nullable(),
    confidence: z.coerce.number().nullable(),
    source_metadata: z.record(z.unknown()).nullable(),
    created_at: z.string().datetime(),
});
export const ListFinancialEmailEventsResponseSchema = z.object({
    events: z.array(FinancialEmailEventResponseSchema),
    total: z.number(),
    limit: z.number(),
    offset: z.number(),
});
export const ApproveFinancialEmailEventBodySchema = z.object({
    user_product_uuid: z.string().uuid(),
    amount: z.number().optional(),
    description: z.string().max(500).optional(),
    transaction_date: z.string().optional(),
});
export const ApproveFinancialEmailEventResponseSchema = z.object({
    transaction_uuid: z.string().uuid(),
    event_uuid: z.string().uuid(),
});
export const RejectFinancialEmailEventBodySchema = z.object({
    reason: z.string().max(500).optional(),
});
export const RejectFinancialEmailEventResponseSchema = z.object({
    success: z.literal(true),
});
export const ConvertFinancialEmailEventResponseSchema = ApproveFinancialEmailEventResponseSchema;
export const DiscoveredAccountSchema = z.object({
    institution_id: z.number().nullable(),
    institution_name: z.string().nullable(),
    institution_logo: z.string().nullable(),
    product_type: z.string(),
    account_last4: z.string().length(4),
    event_count: z.number(),
    latest_at: z.string().datetime().nullable(),
});
export const ListDiscoveredAccountsResponseSchema = z.object({
    accounts: z.array(DiscoveredAccountSchema),
});
const LinkProductTypeSchema = z.preprocess((v) => String(v ?? '').trim().toLowerCase(), z.enum([
    'credit_card',
    'loan',
    'savings_account',
    'checking_account',
    'investment',
    'insurance',
    'mortgage',
]));
export const LinkAccountItemSchema = z.object({
    institution_id: z.coerce.number().int().positive(),
    institution_name: z.string().trim().min(1).max(200),
    product_type: LinkProductTypeSchema,
    account_last4: z
        .string()
        .transform((s) => s.replace(/\D/g, '').slice(-4))
        .pipe(z.string().length(4)),
});
export const LinkAccountsBodySchema = z.object({
    accounts: z.array(LinkAccountItemSchema).min(1).max(50),
});
export const LinkAccountsResponseSchema = z.object({
    requested: z.number().int().nonnegative(),
    linked: z.number(),
    imported_events: z.number(),
    backfill_failed_events: z.number().int().nonnegative(),
    backfill_pending: z.boolean(),
    product_uuids: z.array(z.string().uuid()),
    failed_accounts: z.array(z.object({
        institution_id: z.number().int().positive(),
        product_type: LinkProductTypeSchema,
        account_last4: z.string().length(4),
    })),
});
