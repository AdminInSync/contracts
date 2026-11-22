import { z } from 'zod';
export declare const TrackingModeResponseSchema: z.ZodObject<{
    emailSync: z.ZodBoolean;
}, z.core.$strip>;
export declare const FeatureFlagsContracts: {
    getTrackingMode: {
        summary: "Get the authenticated account tracking mode";
        description: "Returns whether email synchronization is enabled for the authenticated account.";
        method: "GET";
        path: "/profile/tracking-mode";
        responses: {
            200: z.ZodObject<{
                emailSync: z.ZodBoolean;
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
    };
};
