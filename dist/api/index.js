import { initContract } from '@ts-rest/core';
import { AuthContracts } from './auth';
import { KycContracts } from './kyc';
import { UserInfoContracts } from './user-info';
import { DevicesContracts } from './devices';
import { WebhookContracts } from './webhooks';
import { NewsletterContracts } from './newsletter';
import { SavingGoalsContracts } from './saving-goals';
import { InstitutionsContracts } from './institutions';
import { ProductsContracts } from './products';
import { PaymentRemindersContracts } from './payment-reminders';
import { BankConnectionContracts } from './bank-connections';
const c = initContract();
export const ApiContracts = c.router({
    Auth: AuthContracts,
    Kyc: KycContracts,
    UserInfo: UserInfoContracts,
    Devices: DevicesContracts,
    Webhooks: WebhookContracts,
    Newsletter: NewsletterContracts,
    SavingGoals: SavingGoalsContracts,
    Institutions: InstitutionsContracts,
    Products: ProductsContracts,
    PaymentReminders: PaymentRemindersContracts,
    BankConnections: BankConnectionContracts,
}, {
    strictStatusCodes: true,
    pathPrefix: '/api'
});
