import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { AppFeedbackResponseSchema, CreateAppFeedbackSchema } from './app-feedback.schema';
const c = initContract();
export const AppFeedbackContracts = c.router({
    create: {
        method: 'POST',
        path: '/app-feedback',
        body: CreateAppFeedbackSchema,
        responses: {
            201: AppFeedbackResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Submit feedback about the InSync app',
        description: 'Stores user-submitted app feedback. The message body is not written to application logs.',
    },
});
