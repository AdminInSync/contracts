import { z } from 'zod';
export declare const WebhookContracts: {
    sumsub: {
        summary: "Sumsub webhook endpoint";
        description: "Webhook endpoint for receiving KYC status updates from Sumsub.";
        method: "POST";
        body: z.ZodAny;
        path: "/webhooks/sumsub";
        responses: {
            200: z.ZodObject<{
                success: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                success: boolean;
            }, {
                success: boolean;
            }>;
            400: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
            401: z.ZodObject<{
                error: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                error: string;
            }, {
                error: string;
            }>;
        };
        strictStatusCodes: true;
    };
};
