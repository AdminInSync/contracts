import { z } from 'zod';
export const CreateAppFeedbackSchema = z.object({
    message: z.string().trim().min(1).max(4000),
}).strict();
export const AppFeedbackResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        uuid: z.string().uuid(),
        created_at: z.string().datetime(),
    }),
});
