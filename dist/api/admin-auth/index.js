import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { LoginBodySchema, LoginResponseSchema, LogoutResponseSchema, MeResponseSchema, } from './admin-auth.schema';
const c = initContract();
export const AdminAuthContracts = c.router({
    login: {
        method: 'POST',
        path: '/login',
        body: LoginBodySchema,
        responses: {
            200: LoginResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Admin login',
        description: 'Authenticate an admin user with email and password.',
    },
    getMe: {
        method: 'GET',
        path: '/me',
        responses: {
            200: MeResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get current admin',
        description: 'Get the currently authenticated admin user.',
    },
    logout: {
        method: 'POST',
        path: '/logout',
        body: z.object({}),
        responses: {
            200: LogoutResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Admin logout',
        description: 'Logout the current admin user (stateless).',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/admin/auth',
    tags: ['Admin Authentication'],
});
