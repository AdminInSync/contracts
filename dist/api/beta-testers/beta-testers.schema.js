import { z } from 'zod';
export const BetaTesterOperatingSystemSchema = z.enum(['android', 'ios', 'both']);
export const BetaTesterInterestSchema = z.enum([
    'expense_categories',
    'automatic_expense_tracking',
    'budgets_and_alerts',
    'savings_goals',
    'debts_loans_and_credit_cards',
    'payment_reminders',
    'financial_reports_and_charts',
    'multiple_accounts_and_banks',
    'other',
]);
export const RegisterBetaTesterRequestSchema = z.object({
    full_name: z.string().trim().min(2).max(200),
    bank_email: z.string().trim().email().max(255),
    operating_system: BetaTesterOperatingSystemSchema,
    interests: z.array(BetaTesterInterestSchema).min(1).max(9),
    other_interest: z.string().trim().max(500).optional(),
    consent_accepted: z.literal(true),
}).strict().superRefine((data, context) => {
    if (new Set(data.interests).size !== data.interests.length) {
        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['interests'],
            message: 'Interest options must be unique',
        });
    }
    const hasOtherInterest = data.interests.includes('other');
    const hasOtherInterestText = Boolean(data.other_interest?.trim());
    if (hasOtherInterest && !hasOtherInterestText) {
        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['other_interest'],
            message: 'Describe the other interest',
        });
    }
    if (!hasOtherInterest && hasOtherInterestText) {
        context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['other_interest'],
            message: 'Select other to provide an additional interest',
        });
    }
});
export const RegisterBetaTesterResponseSchema = z.object({
    message: z.string(),
});
