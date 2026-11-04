import { z } from 'zod';
export declare const LoginBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    totp_code: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    totp_code?: string | undefined;
}, {
    email: string;
    password: string;
    totp_code?: string | undefined;
}>;
export declare const AdminResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    role: z.ZodEnum<["superadmin"]>;
    is_active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    is_active: boolean;
    name: string;
    role: "superadmin";
}, {
    id: string;
    email: string;
    is_active: boolean;
    name: string;
    role: "superadmin";
}>;
export declare const LoginResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        token: z.ZodString;
        admin: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            email: z.ZodString;
            role: z.ZodEnum<["superadmin"]>;
            is_active: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        }, {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        }>;
    }, "strip", z.ZodTypeAny, {
        token: string;
        admin: {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        };
    }, {
        token: string;
        admin: {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        };
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        token: string;
        admin: {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        };
    };
}, {
    message: string;
    data: {
        token: string;
        admin: {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        };
    };
}>;
export declare const MeResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        admin: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            email: z.ZodString;
            role: z.ZodEnum<["superadmin"]>;
            is_active: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        }, {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        }>;
    }, "strip", z.ZodTypeAny, {
        admin: {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        };
    }, {
        admin: {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        };
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        admin: {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        };
    };
}, {
    message: string;
    data: {
        admin: {
            id: string;
            email: string;
            is_active: boolean;
            name: string;
            role: "superadmin";
        };
    };
}>;
export declare const LogoutResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
export declare const TotpSetupBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const TotpSetupResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        otpauth_url: z.ZodString;
        secret: z.ZodString;
        recovery_codes: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        otpauth_url: string;
        secret: string;
        recovery_codes: string[];
    }, {
        otpauth_url: string;
        secret: string;
        recovery_codes: string[];
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        otpauth_url: string;
        secret: string;
        recovery_codes: string[];
    };
}, {
    message: string;
    data: {
        otpauth_url: string;
        secret: string;
        recovery_codes: string[];
    };
}>;
export declare const TotpConfirmBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    email: string;
    password: string;
}, {
    code: string;
    email: string;
    password: string;
}>;
export declare const TotpConfirmResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
export type LoginBody = z.infer<typeof LoginBodySchema>;
export type AdminResponse = z.infer<typeof AdminResponseSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type MeResponse = z.infer<typeof MeResponseSchema>;
