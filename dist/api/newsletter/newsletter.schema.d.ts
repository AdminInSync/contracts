import { z } from 'zod';
export declare const CreateNewsletterRequestSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    first_name: string;
    last_name: string;
}, {
    email: string;
    first_name: string;
    last_name: string;
}>;
export declare const NewsletterResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    email: string;
    uuid: string;
    createdAt: string;
    first_name: string;
    last_name: string;
}, {
    id: number;
    email: string;
    uuid: string;
    createdAt: string;
    first_name: string;
    last_name: string;
}>;
export declare const NewsletterErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    error: string;
}, {
    message: string;
    error: string;
}>;
