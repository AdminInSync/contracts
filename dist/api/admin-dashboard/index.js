import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { DashboardStatsResponseSchema } from './admin-dashboard.schema';
const c = initContract();
export const AdminDashboardContracts = c.router({
    getStats: {
        method: 'GET',
        path: '/stats',
        responses: {
            200: DashboardStatsResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Admin dashboard stats',
        description: 'Returns platform-wide dashboard aggregates from Firebase users and Postgres.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/admin/dashboard',
    tags: ['Admin Dashboard'],
});
