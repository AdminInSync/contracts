import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { ClientDetailResponseSchema, ClientListResponseSchema, GetClientsQuerySchema, } from './admin-clients.schema';
const c = initContract();
export const AdminClientsContracts = c.router({
    listClients: {
        method: 'GET',
        path: '/',
        query: GetClientsQuerySchema,
        responses: {
            200: ClientListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List admin clients',
        description: 'Returns clients sourced from user_info enriched with Firebase identity data.',
    },
    getClientDetail: {
        method: 'GET',
        path: '/:uid',
        pathParams: z.object({
            uid: z.string().min(1),
        }),
        responses: {
            200: ClientDetailResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get admin client detail',
        description: 'Returns a single client with KYC, devices, preferences, and products.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/admin/clients',
    tags: ['Admin Clients'],
});
