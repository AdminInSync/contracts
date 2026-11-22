export declare const UserInfoContracts: {
    createUserInfo: {
        summary: "Create new user info document";
        description: "Create a new user info document for the authenticated user";
        method: "POST";
        body: import("zod").ZodObject<{
            info_type: import("zod").ZodEnum<typeof import("../..").DocumentType>;
            document_number: import("zod").ZodOptional<import("zod").ZodString>;
            document_url: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strip>;
        path: "/user-info/";
        responses: {
            201: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                uuid: import("zod").ZodString;
                user_uid: import("zod").ZodString;
                info_type: import("zod").ZodEnum<typeof import("../..").DocumentType>;
                status: import("zod").ZodEnum<typeof import("../..").DocumentStatus>;
                document_number: import("zod").ZodNullable<import("zod").ZodString>;
                document_url: import("zod").ZodNullable<import("zod").ZodString>;
                created_at: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            400: import("zod").ZodObject<{
                error: import("zod").ZodString;
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            409: import("zod").ZodObject<{
                error: import("zod").ZodString;
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    getUserInfo: {
        query: import("zod").ZodObject<{
            info_type: import("zod").ZodOptional<import("zod").ZodEnum<typeof import("../..").DocumentType>>;
            status: import("zod").ZodOptional<import("zod").ZodEnum<typeof import("../..").DocumentStatus>>;
        }, import("zod/v4/core").$strip>;
        summary: "Get user info documents";
        description: "Get all user info documents for the authenticated user with optional filtering by document type and status";
        method: "GET";
        path: "/user-info/";
        responses: {
            200: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                uuid: import("zod").ZodString;
                user_uid: import("zod").ZodString;
                info_type: import("zod").ZodEnum<typeof import("../..").DocumentType>;
                status: import("zod").ZodEnum<typeof import("../..").DocumentStatus>;
                document_number: import("zod").ZodNullable<import("zod").ZodString>;
                document_url: import("zod").ZodNullable<import("zod").ZodString>;
                created_at: import("zod").ZodString;
            }, import("zod/v4/core").$strip>>;
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
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
};
