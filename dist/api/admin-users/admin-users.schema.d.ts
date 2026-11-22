import { z } from 'zod';
export declare const AdminUserEntrySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    totp_enabled: z.ZodBoolean;
    invitation_pending: z.ZodBoolean;
    is_active: z.ZodBoolean;
    last_login_at: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, z.core.$strip>;
export declare const AdminUserListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        totp_enabled: z.ZodBoolean;
        invitation_pending: z.ZodBoolean;
        is_active: z.ZodBoolean;
        last_login_at: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const InviteAdminBodySchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export declare const InviteAdminResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        totp_enabled: z.ZodBoolean;
        invitation_pending: z.ZodBoolean;
        is_active: z.ZodBoolean;
        last_login_at: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AdminUserEntry = z.infer<typeof AdminUserEntrySchema>;
export type InviteAdminBody = z.infer<typeof InviteAdminBodySchema>;
