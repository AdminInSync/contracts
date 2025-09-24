export declare const apiContract: {
    Api: {
        Auth: {
            me: {
                strictStatusCodes: true;
                summary: "Get current user endpoint";
                description: "Get current authenticated user information from Firebase.";
                method: "GET";
                path: "/api/auth/me";
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
        Kyc: {
            token: {
                strictStatusCodes: true;
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
                path: "/api/kyc/token";
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
                strictStatusCodes: true;
                summary: "Get KYC status";
                description: "Get the current KYC status for the authenticated user.";
                method: "GET";
                path: "/api/kyc/status";
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
        UserInfo: {
            createUserInfo: {
                strictStatusCodes: true;
                summary: "Create new user info document";
                description: "Create a new user info document for the authenticated user";
                method: "POST";
                body: import("zod").ZodObject<{
                    info_type: import("zod").ZodNativeEnum<typeof import("./enums").DocumentType>;
                    document_number: import("zod").ZodOptional<import("zod").ZodString>;
                    document_url: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    info_type: import("./enums").DocumentType;
                    document_number?: string | undefined;
                    document_url?: string | undefined;
                }, {
                    info_type: import("./enums").DocumentType;
                    document_number?: string | undefined;
                    document_url?: string | undefined;
                }>;
                path: "/api/user-info/";
                responses: {
                    201: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        info_type: import("zod").ZodNativeEnum<typeof import("./enums").DocumentType>;
                        status: import("zod").ZodNativeEnum<typeof import("./enums").DocumentStatus>;
                        document_number: import("zod").ZodNullable<import("zod").ZodString>;
                        document_url: import("zod").ZodNullable<import("zod").ZodString>;
                        createdAt: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: import("./enums").DocumentStatus;
                        id: number;
                        info_type: import("./enums").DocumentType;
                        document_number: string | null;
                        document_url: string | null;
                        uuid: string;
                        user_uid: string;
                        createdAt: string;
                    }, {
                        status: import("./enums").DocumentStatus;
                        id: number;
                        info_type: import("./enums").DocumentType;
                        document_number: string | null;
                        document_url: string | null;
                        uuid: string;
                        user_uid: string;
                        createdAt: string;
                    }>;
                    400: import("zod").ZodObject<{
                        error: import("zod").ZodString;
                        message: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        message: string;
                        error: string;
                    }, {
                        message: string;
                        error: string;
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
                    409: import("zod").ZodObject<{
                        error: import("zod").ZodString;
                        message: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        message: string;
                        error: string;
                    }, {
                        message: string;
                        error: string;
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
            getUserInfo: {
                strictStatusCodes: true;
                query: import("zod").ZodObject<{
                    info_type: import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("./enums").DocumentType>>;
                    status: import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("./enums").DocumentStatus>>;
                }, "strip", import("zod").ZodTypeAny, {
                    status?: import("./enums").DocumentStatus | undefined;
                    info_type?: import("./enums").DocumentType | undefined;
                }, {
                    status?: import("./enums").DocumentStatus | undefined;
                    info_type?: import("./enums").DocumentType | undefined;
                }>;
                summary: "Get user info documents";
                description: "Get all user info documents for the authenticated user with optional filtering by document type and status";
                method: "GET";
                path: "/api/user-info/";
                responses: {
                    200: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        info_type: import("zod").ZodNativeEnum<typeof import("./enums").DocumentType>;
                        status: import("zod").ZodNativeEnum<typeof import("./enums").DocumentStatus>;
                        document_number: import("zod").ZodNullable<import("zod").ZodString>;
                        document_url: import("zod").ZodNullable<import("zod").ZodString>;
                        createdAt: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: import("./enums").DocumentStatus;
                        id: number;
                        info_type: import("./enums").DocumentType;
                        document_number: string | null;
                        document_url: string | null;
                        uuid: string;
                        user_uid: string;
                        createdAt: string;
                    }, {
                        status: import("./enums").DocumentStatus;
                        id: number;
                        info_type: import("./enums").DocumentType;
                        document_number: string | null;
                        document_url: string | null;
                        uuid: string;
                        user_uid: string;
                        createdAt: string;
                    }>, "many">;
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
        Webhooks: {
            sumsub: {
                strictStatusCodes: true;
                summary: "Sumsub webhook endpoint";
                description: "Webhook endpoint for receiving KYC status updates from Sumsub.";
                method: "POST";
                body: import("zod").ZodAny;
                path: "/api/webhooks/sumsub";
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
            };
        };
        Newsletter: {
            subscribe: {
                strictStatusCodes: true;
                summary: "Subscribe to newsletter";
                description: "Subscribe a user to the newsletter with their first name, last name, and email.";
                method: "POST";
                body: import("zod").ZodObject<{
                    first_name: import("zod").ZodString;
                    last_name: import("zod").ZodString;
                    email: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    email: string;
                    first_name: string;
                    last_name: string;
                }, {
                    email: string;
                    first_name: string;
                    last_name: string;
                }>;
                path: "/api/newsletter/subscribe";
                responses: {
                    201: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        first_name: import("zod").ZodString;
                        last_name: import("zod").ZodString;
                        email: import("zod").ZodString;
                        createdAt: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        email: string;
                        uuid: string;
                        createdAt: string;
                        first_name: string;
                        last_name: string;
                    }, {
                        id: number;
                        email: string;
                        uuid: string;
                        createdAt: string;
                        first_name: string;
                        last_name: string;
                    }>;
                    400: import("zod").ZodObject<{
                        error: import("zod").ZodString;
                        message: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        message: string;
                        error: string;
                    }, {
                        message: string;
                        error: string;
                    }>;
                    409: import("zod").ZodObject<{
                        error: import("zod").ZodString;
                        message: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        message: string;
                        error: string;
                    }, {
                        message: string;
                        error: string;
                    }>;
                    500: import("zod").ZodObject<{
                        error: import("zod").ZodString;
                        message: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        message: string;
                        error: string;
                    }, {
                        message: string;
                        error: string;
                    }>;
                };
            };
        };
    };
    Docs: {
        health: {
            strictStatusCodes: true;
            summary: "Health check endpoint";
            description: "Returns the current status of the API server";
            method: "GET";
            path: "/health";
            responses: {
                200: import("zod").ZodObject<{
                    contentType: import("zod").ZodLiteral<"application/json">;
                    body: import("zod").ZodObject<{
                        status: import("zod").ZodString;
                        timestamp: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: string;
                        timestamp: string;
                    }, {
                        status: string;
                        timestamp: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    contentType: "application/json";
                    body: {
                        status: string;
                        timestamp: string;
                    };
                }, {
                    contentType: "application/json";
                    body: {
                        status: string;
                        timestamp: string;
                    };
                }>;
            };
        };
        openApiJson: {
            strictStatusCodes: true;
            summary: "Get OpenAPI schema as JSON";
            description: "Returns the complete OpenAPI 3.0 schema in JSON format";
            method: "GET";
            path: "/api-docs.json";
            responses: {
                200: import("zod").ZodObject<{
                    contentType: import("zod").ZodLiteral<"application/json">;
                    body: import("zod").ZodAny;
                }, "strip", import("zod").ZodTypeAny, {
                    contentType: "application/json";
                    body?: any;
                }, {
                    contentType: "application/json";
                    body?: any;
                }>;
            };
        };
        openApiYaml: {
            strictStatusCodes: true;
            summary: "Get OpenAPI schema as YAML";
            description: "Returns the complete OpenAPI 3.0 schema in YAML format";
            method: "GET";
            path: "/api-docs.yaml";
            responses: {
                200: import("zod").ZodObject<{
                    contentType: import("zod").ZodLiteral<"text/yaml">;
                    body: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    contentType: "text/yaml";
                    body: string;
                }, {
                    contentType: "text/yaml";
                    body: string;
                }>;
            };
        };
        qDocs: {
            strictStatusCodes: true;
            summary: "Get OpenAPI schema as JSON (alternative endpoint)";
            description: "Returns the complete OpenAPI 3.0 schema in JSON format via /q/docs endpoint";
            method: "GET";
            path: "/q/docs";
            responses: {
                200: import("zod").ZodObject<{
                    contentType: import("zod").ZodLiteral<"application/json">;
                    body: import("zod").ZodAny;
                }, "strip", import("zod").ZodTypeAny, {
                    contentType: "application/json";
                    body?: any;
                }, {
                    contentType: "application/json";
                    body?: any;
                }>;
            };
        };
    };
};
