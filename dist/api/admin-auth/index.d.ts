import { z } from 'zod';
export declare const AdminAuthContracts: {
    login: {
        summary: "Admin login";
        description: "Authenticate an admin user with email and password.";
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
        description: "Logout the current admin user (stateless).";
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
