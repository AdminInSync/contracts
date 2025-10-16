import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { CreateBudgetSchema, UpdateBudgetSchema, GetBudgetsQuerySchema, BudgetResponseSchema, BudgetsListResponseSchema } from './budgets.schema';
import { ErrorResSchema } from '../../common/schemas/common.schema';
const c = initContract();
export const BudgetsContracts = c.router({
    // Create budget
    createBudget: {
        method: 'POST',
        path: '/budgets',
        responses: {
            201: BudgetResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        body: CreateBudgetSchema,
        summary: 'Create a new budget',
        description: 'Creates a new budget for the authenticated user',
    },
    // Get all budgets for the authenticated user
    getBudgets: {
        method: 'GET',
        path: '/budgets',
        responses: {
            200: BudgetsListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: GetBudgetsQuerySchema,
        summary: 'Get all budgets',
        description: 'Retrieves all budgets for the authenticated user with optional filtering',
    },
    // Get one budget
    getBudget: {
        method: 'GET',
        path: '/budgets/:id',
        responses: {
            200: BudgetResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().regex(/^\d+$/, 'ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Get a specific budget',
        description: 'Retrieves a specific budget by ID for the authenticated user',
    },
    // Update budget
    updateBudget: {
        method: 'PUT',
        path: '/budgets/:id',
        responses: {
            200: BudgetResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().regex(/^\d+$/, 'ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        body: UpdateBudgetSchema,
        summary: 'Update a budget',
        description: 'Updates an existing budget for the authenticated user',
    },
    // Delete budget
    deleteBudget: {
        method: 'DELETE',
        path: '/budgets/:id',
        responses: {
            200: z.object({
                message: z.string(),
            }),
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().regex(/^\d+$/, 'ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Delete a budget',
        description: 'Soft deletes a budget for the authenticated user',
    },
    // Get active budgets
    getActiveBudgets: {
        method: 'GET',
        path: '/budgets/active',
        responses: {
            200: BudgetsListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Get active budgets',
        description: 'Retrieves all active budgets for the authenticated user',
    },
    // Get budgets by period
    getBudgetsByPeriod: {
        method: 'GET',
        path: '/budgets/period/:period',
        responses: {
            200: BudgetsListResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            period: z.enum(['monthly', 'quarterly', 'yearly']),
        }),
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Get budgets by period',
        description: 'Retrieves budgets filtered by budget period for the authenticated user',
    },
});
