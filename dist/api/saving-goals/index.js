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
        summary: 'Create a new saving goal',
        description: 'Creates a new saving goal for the authenticated user',
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
        summary: 'Get all saving goals',
        description: 'Retrieves all saving goals for the authenticated user with optional filtering',
    },
    // Get one saving goal
    getSavingGoal: {
        method: 'GET',
        path: '/saving-goals/:id',
        responses: {
            200: SavingGoalResponseSchema,
            404: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().transform((val) => parseInt(val, 10)),
        }),
        summary: 'Get a specific saving goal',
        description: 'Retrieves a specific saving goal by ID',
    },
    // Update saving goal
    updateSavingGoal: {
        method: 'PUT',
        path: '/saving-goals/:id',
        responses: {
            200: SavingGoalResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().transform((val) => parseInt(val, 10)),
        }),
        body: UpdateSavingGoalSchema,
        summary: 'Update a saving goal',
        description: 'Updates an existing saving goal',
    },
    // Update goal progress
    updateProgress: {
        method: 'PATCH',
        path: '/saving-goals/:id/progress',
        responses: {
            200: UpdateProgressResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().transform((val) => parseInt(val, 10)),
        }),
        body: UpdateProgressSchema,
        summary: 'Update saving goal progress',
        description: 'Updates the current amount of a saving goal',
    },
    // Delete saving goal
    deleteSavingGoal: {
        method: 'DELETE',
        path: '/saving-goals/:id',
        responses: {
            200: z.object({
                success: z.boolean(),
                message: z.string(),
            }),
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().transform((val) => parseInt(val, 10)),
        }),
        summary: 'Delete a saving goal',
        description: 'Soft deletes a saving goal',
    },
    // Get public saving goals
    getPublicSavingGoals: {
        method: 'GET',
        path: '/saving-goals/public',
        responses: {
            200: SavingGoalsListResponseSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            limit: z.number().min(1).max(100).default(20),
            offset: z.number().min(0).default(0),
        }),
        summary: 'Get public saving goals',
        description: 'Retrieves public saving goals from all users',
    },
    // Get goals due soon
    getGoalsDueSoon: {
        method: 'GET',
        path: '/saving-goals/due-soon',
        responses: {
            200: SavingGoalsListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            days: z.number().min(1).max(365).default(30),
        }),
        summary: 'Get goals due soon',
        description: 'Retrieves saving goals that are due within the specified number of days',
    },
});
