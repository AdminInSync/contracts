import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { CreateSavingGoalSchema, UpdateSavingGoalSchema, UpdateProgressSchema, GetSavingGoalsQuerySchema, SavingGoalResponseSchema, SavingGoalsListResponseSchema, UpdateProgressResponseSchema } from './saving-goals.schema';
import { ErrorResSchema } from '../../common/schemas/common.schema';
const c = initContract();
export const SavingGoalsContracts = c.router({
    // Create saving goal
    createSavingGoal: {
        method: 'POST',
        path: '/saving-goals',
        responses: {
            201: SavingGoalResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        body: CreateSavingGoalSchema,
        summary: 'Crear una nueva meta de ahorro',
        description: 'Crea una nueva meta de ahorro para el usuario autenticado',
    },
    // Get all saving goals
    getSavingGoals: {
        method: 'GET',
        path: '/saving-goals',
        responses: {
            200: SavingGoalsListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: GetSavingGoalsQuerySchema,
        summary: 'Obtener todas las metas de ahorro',
        description: 'Obtiene todas las metas de ahorro del usuario autenticado con filtrado opcional',
    },
    // Get one saving goal
    getSavingGoal: {
        method: 'GET',
        path: '/get-saving-goals-by-id/:id/',
        responses: {
            200: SavingGoalResponseSchema,
            404: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        summary: 'Obtener una meta de ahorro específica',
        description: 'Obtiene una meta de ahorro específica por ID',
    },
    // Update saving goal
    updateSavingGoal: {
        method: 'PUT',
        path: '/update-saving-goals-by-id/:id/',
        responses: {
            200: SavingGoalResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        body: UpdateSavingGoalSchema,
        summary: 'Actualizar una meta de ahorro',
        description: 'Actualiza una meta de ahorro existente',
    },
    // Update goal progress
    updateProgress: {
        method: 'PATCH',
        path: '/update-saving-goals-by-id/:id/progress/',
        responses: {
            200: UpdateProgressResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        body: UpdateProgressSchema,
        summary: 'Actualizar progreso de meta de ahorro',
        description: 'Actualiza el monto actual de una meta de ahorro',
    },
    // Delete saving goal
    deleteSavingGoal: {
        method: 'DELETE',
        path: '/delete-saving-goals-by-id/:id/soft/',
        responses: {
            200: z.object({
                message: z.string(),
            }),
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.coerce.number().int().positive(),
        }),
        summary: 'Eliminar una meta de ahorro',
        description: 'Elimina suavemente una meta de ahorro',
    },
    // Get public saving goals
    getPublicSavingGoals: {
        method: 'GET',
        path: '/get-saving-goals-public/',
        responses: {
            200: SavingGoalsListResponseSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            limit: z.coerce.number().min(1).max(100).default(20),
            offset: z.coerce.number().min(0).default(0),
        }),
        summary: 'Obtener metas de ahorro públicas',
        description: 'Obtiene metas de ahorro públicas de todos los usuarios',
    },
    // Get goals due soon
    getGoalsDueSoon: {
        method: 'GET',
        path: '/get-saving-goals-due-soon/',
        responses: {
            200: SavingGoalsListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            days: z.coerce.number().min(1).max(365).default(30),
        }),
        summary: 'Obtener metas próximas a vencer',
        description: 'Obtiene metas de ahorro que vencen dentro del número de días especificado',
    },
});
