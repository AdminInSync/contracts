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
            }, z.core.$strip>;
            400: z.ZodObject<{
                error: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                error: z.ZodString;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
};
