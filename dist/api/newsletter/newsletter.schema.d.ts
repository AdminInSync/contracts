import { z } from 'zod';
export declare const CreateNewsletterRequestSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    source: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    first_name: string;
    last_name: string;
    source?: string | undefined;
}, {
    email: string;
    first_name: string;
    last_name: string;
    source?: string | undefined;
}>;
export declare const NewsletterResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    source: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    email: string;
    uuid: string;
    createdAt: string;
    first_name: string;
    last_name: string;
    source: string | null;
}, {
    id: number;
    email: string;
    uuid: string;
    createdAt: string;
    first_name: string;
    last_name: string;
    source: string | null;
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
