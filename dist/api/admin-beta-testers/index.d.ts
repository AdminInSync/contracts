export declare const AdminBetaTestersContracts: {
    list: {
        query: import("zod").ZodObject<{
            has_app_account: import("zod").ZodPreprocess<import("zod").ZodOptional<import("zod").ZodBoolean>, unknown>;
        }, import("zod/v4/core").$strip>;
        summary: "List beta testers";
        description: "Returns beta waitlist entries for the admin panel, with whether each email already has an app account.";
        method: "GET";
        path: "/admin/beta-testers/";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
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
                    other_interest: import("zod").ZodNullable<import("zod").ZodString>;
                    has_app_account: import("zod").ZodBoolean;
                    created_at: import("zod").ZodString;
                    download_email_sent_at: import("zod").ZodNullable<import("zod").ZodString>;
                }, import("zod/v4/core").$strip>>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
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
    sendDownloadEmail: {
        summary: "Send download emails";
        description: "Sends the InSync download email to all beta testers or to a selected set of UUIDs.";
        method: "POST";
        body: import("zod").ZodObject<{
            scope: import("zod").ZodEnum<{
                all: "all";
                selected: "selected";
            }>;
            uuids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        }, import("zod/v4/core").$strip>;
        path: "/admin/beta-testers/send-download-email";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    requested: import("zod").ZodNumber;
                    sent: import("zod").ZodNumber;
                    failed: import("zod").ZodNumber;
                    failures: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        message: import("zod").ZodString;
                    }, import("zod/v4/core").$strip>>;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
            400: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            401: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            503: import("zod").ZodObject<{
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
