import { z } from 'zod';
export declare const AdminAuthContracts: {
    activateInvitation: {
        summary: "Activate an administrator invitation";
        description: "Set an administrator password using a single-use invitation token that expires after 30 minutes.";
        method: "POST";
        body: z.ZodObject<{
            token: z.ZodString;
            new_password: z.ZodString;
        }, z.core.$strict>;
        path: "/admin/auth/activate";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            429: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    login: {
        summary: "Admin login";
        description: "Authenticate an admin with email, password, and a TOTP or one-time recovery code. A correct password without a second factor does not return a token.";
        method: "POST";
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
            totp_code: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: "/admin/auth/login";
        responses: {
            200: z.ZodObject<{
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            429: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    setupTotp: {
        summary: "Start admin TOTP enrollment";
        description: "Verify the admin password and return a TOTP secret, otpauth URL, and one-time recovery codes. Does not return a JWT. Confirm with a code before login will succeed.";
        method: "POST";
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
        }, z.core.$strip>;
        path: "/admin/auth/totp/setup";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    otpauth_url: z.ZodString;
                    secret: z.ZodString;
                    recovery_codes: z.ZodArray<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            409: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            429: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    confirmTotp: {
        summary: "Confirm admin TOTP enrollment";
        description: "Verify the admin password and a 6-digit authenticator code, then enable TOTP. Does not return a JWT.";
        method: "POST";
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
            code: z.ZodString;
        }, z.core.$strip>;
        path: "/admin/auth/totp/confirm";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            409: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            429: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    getMe: {
        summary: "Get current admin";
        description: "Get the currently authenticated admin user.";
        method: "GET";
        path: "/admin/auth/me";
        responses: {
            200: z.ZodObject<{
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
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    updateMe: {
        summary: "Update current admin profile";
        description: "Update the display name of the authenticated administrator.";
        method: "PATCH";
        body: z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>;
        path: "/admin/auth/me";
        responses: {
            200: z.ZodObject<{
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    changePassword: {
        summary: "Change admin password";
        description: "Change the authenticated administrator password after verifying the current one.";
        method: "POST";
        body: z.ZodObject<{
            current_password: z.ZodString;
            new_password: z.ZodString;
        }, z.core.$strict>;
        path: "/admin/auth/password";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    logout: {
        summary: "Admin logout";
        description: "Revoke the current admin JWT until it expires.";
        method: "POST";
        body: z.ZodObject<{}, z.core.$strip>;
        path: "/admin/auth/logout";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
};
