import { z } from 'zod';
export declare const ProviderDataSchema: z.ZodObject<{
    providerId: z.ZodString;
    uid: z.ZodString;
    email: z.ZodNullable<z.ZodString>;
    displayName: z.ZodNullable<z.ZodString>;
    photoURL: z.ZodNullable<z.ZodString>;
    phoneNumber: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const MultiFactorSchema: z.ZodObject<{
    enrolled_factors: z.ZodArray<z.ZodObject<{
        uid: z.ZodString;
        display_name: z.ZodNullable<z.ZodString>;
        enrollment_time: z.ZodString;
        factor_id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
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
    }, z.core.$strip>>;
    provider_id: z.ZodString;
    custom_claims: z.ZodRecord<z.ZodString, z.ZodAny>;
    tenant_id: z.ZodNullable<z.ZodString>;
    multi_factor: z.ZodObject<{
        enrolled_factors: z.ZodArray<z.ZodObject<{
            uid: z.ZodString;
            display_name: z.ZodNullable<z.ZodString>;
            enrollment_time: z.ZodString;
            factor_id: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
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
            }, z.core.$strip>>;
            provider_id: z.ZodString;
            custom_claims: z.ZodRecord<z.ZodString, z.ZodAny>;
            tenant_id: z.ZodNullable<z.ZodString>;
            multi_factor: z.ZodObject<{
                enrolled_factors: z.ZodArray<z.ZodObject<{
                    uid: z.ZodString;
                    display_name: z.ZodNullable<z.ZodString>;
                    enrollment_time: z.ZodString;
                    factor_id: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UserResponse = z.infer<typeof UserResponseSchema>;
export type MeResponse = z.infer<typeof MeResponseSchema>;
