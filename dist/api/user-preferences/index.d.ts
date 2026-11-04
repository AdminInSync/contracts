import { z } from 'zod';
export declare const UpsertUserPreferencesRequestSchema: z.ZodObject<{
    timezone: z.ZodString;
}, "strict", z.ZodTypeAny, {
    timezone: string;
}, {
    timezone: string;
}>;
export declare const UserPreferencesResponseSchema: z.ZodObject<{
    timezone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    timezone: string;
}, {
    timezone: string;
}>;
export declare const UserPreferencesContracts: {
    upsert: {
        summary: "Save the token user preferences (IANA timezone)";
        method: "PUT";
        body: z.ZodObject<{
            timezone: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            timezone: string;
        }, {
            timezone: string;
        }>;
        path: "/user-preferences";
        responses: {
            200: z.ZodObject<{
                timezone: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                timezone: string;
            }, {
                timezone: string;
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
};
