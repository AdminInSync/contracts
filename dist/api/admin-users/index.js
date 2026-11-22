import { initContract } from '@ts-rest/core';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { AdminUserListResponseSchema, InviteAdminBodySchema, InviteAdminResponseSchema, } from './admin-users.schema';
const c = initContract();
export const AdminUsersContracts = c.router({
    list: {
        method: 'GET',
        path: '/',
        responses: {
            200: AdminUserListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'List admin users',
        description: 'Returns administrators who can access the control panel.',
    },
    invite: {
        method: 'POST',
        path: '/invite',
        body: InviteAdminBodySchema,
        responses: {
            201: InviteAdminResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            409: ErrorResSchema,
            503: ErrorResSchema,
            500: ErrorResSchema,
        },
        summary: 'Invite an admin',
        description: 'Creates an administrator and emails a single-use activation link to choose a password.',
    },
}, {
    strictStatusCodes: true,
    pathPrefix: '/admin/users',
    tags: ['Admin Users'],
});
