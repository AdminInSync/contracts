import { z } from 'zod';
export declare const CreateNewsletterRequestSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    source: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const NewsletterResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    source: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, z.core.$strip>;
export declare const NewsletterErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
