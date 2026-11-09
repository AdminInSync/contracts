import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { BetaTesterListResponseSchema, SendDownloadEmailBodySchema, SendDownloadEmailResponseSchema, } from './admin-beta-testers.schema';
const c = initContract();
export const AdminBetaTestersContracts = c.router({
    list: {
        method: 'GET',
        path: '/',
        responses: {
            200: BetaTesterListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List beta testers',
        description: 'Returns registered beta testers for the admin panel.',
    },
    sendDownloadEmail: {
        method: 'POST',
        path: '/send-download-email',
        body: SendDownloadEmailBodySchema,
        responses: {
            200: SendDownloadEmailResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            503: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Send download emails',
        description: 'Sends the InSync download email to all beta testers or to a selected set of UUIDs.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/admin/beta-testers',
    tags: ['Admin Beta Testers'],
});
