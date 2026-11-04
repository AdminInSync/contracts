import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { CreateSharedSavingsGoalSchema, JoinSharedSavingsGoalSchema, SharedSavingsContributionSchema, SharedSavingsGoalResponseSchema, SharedSavingsGoalsResponseSchema, } from './shared-savings.schema';
const c = initContract();
export const SharedSavingsContracts = c.router({
    list: {
        method: 'GET', path: '/shared-savings', responses: { 200: SharedSavingsGoalsResponseSchema, 401: ErrorResSchema, 500: ErrorResSchema },
        summary: 'List shared savings goals for the authenticated user',
    },
    create: {
        method: 'POST', path: '/shared-savings', body: CreateSharedSavingsGoalSchema,
        responses: { 201: SharedSavingsGoalResponseSchema, 400: ErrorResSchema, 401: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Create a shared savings goal',
    },
    join: {
        method: 'POST', path: '/shared-savings/join', body: JoinSharedSavingsGoalSchema,
        responses: { 200: SharedSavingsGoalResponseSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Join a shared savings goal with an invite code',
    },
    contribute: {
        method: 'POST', path: '/shared-savings/:uuid/contributions', pathParams: z.object({ uuid: z.string().uuid() }),
        body: SharedSavingsContributionSchema,
        responses: { 200: SharedSavingsGoalResponseSchema, 400: ErrorResSchema, 401: ErrorResSchema, 404: ErrorResSchema, 500: ErrorResSchema },
        summary: 'Add a contribution to a shared savings goal',
    },
});
