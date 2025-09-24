import { initContract } from '@ts-rest/core';
import { CreateNewsletterRequestSchema, NewsletterResponseSchema, NewsletterErrorResponseSchema } from './newsletter.schema';
const c = initContract();
export const NewsletterContracts = c.router({
    subscribe: {
        method: 'POST',
        path: '/subscribe',
        body: CreateNewsletterRequestSchema,
        responses: {
            201: NewsletterResponseSchema,
            400: NewsletterErrorResponseSchema,
            409: NewsletterErrorResponseSchema,
            500: NewsletterErrorResponseSchema,
        },
        summary: 'Subscribe to newsletter',
        description: 'Subscribe a user to the newsletter with their first name, last name, and email.',
    },
}, {
    tags: ['Newsletter'],
    pathPrefix: '/newsletter',
    strictStatusCodes: true
});
