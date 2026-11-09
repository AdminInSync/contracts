import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { AppFeedbackListResponseSchema, GetAppFeedbackQuerySchema, UpdateAppFeedbackStatusBodySchema, UpdateAppFeedbackStatusParamsSchema, UpdateAppFeedbackStatusResponseSchema, } from './admin-app-feedback.schema';
const c = initContract();
export const AdminAppFeedbackContracts = c.router({
    list: {
        method: 'GET',
        path: '/',
        query: GetAppFeedbackQuerySchema,
        responses: {
            200: AppFeedbackListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List app feedback',
        description: 'Returns user-submitted app feedback for the admin panel.',
    },
    updateStatus: {
        method: 'PATCH',
        path: '/:id/status',
        pathParams: UpdateAppFeedbackStatusParamsSchema,
        body: UpdateAppFeedbackStatusBodySchema,
        responses: {
            200: UpdateAppFeedbackStatusResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Update feedback status',
        description: 'Sets an app feedback entry to new, reviewed, or resolved.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/admin/app-feedback',
    tags: ['Admin App Feedback'],
});
