import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { GetWaitlistQuerySchema, WaitlistListResponseSchema, WaitlistStatsResponseSchema, } from './admin-waitlist.schema';
const c = initContract();
export const AdminWaitlistContracts = c.router({
    list: {
        method: 'GET',
        path: '/',
        query: GetWaitlistQuerySchema,
        responses: {
            200: WaitlistListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List waitlist entries',
        description: 'Returns newsletter subscriptions for the admin waitlist view.',
    },
    stats: {
        method: 'GET',
        path: '/stats',
        responses: {
            200: WaitlistStatsResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Waitlist stats',
        description: 'Returns aggregate stats for the admin waitlist dashboard cards.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/admin/waitlist',
    tags: ['Admin Waitlist'],
});
