import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { RegistrationErrorSchema, RegistrationResponseSchema, RegistrationStepRequestSchema, StartRegistrationRequestSchema, } from './registration.schema';
const c = initContract();
export const RegistrationContracts = c.router({
    start: {
        method: 'POST',
        path: '',
        body: StartRegistrationRequestSchema,
        responses: {
            200: RegistrationResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Start or resume the step-by-step registration',
        description: 'Upserts the registration of the token user. The email is taken from the token.',
    },
    submitStep: {
        method: 'PATCH',
        path: '/step',
        body: RegistrationStepRequestSchema,
        responses: {
            200: RegistrationResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: RegistrationErrorSchema,
            409: RegistrationErrorSchema,
            500: ErrorResSchema,
        },
        summary: 'Complete one registration step',
    },
    get: {
        method: 'GET',
        path: '',
        responses: {
            200: RegistrationResponseSchema,
            401: ErrorResSchema,
            404: RegistrationErrorSchema,
            500: ErrorResSchema,
        },
        summary: 'Get the registration state of the token user',
    },
}, {
    tags: ['Registration'],
    pathPrefix: '/registration',
    strictStatusCodes: true,
});
