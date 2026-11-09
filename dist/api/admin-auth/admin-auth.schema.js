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
export const AdminProfileSchema = AdminResponseSchema.extend({
    totp_enabled: z.boolean(),
    last_login_at: z.string().datetime().nullable(),
    created_at: z.string().datetime(),
});
export const MeResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        admin: AdminProfileSchema,
    }),
});
export const UpdateMeBodySchema = z.object({
    name: z.string().trim().min(2).max(200),
});
export const ChangePasswordBodySchema = z.object({
    current_password: z.string().min(1),
    new_password: z.string().min(10).max(200),
}).strict().superRefine((data, context) => {
    if (data.current_password === data.new_password) {
        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['new_password'],
            message: 'New password must be different from the current password',
        });
    }
});
export const ChangePasswordResponseSchema = z.object({
    message: z.string(),
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
