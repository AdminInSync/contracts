import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { RegisterBetaTesterRequestSchema, RegisterBetaTesterResponseSchema, } from './beta-testers.schema';
const c = initContract();
export const BetaTesterContracts = c.router({
    register: {
        method: 'POST',
        path: '/register',
        body: RegisterBetaTesterRequestSchema,
        responses: {
            200: RegisterBetaTesterResponseSchema,
            400: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Register for the InSync beta test group',
        description: 'Stores a beta tester registration and updates it when the bank email already exists.',
    },
}, {
    tags: ['Beta Testers'],
    pathPrefix: '/beta-testers',
    strictStatusCodes: true,
});
