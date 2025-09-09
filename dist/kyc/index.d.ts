export declare const KycContracts: {
    token: {
        summary: "Generate Sumsub WebSDK access token";
        description: "Generate a Sumsub WebSDK access token for the authenticated user to start KYC process.";
        method: "POST";
        body: import("zod").ZodObject<{
            ttlInSecs: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>;
        }, "strip", import("zod").ZodTypeAny, {
            ttlInSecs: number;
        }, {
            ttlInSecs?: number | undefined;
        }>;
        path: "/kyc/token";
        responses: {
            200: import("zod").ZodObject<{
                success: import("zod").ZodBoolean;
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    token: import("zod").ZodString;
                    userId: import("zod").ZodString;
                    levelName: import("zod").ZodString;
                    expiresIn: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    token: string;
                    userId: string;
                    levelName: string;
                    expiresIn: number;
                }, {
                    token: string;
                    userId: string;
                    levelName: string;
                    expiresIn: number;
                }>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    token: string;
                    userId: string;
                    levelName: string;
                    expiresIn: number;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    token: string;
                    userId: string;
                    levelName: string;
                    expiresIn: number;
                };
                success: boolean;
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
            502: import("zod").ZodObject<{
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
    };
    status: {
        summary: "Get KYC status";
        description: "Get the current KYC status for the authenticated user.";
        method: "GET";
        path: "/kyc/status";
        responses: {
            200: import("zod").ZodObject<{
                success: import("zod").ZodBoolean;
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    uid: import("zod").ZodString;
                    status: import("zod").ZodEnum<["none", "pending", "on_hold", "approved", "rejected"]>;
                    reviewedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    applicantId: import("zod").ZodNullable<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                    uid: string;
                    reviewedAt: string | null;
                    applicantId: string | null;
                }, {
                    status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                    uid: string;
                    reviewedAt: string | null;
                    applicantId: string | null;
                }>;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
                data: {
                    status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                    uid: string;
                    reviewedAt: string | null;
                    applicantId: string | null;
                };
                success: boolean;
            }, {
                message: string;
                data: {
                    status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                    uid: string;
                    reviewedAt: string | null;
                    applicantId: string | null;
                };
                success: boolean;
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
    };
};
