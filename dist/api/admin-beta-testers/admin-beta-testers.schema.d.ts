import { z } from 'zod';
export declare const AdminBetaTesterEntrySchema: z.ZodObject<{
    id: z.ZodString;
    full_name: z.ZodString;
    bank_email: z.ZodString;
    operating_system: z.ZodEnum<["android", "ios", "both"]>;
    interests: z.ZodArray<z.ZodEnum<["expense_categories", "automatic_expense_tracking", "budgets_and_alerts", "savings_goals", "debts_loans_and_credit_cards", "payment_reminders", "financial_reports_and_charts", "multiple_accounts_and_banks", "other"]>, "many">;
    other_interest: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    download_email_sent_at: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    created_at: string;
    full_name: string;
    bank_email: string;
    operating_system: "android" | "ios" | "both";
    interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
    other_interest: string | null;
    download_email_sent_at: string | null;
}, {
    id: string;
    created_at: string;
    full_name: string;
    bank_email: string;
    operating_system: "android" | "ios" | "both";
    interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
    other_interest: string | null;
    download_email_sent_at: string | null;
}>;
export declare const BetaTesterListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        full_name: z.ZodString;
        bank_email: z.ZodString;
        operating_system: z.ZodEnum<["android", "ios", "both"]>;
        interests: z.ZodArray<z.ZodEnum<["expense_categories", "automatic_expense_tracking", "budgets_and_alerts", "savings_goals", "debts_loans_and_credit_cards", "payment_reminders", "financial_reports_and_charts", "multiple_accounts_and_banks", "other"]>, "many">;
        other_interest: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        download_email_sent_at: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        created_at: string;
        full_name: string;
        bank_email: string;
        operating_system: "android" | "ios" | "both";
        interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
        other_interest: string | null;
        download_email_sent_at: string | null;
    }, {
        id: string;
        created_at: string;
        full_name: string;
        bank_email: string;
        operating_system: "android" | "ios" | "both";
        interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
        other_interest: string | null;
        download_email_sent_at: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        id: string;
        created_at: string;
        full_name: string;
        bank_email: string;
        operating_system: "android" | "ios" | "both";
        interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
        other_interest: string | null;
        download_email_sent_at: string | null;
    }[];
}, {
    message: string;
    data: {
        id: string;
        created_at: string;
        full_name: string;
        bank_email: string;
        operating_system: "android" | "ios" | "both";
        interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
        other_interest: string | null;
        download_email_sent_at: string | null;
    }[];
}>;
export declare const SendDownloadEmailBodySchema: z.ZodEffects<z.ZodObject<{
    scope: z.ZodEnum<["all", "selected"]>;
    uuids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    scope: "all" | "selected";
    uuids?: string[] | undefined;
}, {
    scope: "all" | "selected";
    uuids?: string[] | undefined;
}>, {
    scope: "all" | "selected";
    uuids?: string[] | undefined;
}, {
    scope: "all" | "selected";
    uuids?: string[] | undefined;
}>;
export declare const SendDownloadEmailFailureSchema: z.ZodObject<{
    id: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    id: string;
}, {
    message: string;
    id: string;
}>;
export declare const SendDownloadEmailResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        requested: z.ZodNumber;
        sent: z.ZodNumber;
        failed: z.ZodNumber;
        failures: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            id: string;
        }, {
            message: string;
            id: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        sent: number;
        failed: number;
        requested: number;
        failures: {
            message: string;
            id: string;
        }[];
    }, {
        sent: number;
        failed: number;
        requested: number;
        failures: {
            message: string;
            id: string;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        sent: number;
        failed: number;
        requested: number;
        failures: {
            message: string;
            id: string;
        }[];
    };
}, {
    message: string;
    data: {
        sent: number;
        failed: number;
        requested: number;
        failures: {
            message: string;
            id: string;
        }[];
    };
}>;
export type AdminBetaTesterEntry = z.infer<typeof AdminBetaTesterEntrySchema>;
export type SendDownloadEmailBody = z.infer<typeof SendDownloadEmailBodySchema>;
