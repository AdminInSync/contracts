import { z } from 'zod';
export declare const ActivateAdminInvitationBodySchema: z.ZodObject<{
    token: z.ZodString;
    new_password: z.ZodString;
}, z.core.$strict>;
export declare const ActivateAdminInvitationResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export declare const LoginBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    totp_code: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const AdminResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    role: z.ZodEnum<{
        superadmin: "superadmin";
    }>;
    is_active: z.ZodBoolean;
}, z.core.$strip>;
export declare const LoginResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        token: z.ZodString;
        admin: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            email: z.ZodString;
            role: z.ZodEnum<{
                superadmin: "superadmin";
            }>;
            is_active: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const AdminProfileSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    role: z.ZodEnum<{
        superadmin: "superadmin";
    }>;
    is_active: z.ZodBoolean;
    totp_enabled: z.ZodBoolean;
    last_login_at: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, z.core.$strip>;
export declare const MeResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        admin: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            email: z.ZodString;
            role: z.ZodEnum<{
                superadmin: "superadmin";
            }>;
            is_active: z.ZodBoolean;
            totp_enabled: z.ZodBoolean;
            last_login_at: z.ZodNullable<z.ZodString>;
            created_at: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const UpdateMeBodySchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export declare const ChangePasswordBodySchema: z.ZodObject<{
    current_password: z.ZodString;
    new_password: z.ZodString;
}, z.core.$strict>;
export declare const ChangePasswordResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export declare const LogoutResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export declare const TotpSetupBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const TotpSetupResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        otpauth_url: z.ZodString;
        secret: z.ZodString;
        recovery_codes: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const TotpConfirmBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    code: z.ZodString;
}, z.core.$strip>;
export declare const TotpConfirmResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export type ActivateAdminInvitationBody = z.infer<typeof ActivateAdminInvitationBodySchema>;
export type LoginBody = z.infer<typeof LoginBodySchema>;
export type AdminResponse = z.infer<typeof AdminResponseSchema>;
export type AdminProfile = z.infer<typeof AdminProfileSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type MeResponse = z.infer<typeof MeResponseSchema>;
export type UpdateMeBody = z.infer<typeof UpdateMeBodySchema>;
export type ChangePasswordBody = z.infer<typeof ChangePasswordBodySchema>;
