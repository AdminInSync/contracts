import { z } from 'zod';
export declare const ProviderDataSchema: z.ZodObject<{
    providerId: z.ZodString;
    uid: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    displayName: z.ZodNullable<z.ZodString>;
    photoURL: z.ZodNullable<z.ZodString>;
    phoneNumber: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
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
}>;
export declare const MultiFactorSchema: z.ZodObject<{
    enrolled_factors: z.ZodArray<z.ZodObject<{
        uid: z.ZodString;
        display_name: z.ZodNullable<z.ZodString>;
        enrollment_time: z.ZodString;
        factor_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
export declare const UserResponseSchema: z.ZodObject<{
    firebase_uid: z.ZodString;
    email: z.ZodString;
    display_name: z.ZodNullable<z.ZodString>;
    photo_url: z.ZodNullable<z.ZodString>;
    email_verified: z.ZodBoolean;
    is_active: z.ZodBoolean;
    phone_number: z.ZodNullable<z.ZodString>;
    creation_time: z.ZodNullable<z.ZodString>;
    last_sign_in_time: z.ZodNullable<z.ZodString>;
    last_refresh_time: z.ZodNullable<z.ZodString>;
    provider_data: z.ZodArray<z.ZodObject<{
        providerId: z.ZodString;
        uid: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
        displayName: z.ZodNullable<z.ZodString>;
        photoURL: z.ZodNullable<z.ZodString>;
        phoneNumber: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    provider_id: z.ZodString;
    custom_claims: z.ZodRecord<z.ZodString, z.ZodAny>;
    tenant_id: z.ZodNullable<z.ZodString>;
    multi_factor: z.ZodObject<{
        enrolled_factors: z.ZodArray<z.ZodObject<{
            uid: z.ZodString;
            display_name: z.ZodNullable<z.ZodString>;
            enrollment_time: z.ZodString;
            factor_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
export declare const MeResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        user: z.ZodObject<{
            firebase_uid: z.ZodString;
            email: z.ZodString;
            display_name: z.ZodNullable<z.ZodString>;
            photo_url: z.ZodNullable<z.ZodString>;
            email_verified: z.ZodBoolean;
            is_active: z.ZodBoolean;
            phone_number: z.ZodNullable<z.ZodString>;
            creation_time: z.ZodNullable<z.ZodString>;
            last_sign_in_time: z.ZodNullable<z.ZodString>;
            last_refresh_time: z.ZodNullable<z.ZodString>;
            provider_data: z.ZodArray<z.ZodObject<{
                providerId: z.ZodString;
                uid: z.ZodString;
                email: z.ZodNullable<z.ZodString>;
                displayName: z.ZodNullable<z.ZodString>;
                photoURL: z.ZodNullable<z.ZodString>;
                phoneNumber: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
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
            provider_id: z.ZodString;
            custom_claims: z.ZodRecord<z.ZodString, z.ZodAny>;
            tenant_id: z.ZodNullable<z.ZodString>;
            multi_factor: z.ZodObject<{
                enrolled_factors: z.ZodArray<z.ZodObject<{
                    uid: z.ZodString;
                    display_name: z.ZodNullable<z.ZodString>;
                    enrollment_time: z.ZodString;
                    factor_id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
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
            }, "strip", z.ZodTypeAny, {
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
        }, "strip", z.ZodTypeAny, {
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
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
export type UserResponse = z.infer<typeof UserResponseSchema>;
export type MeResponse = z.infer<typeof MeResponseSchema>;
