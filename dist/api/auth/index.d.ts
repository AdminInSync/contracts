export declare const AuthContracts: {
    me: {
        summary: "Get current user endpoint";
        description: "Get current authenticated user information from Firebase.";
        method: "GET";
        path: "/auth/me";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
                data: import("zod").ZodObject<{
                    user: import("zod").ZodObject<{
                        firebase_uid: import("zod").ZodString;
                        email: import("zod").ZodString;
                        display_name: import("zod").ZodNullable<import("zod").ZodString>;
                        photo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        email_verified: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        phone_number: import("zod").ZodNullable<import("zod").ZodString>;
                        creation_time: import("zod").ZodNullable<import("zod").ZodString>;
                        last_sign_in_time: import("zod").ZodNullable<import("zod").ZodString>;
                        last_refresh_time: import("zod").ZodNullable<import("zod").ZodString>;
                        provider_data: import("zod").ZodArray<import("zod").ZodObject<{
                            providerId: import("zod").ZodString;
                            uid: import("zod").ZodString;
                            email: import("zod").ZodNullable<import("zod").ZodString>;
                            displayName: import("zod").ZodNullable<import("zod").ZodString>;
                            photoURL: import("zod").ZodNullable<import("zod").ZodString>;
                            phoneNumber: import("zod").ZodNullable<import("zod").ZodString>;
                        }, import("zod/v4/core").$strip>>;
                        provider_id: import("zod").ZodString;
                        custom_claims: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>;
                        tenant_id: import("zod").ZodNullable<import("zod").ZodString>;
                        multi_factor: import("zod").ZodObject<{
                            enrolled_factors: import("zod").ZodArray<import("zod").ZodObject<{
                                uid: import("zod").ZodString;
                                display_name: import("zod").ZodNullable<import("zod").ZodString>;
                                enrollment_time: import("zod").ZodString;
                                factor_id: import("zod").ZodString;
                            }, import("zod/v4/core").$strip>>;
                        }, import("zod/v4/core").$strip>;
                    }, import("zod/v4/core").$strip>;
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
