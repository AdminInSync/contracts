import { z } from 'zod';
import { DocumentType } from '../../enums';
export declare const RegistrationStatusSchema: z.ZodEnum<["in_progress", "completed", "abandoned"]>;
export declare const RegistrationStepSchema: z.ZodEnum<["document", "pin", "done"]>;
export declare const StartRegistrationRequestSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodOptional<z.ZodUnknown>;
}, "strict", z.ZodTypeAny, {
    first_name: string;
    last_name: string;
    email?: unknown;
}, {
    first_name: string;
    last_name: string;
    email?: unknown;
}>;
export declare const DocumentStepSchema: z.ZodObject<{
    step: z.ZodLiteral<"document">;
    info_type: z.ZodEnum<[DocumentType.NATIONAL_ID, DocumentType.PASSPORT]>;
    document_number: z.ZodOptional<z.ZodString>;
    document_url: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    info_type: DocumentType.PASSPORT | DocumentType.NATIONAL_ID;
    step: "document";
    document_number?: string | undefined;
    document_url?: string | undefined;
}, {
    info_type: DocumentType.PASSPORT | DocumentType.NATIONAL_ID;
    step: "document";
    document_number?: string | undefined;
    document_url?: string | undefined;
}>;
export declare const PinStepSchema: z.ZodObject<{
    step: z.ZodLiteral<"pin">;
}, "strict", z.ZodTypeAny, {
    step: "pin";
}, {
    step: "pin";
}>;
export declare const RegistrationStepRequestSchema: z.ZodDiscriminatedUnion<"step", [z.ZodObject<{
    step: z.ZodLiteral<"document">;
    info_type: z.ZodEnum<[DocumentType.NATIONAL_ID, DocumentType.PASSPORT]>;
    document_number: z.ZodOptional<z.ZodString>;
    document_url: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    info_type: DocumentType.PASSPORT | DocumentType.NATIONAL_ID;
    step: "document";
    document_number?: string | undefined;
    document_url?: string | undefined;
}, {
    info_type: DocumentType.PASSPORT | DocumentType.NATIONAL_ID;
    step: "document";
    document_number?: string | undefined;
    document_url?: string | undefined;
}>, z.ZodObject<{
    step: z.ZodLiteral<"pin">;
}, "strict", z.ZodTypeAny, {
    step: "pin";
}, {
    step: "pin";
}>]>;
export declare const RegistrationResponseSchema: z.ZodObject<{
    status: z.ZodEnum<["in_progress", "completed", "abandoned"]>;
    current_step: z.ZodEnum<["document", "pin", "done"]>;
    email: z.ZodNullable<z.ZodString>;
    first_name: z.ZodNullable<z.ZodString>;
    last_name: z.ZodNullable<z.ZodString>;
    last_step_at: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "completed" | "in_progress" | "abandoned";
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    current_step: "document" | "pin" | "done";
    last_step_at: string | null;
    completed_at: string | null;
}, {
    status: "completed" | "in_progress" | "abandoned";
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    current_step: "document" | "pin" | "done";
    last_step_at: string | null;
    completed_at: string | null;
}>;
export declare const RegistrationErrorSchema: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    code: string;
}, {
    message: string;
    code: string;
}>;
