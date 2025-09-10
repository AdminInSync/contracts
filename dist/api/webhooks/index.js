import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
export const WebhookContracts = c.router({
    sumsub: {
        method: 'POST',
        path: '/sumsub',
        body: z.any(),
        responses: {
            200: z.object({ success: z.boolean() }),
            400: z.object({ error: z.string() }),
            401: z.object({ error: z.string() }),
        },
        summary: 'Sumsub webhook endpoint',
        description: 'Webhook endpoint for receiving KYC status updates from Sumsub.',
    },
}, {
    tags: ['Webhooks'],
    pathPrefix: '/webhooks',
    strictStatusCodes: true
});
