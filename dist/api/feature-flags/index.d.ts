import { z } from 'zod';
export declare const TrackingModeResponseSchema: z.ZodObject<{
    emailSync: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    emailSync: boolean;
}, {
    emailSync: boolean;
}>;
export declare const FeatureFlagsContracts: {
    getTrackingMode: {
        summary: "Get the authenticated account tracking mode";
        description: "Returns whether email synchronization is enabled for the authenticated account.";
        method: "GET";
        path: "/profile/tracking-mode";
        responses: {
            200: z.ZodObject<{
                emailSync: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                emailSync: boolean;
            }, {
                emailSync: boolean;
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
    };
};
