import { z } from 'zod';
export declare const GetBetaTestersQuerySchema: z.ZodObject<{
    has_app_account: z.ZodPreprocess<z.ZodOptional<z.ZodBoolean>, unknown>;
}, z.core.$strip>;
export declare const AdminBetaTesterEntrySchema: z.ZodObject<{
    id: z.ZodString;
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
    other_interest: z.ZodNullable<z.ZodString>;
    has_app_account: z.ZodBoolean;
    created_at: z.ZodString;
    download_email_sent_at: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const BetaTesterListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
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
        other_interest: z.ZodNullable<z.ZodString>;
        has_app_account: z.ZodBoolean;
        created_at: z.ZodString;
        download_email_sent_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SendDownloadEmailBodySchema: z.ZodObject<{
    scope: z.ZodEnum<{
        all: "all";
        selected: "selected";
    }>;
    uuids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const SendDownloadEmailFailureSchema: z.ZodObject<{
    id: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export declare const SendDownloadEmailResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        requested: z.ZodNumber;
        sent: z.ZodNumber;
        failed: z.ZodNumber;
        failures: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            message: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AdminBetaTesterEntry = z.infer<typeof AdminBetaTesterEntrySchema>;
export type SendDownloadEmailBody = z.infer<typeof SendDownloadEmailBodySchema>;
