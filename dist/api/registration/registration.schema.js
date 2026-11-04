import { z } from 'zod';
import { DocumentType } from '../../enums';
export const RegistrationStatusSchema = z.enum(['in_progress', 'completed', 'abandoned']);
export const RegistrationStepSchema = z.enum(['document', 'pin', 'done']);
export const StartRegistrationRequestSchema = z.object({
    first_name: z.string().trim().min(1).max(100),
    last_name: z.string().trim().min(1).max(100),
    // The email always comes from the Firebase token; a body email is accepted and ignored.
    email: z.unknown().optional(),
}).strict();
export const DocumentStepSchema = z.object({
    step: z.literal('document'),
    info_type: z.enum([DocumentType.NATIONAL_ID, DocumentType.PASSPORT]),
    document_number: z.string().min(1).max(500).optional(),
    document_url: z.string().url().max(500).optional(),
}).strict();
export const PinStepSchema = z.object({
    step: z.literal('pin'),
}).strict();
export const RegistrationStepRequestSchema = z.discriminatedUnion('step', [
    DocumentStepSchema,
    PinStepSchema,
]);
export const RegistrationResponseSchema = z.object({
    status: RegistrationStatusSchema,
    current_step: RegistrationStepSchema,
    email: z.string().nullable(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    last_step_at: z.string().nullable(),
    completed_at: z.string().nullable(),
});
export const RegistrationErrorSchema = z.object({
    code: z.string(),
    message: z.string(),
});
