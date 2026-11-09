export declare const AdminBetaTestersContracts: {
    list: {
        summary: "List beta testers";
        description: "Returns registered beta testers for the admin panel.";
        method: "GET";
        path: "/admin/beta-testers/";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    full_name: import("zod").ZodString;
                    bank_email: import("zod").ZodString;
                    operating_system: import("zod").ZodEnum<["android", "ios", "both"]>;
                    interests: import("zod").ZodArray<import("zod").ZodEnum<["expense_categories", "automatic_expense_tracking", "budgets_and_alerts", "savings_goals", "debts_loans_and_credit_cards", "payment_reminders", "financial_reports_and_charts", "multiple_accounts_and_banks", "other"]>, "many">;
                    other_interest: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                    download_email_sent_at: import("zod").ZodNullable<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
            401: import("zod").ZodObject<{
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
    sendDownloadEmail: {
        summary: "Send download emails";
        description: "Sends the InSync download email to all beta testers or to a selected set of UUIDs.";
        method: "POST";
        body: import("zod").ZodEffects<import("zod").ZodObject<{
            scope: import("zod").ZodEnum<["all", "selected"]>;
            uuids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
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
                    }, "strip", import("zod").ZodTypeAny, {
                        message: string;
                        id: string;
                    }, {
                        message: string;
                        id: string;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
            401: import("zod").ZodObject<{
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
            503: import("zod").ZodObject<{
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
