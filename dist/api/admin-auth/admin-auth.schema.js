import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
export const LoginBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
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
