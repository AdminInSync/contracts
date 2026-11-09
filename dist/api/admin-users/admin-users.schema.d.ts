import { z } from 'zod';
export declare const AdminUserEntrySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    totp_enabled: z.ZodBoolean;
    is_active: z.ZodBoolean;
    last_login_at: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    is_active: boolean;
    created_at: string;
    name: string;
    last_login_at: string | null;
    totp_enabled: boolean;
}, {
    id: string;
    email: string;
    is_active: boolean;
    created_at: string;
    name: string;
    last_login_at: string | null;
    totp_enabled: boolean;
}>;
export declare const AdminUserListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        totp_enabled: z.ZodBoolean;
        is_active: z.ZodBoolean;
        last_login_at: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        is_active: boolean;
        created_at: string;
        name: string;
        last_login_at: string | null;
        totp_enabled: boolean;
    }, {
        id: string;
        email: string;
        is_active: boolean;
        created_at: string;
        name: string;
        last_login_at: string | null;
        totp_enabled: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        id: string;
        email: string;
        is_active: boolean;
        created_at: string;
        name: string;
        last_login_at: string | null;
        totp_enabled: boolean;
    }[];
}, {
    message: string;
    data: {
        id: string;
        email: string;
        is_active: boolean;
        created_at: string;
        name: string;
        last_login_at: string | null;
        totp_enabled: boolean;
    }[];
}>;
export declare const InviteAdminBodySchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
}, {
    email: string;
    name: string;
}>;
export declare const InviteAdminResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        totp_enabled: z.ZodBoolean;
        is_active: z.ZodBoolean;
        last_login_at: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        is_active: boolean;
        created_at: string;
        name: string;
        last_login_at: string | null;
        totp_enabled: boolean;
    }, {
        id: string;
        email: string;
        is_active: boolean;
        created_at: string;
        name: string;
        last_login_at: string | null;
        totp_enabled: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        id: string;
        email: string;
        is_active: boolean;
        created_at: string;
        name: string;
        last_login_at: string | null;
        totp_enabled: boolean;
    };
}, {
    message: string;
    data: {
        id: string;
        email: string;
        is_active: boolean;
        created_at: string;
        name: string;
        last_login_at: string | null;
        totp_enabled: boolean;
    };
}>;
export type AdminUserEntry = z.infer<typeof AdminUserEntrySchema>;
export type InviteAdminBody = z.infer<typeof InviteAdminBodySchema>;
