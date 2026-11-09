import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
export const AppFeedbackStatusSchema = z.enum(['new', 'reviewed', 'resolved']);
export const AdminAppFeedbackEntrySchema = z.object({
    id: z.string().uuid(),
    message: z.string(),
    status: AppFeedbackStatusSchema,
    user_uid: z.string(),
    user_name: z.string(),
    user_email: z.string().nullable(),
    created_at: z.string().datetime(),
});
export const AppFeedbackListResponseSchema = z.object({
    message: z.string(),
    data: z.array(AdminAppFeedbackEntrySchema),
});
export const GetAppFeedbackQuerySchema = z.object({
    status: z.union([AppFeedbackStatusSchema, z.literal('all')]).optional(),
});
export const UpdateAppFeedbackStatusParamsSchema = z.object({
    id: z.string().uuid(),
});
export const UpdateAppFeedbackStatusBodySchema = z.object({
    status: AppFeedbackStatusSchema,
});
export const UpdateAppFeedbackStatusResponseSchema = z.object({
    message: z.string(),
    data: AdminAppFeedbackEntrySchema,
});
