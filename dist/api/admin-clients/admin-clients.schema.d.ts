import { z } from 'zod';
import { DocumentStatus, DocumentType } from '../../enums';
export declare const GetClientsQuerySchema: z.ZodObject<{
    activation_phase: z.ZodOptional<z.ZodEnum<["account_created", "registration_started", "document_submitted", "registration_completed", "email_connected", "product_linked"]>>;
    is_beta_tester: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    is_beta_tester?: boolean | undefined;
    activation_phase?: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked" | undefined;
}, {
    is_beta_tester?: unknown;
    activation_phase?: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked" | undefined;
}>;
export declare const ClientListItemSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    email_verified: z.ZodBoolean;
    phone: z.ZodNullable<z.ZodString>;
    activation_phase: z.ZodEnum<["account_created", "registration_started", "document_submitted", "registration_completed", "email_connected", "product_linked"]>;
    is_beta_tester: z.ZodBoolean;
    is_active: z.ZodBoolean;
    created_at: z.ZodString;
    last_login_at: z.ZodNullable<z.ZodString>;
    product_count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    email_verified: boolean;
    is_active: boolean;
    created_at: string;
    last_name: string;
    name: string;
    last_login_at: string | null;
    is_beta_tester: boolean;
    activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
    product_count: number;
    phone: string | null;
}, {
    id: string;
    email: string;
    email_verified: boolean;
    is_active: boolean;
    created_at: string;
    last_name: string;
    name: string;
    last_login_at: string | null;
    is_beta_tester: boolean;
    activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
    product_count: number;
    phone: string | null;
}>;
export declare const ClientDeviceSchema: z.ZodObject<{
    id: z.ZodString;
    device_unique_id: z.ZodString;
    notes: z.ZodString;
    created_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    created_at: string;
    device_unique_id: string;
    notes: string;
}, {
    id: string;
    created_at: string;
    device_unique_id: string;
    notes: string;
}>;
export declare const ClientPreferencesSchema: z.ZodObject<{
    are_push_notifications_enabled: z.ZodBoolean;
    are_transaction_alerts_enabled: z.ZodBoolean;
    are_notification_sounds_enabled: z.ZodBoolean;
    is_vibration_enabled: z.ZodBoolean;
    is_biometric_auth_enabled: z.ZodBoolean;
    auto_lock_after_minutes: z.ZodNumber;
    is_auto_sync_enabled: z.ZodBoolean;
    is_cloud_backup_enabled: z.ZodBoolean;
    preferred_theme: z.ZodEnum<["SYSTEM", "LIGHT", "DARK"]>;
}, "strip", z.ZodTypeAny, {
    are_push_notifications_enabled: boolean;
    are_transaction_alerts_enabled: boolean;
    are_notification_sounds_enabled: boolean;
    is_vibration_enabled: boolean;
    is_biometric_auth_enabled: boolean;
    auto_lock_after_minutes: number;
    is_auto_sync_enabled: boolean;
    is_cloud_backup_enabled: boolean;
    preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
}, {
    are_push_notifications_enabled: boolean;
    are_transaction_alerts_enabled: boolean;
    are_notification_sounds_enabled: boolean;
    is_vibration_enabled: boolean;
    is_biometric_auth_enabled: boolean;
    auto_lock_after_minutes: number;
    is_auto_sync_enabled: boolean;
    is_cloud_backup_enabled: boolean;
    preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
}>;
export declare const ClientProductSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    institution_name: z.ZodNullable<z.ZodString>;
    product_type: z.ZodString;
    account_last4: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    product_type: string;
    institution_name: string | null;
    account_last4: string;
}, {
    id: string;
    name: string;
    product_type: string;
    institution_name: string | null;
    account_last4: string;
}>;
export declare const ClientDetailSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    last_name: z.ZodString;
    email: z.ZodString;
    email_verified: z.ZodBoolean;
    phone: z.ZodNullable<z.ZodString>;
    activation_phase: z.ZodEnum<["account_created", "registration_started", "document_submitted", "registration_completed", "email_connected", "product_linked"]>;
    is_beta_tester: z.ZodBoolean;
    is_active: z.ZodBoolean;
    created_at: z.ZodString;
    last_login_at: z.ZodNullable<z.ZodString>;
    product_count: z.ZodNumber;
} & {
    document_type: z.ZodNullable<z.ZodNativeEnum<typeof DocumentType>>;
    document_number: z.ZodNullable<z.ZodString>;
    document_status: z.ZodNullable<z.ZodNativeEnum<typeof DocumentStatus>>;
    devices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        device_unique_id: z.ZodString;
        notes: z.ZodString;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        created_at: string;
        device_unique_id: string;
        notes: string;
    }, {
        id: string;
        created_at: string;
        device_unique_id: string;
        notes: string;
    }>, "many">;
    preferences: z.ZodNullable<z.ZodObject<{
        are_push_notifications_enabled: z.ZodBoolean;
        are_transaction_alerts_enabled: z.ZodBoolean;
        are_notification_sounds_enabled: z.ZodBoolean;
        is_vibration_enabled: z.ZodBoolean;
        is_biometric_auth_enabled: z.ZodBoolean;
        auto_lock_after_minutes: z.ZodNumber;
        is_auto_sync_enabled: z.ZodBoolean;
        is_cloud_backup_enabled: z.ZodBoolean;
        preferred_theme: z.ZodEnum<["SYSTEM", "LIGHT", "DARK"]>;
    }, "strip", z.ZodTypeAny, {
        are_push_notifications_enabled: boolean;
        are_transaction_alerts_enabled: boolean;
        are_notification_sounds_enabled: boolean;
        is_vibration_enabled: boolean;
        is_biometric_auth_enabled: boolean;
        auto_lock_after_minutes: number;
        is_auto_sync_enabled: boolean;
        is_cloud_backup_enabled: boolean;
        preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
    }, {
        are_push_notifications_enabled: boolean;
        are_transaction_alerts_enabled: boolean;
        are_notification_sounds_enabled: boolean;
        is_vibration_enabled: boolean;
        is_biometric_auth_enabled: boolean;
        auto_lock_after_minutes: number;
        is_auto_sync_enabled: boolean;
        is_cloud_backup_enabled: boolean;
        preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
    }>>;
    products: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        institution_name: z.ZodNullable<z.ZodString>;
        product_type: z.ZodString;
        account_last4: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        product_type: string;
        institution_name: string | null;
        account_last4: string;
    }, {
        id: string;
        name: string;
        product_type: string;
        institution_name: string | null;
        account_last4: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    email_verified: boolean;
    is_active: boolean;
    document_number: string | null;
    created_at: string;
    last_name: string;
    name: string;
    products: {
        id: string;
        name: string;
        product_type: string;
        institution_name: string | null;
        account_last4: string;
    }[];
    last_login_at: string | null;
    is_beta_tester: boolean;
    activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
    product_count: number;
    phone: string | null;
    document_type: DocumentType | null;
    document_status: DocumentStatus | null;
    devices: {
        id: string;
        created_at: string;
        device_unique_id: string;
        notes: string;
    }[];
    preferences: {
        are_push_notifications_enabled: boolean;
        are_transaction_alerts_enabled: boolean;
        are_notification_sounds_enabled: boolean;
        is_vibration_enabled: boolean;
        is_biometric_auth_enabled: boolean;
        auto_lock_after_minutes: number;
        is_auto_sync_enabled: boolean;
        is_cloud_backup_enabled: boolean;
        preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
    } | null;
}, {
    id: string;
    email: string;
    email_verified: boolean;
    is_active: boolean;
    document_number: string | null;
    created_at: string;
    last_name: string;
    name: string;
    products: {
        id: string;
        name: string;
        product_type: string;
        institution_name: string | null;
        account_last4: string;
    }[];
    last_login_at: string | null;
    is_beta_tester: boolean;
    activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
    product_count: number;
    phone: string | null;
    document_type: DocumentType | null;
    document_status: DocumentStatus | null;
    devices: {
        id: string;
        created_at: string;
        device_unique_id: string;
        notes: string;
    }[];
    preferences: {
        are_push_notifications_enabled: boolean;
        are_transaction_alerts_enabled: boolean;
        are_notification_sounds_enabled: boolean;
        is_vibration_enabled: boolean;
        is_biometric_auth_enabled: boolean;
        auto_lock_after_minutes: number;
        is_auto_sync_enabled: boolean;
        is_cloud_backup_enabled: boolean;
        preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
    } | null;
}>;
export declare const ClientListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodString;
        email_verified: z.ZodBoolean;
        phone: z.ZodNullable<z.ZodString>;
        activation_phase: z.ZodEnum<["account_created", "registration_started", "document_submitted", "registration_completed", "email_connected", "product_linked"]>;
        is_beta_tester: z.ZodBoolean;
        is_active: z.ZodBoolean;
        created_at: z.ZodString;
        last_login_at: z.ZodNullable<z.ZodString>;
        product_count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        email_verified: boolean;
        is_active: boolean;
        created_at: string;
        last_name: string;
        name: string;
        last_login_at: string | null;
        is_beta_tester: boolean;
        activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
        product_count: number;
        phone: string | null;
    }, {
        id: string;
        email: string;
        email_verified: boolean;
        is_active: boolean;
        created_at: string;
        last_name: string;
        name: string;
        last_login_at: string | null;
        is_beta_tester: boolean;
        activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
        product_count: number;
        phone: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        id: string;
        email: string;
        email_verified: boolean;
        is_active: boolean;
        created_at: string;
        last_name: string;
        name: string;
        last_login_at: string | null;
        is_beta_tester: boolean;
        activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
        product_count: number;
        phone: string | null;
    }[];
}, {
    message: string;
    data: {
        id: string;
        email: string;
        email_verified: boolean;
        is_active: boolean;
        created_at: string;
        last_name: string;
        name: string;
        last_login_at: string | null;
        is_beta_tester: boolean;
        activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
        product_count: number;
        phone: string | null;
    }[];
}>;
export declare const ClientDetailResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodString;
        email_verified: z.ZodBoolean;
        phone: z.ZodNullable<z.ZodString>;
        activation_phase: z.ZodEnum<["account_created", "registration_started", "document_submitted", "registration_completed", "email_connected", "product_linked"]>;
        is_beta_tester: z.ZodBoolean;
        is_active: z.ZodBoolean;
        created_at: z.ZodString;
        last_login_at: z.ZodNullable<z.ZodString>;
        product_count: z.ZodNumber;
    } & {
        document_type: z.ZodNullable<z.ZodNativeEnum<typeof DocumentType>>;
        document_number: z.ZodNullable<z.ZodString>;
        document_status: z.ZodNullable<z.ZodNativeEnum<typeof DocumentStatus>>;
        devices: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            device_unique_id: z.ZodString;
            notes: z.ZodString;
            created_at: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            created_at: string;
            device_unique_id: string;
            notes: string;
        }, {
            id: string;
            created_at: string;
            device_unique_id: string;
            notes: string;
        }>, "many">;
        preferences: z.ZodNullable<z.ZodObject<{
            are_push_notifications_enabled: z.ZodBoolean;
            are_transaction_alerts_enabled: z.ZodBoolean;
            are_notification_sounds_enabled: z.ZodBoolean;
            is_vibration_enabled: z.ZodBoolean;
            is_biometric_auth_enabled: z.ZodBoolean;
            auto_lock_after_minutes: z.ZodNumber;
            is_auto_sync_enabled: z.ZodBoolean;
            is_cloud_backup_enabled: z.ZodBoolean;
            preferred_theme: z.ZodEnum<["SYSTEM", "LIGHT", "DARK"]>;
        }, "strip", z.ZodTypeAny, {
            are_push_notifications_enabled: boolean;
            are_transaction_alerts_enabled: boolean;
            are_notification_sounds_enabled: boolean;
            is_vibration_enabled: boolean;
            is_biometric_auth_enabled: boolean;
            auto_lock_after_minutes: number;
            is_auto_sync_enabled: boolean;
            is_cloud_backup_enabled: boolean;
            preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
        }, {
            are_push_notifications_enabled: boolean;
            are_transaction_alerts_enabled: boolean;
            are_notification_sounds_enabled: boolean;
            is_vibration_enabled: boolean;
            is_biometric_auth_enabled: boolean;
            auto_lock_after_minutes: number;
            is_auto_sync_enabled: boolean;
            is_cloud_backup_enabled: boolean;
            preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
        }>>;
        products: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            institution_name: z.ZodNullable<z.ZodString>;
            product_type: z.ZodString;
            account_last4: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            product_type: string;
            institution_name: string | null;
            account_last4: string;
        }, {
            id: string;
            name: string;
            product_type: string;
            institution_name: string | null;
            account_last4: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        email_verified: boolean;
        is_active: boolean;
        document_number: string | null;
        created_at: string;
        last_name: string;
        name: string;
        products: {
            id: string;
            name: string;
            product_type: string;
            institution_name: string | null;
            account_last4: string;
        }[];
        last_login_at: string | null;
        is_beta_tester: boolean;
        activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
        product_count: number;
        phone: string | null;
        document_type: DocumentType | null;
        document_status: DocumentStatus | null;
        devices: {
            id: string;
            created_at: string;
            device_unique_id: string;
            notes: string;
        }[];
        preferences: {
            are_push_notifications_enabled: boolean;
            are_transaction_alerts_enabled: boolean;
            are_notification_sounds_enabled: boolean;
            is_vibration_enabled: boolean;
            is_biometric_auth_enabled: boolean;
            auto_lock_after_minutes: number;
            is_auto_sync_enabled: boolean;
            is_cloud_backup_enabled: boolean;
            preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
        } | null;
    }, {
        id: string;
        email: string;
        email_verified: boolean;
        is_active: boolean;
        document_number: string | null;
        created_at: string;
        last_name: string;
        name: string;
        products: {
            id: string;
            name: string;
            product_type: string;
            institution_name: string | null;
            account_last4: string;
        }[];
        last_login_at: string | null;
        is_beta_tester: boolean;
        activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
        product_count: number;
        phone: string | null;
        document_type: DocumentType | null;
        document_status: DocumentStatus | null;
        devices: {
            id: string;
            created_at: string;
            device_unique_id: string;
            notes: string;
        }[];
        preferences: {
            are_push_notifications_enabled: boolean;
            are_transaction_alerts_enabled: boolean;
            are_notification_sounds_enabled: boolean;
            is_vibration_enabled: boolean;
            is_biometric_auth_enabled: boolean;
            auto_lock_after_minutes: number;
            is_auto_sync_enabled: boolean;
            is_cloud_backup_enabled: boolean;
            preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
        } | null;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        id: string;
        email: string;
        email_verified: boolean;
        is_active: boolean;
        document_number: string | null;
        created_at: string;
        last_name: string;
        name: string;
        products: {
            id: string;
            name: string;
            product_type: string;
            institution_name: string | null;
            account_last4: string;
        }[];
        last_login_at: string | null;
        is_beta_tester: boolean;
        activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
        product_count: number;
        phone: string | null;
        document_type: DocumentType | null;
        document_status: DocumentStatus | null;
        devices: {
            id: string;
            created_at: string;
            device_unique_id: string;
            notes: string;
        }[];
        preferences: {
            are_push_notifications_enabled: boolean;
            are_transaction_alerts_enabled: boolean;
            are_notification_sounds_enabled: boolean;
            is_vibration_enabled: boolean;
            is_biometric_auth_enabled: boolean;
            auto_lock_after_minutes: number;
            is_auto_sync_enabled: boolean;
            is_cloud_backup_enabled: boolean;
            preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
        } | null;
    };
}, {
    message: string;
    data: {
        id: string;
        email: string;
        email_verified: boolean;
        is_active: boolean;
        document_number: string | null;
        created_at: string;
        last_name: string;
        name: string;
        products: {
            id: string;
            name: string;
            product_type: string;
            institution_name: string | null;
            account_last4: string;
        }[];
        last_login_at: string | null;
        is_beta_tester: boolean;
        activation_phase: "account_created" | "registration_started" | "document_submitted" | "registration_completed" | "email_connected" | "product_linked";
        product_count: number;
        phone: string | null;
        document_type: DocumentType | null;
        document_status: DocumentStatus | null;
        devices: {
            id: string;
            created_at: string;
            device_unique_id: string;
            notes: string;
        }[];
        preferences: {
            are_push_notifications_enabled: boolean;
            are_transaction_alerts_enabled: boolean;
            are_notification_sounds_enabled: boolean;
            is_vibration_enabled: boolean;
            is_biometric_auth_enabled: boolean;
            auto_lock_after_minutes: number;
            is_auto_sync_enabled: boolean;
            is_cloud_backup_enabled: boolean;
            preferred_theme: "SYSTEM" | "LIGHT" | "DARK";
        } | null;
    };
}>;
