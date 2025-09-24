export declare const NewsletterContracts: {
    subscribe: {
        summary: "Subscribe to newsletter";
        description: "Subscribe a user to the newsletter with their first name, last name, and email.";
        method: "POST";
        body: import("zod").ZodObject<{
            first_name: import("zod").ZodString;
            last_name: import("zod").ZodString;
            email: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            email: string;
            first_name: string;
            last_name: string;
        }, {
            email: string;
            first_name: string;
            last_name: string;
        }>;
        path: "/newsletter/subscribe";
        responses: {
            201: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
                uuid: import("zod").ZodString;
                first_name: import("zod").ZodString;
                last_name: import("zod").ZodString;
                email: import("zod").ZodString;
                createdAt: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
                email: string;
                uuid: string;
                createdAt: string;
                first_name: string;
                last_name: string;
            }, {
                id: number;
                email: string;
                uuid: string;
                createdAt: string;
                first_name: string;
                last_name: string;
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
