export declare const BetaTesterContracts: {
    register: {
        summary: "Register for the InSync beta test group";
        description: "Stores a beta tester registration and updates it when the bank email already exists.";
        method: "POST";
        body: import("zod").ZodObject<{
            full_name: import("zod").ZodString;
            bank_email: import("zod").ZodString;
            operating_system: import("zod").ZodEnum<{
                android: "android";
                ios: "ios";
                both: "both";
            }>;
            interests: import("zod").ZodArray<import("zod").ZodEnum<{
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
            other_interest: import("zod").ZodOptional<import("zod").ZodString>;
            consent_accepted: import("zod").ZodLiteral<true>;
        }, import("zod/v4/core").$strict>;
        path: "/beta-testers/register";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
};
