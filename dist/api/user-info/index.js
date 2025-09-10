import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { CreateUserInfoRequestSchema, UserInfoResponseSchema, UserInfoErrorResponseSchema, GetUserInfoResponseSchema, GetUserInfoQuerySchema } from './user-info.schema';
const c = initContract();
export const UserInfoContracts = c.router({
    createUserInfo: {
        method: 'POST',
        path: '/',
        responses: {
            201: UserInfoResponseSchema,
            400: UserInfoErrorResponseSchema,
            401: ErrorResSchema,
            409: UserInfoErrorResponseSchema,
            500: ErrorResSchema
        },
        body: CreateUserInfoRequestSchema,
        summary: 'Create new user info document',
        description: 'Create a new user info document for the authenticated user',
    },
    getUserInfo: {
        method: 'GET',
        path: '/',
        query: GetUserInfoQuerySchema,
        responses: {
            200: GetUserInfoResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema
        },
        summary: 'Get user info documents',
        description: 'Get all user info documents for the authenticated user with optional filtering by document type and status',
    }
}, {
    strictStatusCodes: true,
    pathPrefix: '/user-info',
    tags: ['User Information']
});
