import { z } from 'zod';
export declare const CreateAppFeedbackSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strict>;
export declare const AppFeedbackResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uuid: z.ZodString;
        created_at: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
