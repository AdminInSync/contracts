import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
const c = initContract();
export const UpsertUserPreferencesRequestSchema = z.object({
    timezone: z.string().min(1).max(64),
}).strict();
export const UserPreferencesResponseSchema = z.object({
    timezone: z.string(),
});
export const UserPreferencesContracts = c.router({
    upsert: {
        method: 'PUT',
        path: '',
        body: UpsertUserPreferencesRequestSchema,
        responses: {
            200: UserPreferencesResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Save the token user preferences (IANA timezone)',
    },
}, {
    tags: ['User Preferences'],
    pathPrefix: '/user-preferences',
    strictStatusCodes: true,
});
