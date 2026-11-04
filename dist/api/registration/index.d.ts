export declare const RegistrationContracts: {
    start: {
        summary: "Start or resume the step-by-step registration";
        description: "Upserts the registration of the token user. The email is taken from the token.";
        method: "POST";
        body: import("zod").ZodObject<{
            first_name: import("zod").ZodString;
            last_name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodUnknown>;
        }, "strict", import("zod").ZodTypeAny, {
            first_name: string;
            last_name: string;
            email?: unknown;
        }, {
            first_name: string;
            last_name: string;
            email?: unknown;
        }>;
        path: "/registration";
        responses: {
            200: import("zod").ZodObject<{
                status: import("zod").ZodEnum<["in_progress", "completed", "abandoned"]>;
                current_step: import("zod").ZodEnum<["document", "pin", "done"]>;
                email: import("zod").ZodNullable<import("zod").ZodString>;
                first_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                completed_at: import("zod").ZodNullable<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                status: "completed" | "in_progress" | "abandoned";
                email: string | null;
                first_name: string | null;
                last_name: string | null;
                current_step: "document" | "pin" | "done";
                last_step_at: string | null;
                completed_at: string | null;
            }, {
                status: "completed" | "in_progress" | "abandoned";
                email: string | null;
                first_name: string | null;
                last_name: string | null;
                current_step: "document" | "pin" | "done";
                last_step_at: string | null;
                completed_at: string | null;
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
    submitStep: {
        summary: "Complete one registration step";
        method: "PATCH";
        body: import("zod").ZodDiscriminatedUnion<"step", [import("zod").ZodObject<{
            step: import("zod").ZodLiteral<"document">;
            info_type: import("zod").ZodEnum<[import("../..").DocumentType.NATIONAL_ID, import("../..").DocumentType.PASSPORT]>;
            document_number: import("zod").ZodOptional<import("zod").ZodString>;
            document_url: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strict", import("zod").ZodTypeAny, {
            info_type: import("../..").DocumentType.PASSPORT | import("../..").DocumentType.NATIONAL_ID;
            step: "document";
            document_number?: string | undefined;
            document_url?: string | undefined;
        }, {
            info_type: import("../..").DocumentType.PASSPORT | import("../..").DocumentType.NATIONAL_ID;
            step: "document";
            document_number?: string | undefined;
            document_url?: string | undefined;
        }>, import("zod").ZodObject<{
            step: import("zod").ZodLiteral<"pin">;
        }, "strict", import("zod").ZodTypeAny, {
            step: "pin";
        }, {
            step: "pin";
        }>]>;
        path: "/registration/step";
        responses: {
            200: import("zod").ZodObject<{
                status: import("zod").ZodEnum<["in_progress", "completed", "abandoned"]>;
                current_step: import("zod").ZodEnum<["document", "pin", "done"]>;
                email: import("zod").ZodNullable<import("zod").ZodString>;
                first_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                completed_at: import("zod").ZodNullable<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                status: "completed" | "in_progress" | "abandoned";
                email: string | null;
                first_name: string | null;
                last_name: string | null;
                current_step: "document" | "pin" | "done";
                last_step_at: string | null;
                completed_at: string | null;
            }, {
                status: "completed" | "in_progress" | "abandoned";
                email: string | null;
                first_name: string | null;
                last_name: string | null;
                current_step: "document" | "pin" | "done";
                last_step_at: string | null;
                completed_at: string | null;
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
            404: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                code: string;
            }, {
                message: string;
                code: string;
            }>;
            409: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                code: string;
            }, {
                message: string;
                code: string;
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
    get: {
        summary: "Get the registration state of the token user";
        method: "GET";
        path: "/registration";
        responses: {
            200: import("zod").ZodObject<{
                status: import("zod").ZodEnum<["in_progress", "completed", "abandoned"]>;
                current_step: import("zod").ZodEnum<["document", "pin", "done"]>;
                email: import("zod").ZodNullable<import("zod").ZodString>;
                first_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                completed_at: import("zod").ZodNullable<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                status: "completed" | "in_progress" | "abandoned";
                email: string | null;
                first_name: string | null;
                last_name: string | null;
                current_step: "document" | "pin" | "done";
                last_step_at: string | null;
                completed_at: string | null;
            }, {
                status: "completed" | "in_progress" | "abandoned";
                email: string | null;
                first_name: string | null;
                last_name: string | null;
                current_step: "document" | "pin" | "done";
                last_step_at: string | null;
                completed_at: string | null;
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
            404: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                code: string;
            }, {
                message: string;
                code: string;
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
