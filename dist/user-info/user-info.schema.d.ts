import { z } from 'zod';
import { DocumentType, DocumentStatus } from '../enums';
export declare const CreateUserInfoRequestSchema: z.ZodObject<{
    info_type: z.ZodNativeEnum<typeof DocumentType>;
    document_number: z.ZodOptional<z.ZodString>;
    document_url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    info_type: DocumentType;
    document_number?: string | undefined;
    document_url?: string | undefined;
}, {
    info_type: DocumentType;
    document_number?: string | undefined;
    document_url?: string | undefined;
}>;
export declare const UserInfoResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    info_type: z.ZodNativeEnum<typeof DocumentType>;
    status: z.ZodNativeEnum<typeof DocumentStatus>;
    document_number: z.ZodNullable<z.ZodString>;
    document_url: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: DocumentStatus;
    id: number;
    info_type: DocumentType;
    document_number: string | null;
    document_url: string | null;
    uuid: string;
    user_uid: string;
    createdAt: string;
}, {
    status: DocumentStatus;
    id: number;
    info_type: DocumentType;
    document_number: string | null;
    document_url: string | null;
    uuid: string;
    user_uid: string;
    createdAt: string;
}>;
export declare const UserInfoErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    error: string;
}, {
    message: string;
    error: string;
}>;
export declare const GetUserInfoQuerySchema: z.ZodObject<{
    info_type: z.ZodOptional<z.ZodNativeEnum<typeof DocumentType>>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof DocumentStatus>>;
}, "strip", z.ZodTypeAny, {
    status?: DocumentStatus | undefined;
    info_type?: DocumentType | undefined;
}, {
    status?: DocumentStatus | undefined;
    info_type?: DocumentType | undefined;
}>;
export declare const GetUserInfoResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    info_type: z.ZodNativeEnum<typeof DocumentType>;
    status: z.ZodNativeEnum<typeof DocumentStatus>;
    document_number: z.ZodNullable<z.ZodString>;
    document_url: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: DocumentStatus;
    id: number;
    info_type: DocumentType;
    document_number: string | null;
    document_url: string | null;
    uuid: string;
    user_uid: string;
    createdAt: string;
}, {
    status: DocumentStatus;
    id: number;
    info_type: DocumentType;
    document_number: string | null;
    document_url: string | null;
    uuid: string;
    user_uid: string;
    createdAt: string;
}>, "many">;
