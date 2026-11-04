import { z } from 'zod';
export declare const AdminAuthContracts: {
    login: {
        summary: "Admin login";
        description: "Authenticate an admin with email, password, and a TOTP or one-time recovery code. A correct password without a second factor does not return a token.";
        method: "POST";
        body: z.ZodObject<{
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            429: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
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
        }, "strip", z.ZodTypeAny, {
            email: string;
            password: string;
        }, {
            email: string;
            password: string;
        }>;
        path: "/admin/auth/totp/setup";
        responses: {
            200: z.ZodObject<{
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            409: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            429: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
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
        }, "strip", z.ZodTypeAny, {
            code: string;
            email: string;
            password: string;
        }, {
            code: string;
            email: string;
            password: string;
        }>;
        path: "/admin/auth/totp/confirm";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            409: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            429: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
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
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
        strictStatusCodes: true;
    };
    logout: {
        summary: "Admin logout";
        description: "Revoke the current admin JWT until it expires.";
        method: "POST";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/admin/auth/logout";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
        strictStatusCodes: true;
    };
};
