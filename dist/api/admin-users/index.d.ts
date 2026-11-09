export declare const AdminUsersContracts: {
    list: {
        summary: "List admin users";
        description: "Returns administrators who can access the control panel.";
        method: "GET";
        path: "/admin/users/";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    totp_enabled: import("zod").ZodBoolean;
                    is_active: import("zod").ZodBoolean;
                    last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    email: string;
                    is_active: boolean;
                    created_at: string;
                    name: string;
                    totp_enabled: boolean;
                    last_login_at: string | null;
                }, {
                    id: string;
                    email: string;
                    is_active: boolean;
                    created_at: string;
                    name: string;
                    totp_enabled: boolean;
                    last_login_at: string | null;
                }>, "many">;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    id: string;
                    email: string;
                    is_active: boolean;
                    created_at: string;
                    name: string;
                    totp_enabled: boolean;
                    last_login_at: string | null;
                }[];
            }, {
                message: string;
                data: {
                    id: string;
                    email: string;
                    is_active: boolean;
                    created_at: string;
                    name: string;
                    totp_enabled: boolean;
                    last_login_at: string | null;
                }[];
            }>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
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
    invite: {
        summary: "Invite an admin";
        description: "Creates an administrator with a temporary password and emails login instructions.";
        method: "POST";
        body: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            email: string;
            name: string;
        }, {
            email: string;
            name: string;
        }>;
        path: "/admin/users/invite";
        responses: {
            201: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    totp_enabled: import("zod").ZodBoolean;
                    is_active: import("zod").ZodBoolean;
                    last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: string;
                    email: string;
                    is_active: boolean;
                    created_at: string;
                    name: string;
                    totp_enabled: boolean;
                    last_login_at: string | null;
                }, {
                    id: string;
                    email: string;
                    is_active: boolean;
                    created_at: string;
                    name: string;
                    totp_enabled: boolean;
                    last_login_at: string | null;
                }>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    id: string;
                    email: string;
                    is_active: boolean;
                    created_at: string;
                    name: string;
                    totp_enabled: boolean;
                    last_login_at: string | null;
                };
            }, {
                message: string;
                data: {
                    id: string;
                    email: string;
                    is_active: boolean;
                    created_at: string;
                    name: string;
                    totp_enabled: boolean;
                    last_login_at: string | null;
                };
            }>;
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            409: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            503: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
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
