import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
export const WaitlistEntrySchema = z.object({
    id: z.string().uuid(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    source: z.string().nullable(),
    created_at: z.string().datetime(),
});
export const WaitlistListResponseSchema = z.object({
    message: z.string(),
    data: z.array(WaitlistEntrySchema),
});
export const WaitlistSourceCountSchema = z.object({
    source: z.string().nullable(),
    count: z.number().int(),
});
export const WaitlistStatsResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        total: z.number().int(),
        this_month: z.number().int(),
        by_source: z.array(WaitlistSourceCountSchema),
    }),
});
export const GetWaitlistQuerySchema = z.object({
    source: z.string().optional(),
});
