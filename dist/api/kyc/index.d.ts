export declare const KycContracts: {
    token: {
        summary: "Generate Sumsub WebSDK access token";
        description: "Generate a Sumsub WebSDK access token for the authenticated user to start KYC process.";
        method: "POST";
        body: import("zod").ZodObject<{
            ttlInSecs: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>;
        }, import("zod/v4/core").$strip>;
        path: "/kyc/token";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    token: import("zod").ZodString;
                    userId: import("zod").ZodString;
                    levelName: import("zod").ZodString;
                    expiresIn: import("zod").ZodNumber;
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
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
            502: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    status: {
        summary: "Get KYC status";
        description: "Get the current KYC status for the authenticated user.";
        method: "GET";
        path: "/kyc/status";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    uid: import("zod").ZodString;
                    status: import("zod").ZodEnum<{
                        none: "none";
                        pending: "pending";
                        on_hold: "on_hold";
                        approved: "approved";
                        rejected: "rejected";
                    }>;
                    reviewedAt: import("zod").ZodNullable<import("zod").ZodString>;
                    applicantId: import("zod").ZodNullable<import("zod").ZodString>;
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
            500: import("zod").ZodObject<{
                message: import("zod").ZodString;
                error: import("zod").ZodOptional<import("zod").ZodString>;
                statusCode: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
};
