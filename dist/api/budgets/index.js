import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { CreateBudgetSchema, UpdateBudgetSchema, UpdateBudgetUsedAmountSchema, GetBudgetsQuerySchema, BudgetResponseSchema, BudgetsListResponseSchema } from './budgets.schema';
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
        summary: 'Crear un nuevo presupuesto',
        description: 'Crea un nuevo presupuesto para el usuario autenticado',
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
        summary: 'Obtener todos los presupuestos',
        description: 'Obtiene todos los presupuestos del usuario autenticado con filtrado opcional',
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
            id: z.string().regex(/^\d+$/, 'El ID debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Obtener un presupuesto específico',
        description: 'Obtiene un presupuesto específico por ID para el usuario autenticado',
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
            id: z.string().regex(/^\d+$/, 'El ID debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        body: UpdateBudgetSchema,
        summary: 'Actualizar un presupuesto',
        description: 'Actualiza un presupuesto existente para el usuario autenticado',
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
            id: z.string().regex(/^\d+$/, 'El ID debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Eliminar un presupuesto',
        description: 'Elimina suavemente un presupuesto para el usuario autenticado',
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
        summary: 'Obtener presupuestos activos',
        description: 'Obtiene todos los presupuestos activos para el usuario autenticado',
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
        summary: 'Obtener presupuestos por período',
        description: 'Obtiene presupuestos filtrados por período para el usuario autenticado',
    },
    // Update budget used amount
    updateBudgetUsedAmount: {
        method: 'PATCH',
        path: '/budgets/:id/used-amount',
        responses: {
            200: BudgetResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().regex(/^\d+$/, 'El ID debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        body: UpdateBudgetUsedAmountSchema,
        summary: 'Actualizar monto usado del presupuesto',
        description: 'Actualiza el monto usado para un presupuesto específico',
    },
});
