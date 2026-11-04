import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { PutSavingGoalReminderRequestSchema, SavingGoalReminderErrorSchema, SavingGoalReminderParamsSchema, SavingGoalReminderResponseSchema, } from './saving-goal-reminders.schema';
const c = initContract();
export const SavingGoalRemindersContracts = c.router({
    get: {
        method: 'GET',
        path: '/saving-goals/:goal_type/:goal_id/reminder',
        pathParams: SavingGoalReminderParamsSchema,
        responses: {
            200: SavingGoalReminderResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: SavingGoalReminderErrorSchema,
            500: ErrorResSchema,
        },
        summary: "Get the token user's reminder for a goal (no row = off)",
    },
    put: {
        method: 'PUT',
        path: '/saving-goals/:goal_type/:goal_id/reminder',
        pathParams: SavingGoalReminderParamsSchema,
        body: PutSavingGoalReminderRequestSchema,
        responses: {
            200: SavingGoalReminderResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: SavingGoalReminderErrorSchema,
            409: SavingGoalReminderErrorSchema,
            500: ErrorResSchema,
        },
        summary: "Create, change or turn off the token user's reminder for a goal",
    },
}, {
    tags: ['Saving Goal Reminders'],
    strictStatusCodes: true,
});
