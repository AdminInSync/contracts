import { initContract } from '@ts-rest/core';
import { AuthContracts } from './auth';
import { KycContracts } from './kyc';
import { UserInfoContracts } from './user-info';
import { WebhookContracts } from './webhooks';
import { DocsContracts } from './docs';
const c = initContract();
export const apiContract = c.router({
    Auth: AuthContracts,
    Kyc: KycContracts,
    UserInfo: UserInfoContracts,
    Webhooks: WebhookContracts,
    Docs: DocsContracts,
}, {
    strictStatusCodes: true,
    pathPrefix: '/api'
});
