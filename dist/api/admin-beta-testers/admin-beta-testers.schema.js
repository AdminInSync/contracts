import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { BetaTesterInterestSchema, BetaTesterOperatingSystemSchema } from '../beta-testers/beta-testers.schema';
extendZodWithOpenApi(z);
export const AdminBetaTesterEntrySchema = z.object({
    id: z.string().uuid(),
    full_name: z.string(),
    bank_email: z.string().email(),
    operating_system: BetaTesterOperatingSystemSchema,
    interests: z.array(BetaTesterInterestSchema),
    other_interest: z.string().nullable(),
    created_at: z.string().datetime(),
    download_email_sent_at: z.string().datetime().nullable(),
});
export const BetaTesterListResponseSchema = z.object({
    message: z.string(),
    data: z.array(AdminBetaTesterEntrySchema),
});
export const SendDownloadEmailBodySchema = z.object({
    scope: z.enum(['all', 'selected']),
    uuids: z.array(z.string().uuid()).optional(),
}).superRefine((data, context) => {
    if (data.scope === 'selected' && (!data.uuids || data.uuids.length < 1)) {
        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['uuids'],
            message: 'Select at least one beta tester',
        });
    }
});
export const SendDownloadEmailFailureSchema = z.object({
    id: z.string().uuid(),
    message: z.string(),
});
export const SendDownloadEmailResponseSchema = z.object({
    message: z.string(),
    data: z.object({
        requested: z.number().int(),
        sent: z.number().int(),
        failed: z.number().int(),
        failures: z.array(SendDownloadEmailFailureSchema),
    }),
});
