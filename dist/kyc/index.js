import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../common/schemas/common.schema';
import { KycTokenRequestSchema, KycTokenResponseSchema, KycStatusResponseSchema } from './kyc.schema';
const c = initContract();
export const KycContracts = c.router({
    token: {
        method: 'POST',
        path: '/token',
        body: KycTokenRequestSchema,
        responses: {
            200: KycTokenResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
            502: ErrorResSchema,
        },
        summary: 'Generate Sumsub WebSDK access token',
        description: 'Generate a Sumsub WebSDK access token for the authenticated user to start KYC process.',
    },
    status: {
        method: 'GET',
        path: '/status',
        responses: {
            200: KycStatusResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Get KYC status',
        description: 'Get the current KYC status for the authenticated user.',
    },
}, {
    pathPrefix: '/kyc'
});
