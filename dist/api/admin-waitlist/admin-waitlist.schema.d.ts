import { z } from 'zod';
export declare const WaitlistEntrySchema: z.ZodObject<{
    id: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    source: z.ZodNullable<z.ZodString>;
    is_beta_tester: z.ZodBoolean;
    created_at: z.ZodString;
}, z.core.$strip>;
export declare const WaitlistListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        first_name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodString;
        source: z.ZodNullable<z.ZodString>;
        is_beta_tester: z.ZodBoolean;
        created_at: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const WaitlistSourceCountSchema: z.ZodObject<{
    source: z.ZodNullable<z.ZodString>;
    count: z.ZodNumber;
}, z.core.$strip>;
export declare const WaitlistStatsResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        total: z.ZodNumber;
        this_month: z.ZodNumber;
        by_source: z.ZodArray<z.ZodObject<{
            source: z.ZodNullable<z.ZodString>;
            count: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const GetWaitlistQuerySchema: z.ZodObject<{
    source: z.ZodOptional<z.ZodString>;
    is_beta_tester: z.ZodPreprocess<z.ZodOptional<z.ZodBoolean>, unknown>;
}, z.core.$strip>;
export type WaitlistEntry = z.infer<typeof WaitlistEntrySchema>;
