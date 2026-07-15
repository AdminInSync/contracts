import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { KycStatusSchema } from '../kyc/kyc.schema';
import { DocumentStatus, DocumentType } from '../../enums';
extendZodWithOpenApi(z);
export const GetClientsQuerySchema = z.object({
    kyc_status: KycStatusSchema.optional(),
});
export const ClientListItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    email_verified: z.boolean(),
    phone: z.string().nullable(),
    kyc_status: KycStatusSchema,
    is_active: z.boolean(),
    created_at: z.string().datetime(),
    last_login_at: z.string().datetime().nullable(),
    product_count: z.number().int(),
});
export const ClientDeviceSchema = z.object({
    id: z.string().uuid(),
    device_unique_id: z.string(),
    notes: z.string(),
    created_at: z.string().datetime(),
});
export const ClientPreferencesSchema = z.object({
    are_push_notifications_enabled: z.boolean(),
    are_transaction_alerts_enabled: z.boolean(),
    are_notification_sounds_enabled: z.boolean(),
    is_vibration_enabled: z.boolean(),
    is_biometric_auth_enabled: z.boolean(),
    auto_lock_after_minutes: z.number().int(),
    is_auto_sync_enabled: z.boolean(),
    is_cloud_backup_enabled: z.boolean(),
    preferred_theme: z.enum(['SYSTEM', 'LIGHT', 'DARK']),
});
export const ClientProductSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    institution_name: z.string().nullable(),
    product_type: z.string(),
    account_last4: z.string(),
});
export const ClientDetailSchema = ClientListItemSchema.extend({
    document_type: z.nativeEnum(DocumentType).nullable(),
    document_number: z.string().nullable(),
    document_status: z.nativeEnum(DocumentStatus).nullable(),
    devices: z.array(ClientDeviceSchema),
    preferences: ClientPreferencesSchema.nullable(),
    products: z.array(ClientProductSchema),
});
export const ClientListResponseSchema = z.object({
    message: z.string(),
    data: z.array(ClientListItemSchema),
});
export const ClientDetailResponseSchema = z.object({
    message: z.string(),
    data: ClientDetailSchema,
});
