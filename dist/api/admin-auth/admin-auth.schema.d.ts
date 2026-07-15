import { z } from 'zod';
export declare const LoginBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
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
export type LoginBody = z.infer<typeof LoginBodySchema>;
export type AdminResponse = z.infer<typeof AdminResponseSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type MeResponse = z.infer<typeof MeResponseSchema>;
