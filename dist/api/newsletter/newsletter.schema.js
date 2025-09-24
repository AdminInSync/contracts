import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
// Newsletter Subscription Request Schema
export const CreateNewsletterRequestSchema = z.object({
    first_name: z.string().min(1).max(255).openapi({
        description: 'First name of the subscriber'
    }),
    last_name: z.string().min(1).max(255).openapi({
        description: 'Last name of the subscriber'
    }),
    email: z.string().email().max(255).openapi({
        description: 'Email address of the subscriber'
    }),
    source: z.string().max(100).optional().openapi({
        description: 'How the customer found InSync (e.g., google, facebook, referral, etc.)'
    })
}).openapi({
    title: 'CreateNewsletterRequest',
    description: 'Request schema for newsletter subscription'
});
// Newsletter Response Schema
export const NewsletterResponseSchema = z.object({
    id: z.number().openapi({
        description: 'Internal database ID'
    }),
    uuid: z.string().uuid().openapi({
        description: 'Public UUID for the newsletter subscription'
    }),
    first_name: z.string().openapi({
        description: 'First name of the subscriber'
    }),
    last_name: z.string().openapi({
        description: 'Last name of the subscriber'
    }),
    email: z.string().email().openapi({
        description: 'Email address of the subscriber'
    }),
    source: z.string().nullable().openapi({
        description: 'How the customer found InSync'
    }),
    createdAt: z.string().datetime().openapi({
        description: 'Creation timestamp'
    })
}).openapi({
    title: 'NewsletterResponse',
    description: 'Response schema for newsletter subscription'
});
// Error Response Schema
export const NewsletterErrorResponseSchema = z.object({
    error: z.string().openapi({
        description: 'Error type'
    }),
    message: z.string().openapi({
        description: 'Error message'
    })
}).openapi({
    title: 'NewsletterErrorResponse',
    description: 'Error response schema for newsletter operations'
});
