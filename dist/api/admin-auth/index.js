import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { LoginBodySchema, LoginResponseSchema, LogoutResponseSchema, MeResponseSchema, TotpConfirmBodySchema, TotpConfirmResponseSchema, TotpSetupBodySchema, TotpSetupResponseSchema, } from './admin-auth.schema';
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
            429: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Admin login',
        description: 'Authenticate an admin with email, password, and a TOTP or one-time recovery code. A correct password without a second factor does not return a token.',
    },
    setupTotp: {
        method: 'POST',
        path: '/totp/setup',
        body: TotpSetupBodySchema,
        responses: {
            200: TotpSetupResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            409: ErrorResSchema,
            429: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Start admin TOTP enrollment',
        description: 'Verify the admin password and return a TOTP secret, otpauth URL, and one-time recovery codes. Does not return a JWT. Confirm with a code before login will succeed.',
    },
    confirmTotp: {
        method: 'POST',
        path: '/totp/confirm',
        body: TotpConfirmBodySchema,
        responses: {
            200: TotpConfirmResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            409: ErrorResSchema,
            429: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Confirm admin TOTP enrollment',
        description: 'Verify the admin password and a 6-digit authenticator code, then enable TOTP. Does not return a JWT.',
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
        description: 'Revoke the current admin JWT until it expires.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/admin/auth',
    tags: ['Admin Authentication'],
});
