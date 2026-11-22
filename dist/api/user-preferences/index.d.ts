import { z } from 'zod';
export declare const UpsertUserPreferencesRequestSchema: z.ZodObject<{
    timezone: z.ZodString;
}, z.core.$strict>;
export declare const UserPreferencesResponseSchema: z.ZodObject<{
    timezone: z.ZodString;
}, z.core.$strip>;
export declare const UserPreferencesContracts: {
    upsert: {
        summary: "Save the token user preferences (IANA timezone)";
        method: "PUT";
        body: z.ZodObject<{
            timezone: z.ZodString;
        }, z.core.$strict>;
        path: "/user-preferences";
        responses: {
            200: z.ZodObject<{
                timezone: z.ZodString;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
};
