import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
export const LoginBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
    totp_code: z.string().min(1).max(64).optional(),
});
export const AdminResponseSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    role: z.enum(['superadmin']),
    is_active: z.boolean(),
});
export const LoginResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        token: z.string(),
        admin: AdminResponseSchema,
    }),
});
export const MeResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        admin: AdminResponseSchema,
    }),
});
export const LogoutResponseSchema = z.object({
    message: z.string(),
});
export const TotpSetupBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});
export const TotpSetupResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        otpauth_url: z.string(),
        secret: z.string(),
        recovery_codes: z.array(z.string()),
    }),
});
export const TotpConfirmBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
    code: z.string().regex(/^\d{6}$/),
});
export const TotpConfirmResponseSchema = z.object({
    message: z.string(),
});
