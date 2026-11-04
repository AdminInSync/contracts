export declare const BetaTesterContracts: {
    register: {
        summary: "Register for the InSync beta test group";
        description: "Stores a beta tester registration and updates it when the bank email already exists.";
        method: "POST";
        body: import("zod").ZodEffects<import("zod").ZodObject<{
            full_name: import("zod").ZodString;
            bank_email: import("zod").ZodString;
            operating_system: import("zod").ZodEnum<["android", "ios", "both"]>;
            interests: import("zod").ZodArray<import("zod").ZodEnum<["expense_categories", "automatic_expense_tracking", "budgets_and_alerts", "savings_goals", "debts_loans_and_credit_cards", "payment_reminders", "financial_reports_and_charts", "multiple_accounts_and_banks", "other"]>, "many">;
            other_interest: import("zod").ZodOptional<import("zod").ZodString>;
            consent_accepted: import("zod").ZodLiteral<true>;
        }, "strict", import("zod").ZodTypeAny, {
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
        path: "/beta-testers/register";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
        strictStatusCodes: true;
    };
};
