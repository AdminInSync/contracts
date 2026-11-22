import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { QueryBooleanSchema } from '../../common/schemas/common.schema';
import { BetaTesterInterestSchema, BetaTesterOperatingSystemSchema } from '../beta-testers/beta-testers.schema';
extendZodWithOpenApi(z);
export const GetBetaTestersQuerySchema = z.object({
    has_app_account: QueryBooleanSchema,
});
export const AdminBetaTesterEntrySchema = z.object({
    id: z.string().guid(),
    full_name: z.string(),
    bank_email: z.string().email(),
    operating_system: BetaTesterOperatingSystemSchema,
    interests: z.array(BetaTesterInterestSchema),
    other_interest: z.string().nullable(),
    has_app_account: z.boolean(),
    created_at: z.string().datetime(),
    download_email_sent_at: z.string().datetime().nullable(),
});
export const BetaTesterListResponseSchema = z.object({
    message: z.string(),
    data: z.array(AdminBetaTesterEntrySchema),
});
export const SendDownloadEmailBodySchema = z.object({
    scope: z.enum(['all', 'selected']),
    uuids: z.array(z.string().guid()).optional(),
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
    id: z.string().guid(),
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
