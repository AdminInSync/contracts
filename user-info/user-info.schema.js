import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { DocumentType, DocumentStatus } from '../enums';
extendZodWithOpenApi(z);
// User Info Request Schema
export const CreateUserInfoRequestSchema = z.object({
    info_type: z.nativeEnum(DocumentType, {
        description: 'Type of document being uploaded'
    }),
    document_number: z.string().min(1).max(500).optional().openapi({
        description: 'Document number or identifier'
    }),
    document_url: z.string().url().max(500).optional().openapi({
        description: 'URL to the uploaded document'
    })
}).openapi({
    title: 'CreateUserInfoRequest',
    description: 'Request schema for creating user info'
});
// User Info Response Schema
export const UserInfoResponseSchema = z.object({
    id: z.number().openapi({
        description: 'Internal database ID'
    }),
    uuid: z.string().uuid().openapi({
        description: 'Public UUID for the user info record'
    }),
    user_uid: z.string().openapi({
        description: 'Firebase UID of the user'
    }),
    info_type: z.nativeEnum(DocumentType).openapi({
        description: 'Type of document'
    }),
    status: z.nativeEnum(DocumentStatus).openapi({
        description: 'Current status of the document'
    }),
    document_number: z.string().nullable().openapi({
        description: 'Document number or identifier'
    }),
    document_url: z.string().nullable().openapi({
        description: 'URL to the uploaded document'
    }),
    createdAt: z.string().datetime().openapi({
        description: 'Creation timestamp'
    })
}).openapi({
    title: 'UserInfoResponse',
    description: 'Response schema for user info'
});
// Error Response Schema
export const UserInfoErrorResponseSchema = z.object({
    error: z.string().openapi({
        description: 'Error type'
    }),
    message: z.string().openapi({
        description: 'Error message'
    })
}).openapi({
    title: 'UserInfoErrorResponse',
    description: 'Error response schema for user info'
});
// Get User Info Query Schema
export const GetUserInfoQuerySchema = z.object({
    info_type: z.nativeEnum(DocumentType).optional().openapi({
        description: 'Filter by document type'
    }),
    status: z.nativeEnum(DocumentStatus).optional().openapi({
        description: 'Filter by document status'
    })
}).openapi({
    title: 'GetUserInfoQuery',
    description: 'Query parameters for filtering user info documents'
});
// Get User Info Response (array of user info records)
export const GetUserInfoResponseSchema = z.array(UserInfoResponseSchema).openapi({
    title: 'GetUserInfoResponse',
    description: 'Response schema for getting user info list'
});
