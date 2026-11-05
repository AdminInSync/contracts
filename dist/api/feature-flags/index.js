import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
const c = initContract();
export const TrackingModeResponseSchema = z.object({ emailSync: z.boolean() });
export const FeatureFlagsContracts = c.router({
    getTrackingMode: {
        method: 'GET',
        path: '/profile/tracking-mode',
        responses: {
            200: TrackingModeResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get the authenticated account tracking mode',
        description: 'Returns whether email synchronization is enabled for the authenticated account.',
    },
});
