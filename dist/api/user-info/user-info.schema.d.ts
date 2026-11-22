import { z } from 'zod';
import { DocumentType, DocumentStatus } from '../../enums';
export declare const CreateUserInfoRequestSchema: z.ZodObject<{
    info_type: z.ZodEnum<typeof DocumentType>;
    document_number: z.ZodOptional<z.ZodString>;
    document_url: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const UserInfoResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    info_type: z.ZodEnum<typeof DocumentType>;
    status: z.ZodEnum<typeof DocumentStatus>;
    document_number: z.ZodNullable<z.ZodString>;
    document_url: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, z.core.$strip>;
export declare const UserInfoErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export declare const GetUserInfoQuerySchema: z.ZodObject<{
    info_type: z.ZodOptional<z.ZodEnum<typeof DocumentType>>;
    status: z.ZodOptional<z.ZodEnum<typeof DocumentStatus>>;
}, z.core.$strip>;
export declare const GetUserInfoResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    info_type: z.ZodEnum<typeof DocumentType>;
    status: z.ZodEnum<typeof DocumentStatus>;
    document_number: z.ZodNullable<z.ZodString>;
    document_url: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, z.core.$strip>>;
