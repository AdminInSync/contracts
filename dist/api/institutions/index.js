import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { CreateInstitutionSchema, UpdateInstitutionSchema, GetInstitutionsQuerySchema, InstitutionResponseSchema, InstitutionsListResponseSchema } from './institutions.schema';
import { ErrorResSchema } from '../../common/schemas/common.schema';
const c = initContract();
export const InstitutionsContracts = c.router({
    // Create financial institution
    createInstitution: {
        method: 'POST',
        path: '/institutions',
        responses: {
            201: InstitutionResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            409: ErrorResSchema,
            500: ErrorResSchema,
        },
        body: CreateInstitutionSchema,
        summary: 'Create a new financial institution',
        description: 'Creates a new financial institution (admin only)',
    },
    // Get all financial institutions
    getInstitutions: {
        method: 'GET',
        path: '/institutions',
        responses: {
            200: InstitutionsListResponseSchema,
            500: ErrorResSchema,
        },
        query: GetInstitutionsQuerySchema,
        summary: 'Get all financial institutions',
        description: 'Retrieves all active financial institutions with optional filtering',
    },
    // Get one financial institution
    getInstitution: {
        method: 'GET',
        path: '/institutions/:id',
        responses: {
            200: InstitutionResponseSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().transform((val) => parseInt(val, 10)),
        }),
        summary: 'Get a specific financial institution',
        description: 'Retrieves a specific financial institution by ID',
    },
    // Update financial institution
    updateInstitution: {
        method: 'PUT',
        path: '/institutions/:id',
        responses: {
            200: InstitutionResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            409: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().transform((val) => parseInt(val, 10)),
        }),
        body: UpdateInstitutionSchema,
        summary: 'Update a financial institution',
        description: 'Updates an existing financial institution (admin only)',
    },
    // Delete financial institution
    deleteInstitution: {
        method: 'DELETE',
        path: '/institutions/:id',
        responses: {
            200: z.object({
                message: z.string(),
            }),
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().transform((val) => parseInt(val, 10)),
        }),
        summary: 'Delete a financial institution',
        description: 'Soft deletes a financial institution (admin only)',
    },
    // Search institutions
    searchInstitutions: {
        method: 'GET',
        path: '/institutions/search',
        responses: {
            200: InstitutionsListResponseSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            q: z.string().min(1),
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Search financial institutions',
        description: 'Search financial institutions by name',
    },
    // Get institutions by type
    getInstitutionsByType: {
        method: 'GET',
        path: '/institutions/type/:type',
        responses: {
            200: InstitutionsListResponseSchema,
            400: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            type: z.enum(['bank', 'credit_union', 'investment_firm', 'insurance', 'fintech']),
        }),
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Get institutions by type',
        description: 'Retrieves financial institutions filtered by type',
    },
    // Get institutions with products
    getInstitutionsWithProducts: {
        method: 'GET',
        path: '/institutions/with-products',
        responses: {
            200: InstitutionsListResponseSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Get institutions with products',
        description: 'Retrieves financial institutions that have active products',
    },
});
