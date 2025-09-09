import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
export const KycStatusSchema = z.enum(["none", "pending", "on_hold", "approved", "rejected"]);
export const KycTokenRequestSchema = z.object({
    ttlInSecs: z.number().optional().default(600),
});
export const KycTokenResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        token: z.string(),
        userId: z.string(),
        levelName: z.string(),
        expiresIn: z.number(),
    }),
});
export const KycStatusResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        uid: z.string(),
        status: KycStatusSchema,
        reviewedAt: z.string().nullable(),
        applicantId: z.string().nullable(),
    }),
});
export const WebhookEventSchema = z.object({
    type: z.string(),
    applicant: z.object({
        id: z.string(),
        externalUserId: z.string(),
    }).optional(),
    externalUserId: z.string().optional(),
    userId: z.string().optional(),
    reviewResult: z.object({
        reviewAnswer: z.string(),
    }).optional(),
    reviewedAt: z.string().optional(),
}).passthrough();
