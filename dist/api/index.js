import { initContract } from '@ts-rest/core';
import { AuthContracts } from './auth';
import { KycContracts } from './kyc';
import { UserInfoContracts } from './user-info';
import { WebhookContracts } from './webhooks';
import { NewsletterContracts } from './newsletter';
const c = initContract();
export const ApiContracts = c.router({
    Auth: AuthContracts,
    Kyc: KycContracts,
    UserInfo: UserInfoContracts,
    Webhooks: WebhookContracts,
    Newsletter: NewsletterContracts,
}, {
    strictStatusCodes: true,
    pathPrefix: '/api'
});
