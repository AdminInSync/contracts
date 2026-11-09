import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
export const AdminUserEntrySchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    totp_enabled: z.boolean(),
    is_active: z.boolean(),
    last_login_at: z.string().datetime().nullable(),
    created_at: z.string().datetime(),
});
export const AdminUserListResponseSchema = z.object({
    message: z.string(),
    data: z.array(AdminUserEntrySchema),
});
export const InviteAdminBodySchema = z.object({
    name: z.string().trim().min(2).max(200),
    email: z.string().trim().email().max(255),
});
export const InviteAdminResponseSchema = z.object({
    message: z.string(),
    data: AdminUserEntrySchema,
});
