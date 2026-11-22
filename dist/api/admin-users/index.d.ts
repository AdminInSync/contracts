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
                    invitation_pending: import("zod").ZodBoolean;
                    is_active: import("zod").ZodBoolean;
                    last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    invite: {
        summary: "Invite an admin";
        description: "Creates an administrator and emails a single-use activation link to choose a password.";
        method: "POST";
        body: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodString;
        }, import("zod/v4/core").$strip>;
        path: "/admin/users/invite";
        responses: {
            201: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    totp_enabled: import("zod").ZodBoolean;
                    invitation_pending: import("zod").ZodBoolean;
                    is_active: import("zod").ZodBoolean;
                    last_login_at: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            409: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            503: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
};
