import { z } from 'zod';
import '../../openapi-extensions';
import { DocumentType } from '../../enums';
export declare const RegistrationStatusSchema: z.ZodEnum<{
    completed: "completed";
    in_progress: "in_progress";
    abandoned: "abandoned";
}>;
export declare const RegistrationStepSchema: z.ZodEnum<{
    document: "document";
    pin: "pin";
    done: "done";
}>;
export declare const StartRegistrationRequestSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodOptional<z.ZodUnknown>;
}, z.core.$strict>;
export declare const DocumentStepSchema: z.ZodObject<{
    step: z.ZodLiteral<"document">;
    info_type: z.ZodEnum<{
        passport: DocumentType.PASSPORT;
        national_id: DocumentType.NATIONAL_ID;
    }>;
    document_number: z.ZodOptional<z.ZodString>;
    document_url: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const PinStepSchema: z.ZodObject<{
    step: z.ZodLiteral<"pin">;
}, z.core.$strict>;
export declare const RegistrationStepRequestSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    step: z.ZodLiteral<"document">;
    info_type: z.ZodEnum<{
        passport: DocumentType.PASSPORT;
        national_id: DocumentType.NATIONAL_ID;
    }>;
    document_number: z.ZodOptional<z.ZodString>;
    document_url: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    step: z.ZodLiteral<"pin">;
}, z.core.$strict>], "step">;
export declare const RegistrationResponseSchema: z.ZodObject<{
    status: z.ZodEnum<{
        completed: "completed";
        in_progress: "in_progress";
        abandoned: "abandoned";
    }>;
    current_step: z.ZodEnum<{
        document: "document";
        pin: "pin";
        done: "done";
    }>;
    email: z.ZodNullable<z.ZodString>;
    first_name: z.ZodNullable<z.ZodString>;
    last_name: z.ZodNullable<z.ZodString>;
    last_step_at: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const RegistrationErrorSchema: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
