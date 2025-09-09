export declare const apiContract: {
    Auth: {
        me: {
            summary: "Get current user endpoint";
            description: "Get current authenticated user information from Firebase.";
            method: "GET";
            path: "/auth/me";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodBoolean;
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
                            }, "strip", import("zod").ZodTypeAny, {
                                providerId: string;
                                uid: string;
                                email: string | null;
                                displayName: string | null;
                                photoURL: string | null;
                                phoneNumber: string | null;
                            }, {
                                providerId: string;
                                uid: string;
                                email: string | null;
                                displayName: string | null;
                                photoURL: string | null;
                                phoneNumber: string | null;
                            }>, "many">;
                            provider_id: import("zod").ZodString;
                            custom_claims: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>;
                            tenant_id: import("zod").ZodNullable<import("zod").ZodString>;
                            multi_factor: import("zod").ZodObject<{
                                enrolled_factors: import("zod").ZodArray<import("zod").ZodObject<{
                                    uid: import("zod").ZodString;
                                    display_name: import("zod").ZodNullable<import("zod").ZodString>;
                                    enrollment_time: import("zod").ZodString;
                                    factor_id: import("zod").ZodString;
                                }, "strip", import("zod").ZodTypeAny, {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }, {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }>, "many">;
                            }, "strip", import("zod").ZodTypeAny, {
                                enrolled_factors: {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }[];
                            }, {
                                enrolled_factors: {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }[];
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            email: string;
                            display_name: string | null;
                            firebase_uid: string;
                            photo_url: string | null;
                            email_verified: boolean;
                            is_active: boolean;
                            phone_number: string | null;
                            creation_time: string | null;
                            last_sign_in_time: string | null;
                            last_refresh_time: string | null;
                            provider_data: {
                                providerId: string;
                                uid: string;
                                email: string | null;
                                displayName: string | null;
                                photoURL: string | null;
                                phoneNumber: string | null;
                            }[];
                            provider_id: string;
                            custom_claims: Record<string, any>;
                            tenant_id: string | null;
                            multi_factor: {
                                enrolled_factors: {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }[];
                            };
                        }, {
                            email: string;
                            display_name: string | null;
                            firebase_uid: string;
                            photo_url: string | null;
                            email_verified: boolean;
                            is_active: boolean;
                            phone_number: string | null;
                            creation_time: string | null;
                            last_sign_in_time: string | null;
                            last_refresh_time: string | null;
                            provider_data: {
                                providerId: string;
                                uid: string;
                                email: string | null;
                                displayName: string | null;
                                photoURL: string | null;
                                phoneNumber: string | null;
                            }[];
                            provider_id: string;
                            custom_claims: Record<string, any>;
                            tenant_id: string | null;
                            multi_factor: {
                                enrolled_factors: {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }[];
                            };
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        user: {
                            email: string;
                            display_name: string | null;
                            firebase_uid: string;
                            photo_url: string | null;
                            email_verified: boolean;
                            is_active: boolean;
                            phone_number: string | null;
                            creation_time: string | null;
                            last_sign_in_time: string | null;
                            last_refresh_time: string | null;
                            provider_data: {
                                providerId: string;
                                uid: string;
                                email: string | null;
                                displayName: string | null;
                                photoURL: string | null;
                                phoneNumber: string | null;
                            }[];
                            provider_id: string;
                            custom_claims: Record<string, any>;
                            tenant_id: string | null;
                            multi_factor: {
                                enrolled_factors: {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }[];
                            };
                        };
                    }, {
                        user: {
                            email: string;
                            display_name: string | null;
                            firebase_uid: string;
                            photo_url: string | null;
                            email_verified: boolean;
                            is_active: boolean;
                            phone_number: string | null;
                            creation_time: string | null;
                            last_sign_in_time: string | null;
                            last_refresh_time: string | null;
                            provider_data: {
                                providerId: string;
                                uid: string;
                                email: string | null;
                                displayName: string | null;
                                photoURL: string | null;
                                phoneNumber: string | null;
                            }[];
                            provider_id: string;
                            custom_claims: Record<string, any>;
                            tenant_id: string | null;
                            multi_factor: {
                                enrolled_factors: {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }[];
                            };
                        };
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        user: {
                            email: string;
                            display_name: string | null;
                            firebase_uid: string;
                            photo_url: string | null;
                            email_verified: boolean;
                            is_active: boolean;
                            phone_number: string | null;
                            creation_time: string | null;
                            last_sign_in_time: string | null;
                            last_refresh_time: string | null;
                            provider_data: {
                                providerId: string;
                                uid: string;
                                email: string | null;
                                displayName: string | null;
                                photoURL: string | null;
                                phoneNumber: string | null;
                            }[];
                            provider_id: string;
                            custom_claims: Record<string, any>;
                            tenant_id: string | null;
                            multi_factor: {
                                enrolled_factors: {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }[];
                            };
                        };
                    };
                    success: boolean;
                }, {
                    message: string;
                    data: {
                        user: {
                            email: string;
                            display_name: string | null;
                            firebase_uid: string;
                            photo_url: string | null;
                            email_verified: boolean;
                            is_active: boolean;
                            phone_number: string | null;
                            creation_time: string | null;
                            last_sign_in_time: string | null;
                            last_refresh_time: string | null;
                            provider_data: {
                                providerId: string;
                                uid: string;
                                email: string | null;
                                displayName: string | null;
                                photoURL: string | null;
                                phoneNumber: string | null;
                            }[];
                            provider_id: string;
                            custom_claims: Record<string, any>;
                            tenant_id: string | null;
                            multi_factor: {
                                enrolled_factors: {
                                    uid: string;
                                    display_name: string | null;
                                    enrollment_time: string;
                                    factor_id: string;
                                }[];
                            };
                        };
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
            strictStatusCodes: true;
        };
    };
    Kyc: {
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
            strictStatusCodes: true;
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
            strictStatusCodes: true;
        };
    };
    Webhooks: {
        sumsub: {
            summary: "Sumsub webhook endpoint";
            description: "Webhook endpoint for receiving KYC status updates from Sumsub.";
            method: "POST";
            body: import("zod").ZodAny;
            path: "/webhooks/sumsub";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodBoolean;
                }, "strip", import("zod").ZodTypeAny, {
                    success: boolean;
                }, {
                    success: boolean;
                }>;
                400: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    error: string;
                }, {
                    error: string;
                }>;
                401: import("zod").ZodObject<{
                    error: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    error: string;
                }, {
                    error: string;
                }>;
            };
            strictStatusCodes: true;
        };
    };
};
