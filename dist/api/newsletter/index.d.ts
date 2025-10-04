export declare const NewsletterContracts: {
    subscribe: {
        summary: "Subscribe to newsletter";
        description: "Subscribe a user to the newsletter with their first name, last name, and email.";
        method: "POST";
        body: import("zod").ZodObject<{
            first_name: import("zod").ZodString;
            last_name: import("zod").ZodString;
            email: import("zod").ZodString;
            source: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            email: string;
            first_name: string;
            last_name: string;
            source?: string | undefined;
        }, {
            email: string;
            first_name: string;
            last_name: string;
            source?: string | undefined;
        }>;
        path: "/newsletter/subscribe";
        responses: {
            201: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                uuid: import("zod").ZodString;
                first_name: import("zod").ZodString;
                last_name: import("zod").ZodString;
                email: import("zod").ZodString;
                source: import("zod").ZodNullable<import("zod").ZodString>;
                created_at: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
                email: string;
                uuid: string;
                created_at: string;
                first_name: string;
                last_name: string;
                source: string | null;
            }, {
                id: number;
                email: string;
                uuid: string;
                created_at: string;
                first_name: string;
                last_name: string;
                source: string | null;
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
                error: import("zod").ZodString;
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
        };
        strictStatusCodes: true;
    };
};
