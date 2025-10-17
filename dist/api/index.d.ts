export declare const ApiContracts: {
    Auth: {
        me: {
            strictStatusCodes: true;
            summary: "Get current user endpoint";
            description: "Get current authenticated user information from Firebase.";
            method: "GET";
            path: "/api/auth/me";
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
                }, {
                    message: string;
                    data: {
                        token: string;
                        userId: string;
                        levelName: string;
                        expiresIn: number;
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
                }, {
                    message: string;
                    data: {
                        status: "none" | "pending" | "on_hold" | "approved" | "rejected";
                        uid: string;
                        reviewedAt: string | null;
                        applicantId: string | null;
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
                info_type: import("zod").ZodNativeEnum<typeof import("../enums").DocumentType>;
                document_number: import("zod").ZodOptional<import("zod").ZodString>;
                document_url: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                info_type: import("../enums").DocumentType;
                document_number?: string | undefined;
                document_url?: string | undefined;
            }, {
                info_type: import("../enums").DocumentType;
                document_number?: string | undefined;
                document_url?: string | undefined;
            }>;
            path: "/api/user-info/";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    info_type: import("zod").ZodNativeEnum<typeof import("../enums").DocumentType>;
                    status: import("zod").ZodNativeEnum<typeof import("../enums").DocumentStatus>;
                    document_number: import("zod").ZodNullable<import("zod").ZodString>;
                    document_url: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    status: import("../enums").DocumentStatus;
                    id: number;
                    info_type: import("../enums").DocumentType;
                    document_number: string | null;
                    document_url: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                }, {
                    status: import("../enums").DocumentStatus;
                    id: number;
                    info_type: import("../enums").DocumentType;
                    document_number: string | null;
                    document_url: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
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
                info_type: import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("../enums").DocumentType>>;
                status: import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("../enums").DocumentStatus>>;
            }, "strip", import("zod").ZodTypeAny, {
                status?: import("../enums").DocumentStatus | undefined;
                info_type?: import("../enums").DocumentType | undefined;
            }, {
                status?: import("../enums").DocumentStatus | undefined;
                info_type?: import("../enums").DocumentType | undefined;
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
                    info_type: import("zod").ZodNativeEnum<typeof import("../enums").DocumentType>;
                    status: import("zod").ZodNativeEnum<typeof import("../enums").DocumentStatus>;
                    document_number: import("zod").ZodNullable<import("zod").ZodString>;
                    document_url: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    status: import("../enums").DocumentStatus;
                    id: number;
                    info_type: import("../enums").DocumentType;
                    document_number: string | null;
                    document_url: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                }, {
                    status: import("../enums").DocumentStatus;
                    id: number;
                    info_type: import("../enums").DocumentType;
                    document_number: string | null;
                    document_url: string | null;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
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
    Devices: {
        createDevice: {
            strictStatusCodes: true;
            summary: "Create new device";
            description: "Create a new device for the authenticated user";
            method: "POST";
            body: import("zod").ZodObject<{
                user_uid: import("zod").ZodString;
                device_unique_id: import("zod").ZodString;
                notes: import("zod").ZodString;
                notification_token: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                user_uid: string;
                device_unique_id: string;
                notes: string;
                notification_token?: string | undefined;
            }, {
                user_uid: string;
                device_unique_id: string;
                notes: string;
                notification_token?: string | undefined;
            }>;
            path: "/api/devices/";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    notes: import("zod").ZodString;
                    notification_token: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    notes: string;
                    notification_token: string | null;
                    updated_at: string;
                }, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    notes: string;
                    notification_token: string | null;
                    updated_at: string;
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
        getDevices: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                device_unique_id: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                device_unique_id?: string | undefined;
            }, {
                device_unique_id?: string | undefined;
            }>;
            summary: "Get user devices";
            description: "Get all devices for the authenticated user with optional filtering by device ID";
            method: "GET";
            path: "/api/devices/";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    notes: import("zod").ZodString;
                    notification_token: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    notes: string;
                    notification_token: string | null;
                    updated_at: string;
                }, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    notes: string;
                    notification_token: string | null;
                    updated_at: string;
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
        createDevicePreferences: {
            strictStatusCodes: true;
            summary: "Create device preferences";
            description: "Create preferences for a specific device";
            method: "POST";
            body: import("zod").ZodObject<{
                device_unique_id: import("zod").ZodString;
                arePushNotificationsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                areTransactionAlertsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                areNotificationSoundsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isVibrationEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isBiometricAuthEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                autoLockAfterMinutes: import("zod").ZodOptional<import("zod").ZodNumber>;
                isPrivacySettingsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isAutoSyncEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isCloudBackupEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                canExportData: import("zod").ZodOptional<import("zod").ZodBoolean>;
                preferredTheme: import("zod").ZodOptional<import("zod").ZodEnum<["SYSTEM", "LIGHT", "DARK"]>>;
            }, "strip", import("zod").ZodTypeAny, {
                device_unique_id: string;
                arePushNotificationsEnabled?: boolean | undefined;
                areTransactionAlertsEnabled?: boolean | undefined;
                areNotificationSoundsEnabled?: boolean | undefined;
                isVibrationEnabled?: boolean | undefined;
                isBiometricAuthEnabled?: boolean | undefined;
                autoLockAfterMinutes?: number | undefined;
                isPrivacySettingsEnabled?: boolean | undefined;
                isAutoSyncEnabled?: boolean | undefined;
                isCloudBackupEnabled?: boolean | undefined;
                canExportData?: boolean | undefined;
                preferredTheme?: "SYSTEM" | "LIGHT" | "DARK" | undefined;
            }, {
                device_unique_id: string;
                arePushNotificationsEnabled?: boolean | undefined;
                areTransactionAlertsEnabled?: boolean | undefined;
                areNotificationSoundsEnabled?: boolean | undefined;
                isVibrationEnabled?: boolean | undefined;
                isBiometricAuthEnabled?: boolean | undefined;
                autoLockAfterMinutes?: number | undefined;
                isPrivacySettingsEnabled?: boolean | undefined;
                isAutoSyncEnabled?: boolean | undefined;
                isCloudBackupEnabled?: boolean | undefined;
                canExportData?: boolean | undefined;
                preferredTheme?: "SYSTEM" | "LIGHT" | "DARK" | undefined;
            }>;
            path: "/api/devices/preferences";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    arePushNotificationsEnabled: import("zod").ZodBoolean;
                    areTransactionAlertsEnabled: import("zod").ZodBoolean;
                    areNotificationSoundsEnabled: import("zod").ZodBoolean;
                    isVibrationEnabled: import("zod").ZodBoolean;
                    isBiometricAuthEnabled: import("zod").ZodBoolean;
                    autoLockAfterMinutes: import("zod").ZodNumber;
                    isPrivacySettingsEnabled: import("zod").ZodBoolean;
                    isAutoSyncEnabled: import("zod").ZodBoolean;
                    isCloudBackupEnabled: import("zod").ZodBoolean;
                    canExportData: import("zod").ZodBoolean;
                    preferredTheme: import("zod").ZodEnum<["SYSTEM", "LIGHT", "DARK"]>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    updated_at: string;
                    arePushNotificationsEnabled: boolean;
                    areTransactionAlertsEnabled: boolean;
                    areNotificationSoundsEnabled: boolean;
                    isVibrationEnabled: boolean;
                    isBiometricAuthEnabled: boolean;
                    autoLockAfterMinutes: number;
                    isPrivacySettingsEnabled: boolean;
                    isAutoSyncEnabled: boolean;
                    isCloudBackupEnabled: boolean;
                    canExportData: boolean;
                    preferredTheme: "SYSTEM" | "LIGHT" | "DARK";
                }, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    updated_at: string;
                    arePushNotificationsEnabled: boolean;
                    areTransactionAlertsEnabled: boolean;
                    areNotificationSoundsEnabled: boolean;
                    isVibrationEnabled: boolean;
                    isBiometricAuthEnabled: boolean;
                    autoLockAfterMinutes: number;
                    isPrivacySettingsEnabled: boolean;
                    isAutoSyncEnabled: boolean;
                    isCloudBackupEnabled: boolean;
                    canExportData: boolean;
                    preferredTheme: "SYSTEM" | "LIGHT" | "DARK";
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
                404: import("zod").ZodObject<{
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
        getDevicePreferences: {
            strictStatusCodes: true;
            query: import("zod").ZodObject<{
                device_id: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                device_id?: string | undefined;
            }, {
                device_id?: string | undefined;
            }>;
            summary: "Get device preferences";
            description: "Get all device preferences for the authenticated user with optional filtering by device ID";
            method: "GET";
            path: "/api/devices/preferences";
            responses: {
                200: import("zod").ZodArray<import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    arePushNotificationsEnabled: import("zod").ZodBoolean;
                    areTransactionAlertsEnabled: import("zod").ZodBoolean;
                    areNotificationSoundsEnabled: import("zod").ZodBoolean;
                    isVibrationEnabled: import("zod").ZodBoolean;
                    isBiometricAuthEnabled: import("zod").ZodBoolean;
                    autoLockAfterMinutes: import("zod").ZodNumber;
                    isPrivacySettingsEnabled: import("zod").ZodBoolean;
                    isAutoSyncEnabled: import("zod").ZodBoolean;
                    isCloudBackupEnabled: import("zod").ZodBoolean;
                    canExportData: import("zod").ZodBoolean;
                    preferredTheme: import("zod").ZodEnum<["SYSTEM", "LIGHT", "DARK"]>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    updated_at: string;
                    arePushNotificationsEnabled: boolean;
                    areTransactionAlertsEnabled: boolean;
                    areNotificationSoundsEnabled: boolean;
                    isVibrationEnabled: boolean;
                    isBiometricAuthEnabled: boolean;
                    autoLockAfterMinutes: number;
                    isPrivacySettingsEnabled: boolean;
                    isAutoSyncEnabled: boolean;
                    isCloudBackupEnabled: boolean;
                    canExportData: boolean;
                    preferredTheme: "SYSTEM" | "LIGHT" | "DARK";
                }, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    updated_at: string;
                    arePushNotificationsEnabled: boolean;
                    areTransactionAlertsEnabled: boolean;
                    areNotificationSoundsEnabled: boolean;
                    isVibrationEnabled: boolean;
                    isBiometricAuthEnabled: boolean;
                    autoLockAfterMinutes: number;
                    isPrivacySettingsEnabled: boolean;
                    isAutoSyncEnabled: boolean;
                    isCloudBackupEnabled: boolean;
                    canExportData: boolean;
                    preferredTheme: "SYSTEM" | "LIGHT" | "DARK";
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
                404: import("zod").ZodObject<{
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
        updateDevicePreferences: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            summary: "Update device preferences";
            description: "Update preferences for a specific device";
            method: "PUT";
            body: import("zod").ZodObject<{
                arePushNotificationsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                areTransactionAlertsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                areNotificationSoundsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isVibrationEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isBiometricAuthEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                autoLockAfterMinutes: import("zod").ZodOptional<import("zod").ZodNumber>;
                isPrivacySettingsEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isAutoSyncEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                isCloudBackupEnabled: import("zod").ZodOptional<import("zod").ZodBoolean>;
                canExportData: import("zod").ZodOptional<import("zod").ZodBoolean>;
                preferredTheme: import("zod").ZodOptional<import("zod").ZodEnum<["SYSTEM", "LIGHT", "DARK"]>>;
            }, "strip", import("zod").ZodTypeAny, {
                arePushNotificationsEnabled?: boolean | undefined;
                areTransactionAlertsEnabled?: boolean | undefined;
                areNotificationSoundsEnabled?: boolean | undefined;
                isVibrationEnabled?: boolean | undefined;
                isBiometricAuthEnabled?: boolean | undefined;
                autoLockAfterMinutes?: number | undefined;
                isPrivacySettingsEnabled?: boolean | undefined;
                isAutoSyncEnabled?: boolean | undefined;
                isCloudBackupEnabled?: boolean | undefined;
                canExportData?: boolean | undefined;
                preferredTheme?: "SYSTEM" | "LIGHT" | "DARK" | undefined;
            }, {
                arePushNotificationsEnabled?: boolean | undefined;
                areTransactionAlertsEnabled?: boolean | undefined;
                areNotificationSoundsEnabled?: boolean | undefined;
                isVibrationEnabled?: boolean | undefined;
                isBiometricAuthEnabled?: boolean | undefined;
                autoLockAfterMinutes?: number | undefined;
                isPrivacySettingsEnabled?: boolean | undefined;
                isAutoSyncEnabled?: boolean | undefined;
                isCloudBackupEnabled?: boolean | undefined;
                canExportData?: boolean | undefined;
                preferredTheme?: "SYSTEM" | "LIGHT" | "DARK" | undefined;
            }>;
            path: "/api/devices/preferences/:id";
            responses: {
                200: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    user_uid: import("zod").ZodString;
                    device_unique_id: import("zod").ZodString;
                    arePushNotificationsEnabled: import("zod").ZodBoolean;
                    areTransactionAlertsEnabled: import("zod").ZodBoolean;
                    areNotificationSoundsEnabled: import("zod").ZodBoolean;
                    isVibrationEnabled: import("zod").ZodBoolean;
                    isBiometricAuthEnabled: import("zod").ZodBoolean;
                    autoLockAfterMinutes: import("zod").ZodNumber;
                    isPrivacySettingsEnabled: import("zod").ZodBoolean;
                    isAutoSyncEnabled: import("zod").ZodBoolean;
                    isCloudBackupEnabled: import("zod").ZodBoolean;
                    canExportData: import("zod").ZodBoolean;
                    preferredTheme: import("zod").ZodEnum<["SYSTEM", "LIGHT", "DARK"]>;
                    created_at: import("zod").ZodString;
                    updated_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    updated_at: string;
                    arePushNotificationsEnabled: boolean;
                    areTransactionAlertsEnabled: boolean;
                    areNotificationSoundsEnabled: boolean;
                    isVibrationEnabled: boolean;
                    isBiometricAuthEnabled: boolean;
                    autoLockAfterMinutes: number;
                    isPrivacySettingsEnabled: boolean;
                    isAutoSyncEnabled: boolean;
                    isCloudBackupEnabled: boolean;
                    canExportData: boolean;
                    preferredTheme: "SYSTEM" | "LIGHT" | "DARK";
                }, {
                    id: number;
                    uuid: string;
                    user_uid: string;
                    created_at: string;
                    device_unique_id: string;
                    updated_at: string;
                    arePushNotificationsEnabled: boolean;
                    areTransactionAlertsEnabled: boolean;
                    areNotificationSoundsEnabled: boolean;
                    isVibrationEnabled: boolean;
                    isBiometricAuthEnabled: boolean;
                    autoLockAfterMinutes: number;
                    isPrivacySettingsEnabled: boolean;
                    isAutoSyncEnabled: boolean;
                    isCloudBackupEnabled: boolean;
                    canExportData: boolean;
                    preferredTheme: "SYSTEM" | "LIGHT" | "DARK";
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
                404: import("zod").ZodObject<{
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
        updateNotificationToken: {
            strictStatusCodes: true;
            summary: "Update notification token";
            description: "Update the FCM notification token for a specific device";
            method: "PUT";
            body: import("zod").ZodObject<{
                device_unique_id: import("zod").ZodString;
                notification_token: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                device_unique_id: string;
                notification_token: string;
            }, {
                device_unique_id: string;
                notification_token: string;
            }>;
            path: "/api/devices/notification-token";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        device_id: import("zod").ZodNumber;
                        device_unique_id: import("zod").ZodString;
                        notification_token_updated: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
                        device_unique_id: string;
                        device_id: number;
                        notification_token_updated: boolean;
                    }, {
                        device_unique_id: string;
                        device_id: number;
                        notification_token_updated: boolean;
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        device_unique_id: string;
                        device_id: number;
                        notification_token_updated: boolean;
                    };
                    success: true;
                }, {
                    message: string;
                    data: {
                        device_unique_id: string;
                        device_id: number;
                        notification_token_updated: boolean;
                    };
                    success: true;
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
                404: import("zod").ZodObject<{
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
                source: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                email: string;
                first_name: string;
                last_name: string;
                source?: string | undefined;
            }, {
                email: string;
                first_name: string;
                last_name: string;
                source?: string | undefined;
            }>;
            path: "/api/newsletter/subscribe";
            responses: {
                201: import("zod").ZodObject<{
                    id: import("zod").ZodNumber;
                    uuid: import("zod").ZodString;
                    first_name: import("zod").ZodString;
                    last_name: import("zod").ZodString;
                    email: import("zod").ZodString;
                    source: import("zod").ZodNullable<import("zod").ZodString>;
                    created_at: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    id: number;
                    email: string;
                    uuid: string;
                    created_at: string;
                    first_name: string;
                    last_name: string;
                    source: string | null;
                }, {
                    id: number;
                    email: string;
                    uuid: string;
                    created_at: string;
                    first_name: string;
                    last_name: string;
                    source: string | null;
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
    SavingGoals: {
        createSavingGoal: {
            summary: "Create a new saving goal";
            description: "Creates a new saving goal for the authenticated user";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                target_amount: import("zod").ZodNumber;
                current_amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                monthly_contribution: import("zod").ZodOptional<import("zod").ZodNumber>;
                currency: import("zod").ZodString;
                target_date: import("zod").ZodString;
                status: import("zod").ZodOptional<import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>>;
                priority: import("zod").ZodOptional<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                color: import("zod").ZodOptional<import("zod").ZodString>;
                notes: import("zod").ZodOptional<import("zod").ZodString>;
                is_public: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                target_amount: number;
                currency: string;
                target_date: string;
                status?: "active" | "completed" | "paused" | "cancelled" | undefined;
                description?: string | undefined;
                notes?: string | undefined;
                current_amount?: number | undefined;
                monthly_contribution?: number | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                color?: string | undefined;
                is_public?: boolean | undefined;
            }, {
                name: string;
                target_amount: number;
                currency: string;
                target_date: string;
                status?: "active" | "completed" | "paused" | "cancelled" | undefined;
                description?: string | undefined;
                notes?: string | undefined;
                current_amount?: number | undefined;
                monthly_contribution?: number | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                color?: string | undefined;
                is_public?: boolean | undefined;
            }>;
            path: "/api/saving-goals";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    };
                }, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
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
        getSavingGoals: {
            query: import("zod").ZodObject<{
                status: import("zod").ZodOptional<import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>>;
                priority: import("zod").ZodOptional<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                is_public: import("zod").ZodOptional<import("zod").ZodBoolean>;
                limit: import("zod").ZodDefault<import("zod").ZodNumber>;
                offset: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
                status?: "active" | "completed" | "paused" | "cancelled" | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                is_public?: boolean | undefined;
            }, {
                status?: "active" | "completed" | "paused" | "cancelled" | undefined;
                limit?: number | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                is_public?: boolean | undefined;
                offset?: number | undefined;
            }>;
            summary: "Get all saving goals";
            description: "Retrieves all saving goals for the authenticated user with optional filtering";
            method: "GET";
            path: "/api/saving-goals";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getSavingGoal: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Get a specific saving goal";
            description: "Retrieves a specific saving goal by ID";
            method: "GET";
            path: "/api/get-saving-goals-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    };
                }, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    };
                }>;
                404: import("zod").ZodObject<{
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
            strictStatusCodes: true;
        };
        updateSavingGoal: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Update a saving goal";
            description: "Updates an existing saving goal";
            method: "PUT";
            body: import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                target_amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                current_amount: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                monthly_contribution: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                currency: import("zod").ZodOptional<import("zod").ZodString>;
                target_date: import("zod").ZodOptional<import("zod").ZodString>;
                status: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>>>;
                priority: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>>;
                color: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                notes: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                is_public: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
            }, "strip", import("zod").ZodTypeAny, {
                status?: "active" | "completed" | "paused" | "cancelled" | undefined;
                description?: string | undefined;
                notes?: string | undefined;
                name?: string | undefined;
                target_amount?: number | undefined;
                current_amount?: number | undefined;
                monthly_contribution?: number | undefined;
                currency?: string | undefined;
                target_date?: string | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                color?: string | undefined;
                is_public?: boolean | undefined;
            }, {
                status?: "active" | "completed" | "paused" | "cancelled" | undefined;
                description?: string | undefined;
                notes?: string | undefined;
                name?: string | undefined;
                target_amount?: number | undefined;
                current_amount?: number | undefined;
                monthly_contribution?: number | undefined;
                currency?: string | undefined;
                target_date?: string | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                color?: string | undefined;
                is_public?: boolean | undefined;
            }>;
            path: "/api/update-saving-goals-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    };
                }, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
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
                404: import("zod").ZodObject<{
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
        updateProgress: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Update saving goal progress";
            description: "Updates the current amount of a saving goal";
            method: "PATCH";
            body: import("zod").ZodObject<{
                current_amount: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                current_amount: number;
            }, {
                current_amount: number;
            }>;
            path: "/api/update-saving-goals-by-id/:id/progress/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    };
                }, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
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
                404: import("zod").ZodObject<{
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
        deleteSavingGoal: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Delete a saving goal";
            description: "Soft deletes a saving goal";
            method: "DELETE";
            path: "/api/delete-saving-goals-by-id/:id/soft/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
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
                404: import("zod").ZodObject<{
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
        getPublicSavingGoals: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodNumber>;
                offset: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: number | undefined;
                offset?: number | undefined;
            }>;
            summary: "Get public saving goals";
            description: "Retrieves public saving goals from all users";
            method: "GET";
            path: "/api/get-saving-goals-public/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getGoalsDueSoon: {
            query: import("zod").ZodObject<{
                days: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                days: number;
            }, {
                days?: number | undefined;
            }>;
            summary: "Get goals due soon";
            description: "Retrieves saving goals that are due within the specified number of days";
            method: "GET";
            path: "/api/get-saving-goals-due-soon/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        target_amount: import("zod").ZodNumber;
                        current_amount: import("zod").ZodNumber;
                        monthly_contribution: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        target_date: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "completed", "paused", "cancelled"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        color: import("zod").ZodNullable<import("zod").ZodString>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        is_public: import("zod").ZodBoolean;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }, {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        status: "active" | "completed" | "paused" | "cancelled";
                        id: number;
                        description: string | null;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        target_amount: number;
                        current_amount: number;
                        monthly_contribution: number;
                        currency: string;
                        target_date: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        color: string | null;
                        is_public: boolean;
                        deleted_at: string | null;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
    Institutions: {
        createInstitution: {
            summary: "Create a new financial institution";
            description: "Creates a new financial institution (admin only)";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                institution_type: import("zod").ZodOptional<import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>>;
                logo_url: import("zod").ZodOptional<import("zod").ZodString>;
                website: import("zod").ZodOptional<import("zod").ZodString>;
                country: import("zod").ZodOptional<import("zod").ZodString>;
                region: import("zod").ZodOptional<import("zod").ZodString>;
                is_active: import("zod").ZodOptional<import("zod").ZodBoolean>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                is_active?: boolean | undefined;
                description?: string | undefined;
                institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
                logo_url?: string | undefined;
                website?: string | undefined;
                country?: string | undefined;
                region?: string | undefined;
            }, {
                name: string;
                is_active?: boolean | undefined;
                description?: string | undefined;
                institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
                logo_url?: string | undefined;
                website?: string | undefined;
                country?: string | undefined;
                region?: string | undefined;
            }>;
            path: "/api/institutions";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
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
                409: import("zod").ZodObject<{
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
        getInstitutions: {
            query: import("zod").ZodObject<{
                institution_type: import("zod").ZodOptional<import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>>;
                country: import("zod").ZodOptional<import("zod").ZodString>;
                region: import("zod").ZodOptional<import("zod").ZodString>;
                search: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
                search?: string | undefined;
                institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
                country?: string | undefined;
                region?: string | undefined;
            }, {
                limit?: string | undefined;
                search?: string | undefined;
                offset?: string | undefined;
                institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
                country?: string | undefined;
                region?: string | undefined;
            }>;
            summary: "Get all financial institutions";
            description: "Retrieves all active financial institutions with optional filtering";
            method: "GET";
            path: "/api/institutions";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getInstitution: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Get a specific financial institution";
            description: "Retrieves a specific financial institution by ID";
            method: "GET";
            path: "/api/institutions/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    };
                }>;
                404: import("zod").ZodObject<{
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
        updateInstitution: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Update a financial institution";
            description: "Updates an existing financial institution (admin only)";
            method: "PUT";
            body: import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
                institution_type: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>>>;
                logo_url: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                website: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                country: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                region: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                is_active: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
            }, "strip", import("zod").ZodTypeAny, {
                is_active?: boolean | undefined;
                description?: string | undefined;
                name?: string | undefined;
                institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
                logo_url?: string | undefined;
                website?: string | undefined;
                country?: string | undefined;
                region?: string | undefined;
            }, {
                is_active?: boolean | undefined;
                description?: string | undefined;
                name?: string | undefined;
                institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
                logo_url?: string | undefined;
                website?: string | undefined;
                country?: string | undefined;
                region?: string | undefined;
            }>;
            path: "/api/institutions/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
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
                404: import("zod").ZodObject<{
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
        deleteInstitution: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Delete a financial institution";
            description: "Soft deletes a financial institution (admin only)";
            method: "DELETE";
            path: "/api/institutions/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
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
                404: import("zod").ZodObject<{
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
        searchInstitutions: {
            query: import("zod").ZodObject<{
                q: import("zod").ZodString;
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
                q: string;
            }, {
                q: string;
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Search financial institutions";
            description: "Search financial institutions by name";
            method: "GET";
            path: "/api/institutions/search";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getInstitutionsByType: {
            pathParams: import("zod").ZodObject<{
                type: import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
            }, "strip", import("zod").ZodTypeAny, {
                type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
            }, {
                type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
            }>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get institutions by type";
            description: "Retrieves financial institutions filtered by type";
            method: "GET";
            path: "/api/institutions/type/:type";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getInstitutionsWithProducts: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get institutions with products";
            description: "Retrieves financial institutions that have active products";
            method: "GET";
            path: "/api/institutions/with-products";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        institution_type: import("zod").ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
                        logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        website: import("zod").ZodNullable<import("zod").ZodString>;
                        country: import("zod").ZodNullable<import("zod").ZodString>;
                        region: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        products: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            product_type: import("zod").ZodString;
                            is_active: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }, {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        description: string | null;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        deleted_at: string | null;
                        institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                        logo_url: string | null;
                        website: string | null;
                        country: string | null;
                        region: string | null;
                        products?: {
                            id: number;
                            is_active: boolean;
                            name: string;
                            product_type: string;
                        }[] | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
    Products: {
        createProduct: {
            summary: "Create a new financial product";
            description: "Creates a new financial product (admin only)";
            method: "POST";
            body: import("zod").ZodObject<{
                name: import("zod").ZodString;
                product_type: import("zod").ZodOptional<import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>;
                institution_id: import("zod").ZodNumber;
                interest_rate: import("zod").ZodOptional<import("zod").ZodNumber>;
                annual_fee: import("zod").ZodOptional<import("zod").ZodNumber>;
                minimum_balance: import("zod").ZodOptional<import("zod").ZodNumber>;
                credit_score_requirement: import("zod").ZodOptional<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                benefits: import("zod").ZodOptional<import("zod").ZodString>;
                features: import("zod").ZodOptional<import("zod").ZodString>;
                terms_conditions: import("zod").ZodOptional<import("zod").ZodString>;
                is_spotlight: import("zod").ZodOptional<import("zod").ZodBoolean>;
                is_active: import("zod").ZodOptional<import("zod").ZodBoolean>;
                currency: import("zod").ZodOptional<import("zod").ZodString>;
                valid_from: import("zod").ZodOptional<import("zod").ZodString>;
                valid_until: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                institution_id: number;
                is_active?: boolean | undefined;
                currency?: string | undefined;
                product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
                interest_rate?: number | undefined;
                annual_fee?: number | undefined;
                minimum_balance?: number | undefined;
                credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
                benefits?: string | undefined;
                features?: string | undefined;
                terms_conditions?: string | undefined;
                is_spotlight?: boolean | undefined;
                valid_from?: string | undefined;
                valid_until?: string | undefined;
            }, {
                name: string;
                institution_id: number;
                is_active?: boolean | undefined;
                currency?: string | undefined;
                product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
                interest_rate?: number | undefined;
                annual_fee?: number | undefined;
                minimum_balance?: number | undefined;
                credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
                benefits?: string | undefined;
                features?: string | undefined;
                terms_conditions?: string | undefined;
                is_spotlight?: boolean | undefined;
                valid_from?: string | undefined;
                valid_until?: string | undefined;
            }>;
            path: "/api/products";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
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
                409: import("zod").ZodObject<{
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
        getProducts: {
            query: import("zod").ZodObject<{
                product_type: import("zod").ZodOptional<import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>;
                institution_id: import("zod").ZodOptional<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                credit_score_requirement: import("zod").ZodOptional<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                is_spotlight: import("zod").ZodOptional<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, boolean, string>, import("zod").ZodBoolean>>;
                search: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
                search?: string | undefined;
                product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
                institution_id?: number | undefined;
                credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
                is_spotlight?: boolean | undefined;
            }, {
                limit?: string | undefined;
                search?: string | undefined;
                offset?: string | undefined;
                product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
                institution_id?: string | undefined;
                credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
                is_spotlight?: string | undefined;
            }>;
            summary: "Get all financial products";
            description: "Retrieves all active financial products with optional filtering and search";
            method: "GET";
            path: "/api/products";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getProductsByType: {
            pathParams: import("zod").ZodObject<{
                type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
            }, "strip", import("zod").ZodTypeAny, {
                type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
            }, {
                type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
            }>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get products by type";
            description: "Retrieves financial products filtered by type";
            method: "GET";
            path: "/api/products/type/:type";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getProductsByInstitution: {
            pathParams: import("zod").ZodObject<{
                institutionId: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                institutionId: number;
            }, {
                institutionId: string;
            }>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get products by institution";
            description: "Retrieves financial products for a specific institution";
            method: "GET";
            path: "/api/products/institution/:institutionId";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getSpotlightProducts: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get spotlight products";
            description: "Retrieves featured/spotlight financial products";
            method: "GET";
            path: "/api/products/spotlight";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getNoAnnualFeeProducts: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get products with no annual fee";
            description: "Retrieves financial products with no annual fee";
            method: "GET";
            path: "/api/products/no-annual-fee";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getProductsByCreditScore: {
            pathParams: import("zod").ZodObject<{
                requirement: import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>;
            }, "strip", import("zod").ZodTypeAny, {
                requirement: "excellent" | "good" | "fair" | "poor";
            }, {
                requirement: "excellent" | "good" | "fair" | "poor";
            }>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get products by credit score requirement";
            description: "Retrieves financial products filtered by credit score requirement";
            method: "GET";
            path: "/api/products/credit-score/:requirement";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getMyProducts: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get my saved products";
            description: "Retrieves products saved by the authenticated user";
            method: "GET";
            path: "/api/products/my-products";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        addToMyProducts: {
            pathParams: import("zod").ZodObject<{
                productId: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                productId: number;
            }, {
                productId: string;
            }>;
            summary: "Add product to my products";
            description: "Saves a product to the authenticated user's product list";
            method: "POST";
            body: import("zod").ZodOptional<import("zod").ZodObject<{
                notes: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                notes?: string | undefined;
            }, {
                notes?: string | undefined;
            }>>;
            path: "/api/products/my-products/:productId";
            responses: {
                201: import("zod").ZodObject<{
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
                404: import("zod").ZodObject<{
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
        removeFromMyProducts: {
            pathParams: import("zod").ZodObject<{
                productId: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                productId: number;
            }, {
                productId: string;
            }>;
            summary: "Remove product from my products";
            description: "Removes a product from the authenticated user's product list";
            method: "DELETE";
            path: "/api/products/my-products/:productId";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
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
                404: import("zod").ZodObject<{
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
        getProduct: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Get a specific financial product";
            description: "Retrieves a specific financial product by ID";
            method: "GET";
            path: "/api/products/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    };
                }>;
                404: import("zod").ZodObject<{
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
        updateProduct: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Update a financial product";
            description: "Updates an existing financial product (admin only)";
            method: "PUT";
            body: import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
                product_type: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>>;
                institution_id: import("zod").ZodOptional<import("zod").ZodNumber>;
                interest_rate: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                annual_fee: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                minimum_balance: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                credit_score_requirement: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>>;
                benefits: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                features: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                terms_conditions: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                is_spotlight: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                is_active: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                currency: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                valid_from: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                valid_until: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
            }, "strip", import("zod").ZodTypeAny, {
                is_active?: boolean | undefined;
                name?: string | undefined;
                currency?: string | undefined;
                product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
                institution_id?: number | undefined;
                interest_rate?: number | undefined;
                annual_fee?: number | undefined;
                minimum_balance?: number | undefined;
                credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
                benefits?: string | undefined;
                features?: string | undefined;
                terms_conditions?: string | undefined;
                is_spotlight?: boolean | undefined;
                valid_from?: string | undefined;
                valid_until?: string | undefined;
            }, {
                is_active?: boolean | undefined;
                name?: string | undefined;
                currency?: string | undefined;
                product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
                institution_id?: number | undefined;
                interest_rate?: number | undefined;
                annual_fee?: number | undefined;
                minimum_balance?: number | undefined;
                credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
                benefits?: string | undefined;
                features?: string | undefined;
                terms_conditions?: string | undefined;
                is_spotlight?: boolean | undefined;
                valid_from?: string | undefined;
                valid_until?: string | undefined;
            }>;
            path: "/api/products/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        product_type: import("zod").ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                        institution_id: import("zod").ZodNumber;
                        institution_name: import("zod").ZodString;
                        interest_rate: import("zod").ZodNullable<import("zod").ZodNumber>;
                        annual_fee: import("zod").ZodNullable<import("zod").ZodNumber>;
                        minimum_balance: import("zod").ZodNullable<import("zod").ZodNumber>;
                        credit_score_requirement: import("zod").ZodNullable<import("zod").ZodEnum<["excellent", "good", "fair", "poor"]>>;
                        benefits: import("zod").ZodNullable<import("zod").ZodString>;
                        features: import("zod").ZodNullable<import("zod").ZodString>;
                        terms_conditions: import("zod").ZodNullable<import("zod").ZodString>;
                        is_spotlight: import("zod").ZodBoolean;
                        is_active: import("zod").ZodBoolean;
                        currency: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_from: import("zod").ZodNullable<import("zod").ZodString>;
                        valid_until: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                        institution: import("zod").ZodOptional<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            institution_type: import("zod").ZodString;
                            logo_url: import("zod").ZodNullable<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }, {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        }>>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        created_at: string;
                        updated_at: string;
                        name: string;
                        currency: string | null;
                        deleted_at: string | null;
                        product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                        institution_id: number;
                        institution_name: string;
                        interest_rate: number | null;
                        annual_fee: number | null;
                        minimum_balance: number | null;
                        credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                        benefits: string | null;
                        features: string | null;
                        terms_conditions: string | null;
                        is_spotlight: boolean;
                        valid_from: string | null;
                        valid_until: string | null;
                        institution?: {
                            id: number;
                            name: string;
                            institution_type: string;
                            logo_url: string | null;
                        } | undefined;
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
                404: import("zod").ZodObject<{
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
        deleteProduct: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Delete a financial product";
            description: "Soft deletes a financial product (admin only)";
            method: "DELETE";
            path: "/api/products/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
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
                404: import("zod").ZodObject<{
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
    PaymentReminders: {
        createPaymentReminder: {
            summary: "Create a new payment reminder";
            description: "Creates a new payment reminder for the authenticated user";
            method: "POST";
            body: import("zod").ZodObject<{
                user_connection_id: import("zod").ZodOptional<import("zod").ZodNumber>;
                title: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                reminder_type: import("zod").ZodOptional<import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>>;
                amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                currency: import("zod").ZodString;
                due_date: import("zod").ZodString;
                reminder_date: import("zod").ZodOptional<import("zod").ZodString>;
                reminder_status: import("zod").ZodOptional<import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>>;
                priority: import("zod").ZodOptional<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                is_recurring: import("zod").ZodOptional<import("zod").ZodBoolean>;
                recurrence_pattern: import("zod").ZodOptional<import("zod").ZodString>;
                notification_settings: import("zod").ZodOptional<import("zod").ZodAny>;
                notes: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                title: string;
                currency: string;
                due_date: string;
                description?: string | undefined;
                notes?: string | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                user_connection_id?: number | undefined;
                reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
                amount?: number | undefined;
                reminder_date?: string | undefined;
                reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
                is_recurring?: boolean | undefined;
                recurrence_pattern?: string | undefined;
                notification_settings?: any;
            }, {
                title: string;
                currency: string;
                due_date: string;
                description?: string | undefined;
                notes?: string | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                user_connection_id?: number | undefined;
                reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
                amount?: number | undefined;
                reminder_date?: string | undefined;
                reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
                is_recurring?: boolean | undefined;
                recurrence_pattern?: string | undefined;
                notification_settings?: any;
            }>;
            path: "/api/payment-reminders";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
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
        getPaymentReminders: {
            query: import("zod").ZodObject<{
                reminder_status: import("zod").ZodOptional<import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>>;
                reminder_type: import("zod").ZodOptional<import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>>;
                priority: import("zod").ZodOptional<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                is_recurring: import("zod").ZodOptional<import("zod").ZodBoolean>;
                search: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodDefault<import("zod").ZodNumber>;
                offset: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
                search?: string | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
                reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
                is_recurring?: boolean | undefined;
            }, {
                limit?: number | undefined;
                search?: string | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                offset?: number | undefined;
                reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
                reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
                is_recurring?: boolean | undefined;
            }>;
            summary: "Get all payment reminders";
            description: "Retrieves all payment reminders for the authenticated user with optional filtering";
            method: "GET";
            path: "/api/payment-reminders";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getOverdueReminders: {
            summary: "Get overdue payment reminders";
            description: "Retrieves all overdue payment reminders for the authenticated user";
            method: "GET";
            path: "/api/payment-reminders/overdue";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getUpcomingReminders: {
            query: import("zod").ZodObject<{
                days: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                days: number;
            }, {
                days?: number | undefined;
            }>;
            summary: "Get upcoming payment reminders";
            description: "Retrieves payment reminders due within the specified number of days";
            method: "GET";
            path: "/api/payment-reminders/upcoming";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getRemindersDueToday: {
            summary: "Get payment reminders due today";
            description: "Retrieves all payment reminders due today for the authenticated user";
            method: "GET";
            path: "/api/payment-reminders/due-today";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getRemindersByType: {
            pathParams: import("zod").ZodObject<{
                type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
            }, "strip", import("zod").ZodTypeAny, {
                type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
            }, {
                type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
            }>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodNumber>;
                offset: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: number | undefined;
                offset?: number | undefined;
            }>;
            summary: "Get payment reminders by type";
            description: "Retrieves payment reminders filtered by type";
            method: "GET";
            path: "/api/payment-reminders/type/:type";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
            strictStatusCodes: true;
        };
        getRemindersByPriority: {
            pathParams: import("zod").ZodObject<{
                priority: import("zod").ZodEnum<["low", "medium", "high", "urgent"]>;
            }, "strip", import("zod").ZodTypeAny, {
                priority: "low" | "medium" | "high" | "urgent";
            }, {
                priority: "low" | "medium" | "high" | "urgent";
            }>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodNumber>;
                offset: import("zod").ZodDefault<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: number | undefined;
                offset?: number | undefined;
            }>;
            summary: "Get payment reminders by priority";
            description: "Retrieves payment reminders filtered by priority";
            method: "GET";
            path: "/api/payment-reminders/priority/:priority";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
            strictStatusCodes: true;
        };
        getPaymentReminder: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Get a specific payment reminder";
            description: "Retrieves a specific payment reminder by ID";
            method: "GET";
            path: "/api/payment-reminders-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    };
                }>;
                404: import("zod").ZodObject<{
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
            strictStatusCodes: true;
        };
        updatePaymentReminder: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Update a payment reminder";
            description: "Updates an existing payment reminder";
            method: "PUT";
            body: import("zod").ZodObject<{
                user_connection_id: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                title: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                reminder_type: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>>>;
                amount: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
                currency: import("zod").ZodOptional<import("zod").ZodString>;
                due_date: import("zod").ZodOptional<import("zod").ZodString>;
                reminder_date: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                reminder_status: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>>>;
                priority: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>>;
                is_recurring: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                recurrence_pattern: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
                notification_settings: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodAny>>;
                notes: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
            }, "strip", import("zod").ZodTypeAny, {
                description?: string | undefined;
                title?: string | undefined;
                notes?: string | undefined;
                currency?: string | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                user_connection_id?: number | undefined;
                reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
                amount?: number | undefined;
                due_date?: string | undefined;
                reminder_date?: string | undefined;
                reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
                is_recurring?: boolean | undefined;
                recurrence_pattern?: string | undefined;
                notification_settings?: any;
            }, {
                description?: string | undefined;
                title?: string | undefined;
                notes?: string | undefined;
                currency?: string | undefined;
                priority?: "low" | "medium" | "high" | "urgent" | undefined;
                user_connection_id?: number | undefined;
                reminder_type?: "custom" | "credit_card" | "loan" | "bill" | "subscription" | undefined;
                amount?: number | undefined;
                due_date?: string | undefined;
                reminder_date?: string | undefined;
                reminder_status?: "pending" | "completed" | "sent" | "acknowledged" | "overdue" | undefined;
                is_recurring?: boolean | undefined;
                recurrence_pattern?: string | undefined;
                notification_settings?: any;
            }>;
            path: "/api/payment-reminders-by-id/:id/update/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
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
                404: import("zod").ZodObject<{
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
        deletePaymentReminder: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Delete a payment reminder";
            description: "Soft deletes a payment reminder";
            method: "DELETE";
            path: "/api/delete-payment-reminders-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
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
                404: import("zod").ZodObject<{
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
        markAsCompleted: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Mark payment reminder as completed";
            description: "Marks a payment reminder as completed";
            method: "PATCH";
            body: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
            path: "/api/complete-payment-reminders-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    };
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
                404: import("zod").ZodObject<{
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
        markAsAcknowledged: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            summary: "Mark payment reminder as acknowledged";
            description: "Marks a payment reminder as acknowledged";
            method: "PATCH";
            body: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
            path: "/api/acknowledge-payment-reminders-by-id/:id/";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        user_connection_id: import("zod").ZodNullable<import("zod").ZodNumber>;
                        title: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_type: import("zod").ZodEnum<["credit_card", "loan", "bill", "subscription", "custom"]>;
                        amount: import("zod").ZodNullable<import("zod").ZodNumber>;
                        currency: import("zod").ZodString;
                        due_date: import("zod").ZodString;
                        reminder_date: import("zod").ZodNullable<import("zod").ZodString>;
                        reminder_status: import("zod").ZodEnum<["pending", "sent", "acknowledged", "completed", "overdue"]>;
                        priority: import("zod").ZodNullable<import("zod").ZodEnum<["low", "medium", "high", "urgent"]>>;
                        is_recurring: import("zod").ZodBoolean;
                        recurrence_pattern: import("zod").ZodNullable<import("zod").ZodString>;
                        notification_settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }, {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        description: string | null;
                        title: string;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        currency: string;
                        priority: "low" | "medium" | "high" | "urgent" | null;
                        deleted_at: string | null;
                        user_connection_id: number | null;
                        reminder_type: "custom" | "credit_card" | "loan" | "bill" | "subscription";
                        amount: number | null;
                        due_date: string;
                        reminder_date: string | null;
                        reminder_status: "pending" | "completed" | "sent" | "acknowledged" | "overdue";
                        is_recurring: boolean;
                        recurrence_pattern: string | null;
                        notification_settings?: any;
                    };
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
                404: import("zod").ZodObject<{
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
    BankConnections: {
        createConnection: {
            strictStatusCodes: true;
            summary: "Create Connection";
            description: "Crear una conexión a partir de un ID de sesión.";
            method: "POST";
            body: import("zod").ZodObject<{
                sessionId: import("zod").ZodString;
                institution_id: import("zod").ZodNumber;
                nickname: import("zod").ZodOptional<import("zod").ZodString>;
                notes: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                institution_id: number;
                sessionId: string;
                notes?: string | undefined;
                nickname?: string | undefined;
            }, {
                institution_id: number;
                sessionId: string;
                notes?: string | undefined;
                nickname?: string | undefined;
            }>;
            path: "/api/bank-connections/connections";
            responses: {
                200: import("zod").ZodObject<{
                    connection: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        institution_id: import("zod").ZodNumber;
                        external_connection_id: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
                        nickname: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        last_sync_at: import("zod").ZodNullable<import("zod").ZodString>;
                        revoked_at: import("zod").ZodNullable<import("zod").ZodString>;
                        expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    }, {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    }>;
                    accessToken: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    connection: {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    };
                    accessToken: string;
                }, {
                    connection: {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    };
                    accessToken: string;
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
                404: import("zod").ZodObject<{
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
        listConnections: {
            strictStatusCodes: true;
            summary: "List Connections";
            description: "Listar todas las conexiones del usuario autenticado.";
            method: "GET";
            path: "/api/bank-connections/connections";
            responses: {
                200: import("zod").ZodObject<{
                    connections: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        institution_id: import("zod").ZodNumber;
                        external_connection_id: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
                        nickname: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        last_sync_at: import("zod").ZodNullable<import("zod").ZodString>;
                        revoked_at: import("zod").ZodNullable<import("zod").ZodString>;
                        expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    }, {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    connections: {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    }[];
                }, {
                    connections: {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
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
        };
        getConnection: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                connectionId: string;
            }, {
                connectionId: string;
            }>;
            summary: "Get Connection";
            description: "Buscar una conexión por su ID.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId";
            responses: {
                200: import("zod").ZodObject<{
                    connection: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        institution_id: import("zod").ZodNumber;
                        external_connection_id: import("zod").ZodString;
                        status: import("zod").ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
                        nickname: import("zod").ZodNullable<import("zod").ZodString>;
                        created_at: import("zod").ZodString;
                        last_sync_at: import("zod").ZodNullable<import("zod").ZodString>;
                        revoked_at: import("zod").ZodNullable<import("zod").ZodString>;
                        expires_at: import("zod").ZodNullable<import("zod").ZodString>;
                        is_active: import("zod").ZodBoolean;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    }, {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    connection: {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
                    };
                }, {
                    connection: {
                        status: "error" | "pending" | "active" | "disconnected" | "revoked";
                        id: string;
                        is_active: boolean;
                        created_at: string;
                        institution_id: number;
                        external_connection_id: string;
                        nickname: string | null;
                        last_sync_at: string | null;
                        revoked_at: string | null;
                        expires_at: string | null;
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
                404: import("zod").ZodObject<{
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
        revokeConnection: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                connectionId: string;
            }, {
                connectionId: string;
            }>;
            summary: "Revoke Connection";
            description: "Revocar una conexión, impidiendo accesos futuros.";
            method: "DELETE";
            path: "/api/bank-connections/connections/:connectionId";
            responses: {
                204: import("zod").ZodObject<{
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
                403: import("zod").ZodObject<{
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
                404: import("zod").ZodObject<{
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
        listAccounts: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                connectionId: string;
            }, {
                connectionId: string;
            }>;
            summary: "List Accounts";
            description: "Listar cuentas asociadas a una conexión.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId/accounts";
            responses: {
                200: import("zod").ZodObject<{
                    accounts: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        connectionId: import("zod").ZodString;
                        type: import("zod").ZodEnum<["checking", "savings", "credit_card", "loan", "investment", "depository", "other"]>;
                        name: import("zod").ZodString;
                        lastFour: import("zod").ZodNullable<import("zod").ZodString>;
                        balance: import("zod").ZodObject<{
                            current: import("zod").ZodNullable<import("zod").ZodNumber>;
                            available: import("zod").ZodNullable<import("zod").ZodNumber>;
                            limit: import("zod").ZodNullable<import("zod").ZodNumber>;
                        }, "strip", import("zod").ZodTypeAny, {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        }, {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        }>;
                        currency: import("zod").ZodString;
                        lastTransactionRefresh: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                        id: string;
                        name: string;
                        currency: string;
                        connectionId: string;
                        lastFour: string | null;
                        balance: {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        };
                        lastTransactionRefresh: string | null;
                    }, {
                        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                        id: string;
                        name: string;
                        currency: string;
                        connectionId: string;
                        lastFour: string | null;
                        balance: {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        };
                        lastTransactionRefresh: string | null;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    accounts: {
                        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                        id: string;
                        name: string;
                        currency: string;
                        connectionId: string;
                        lastFour: string | null;
                        balance: {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        };
                        lastTransactionRefresh: string | null;
                    }[];
                }, {
                    accounts: {
                        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                        id: string;
                        name: string;
                        currency: string;
                        connectionId: string;
                        lastFour: string | null;
                        balance: {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        };
                        lastTransactionRefresh: string | null;
                    }[];
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
                403: import("zod").ZodObject<{
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
                404: import("zod").ZodObject<{
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
        getAccount: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                accountId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                connectionId: string;
                accountId: string;
            }, {
                connectionId: string;
                accountId: string;
            }>;
            summary: "Get Account";
            description: "Buscar una cuenta por su ID.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId/accounts/:accountId";
            responses: {
                200: import("zod").ZodObject<{
                    account: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        connectionId: import("zod").ZodString;
                        type: import("zod").ZodEnum<["checking", "savings", "credit_card", "loan", "investment", "depository", "other"]>;
                        name: import("zod").ZodString;
                        lastFour: import("zod").ZodNullable<import("zod").ZodString>;
                        balance: import("zod").ZodObject<{
                            current: import("zod").ZodNullable<import("zod").ZodNumber>;
                            available: import("zod").ZodNullable<import("zod").ZodNumber>;
                            limit: import("zod").ZodNullable<import("zod").ZodNumber>;
                        }, "strip", import("zod").ZodTypeAny, {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        }, {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        }>;
                        currency: import("zod").ZodString;
                        lastTransactionRefresh: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                        id: string;
                        name: string;
                        currency: string;
                        connectionId: string;
                        lastFour: string | null;
                        balance: {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        };
                        lastTransactionRefresh: string | null;
                    }, {
                        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                        id: string;
                        name: string;
                        currency: string;
                        connectionId: string;
                        lastFour: string | null;
                        balance: {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        };
                        lastTransactionRefresh: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    account: {
                        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                        id: string;
                        name: string;
                        currency: string;
                        connectionId: string;
                        lastFour: string | null;
                        balance: {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        };
                        lastTransactionRefresh: string | null;
                    };
                }, {
                    account: {
                        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
                        id: string;
                        name: string;
                        currency: string;
                        connectionId: string;
                        lastFour: string | null;
                        balance: {
                            limit: number | null;
                            current: number | null;
                            available: number | null;
                        };
                        lastTransactionRefresh: string | null;
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
                403: import("zod").ZodObject<{
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
                404: import("zod").ZodObject<{
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
        listTransactions: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                accountId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                connectionId: string;
                accountId: string;
            }, {
                connectionId: string;
                accountId: string;
            }>;
            query: import("zod").ZodObject<{
                refreshedSince: import("zod").ZodOptional<import("zod").ZodString>;
                limit: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, number, string>>;
                offset: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, number, string>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit?: number | undefined;
                offset?: number | undefined;
                refreshedSince?: string | undefined;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
                refreshedSince?: string | undefined;
            }>;
            summary: "List Transactions";
            description: "Listar todas las transacciones de una cuenta.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId/accounts/:accountId/transactions";
            responses: {
                200: import("zod").ZodObject<{
                    transactions: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        accountId: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        date: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reference: import("zod").ZodNullable<import("zod").ZodString>;
                        status: import("zod").ZodEnum<["pending", "completed", "cancelled", "failed"]>;
                        transactionRefresh: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "pending" | "completed" | "cancelled" | "failed";
                        id: string;
                        date: string;
                        description: string | null;
                        amount: number;
                        accountId: string;
                        reference: string | null;
                        transactionRefresh: string | null;
                    }, {
                        status: "pending" | "completed" | "cancelled" | "failed";
                        id: string;
                        date: string;
                        description: string | null;
                        amount: number;
                        accountId: string;
                        reference: string | null;
                        transactionRefresh: string | null;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
                    transactions: {
                        status: "pending" | "completed" | "cancelled" | "failed";
                        id: string;
                        date: string;
                        description: string | null;
                        amount: number;
                        accountId: string;
                        reference: string | null;
                        transactionRefresh: string | null;
                    }[];
                }, {
                    transactions: {
                        status: "pending" | "completed" | "cancelled" | "failed";
                        id: string;
                        date: string;
                        description: string | null;
                        amount: number;
                        accountId: string;
                        reference: string | null;
                        transactionRefresh: string | null;
                    }[];
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
                403: import("zod").ZodObject<{
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
                404: import("zod").ZodObject<{
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
        getTransaction: {
            strictStatusCodes: true;
            pathParams: import("zod").ZodObject<{
                connectionId: import("zod").ZodString;
                accountId: import("zod").ZodString;
                transactionId: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                connectionId: string;
                accountId: string;
                transactionId: string;
            }, {
                connectionId: string;
                accountId: string;
                transactionId: string;
            }>;
            summary: "Get Transaction";
            description: "Buscar una transacción por su identificador.";
            method: "GET";
            path: "/api/bank-connections/connections/:connectionId/accounts/:accountId/transactions/:transactionId";
            responses: {
                200: import("zod").ZodObject<{
                    transaction: import("zod").ZodObject<{
                        id: import("zod").ZodString;
                        accountId: import("zod").ZodString;
                        amount: import("zod").ZodNumber;
                        date: import("zod").ZodString;
                        description: import("zod").ZodNullable<import("zod").ZodString>;
                        reference: import("zod").ZodNullable<import("zod").ZodString>;
                        status: import("zod").ZodEnum<["pending", "completed", "cancelled", "failed"]>;
                        transactionRefresh: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        status: "pending" | "completed" | "cancelled" | "failed";
                        id: string;
                        date: string;
                        description: string | null;
                        amount: number;
                        accountId: string;
                        reference: string | null;
                        transactionRefresh: string | null;
                    }, {
                        status: "pending" | "completed" | "cancelled" | "failed";
                        id: string;
                        date: string;
                        description: string | null;
                        amount: number;
                        accountId: string;
                        reference: string | null;
                        transactionRefresh: string | null;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    transaction: {
                        status: "pending" | "completed" | "cancelled" | "failed";
                        id: string;
                        date: string;
                        description: string | null;
                        amount: number;
                        accountId: string;
                        reference: string | null;
                        transactionRefresh: string | null;
                    };
                }, {
                    transaction: {
                        status: "pending" | "completed" | "cancelled" | "failed";
                        id: string;
                        date: string;
                        description: string | null;
                        amount: number;
                        accountId: string;
                        reference: string | null;
                        transactionRefresh: string | null;
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
                403: import("zod").ZodObject<{
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
                404: import("zod").ZodObject<{
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
    Budgets: {
        createBudget: {
            summary: "Create a new budget";
            description: "Creates a new budget for the authenticated user";
            method: "POST";
            body: import("zod").ZodEffects<import("zod").ZodObject<{
                name: import("zod").ZodString;
                budget_period: import("zod").ZodOptional<import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>>;
                start_date: import("zod").ZodString;
                end_date: import("zod").ZodString;
                total_amount: import("zod").ZodNumber;
                currency: import("zod").ZodDefault<import("zod").ZodString>;
                is_active: import("zod").ZodOptional<import("zod").ZodBoolean>;
                notes: import("zod").ZodString;
                settings: import("zod").ZodOptional<import("zod").ZodAny>;
            }, "strip", import("zod").ZodTypeAny, {
                notes: string;
                name: string;
                currency: string;
                start_date: string;
                end_date: string;
                total_amount: number;
                is_active?: boolean | undefined;
                budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
                settings?: any;
            }, {
                notes: string;
                name: string;
                start_date: string;
                end_date: string;
                total_amount: number;
                is_active?: boolean | undefined;
                currency?: string | undefined;
                budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
                settings?: any;
            }>, {
                notes: string;
                name: string;
                currency: string;
                start_date: string;
                end_date: string;
                total_amount: number;
                is_active?: boolean | undefined;
                budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
                settings?: any;
            }, {
                notes: string;
                name: string;
                start_date: string;
                end_date: string;
                total_amount: number;
                is_active?: boolean | undefined;
                currency?: string | undefined;
                budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
                settings?: any;
            }>;
            path: "/api/budgets";
            responses: {
                201: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
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
        getBudgets: {
            query: import("zod").ZodObject<{
                budget_period: import("zod").ZodOptional<import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>>;
                is_active: import("zod").ZodOptional<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, boolean, string>, import("zod").ZodBoolean>>;
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
                is_active?: boolean | undefined;
                budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            }, {
                limit?: string | undefined;
                is_active?: string | undefined;
                offset?: string | undefined;
                budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
            }>;
            summary: "Get all budgets";
            description: "Retrieves all budgets for the authenticated user with optional filtering";
            method: "GET";
            path: "/api/budgets";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getBudget: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Get a specific budget";
            description: "Retrieves a specific budget by ID for the authenticated user";
            method: "GET";
            path: "/api/budgets/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    };
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
                404: import("zod").ZodObject<{
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
        updateBudget: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Update a budget";
            description: "Updates an existing budget for the authenticated user";
            method: "PUT";
            body: import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
                budget_period: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>>>;
                start_date: import("zod").ZodOptional<import("zod").ZodString>;
                end_date: import("zod").ZodOptional<import("zod").ZodString>;
                total_amount: import("zod").ZodOptional<import("zod").ZodNumber>;
                currency: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodString>>;
                is_active: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodBoolean>>;
                notes: import("zod").ZodOptional<import("zod").ZodString>;
                settings: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodAny>>;
            }, "strip", import("zod").ZodTypeAny, {
                is_active?: boolean | undefined;
                notes?: string | undefined;
                name?: string | undefined;
                currency?: string | undefined;
                budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
                start_date?: string | undefined;
                end_date?: string | undefined;
                total_amount?: number | undefined;
                settings?: any;
            }, {
                is_active?: boolean | undefined;
                notes?: string | undefined;
                name?: string | undefined;
                currency?: string | undefined;
                budget_period?: "monthly" | "quarterly" | "yearly" | undefined;
                start_date?: string | undefined;
                end_date?: string | undefined;
                total_amount?: number | undefined;
                settings?: any;
            }>;
            path: "/api/budgets/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    };
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
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
                404: import("zod").ZodObject<{
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
        deleteBudget: {
            pathParams: import("zod").ZodObject<{
                id: import("zod").ZodEffects<import("zod").ZodString, number, string>;
            }, "strip", import("zod").ZodTypeAny, {
                id: number;
            }, {
                id: string;
            }>;
            summary: "Delete a budget";
            description: "Soft deletes a budget for the authenticated user";
            method: "DELETE";
            path: "/api/budgets/:id";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
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
                404: import("zod").ZodObject<{
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
        getActiveBudgets: {
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get active budgets";
            description: "Retrieves all active budgets for the authenticated user";
            method: "GET";
            path: "/api/budgets/active";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
        getBudgetsByPeriod: {
            pathParams: import("zod").ZodObject<{
                period: import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>;
            }, "strip", import("zod").ZodTypeAny, {
                period: "monthly" | "quarterly" | "yearly";
            }, {
                period: "monthly" | "quarterly" | "yearly";
            }>;
            query: import("zod").ZodObject<{
                limit: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
                offset: import("zod").ZodDefault<import("zod").ZodPipeline<import("zod").ZodEffects<import("zod").ZodString, number, string>, import("zod").ZodNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                limit: number;
                offset: number;
            }, {
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            summary: "Get budgets by period";
            description: "Retrieves budgets filtered by budget period for the authenticated user";
            method: "GET";
            path: "/api/budgets/period/:period";
            responses: {
                200: import("zod").ZodObject<{
                    message: import("zod").ZodString;
                    data: import("zod").ZodArray<import("zod").ZodObject<{
                        id: import("zod").ZodNumber;
                        uuid: import("zod").ZodString;
                        user_uid: import("zod").ZodString;
                        name: import("zod").ZodString;
                        budget_period: import("zod").ZodEnum<["monthly", "quarterly", "yearly"]>;
                        start_date: import("zod").ZodString;
                        end_date: import("zod").ZodString;
                        total_amount: import("zod").ZodNumber;
                        currency: import("zod").ZodString;
                        is_active: import("zod").ZodBoolean;
                        notes: import("zod").ZodNullable<import("zod").ZodString>;
                        settings: import("zod").ZodNullable<import("zod").ZodAny>;
                        created_at: import("zod").ZodString;
                        updated_at: import("zod").ZodString;
                        deleted_at: import("zod").ZodNullable<import("zod").ZodString>;
                    }, "strip", import("zod").ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }, {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }>, "many">;
                    pagination: import("zod").ZodOptional<import("zod").ZodObject<{
                        total: import("zod").ZodNumber;
                        limit: import("zod").ZodNumber;
                        offset: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        limit: number;
                        total: number;
                        offset: number;
                    }, {
                        limit: number;
                        total: number;
                        offset: number;
                    }>>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
                }, {
                    message: string;
                    data: {
                        id: number;
                        is_active: boolean;
                        uuid: string;
                        user_uid: string;
                        created_at: string;
                        notes: string | null;
                        updated_at: string;
                        name: string;
                        currency: string;
                        deleted_at: string | null;
                        budget_period: "monthly" | "quarterly" | "yearly";
                        start_date: string;
                        end_date: string;
                        total_amount: number;
                        settings?: any;
                    }[];
                    pagination?: {
                        limit: number;
                        total: number;
                        offset: number;
                    } | undefined;
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
            strictStatusCodes: true;
        };
    };
    Dashboard: {
        getDashboard: {
            summary: "Obtener datos completos del dashboard";
            description: "Retorna todos los datos necesarios para mostrar el dashboard completo del usuario, incluyendo balance, presupuestos, metas de ahorro, indicadores financieros, movimientos recientes y más.";
            method: "GET";
            path: "/api/dashboard";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        balance: import("zod").ZodObject<{
                            available: import("zod").ZodNumber;
                            currency: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            currency: string;
                            available: number;
                        }, {
                            currency: string;
                            available: number;
                        }>;
                        monthlySummary: import("zod").ZodObject<{
                            income: import("zod").ZodNumber;
                            expenses: import("zod").ZodNumber;
                            debts: import("zod").ZodNumber;
                            netBalance: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        }, {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        }>;
                        budgets: import("zod").ZodObject<{
                            income: import("zod").ZodObject<{
                                active: import("zod").ZodNumber;
                                flexible: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                active: number;
                                flexible: number;
                            }, {
                                active: number;
                                flexible: number;
                            }>;
                            expenses: import("zod").ZodObject<{
                                fixed: import("zod").ZodNumber;
                                flexible: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                fixed: number;
                                flexible: number;
                            }, {
                                fixed: number;
                                flexible: number;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        }, {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        }>;
                        savingGoals: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            currentAmount: import("zod").ZodNumber;
                            targetAmount: import("zod").ZodNumber;
                            progress: import("zod").ZodNumber;
                            color: import("zod").ZodOptional<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }, {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }>, "many">;
                        financialIndicators: import("zod").ZodObject<{
                            health: import("zod").ZodObject<{
                                score: import("zod").ZodNumber;
                                description: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                description: string;
                                score: number;
                            }, {
                                description: string;
                                score: number;
                            }>;
                            cashFlow: import("zod").ZodObject<{
                                amount: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<["positive", "negative", "neutral"]>;
                            }, "strip", import("zod").ZodTypeAny, {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            }, {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            }>;
                            savingsRate: import("zod").ZodObject<{
                                percentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<["excellent", "good", "needs_improvement"]>;
                            }, "strip", import("zod").ZodTypeAny, {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            }, {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            }>;
                            debtToIncomeRatio: import("zod").ZodObject<{
                                percentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<["healthy", "moderate", "high_risk"]>;
                            }, "strip", import("zod").ZodTypeAny, {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            }, {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        }, {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        }>;
                        recentMovements: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            description: import("zod").ZodString;
                            amount: import("zod").ZodNumber;
                            type: import("zod").ZodEnum<["income", "expense"]>;
                            date: import("zod").ZodDate;
                            status: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }, {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }>, "many">;
                        upcomingEvents: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            description: import("zod").ZodString;
                            date: import("zod").ZodDate;
                            amount: import("zod").ZodNumber;
                            type: import("zod").ZodEnum<["income", "expense"]>;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }, {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }>, "many">;
                        expenseDistribution: import("zod").ZodArray<import("zod").ZodObject<{
                            category: import("zod").ZodString;
                            percentage: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }, {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }>, "many">;
                        recommendations: import("zod").ZodArray<import("zod").ZodString, "many">;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        budgets: {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        };
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        financialIndicators: {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        };
                        recentMovements: {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        upcomingEvents: {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        expenseDistribution: {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }[];
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    }, {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        budgets: {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        };
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        financialIndicators: {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        };
                        recentMovements: {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        upcomingEvents: {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        expenseDistribution: {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }[];
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        budgets: {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        };
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        financialIndicators: {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        };
                        recentMovements: {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        upcomingEvents: {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        expenseDistribution: {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }[];
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    };
                    success: true;
                }, {
                    message: string;
                    data: {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        budgets: {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        };
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        financialIndicators: {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        };
                        recentMovements: {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        upcomingEvents: {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        expenseDistribution: {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }[];
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    };
                    success: true;
                }>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
            };
            strictStatusCodes: true;
        };
        getDashboardSummary: {
            summary: "Obtener resumen del dashboard";
            description: "Retorna solo los datos esenciales del dashboard para carga rápida: balance, resumen mensual y estado de sincronización.";
            method: "GET";
            path: "/api/dashboard/summary";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        balance: import("zod").ZodObject<{
                            available: import("zod").ZodNumber;
                            currency: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            currency: string;
                            available: number;
                        }, {
                            currency: string;
                            available: number;
                        }>;
                        monthlySummary: import("zod").ZodObject<{
                            income: import("zod").ZodNumber;
                            expenses: import("zod").ZodNumber;
                            debts: import("zod").ZodNumber;
                            netBalance: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        }, {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        }>;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    }, {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    };
                    success: true;
                }, {
                    message: string;
                    data: {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    };
                    success: true;
                }>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
            };
            strictStatusCodes: true;
        };
        refreshDashboard: {
            summary: "Actualizar datos del dashboard";
            description: "Fuerza la sincronización de datos bancarios y regenera los datos del dashboard con información actualizada.";
            method: "POST";
            body: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
            path: "/api/dashboard/refresh";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        balance: import("zod").ZodObject<{
                            available: import("zod").ZodNumber;
                            currency: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            currency: string;
                            available: number;
                        }, {
                            currency: string;
                            available: number;
                        }>;
                        monthlySummary: import("zod").ZodObject<{
                            income: import("zod").ZodNumber;
                            expenses: import("zod").ZodNumber;
                            debts: import("zod").ZodNumber;
                            netBalance: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        }, {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        }>;
                        budgets: import("zod").ZodObject<{
                            income: import("zod").ZodObject<{
                                active: import("zod").ZodNumber;
                                flexible: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                active: number;
                                flexible: number;
                            }, {
                                active: number;
                                flexible: number;
                            }>;
                            expenses: import("zod").ZodObject<{
                                fixed: import("zod").ZodNumber;
                                flexible: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                fixed: number;
                                flexible: number;
                            }, {
                                fixed: number;
                                flexible: number;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        }, {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        }>;
                        savingGoals: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            currentAmount: import("zod").ZodNumber;
                            targetAmount: import("zod").ZodNumber;
                            progress: import("zod").ZodNumber;
                            color: import("zod").ZodOptional<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }, {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }>, "many">;
                        financialIndicators: import("zod").ZodObject<{
                            health: import("zod").ZodObject<{
                                score: import("zod").ZodNumber;
                                description: import("zod").ZodString;
                            }, "strip", import("zod").ZodTypeAny, {
                                description: string;
                                score: number;
                            }, {
                                description: string;
                                score: number;
                            }>;
                            cashFlow: import("zod").ZodObject<{
                                amount: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<["positive", "negative", "neutral"]>;
                            }, "strip", import("zod").ZodTypeAny, {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            }, {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            }>;
                            savingsRate: import("zod").ZodObject<{
                                percentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<["excellent", "good", "needs_improvement"]>;
                            }, "strip", import("zod").ZodTypeAny, {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            }, {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            }>;
                            debtToIncomeRatio: import("zod").ZodObject<{
                                percentage: import("zod").ZodNumber;
                                status: import("zod").ZodEnum<["healthy", "moderate", "high_risk"]>;
                            }, "strip", import("zod").ZodTypeAny, {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            }, {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            }>;
                        }, "strip", import("zod").ZodTypeAny, {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        }, {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        }>;
                        recentMovements: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            description: import("zod").ZodString;
                            amount: import("zod").ZodNumber;
                            type: import("zod").ZodEnum<["income", "expense"]>;
                            date: import("zod").ZodDate;
                            status: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }, {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }>, "many">;
                        upcomingEvents: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodString;
                            description: import("zod").ZodString;
                            date: import("zod").ZodDate;
                            amount: import("zod").ZodNumber;
                            type: import("zod").ZodEnum<["income", "expense"]>;
                        }, "strip", import("zod").ZodTypeAny, {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }, {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }>, "many">;
                        expenseDistribution: import("zod").ZodArray<import("zod").ZodObject<{
                            category: import("zod").ZodString;
                            percentage: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }, {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }>, "many">;
                        recommendations: import("zod").ZodArray<import("zod").ZodString, "many">;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        budgets: {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        };
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        financialIndicators: {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        };
                        recentMovements: {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        upcomingEvents: {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        expenseDistribution: {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }[];
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    }, {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        budgets: {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        };
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        financialIndicators: {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        };
                        recentMovements: {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        upcomingEvents: {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        expenseDistribution: {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }[];
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        budgets: {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        };
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        financialIndicators: {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        };
                        recentMovements: {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        upcomingEvents: {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        expenseDistribution: {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }[];
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    };
                    success: true;
                }, {
                    message: string;
                    data: {
                        balance: {
                            currency: string;
                            available: number;
                        };
                        monthlySummary: {
                            income: number;
                            expenses: number;
                            debts: number;
                            netBalance: number;
                        };
                        budgets: {
                            income: {
                                active: number;
                                flexible: number;
                            };
                            expenses: {
                                fixed: number;
                                flexible: number;
                            };
                        };
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        financialIndicators: {
                            health: {
                                description: string;
                                score: number;
                            };
                            cashFlow: {
                                status: "positive" | "negative" | "neutral";
                                amount: number;
                            };
                            savingsRate: {
                                status: "excellent" | "good" | "needs_improvement";
                                percentage: number;
                            };
                            debtToIncomeRatio: {
                                status: "healthy" | "moderate" | "high_risk";
                                percentage: number;
                            };
                        };
                        recentMovements: {
                            type: "income" | "expense";
                            status: string;
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        upcomingEvents: {
                            type: "income" | "expense";
                            id: string;
                            date: Date;
                            description: string;
                            amount: number;
                        }[];
                        expenseDistribution: {
                            color: string;
                            amount: number;
                            percentage: number;
                            category: string;
                        }[];
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                    };
                    success: true;
                }>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
            };
            strictStatusCodes: true;
        };
    };
    CreditUtilization: {
        getCreditUtilization: {
            summary: "Obtener datos de utilización de crédito";
            description: "Retorna todos los datos necesarios para mostrar la pantalla de utilización de crédito, incluyendo métricas de crédito, tarjetas, historial de pagos, gastos mensuales y recomendaciones.";
            method: "GET";
            path: "/api/credit-utilization";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        creditMetrics: import("zod").ZodObject<{
                            availableCredit: import("zod").ZodNumber;
                            totalLimit: import("zod").ZodNumber;
                            utilizationPercentage: import("zod").ZodNumber;
                            recommendedUtilization: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        }, {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        }>;
                        creditCards: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            bankName: import("zod").ZodString;
                            cardType: import("zod").ZodString;
                            utilizedPercentage: import("zod").ZodNumber;
                            totalLimit: import("zod").ZodNumber;
                            availableAmount: import("zod").ZodNumber;
                            usedAmount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }, {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }>, "many">;
                        paymentHistory: import("zod").ZodObject<{
                            onTimePayments: import("zod").ZodNumber;
                            averagePayment: import("zod").ZodNumber;
                            totalPayments: import("zod").ZodNumber;
                            latePayments: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        }, {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        }>;
                        monthlySpending: import("zod").ZodArray<import("zod").ZodObject<{
                            month: import("zod").ZodString;
                            year: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            monthName: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }, {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }>, "many">;
                        creditProductsSummary: import("zod").ZodObject<{
                            activeCreditCards: import("zod").ZodNumber;
                            activeLoans: import("zod").ZodNumber;
                            availableCreditLines: import("zod").ZodNumber;
                            totalCreditLimit: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        }, {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        }>;
                        recommendations: import("zod").ZodArray<import("zod").ZodString, "many">;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        creditMetrics: {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        };
                        creditCards: {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }[];
                        paymentHistory: {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        };
                        monthlySpending: {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }[];
                        creditProductsSummary: {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        };
                    }, {
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        creditMetrics: {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        };
                        creditCards: {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }[];
                        paymentHistory: {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        };
                        monthlySpending: {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }[];
                        creditProductsSummary: {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        };
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        creditMetrics: {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        };
                        creditCards: {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }[];
                        paymentHistory: {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        };
                        monthlySpending: {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }[];
                        creditProductsSummary: {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        };
                    };
                    success: true;
                }, {
                    message: string;
                    data: {
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        creditMetrics: {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        };
                        creditCards: {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }[];
                        paymentHistory: {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        };
                        monthlySpending: {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }[];
                        creditProductsSummary: {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        };
                    };
                    success: true;
                }>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
            };
            strictStatusCodes: true;
        };
        refreshCreditUtilization: {
            summary: "Actualizar datos de utilización de crédito";
            description: "Fuerza la sincronización de datos bancarios y regenera los datos de utilización de crédito con información actualizada.";
            method: "POST";
            body: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
            path: "/api/credit-utilization/refresh";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        creditMetrics: import("zod").ZodObject<{
                            availableCredit: import("zod").ZodNumber;
                            totalLimit: import("zod").ZodNumber;
                            utilizationPercentage: import("zod").ZodNumber;
                            recommendedUtilization: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        }, {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        }>;
                        creditCards: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            bankName: import("zod").ZodString;
                            cardType: import("zod").ZodString;
                            utilizedPercentage: import("zod").ZodNumber;
                            totalLimit: import("zod").ZodNumber;
                            availableAmount: import("zod").ZodNumber;
                            usedAmount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }, {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }>, "many">;
                        paymentHistory: import("zod").ZodObject<{
                            onTimePayments: import("zod").ZodNumber;
                            averagePayment: import("zod").ZodNumber;
                            totalPayments: import("zod").ZodNumber;
                            latePayments: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        }, {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        }>;
                        monthlySpending: import("zod").ZodArray<import("zod").ZodObject<{
                            month: import("zod").ZodString;
                            year: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            monthName: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }, {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }>, "many">;
                        creditProductsSummary: import("zod").ZodObject<{
                            activeCreditCards: import("zod").ZodNumber;
                            activeLoans: import("zod").ZodNumber;
                            availableCreditLines: import("zod").ZodNumber;
                            totalCreditLimit: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        }, {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        }>;
                        recommendations: import("zod").ZodArray<import("zod").ZodString, "many">;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        creditMetrics: {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        };
                        creditCards: {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }[];
                        paymentHistory: {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        };
                        monthlySpending: {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }[];
                        creditProductsSummary: {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        };
                    }, {
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        creditMetrics: {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        };
                        creditCards: {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }[];
                        paymentHistory: {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        };
                        monthlySpending: {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }[];
                        creditProductsSummary: {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        };
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        creditMetrics: {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        };
                        creditCards: {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }[];
                        paymentHistory: {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        };
                        monthlySpending: {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }[];
                        creditProductsSummary: {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        };
                    };
                    success: true;
                }, {
                    message: string;
                    data: {
                        recommendations: string[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        creditMetrics: {
                            availableCredit: number;
                            totalLimit: number;
                            utilizationPercentage: number;
                            recommendedUtilization: number;
                        };
                        creditCards: {
                            id: number;
                            name: string;
                            color: string;
                            totalLimit: number;
                            bankName: string;
                            cardType: string;
                            utilizedPercentage: number;
                            availableAmount: number;
                            usedAmount: number;
                        }[];
                        paymentHistory: {
                            onTimePayments: number;
                            averagePayment: number;
                            totalPayments: number;
                            latePayments: number;
                        };
                        monthlySpending: {
                            amount: number;
                            month: string;
                            year: number;
                            monthName: string;
                        }[];
                        creditProductsSummary: {
                            activeCreditCards: number;
                            activeLoans: number;
                            availableCreditLines: number;
                            totalCreditLimit: number;
                        };
                    };
                    success: true;
                }>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
            };
            strictStatusCodes: true;
        };
    };
    FinancialTrends: {
        getFinancialTrends: {
            summary: "Obtener datos de tendencias financieras";
            description: "Retorna todos los datos necesarios para mostrar la pantalla de tendencias financieras, incluyendo comparaciones mensuales, crecimiento por categorías, proyecciones de fin de mes y metas de ahorro.";
            method: "GET";
            path: "/api/financial-trends";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        monthlyComparison: import("zod").ZodObject<{
                            savingsVsPreviousMonth: import("zod").ZodNumber;
                            expensesVsPreviousMonth: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        }, {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        }>;
                        categoryGrowth: import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            percentageChange: import("zod").ZodNumber;
                            trend: import("zod").ZodEnum<["up", "down", "neutral"]>;
                        }, "strip", import("zod").ZodTypeAny, {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }, {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }>, "many">;
                        monthEndProjection: import("zod").ZodObject<{
                            projectedBalance: import("zod").ZodNumber;
                            estimatedSavings: import("zod").ZodNumber;
                            balanceTrend: import("zod").ZodEnum<["up", "down", "neutral"]>;
                            savingsTrend: import("zod").ZodEnum<["up", "down", "neutral"]>;
                        }, "strip", import("zod").ZodTypeAny, {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        }, {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        }>;
                        savingGoals: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            currentAmount: import("zod").ZodNumber;
                            targetAmount: import("zod").ZodNumber;
                            progress: import("zod").ZodNumber;
                            color: import("zod").ZodOptional<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }, {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }>, "many">;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        monthlyComparison: {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        };
                        categoryGrowth: {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }[];
                        monthEndProjection: {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        };
                    }, {
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        monthlyComparison: {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        };
                        categoryGrowth: {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }[];
                        monthEndProjection: {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        };
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        monthlyComparison: {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        };
                        categoryGrowth: {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }[];
                        monthEndProjection: {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        };
                    };
                    success: true;
                }, {
                    message: string;
                    data: {
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        monthlyComparison: {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        };
                        categoryGrowth: {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }[];
                        monthEndProjection: {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        };
                    };
                    success: true;
                }>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
            };
            strictStatusCodes: true;
        };
        refreshFinancialTrends: {
            summary: "Actualizar datos de tendencias financieras";
            description: "Fuerza la sincronización de datos bancarios y regenera los datos de tendencias financieras con información actualizada.";
            method: "POST";
            body: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
            path: "/api/financial-trends/refresh";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<true>;
                    data: import("zod").ZodObject<{
                        monthlyComparison: import("zod").ZodObject<{
                            savingsVsPreviousMonth: import("zod").ZodNumber;
                            expensesVsPreviousMonth: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        }, {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        }>;
                        categoryGrowth: import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            percentageChange: import("zod").ZodNumber;
                            trend: import("zod").ZodEnum<["up", "down", "neutral"]>;
                        }, "strip", import("zod").ZodTypeAny, {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }, {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }>, "many">;
                        monthEndProjection: import("zod").ZodObject<{
                            projectedBalance: import("zod").ZodNumber;
                            estimatedSavings: import("zod").ZodNumber;
                            balanceTrend: import("zod").ZodEnum<["up", "down", "neutral"]>;
                            savingsTrend: import("zod").ZodEnum<["up", "down", "neutral"]>;
                        }, "strip", import("zod").ZodTypeAny, {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        }, {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        }>;
                        savingGoals: import("zod").ZodArray<import("zod").ZodObject<{
                            id: import("zod").ZodNumber;
                            name: import("zod").ZodString;
                            currentAmount: import("zod").ZodNumber;
                            targetAmount: import("zod").ZodNumber;
                            progress: import("zod").ZodNumber;
                            color: import("zod").ZodOptional<import("zod").ZodString>;
                        }, "strip", import("zod").ZodTypeAny, {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }, {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }>, "many">;
                        syncStatus: import("zod").ZodObject<{
                            lastSync: import("zod").ZodNullable<import("zod").ZodDate>;
                            needsSync: import("zod").ZodBoolean;
                        }, "strip", import("zod").ZodTypeAny, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }, {
                            lastSync: Date | null;
                            needsSync: boolean;
                        }>;
                    }, "strip", import("zod").ZodTypeAny, {
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        monthlyComparison: {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        };
                        categoryGrowth: {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }[];
                        monthEndProjection: {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        };
                    }, {
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        monthlyComparison: {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        };
                        categoryGrowth: {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }[];
                        monthEndProjection: {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        };
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        monthlyComparison: {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        };
                        categoryGrowth: {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }[];
                        monthEndProjection: {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        };
                    };
                    success: true;
                }, {
                    message: string;
                    data: {
                        savingGoals: {
                            id: number;
                            name: string;
                            currentAmount: number;
                            targetAmount: number;
                            progress: number;
                            color?: string | undefined;
                        }[];
                        syncStatus: {
                            lastSync: Date | null;
                            needsSync: boolean;
                        };
                        monthlyComparison: {
                            savingsVsPreviousMonth: number;
                            expensesVsPreviousMonth: number;
                        };
                        categoryGrowth: {
                            name: string;
                            percentageChange: number;
                            trend: "neutral" | "up" | "down";
                        }[];
                        monthEndProjection: {
                            projectedBalance: number;
                            estimatedSavings: number;
                            balanceTrend: "neutral" | "up" | "down";
                            savingsTrend: "neutral" | "up" | "down";
                        };
                    };
                    success: true;
                }>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    message: import("zod").ZodString;
                    error: import("zod").ZodOptional<import("zod").ZodAny>;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    success: false;
                    error?: any;
                }, {
                    message: string;
                    success: false;
                    error?: any;
                }>;
            };
            strictStatusCodes: true;
        };
    };
    Reports: {
        getReports: {
            summary: "Obtener reportes financieros completos";
            description: "Retorna resumen financiero, tendencia mensual y distribución de gastos";
            method: "GET";
            path: "/api/reports";
            responses: {
                200: import("zod").ZodObject<{
                    success: import("zod").ZodBoolean;
                    data: import("zod").ZodObject<{
                        summary: import("zod").ZodObject<{
                            income: import("zod").ZodNumber;
                            expenses: import("zod").ZodNumber;
                            netSavings: import("zod").ZodNumber;
                            savingsRate: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            income: number;
                            expenses: number;
                            savingsRate: number;
                            netSavings: number;
                        }, {
                            income: number;
                            expenses: number;
                            savingsRate: number;
                            netSavings: number;
                        }>;
                        monthlyTrend: import("zod").ZodObject<{
                            months: import("zod").ZodArray<import("zod").ZodString, "many">;
                            income: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                            expenses: import("zod").ZodArray<import("zod").ZodNumber, "many">;
                            period: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            period: string;
                            income: number[];
                            expenses: number[];
                            months: string[];
                        }, {
                            period: string;
                            income: number[];
                            expenses: number[];
                            months: string[];
                        }>;
                        expenseDistribution: import("zod").ZodArray<import("zod").ZodObject<{
                            name: import("zod").ZodString;
                            percentage: import("zod").ZodNumber;
                            amount: import("zod").ZodNumber;
                            color: import("zod").ZodString;
                        }, "strip", import("zod").ZodTypeAny, {
                            name: string;
                            color: string;
                            amount: number;
                            percentage: number;
                        }, {
                            name: string;
                            color: string;
                            amount: number;
                            percentage: number;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
                        summary: {
                            income: number;
                            expenses: number;
                            savingsRate: number;
                            netSavings: number;
                        };
                        expenseDistribution: {
                            name: string;
                            color: string;
                            amount: number;
                            percentage: number;
                        }[];
                        monthlyTrend: {
                            period: string;
                            income: number[];
                            expenses: number[];
                            months: string[];
                        };
                    }, {
                        summary: {
                            income: number;
                            expenses: number;
                            savingsRate: number;
                            netSavings: number;
                        };
                        expenseDistribution: {
                            name: string;
                            color: string;
                            amount: number;
                            percentage: number;
                        }[];
                        monthlyTrend: {
                            period: string;
                            income: number[];
                            expenses: number[];
                            months: string[];
                        };
                    }>;
                    message: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    message: string;
                    data: {
                        summary: {
                            income: number;
                            expenses: number;
                            savingsRate: number;
                            netSavings: number;
                        };
                        expenseDistribution: {
                            name: string;
                            color: string;
                            amount: number;
                            percentage: number;
                        }[];
                        monthlyTrend: {
                            period: string;
                            income: number[];
                            expenses: number[];
                            months: string[];
                        };
                    };
                    success: boolean;
                }, {
                    message: string;
                    data: {
                        summary: {
                            income: number;
                            expenses: number;
                            savingsRate: number;
                            netSavings: number;
                        };
                        expenseDistribution: {
                            name: string;
                            color: string;
                            amount: number;
                            percentage: number;
                        }[];
                        monthlyTrend: {
                            period: string;
                            income: number[];
                            expenses: number[];
                            months: string[];
                        };
                    };
                    success: boolean;
                }>;
                401: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodObject<{
                        message: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        message: string;
                    }, {
                        message: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        message: string;
                    };
                    success: false;
                }, {
                    error: {
                        message: string;
                    };
                    success: false;
                }>;
                500: import("zod").ZodObject<{
                    success: import("zod").ZodLiteral<false>;
                    error: import("zod").ZodObject<{
                        message: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        message: string;
                    }, {
                        message: string;
                    }>;
                }, "strip", import("zod").ZodTypeAny, {
                    error: {
                        message: string;
                    };
                    success: false;
                }, {
                    error: {
                        message: string;
                    };
                    success: false;
                }>;
            };
            strictStatusCodes: true;
        };
    };
};
