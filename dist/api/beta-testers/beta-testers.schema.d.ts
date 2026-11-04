import { z } from 'zod';
export declare const BetaTesterOperatingSystemSchema: z.ZodEnum<["android", "ios", "both"]>;
export declare const BetaTesterInterestSchema: z.ZodEnum<["expense_categories", "automatic_expense_tracking", "budgets_and_alerts", "savings_goals", "debts_loans_and_credit_cards", "payment_reminders", "financial_reports_and_charts", "multiple_accounts_and_banks", "other"]>;
export declare const RegisterBetaTesterRequestSchema: z.ZodEffects<z.ZodObject<{
    full_name: z.ZodString;
    bank_email: z.ZodString;
    operating_system: z.ZodEnum<["android", "ios", "both"]>;
    interests: z.ZodArray<z.ZodEnum<["expense_categories", "automatic_expense_tracking", "budgets_and_alerts", "savings_goals", "debts_loans_and_credit_cards", "payment_reminders", "financial_reports_and_charts", "multiple_accounts_and_banks", "other"]>, "many">;
    other_interest: z.ZodOptional<z.ZodString>;
    consent_accepted: z.ZodLiteral<true>;
}, "strict", z.ZodTypeAny, {
    full_name: string;
    bank_email: string;
    operating_system: "android" | "ios" | "both";
    interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
    consent_accepted: true;
    other_interest?: string | undefined;
}, {
    full_name: string;
    bank_email: string;
    operating_system: "android" | "ios" | "both";
    interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
    consent_accepted: true;
    other_interest?: string | undefined;
}>, {
    full_name: string;
    bank_email: string;
    operating_system: "android" | "ios" | "both";
    interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
    consent_accepted: true;
    other_interest?: string | undefined;
}, {
    full_name: string;
    bank_email: string;
    operating_system: "android" | "ios" | "both";
    interests: ("other" | "expense_categories" | "automatic_expense_tracking" | "budgets_and_alerts" | "savings_goals" | "debts_loans_and_credit_cards" | "payment_reminders" | "financial_reports_and_charts" | "multiple_accounts_and_banks")[];
    consent_accepted: true;
    other_interest?: string | undefined;
}>;
export declare const RegisterBetaTesterResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
