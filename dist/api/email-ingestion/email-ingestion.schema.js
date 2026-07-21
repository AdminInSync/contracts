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
export const EmailSyncStatusConnectionSchema = z.object({
    uuid: z.string().uuid(),
    provider: EmailProviderSchema,
    sync_state: EmailConnectionSyncStateSchema,
    last_successful_sync_at: z.string().datetime().nullable(),
    active_job_uuid: z.string().uuid().nullable(),
    error_message: z.string().nullable(),
});
export const EmailSyncStatusResponseSchema = z.object({
    is_syncing: z.boolean(),
    imported_total: z.number(),
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
