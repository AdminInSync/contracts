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
        summary: 'Crear una nueva institución financiera',
        description: 'Crea una nueva institución financiera (solo administrador)',
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
        summary: 'Obtener todas las instituciones financieras',
        description: 'Obtiene todas las instituciones financieras activas con filtrado opcional',
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
        summary: 'Obtener una institución financiera específica',
        description: 'Obtiene una institución financiera específica por ID',
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
        summary: 'Actualizar una institución financiera',
        description: 'Actualiza una institución financiera existente (solo administrador)',
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
        summary: 'Eliminar una institución financiera',
        description: 'Elimina suavemente una institución financiera (solo administrador)',
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
        summary: 'Buscar instituciones financieras',
        description: 'Busca instituciones financieras por nombre',
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
        summary: 'Obtener instituciones por tipo',
        description: 'Obtiene instituciones financieras filtradas por tipo',
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
        summary: 'Obtener instituciones con productos',
        description: 'Obtiene instituciones financieras que tienen productos activos',
    },
});
