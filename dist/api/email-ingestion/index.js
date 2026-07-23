import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { OAuthStartResponseSchema, ListEmailConnectionsResponseSchema, DisconnectEmailConnectionResponseSchema, SyncEmailConnectionResponseSchema, ListFinancialEmailEventsResponseSchema, FinancialEmailEventStatusSchema, EmailSyncStatusResponseSchema, } from './email-ingestion.schema';
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
    getSyncStatus: {
        method: 'GET',
        path: '/sync-status',
        responses: {
            200: EmailSyncStatusResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Email ingestion sync status for the authenticated user',
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
}, {
    strictStatusCodes: true,
    pathPrefix: '/email-ingestion',
    tags: ['Email ingestion'],
});
