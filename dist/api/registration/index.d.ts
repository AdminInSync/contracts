export declare const RegistrationContracts: {
    start: {
        summary: "Start or resume the step-by-step registration";
        description: "Upserts the registration of the token user. The email is taken from the token.";
        method: "POST";
        body: import("zod").ZodObject<{
            first_name: import("zod").ZodString;
            last_name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodUnknown>;
        }, import("zod/v4/core").$strict>;
        path: "/registration";
        responses: {
            200: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    abandoned: "abandoned";
                }>;
                current_step: import("zod").ZodEnum<{
                    document: "document";
                    pin: "pin";
                    done: "done";
                }>;
                email: import("zod").ZodNullable<import("zod").ZodString>;
                first_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                completed_at: import("zod").ZodNullable<import("zod").ZodString>;
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
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    submitStep: {
        summary: "Complete one registration step";
        method: "PATCH";
        body: import("zod").ZodDiscriminatedUnion<[import("zod").ZodObject<{
            step: import("zod").ZodLiteral<"document">;
            info_type: import("zod").ZodEnum<{
                passport: import("../..").DocumentType.PASSPORT;
                national_id: import("../..").DocumentType.NATIONAL_ID;
            }>;
            document_number: import("zod").ZodOptional<import("zod").ZodString>;
            document_url: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>, import("zod").ZodObject<{
            step: import("zod").ZodLiteral<"pin">;
        }, import("zod/v4/core").$strict>], "step">;
        path: "/registration/step";
        responses: {
            200: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    abandoned: "abandoned";
                }>;
                current_step: import("zod").ZodEnum<{
                    document: "document";
                    pin: "pin";
                    done: "done";
                }>;
                email: import("zod").ZodNullable<import("zod").ZodString>;
                first_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                completed_at: import("zod").ZodNullable<import("zod").ZodString>;
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
            404: import("zod").ZodObject<{
                code: import("zod").ZodString;
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            409: import("zod").ZodObject<{
                code: import("zod").ZodString;
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
    get: {
        summary: "Get the registration state of the token user";
        method: "GET";
        path: "/registration";
        responses: {
            200: import("zod").ZodObject<{
                status: import("zod").ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    abandoned: "abandoned";
                }>;
                current_step: import("zod").ZodEnum<{
                    document: "document";
                    pin: "pin";
                    done: "done";
                }>;
                email: import("zod").ZodNullable<import("zod").ZodString>;
                first_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_name: import("zod").ZodNullable<import("zod").ZodString>;
                last_step_at: import("zod").ZodNullable<import("zod").ZodString>;
                completed_at: import("zod").ZodNullable<import("zod").ZodString>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            404: import("zod").ZodObject<{
                code: import("zod").ZodString;
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
};
