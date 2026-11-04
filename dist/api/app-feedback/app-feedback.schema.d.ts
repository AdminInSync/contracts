import { z } from 'zod';
export declare const CreateAppFeedbackSchema: z.ZodObject<{
    message: z.ZodString;
}, "strict", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
export declare const AppFeedbackResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uuid: z.ZodString;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
        created_at: string;
    }, {
        uuid: string;
        created_at: string;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        uuid: string;
        created_at: string;
    };
}, {
    message: string;
    data: {
        uuid: string;
        created_at: string;
    };
}>;
