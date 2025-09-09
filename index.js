import { initContract } from '@ts-rest/core';
import { AuthContracts } from './auth';
import { KycContracts } from './kyc';
import { WebhookContracts } from './webhooks';
const c = initContract();
export const apiContract = c.router({
    Auth: AuthContracts,
    Kyc: KycContracts,
    Webhooks: WebhookContracts,
}, {
    strictStatusCodes: true
});
