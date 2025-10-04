import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
// Removed login and register schemas - using Firebase client-side authentication
export const ProviderDataSchema = z.object({
    providerId: z.string(),
    uid: z.string(),
    email: z.string().nullable(),
    displayName: z.string().nullable(),
    photoURL: z.string().nullable(),
    phoneNumber: z.string().nullable(),
});
export const MultiFactorSchema = z.object({
    enrolled_factors: z.array(z.object({
        uid: z.string(),
        display_name: z.string().nullable(),
        enrollment_time: z.string(),
        factor_id: z.string(),
    })),
});
export const UserResponseSchema = z.object({
    // Firebase user data (comprehensive)
    firebase_uid: z.string(),
    email: z.string(),
    display_name: z.string().nullable(),
    photo_url: z.string().nullable(),
    email_verified: z.boolean(),
    is_active: z.boolean(),
    phone_number: z.string().nullable(),
    // Additional Firebase metadata
    creation_time: z.string().nullable(),
    last_sign_in_time: z.string().nullable(),
    last_refresh_time: z.string().nullable(),
    // Provider information
    provider_data: z.array(ProviderDataSchema),
    provider_id: z.string(),
    // Custom claims
    custom_claims: z.record(z.any()),
    // Additional Firebase fields
    tenant_id: z.string().nullable(),
    multi_factor: MultiFactorSchema,
});
// Removed AuthResponseSchema - no longer needed without login/register
export const MeResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        user: UserResponseSchema,
    }),
});
