export declare const UserInfoContracts: {
    createUserInfo: {
        summary: "Create new user info document";
        description: "Create a new user info document for the authenticated user";
        method: "POST";
        body: import("zod").ZodObject<{
            info_type: import("zod").ZodNativeEnum<typeof import("../../enums").DocumentType>;
            document_number: import("zod").ZodOptional<import("zod").ZodString>;
            document_url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            info_type: import("../../enums").DocumentType;
            document_number?: string | undefined;
            document_url?: string | undefined;
        }, {
            info_type: import("../../enums").DocumentType;
            document_number?: string | undefined;
            document_url?: string | undefined;
        }>;
        path: "/user-info/";
        responses: {
            201: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                uuid: import("zod").ZodString;
                user_uid: import("zod").ZodString;
                info_type: import("zod").ZodNativeEnum<typeof import("../../enums").DocumentType>;
                status: import("zod").ZodNativeEnum<typeof import("../../enums").DocumentStatus>;
                document_number: import("zod").ZodNullable<import("zod").ZodString>;
                document_url: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                status: import("../../enums").DocumentStatus;
                id: number;
                info_type: import("../../enums").DocumentType;
                document_number: string | null;
                document_url: string | null;
                uuid: string;
                user_uid: string;
                createdAt: string;
            }, {
                status: import("../../enums").DocumentStatus;
                id: number;
                info_type: import("../../enums").DocumentType;
                document_number: string | null;
                document_url: string | null;
                uuid: string;
                user_uid: string;
                createdAt: string;
            }>;
            400: import("zod").ZodObject<{
                error: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
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
                error: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
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
    getUserInfo: {
        query: import("zod").ZodObject<{
            info_type: import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("../../enums").DocumentType>>;
            status: import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("../../enums").DocumentStatus>>;
        }, "strip", import("zod").ZodTypeAny, {
            status?: import("../../enums").DocumentStatus | undefined;
            info_type?: import("../../enums").DocumentType | undefined;
        }, {
            status?: import("../../enums").DocumentStatus | undefined;
            info_type?: import("../../enums").DocumentType | undefined;
        }>;
        summary: "Get user info documents";
        description: "Get all user info documents for the authenticated user with optional filtering by document type and status";
        method: "GET";
        path: "/user-info/";
        responses: {
            200: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                uuid: import("zod").ZodString;
                user_uid: import("zod").ZodString;
                info_type: import("zod").ZodNativeEnum<typeof import("../../enums").DocumentType>;
                status: import("zod").ZodNativeEnum<typeof import("../../enums").DocumentStatus>;
                document_number: import("zod").ZodNullable<import("zod").ZodString>;
                document_url: import("zod").ZodNullable<import("zod").ZodString>;
                createdAt: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                status: import("../../enums").DocumentStatus;
                id: number;
                info_type: import("../../enums").DocumentType;
                document_number: string | null;
                document_url: string | null;
                uuid: string;
                user_uid: string;
                createdAt: string;
            }, {
                status: import("../../enums").DocumentStatus;
                id: number;
                info_type: import("../../enums").DocumentType;
                document_number: string | null;
                document_url: string | null;
                uuid: string;
                user_uid: string;
                createdAt: string;
            }>, "many">;
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
