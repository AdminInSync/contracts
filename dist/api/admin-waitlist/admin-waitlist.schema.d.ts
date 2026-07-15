import { z } from 'zod';
export declare const WaitlistEntrySchema: z.ZodObject<{
    id: z.ZodString;
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    source: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    created_at: string;
    first_name: string;
    last_name: string;
    source: string | null;
}, {
    id: string;
    email: string;
    created_at: string;
    first_name: string;
    last_name: string;
    source: string | null;
}>;
export declare const WaitlistListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        first_name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodString;
        source: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        created_at: string;
        first_name: string;
        last_name: string;
        source: string | null;
    }, {
        id: string;
        email: string;
        created_at: string;
        first_name: string;
        last_name: string;
        source: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        id: string;
        email: string;
        created_at: string;
        first_name: string;
        last_name: string;
        source: string | null;
    }[];
}, {
    message: string;
    data: {
        id: string;
        email: string;
        created_at: string;
        first_name: string;
        last_name: string;
        source: string | null;
    }[];
}>;
export declare const WaitlistSourceCountSchema: z.ZodObject<{
    source: z.ZodNullable<z.ZodString>;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    source: string | null;
    count: number;
}, {
    source: string | null;
    count: number;
}>;
export declare const WaitlistStatsResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        total: z.ZodNumber;
        this_month: z.ZodNumber;
        by_source: z.ZodArray<z.ZodObject<{
            source: z.ZodNullable<z.ZodString>;
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            source: string | null;
            count: number;
        }, {
            source: string | null;
            count: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        total: number;
        this_month: number;
        by_source: {
            source: string | null;
            count: number;
        }[];
    }, {
        total: number;
        this_month: number;
        by_source: {
            source: string | null;
            count: number;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        total: number;
        this_month: number;
        by_source: {
            source: string | null;
            count: number;
        }[];
    };
}, {
    message: string;
    data: {
        total: number;
        this_month: number;
        by_source: {
            source: string | null;
            count: number;
        }[];
    };
}>;
export declare const GetWaitlistQuerySchema: z.ZodObject<{
    source: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    source?: string | undefined;
}, {
    source?: string | undefined;
}>;
export type WaitlistEntry = z.infer<typeof WaitlistEntrySchema>;
