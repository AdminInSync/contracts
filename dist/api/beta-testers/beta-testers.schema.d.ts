import { z } from 'zod';
export declare const BetaTesterOperatingSystemSchema: z.ZodEnum<{
    android: "android";
    ios: "ios";
    both: "both";
}>;
export declare const BetaTesterInterestSchema: z.ZodEnum<{
    other: "other";
    expense_categories: "expense_categories";
    automatic_expense_tracking: "automatic_expense_tracking";
    budgets_and_alerts: "budgets_and_alerts";
    savings_goals: "savings_goals";
    debts_loans_and_credit_cards: "debts_loans_and_credit_cards";
    payment_reminders: "payment_reminders";
    financial_reports_and_charts: "financial_reports_and_charts";
    multiple_accounts_and_banks: "multiple_accounts_and_banks";
}>;
export declare const RegisterBetaTesterRequestSchema: z.ZodObject<{
    full_name: z.ZodString;
    bank_email: z.ZodString;
    operating_system: z.ZodEnum<{
        android: "android";
        ios: "ios";
        both: "both";
    }>;
    interests: z.ZodArray<z.ZodEnum<{
        other: "other";
        expense_categories: "expense_categories";
        automatic_expense_tracking: "automatic_expense_tracking";
        budgets_and_alerts: "budgets_and_alerts";
        savings_goals: "savings_goals";
        debts_loans_and_credit_cards: "debts_loans_and_credit_cards";
        payment_reminders: "payment_reminders";
        financial_reports_and_charts: "financial_reports_and_charts";
        multiple_accounts_and_banks: "multiple_accounts_and_banks";
    }>>;
    other_interest: z.ZodOptional<z.ZodString>;
    consent_accepted: z.ZodLiteral<true>;
}, z.core.$strict>;
export declare const RegisterBetaTesterResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
