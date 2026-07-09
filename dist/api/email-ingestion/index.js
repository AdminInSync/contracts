import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { OAuthStartResponseSchema, ListEmailConnectionsResponseSchema, DisconnectEmailConnectionResponseSchema, SyncEmailConnectionResponseSchema, ListFinancialEmailEventsResponseSchema, FinancialEmailEventStatusSchema, ApproveFinancialEmailEventBodySchema, ApproveFinancialEmailEventResponseSchema, RejectFinancialEmailEventBodySchema, RejectFinancialEmailEventResponseSchema, ConvertFinancialEmailEventResponseSchema, } from './email-ingestion.schema';
const c = initContract();
export const EmailIngestionContracts = c.router({
    gmailOAuthStart: {
        method: 'GET',
        path: '/gmail/oauth/start',
        responses: {
            200: OAuthStartResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Start Gmail OAuth',
    },
    gmailOAuthCallback: {
        method: 'GET',
        path: '/gmail/oauth/callback',
        query: z.object({
            code: z.string().optional(),
            state: z.string(),
            error: z.string().optional(),
        }),
        responses: {
            302: z.object({ redirect: z.string().url() }).optional(),
            400: ErrorResSchema,
        },
        summary: 'Gmail OAuth callback',
    },
    outlookOAuthStart: {
        method: 'GET',
        path: '/outlook/oauth/start',
        responses: {
            200: OAuthStartResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Start Outlook OAuth',
    },
    outlookOAuthCallback: {
        method: 'GET',
        path: '/outlook/oauth/callback',
        query: z.object({
            code: z.string().optional(),
            state: z.string(),
            error: z.string().optional(),
        }),
        responses: {
            302: z.object({ redirect: z.string().url() }).optional(),
            400: ErrorResSchema,
        },
        summary: 'Outlook OAuth callback',
    },
    listEmailConnections: {
        method: 'GET',
        path: '/connections',
        responses: {
            200: ListEmailConnectionsResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List email provider connections',
    },
    disconnectConnection: {
        method: 'DELETE',
        path: '/connections/:connectionUuid',
        pathParams: z.object({ connectionUuid: z.string().uuid() }),
        responses: {
            200: DisconnectEmailConnectionResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Disconnect email provider',
    },
    syncConnection: {
        method: 'POST',
        path: '/connections/:connectionUuid/sync',
        pathParams: z.object({ connectionUuid: z.string().uuid() }),
        body: z.object({}),
        responses: {
            200: SyncEmailConnectionResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Enqueue manual email sync',
    },
    listEvents: {
        method: 'GET',
        path: '/events',
        query: z.object({
            status: FinancialEmailEventStatusSchema.optional(),
            fromDate: z.string().optional(),
            toDate: z.string().optional(),
            limit: z.string().transform(Number).optional(),
            offset: z.string().transform(Number).optional(),
        }),
        responses: {
            200: ListFinancialEmailEventsResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List parsed financial email events',
    },
    approveEvent: {
        method: 'POST',
        path: '/events/:eventUuid/approve',
        pathParams: z.object({ eventUuid: z.string().uuid() }),
        body: ApproveFinancialEmailEventBodySchema,
        responses: {
            200: ApproveFinancialEmailEventResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            409: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Approve event and import as product transaction',
    },
    rejectEvent: {
        method: 'POST',
        path: '/events/:eventUuid/reject',
        pathParams: z.object({ eventUuid: z.string().uuid() }),
        body: RejectFinancialEmailEventBodySchema,
        responses: {
            200: RejectFinancialEmailEventResponseSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Reject parsed financial email event',
    },
    convertEvent: {
        method: 'POST',
        path: '/events/:eventUuid/convert',
        pathParams: z.object({ eventUuid: z.string().uuid() }),
        body: ApproveFinancialEmailEventBodySchema,
        responses: {
            200: ConvertFinancialEmailEventResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            409: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Convert event (same as approve)',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/email-ingestion',
    tags: ['Email ingestion'],
});
