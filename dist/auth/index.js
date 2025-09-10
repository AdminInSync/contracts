import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../common/schemas/common.schema';
import { MeResponseSchema } from './auth.schema';
const c = initContract();
export const AuthContracts = c.router({
    me: {
        method: 'GET',
        path: '/me',
        responses: {
            200: MeResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema
        },
        summary: 'Get current user endpoint',
        description: 'Get current authenticated user information from Firebase.',
    }
}, {
    pathPrefix: '/auth'
});
