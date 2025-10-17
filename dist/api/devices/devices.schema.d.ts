import { z } from 'zod';
export declare const CreateDeviceRequestSchema: z.ZodObject<{
    user_uid: z.ZodString;
    device_unique_id: z.ZodString;
    notes: z.ZodString;
    notification_token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
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
export declare const DeviceResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    device_unique_id: z.ZodString;
    notes: z.ZodString;
    notification_token: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
export declare const CreateDevicePreferencesRequestSchema: z.ZodObject<{
    device_unique_id: z.ZodString;
    arePushNotificationsEnabled: z.ZodOptional<z.ZodBoolean>;
    areTransactionAlertsEnabled: z.ZodOptional<z.ZodBoolean>;
    areNotificationSoundsEnabled: z.ZodOptional<z.ZodBoolean>;
    isVibrationEnabled: z.ZodOptional<z.ZodBoolean>;
    isBiometricAuthEnabled: z.ZodOptional<z.ZodBoolean>;
    autoLockAfterMinutes: z.ZodOptional<z.ZodNumber>;
    isPrivacySettingsEnabled: z.ZodOptional<z.ZodBoolean>;
    isAutoSyncEnabled: z.ZodOptional<z.ZodBoolean>;
    isCloudBackupEnabled: z.ZodOptional<z.ZodBoolean>;
    canExportData: z.ZodOptional<z.ZodBoolean>;
    preferredTheme: z.ZodOptional<z.ZodEnum<["SYSTEM", "LIGHT", "DARK"]>>;
}, "strip", z.ZodTypeAny, {
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
export declare const DevicePreferencesResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    device_unique_id: z.ZodString;
    arePushNotificationsEnabled: z.ZodBoolean;
    areTransactionAlertsEnabled: z.ZodBoolean;
    areNotificationSoundsEnabled: z.ZodBoolean;
    isVibrationEnabled: z.ZodBoolean;
    isBiometricAuthEnabled: z.ZodBoolean;
    autoLockAfterMinutes: z.ZodNumber;
    isPrivacySettingsEnabled: z.ZodBoolean;
    isAutoSyncEnabled: z.ZodBoolean;
    isCloudBackupEnabled: z.ZodBoolean;
    canExportData: z.ZodBoolean;
    preferredTheme: z.ZodEnum<["SYSTEM", "LIGHT", "DARK"]>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
export declare const UpdateDevicePreferencesRequestSchema: z.ZodObject<{
    arePushNotificationsEnabled: z.ZodOptional<z.ZodBoolean>;
    areTransactionAlertsEnabled: z.ZodOptional<z.ZodBoolean>;
    areNotificationSoundsEnabled: z.ZodOptional<z.ZodBoolean>;
    isVibrationEnabled: z.ZodOptional<z.ZodBoolean>;
    isBiometricAuthEnabled: z.ZodOptional<z.ZodBoolean>;
    autoLockAfterMinutes: z.ZodOptional<z.ZodNumber>;
    isPrivacySettingsEnabled: z.ZodOptional<z.ZodBoolean>;
    isAutoSyncEnabled: z.ZodOptional<z.ZodBoolean>;
    isCloudBackupEnabled: z.ZodOptional<z.ZodBoolean>;
    canExportData: z.ZodOptional<z.ZodBoolean>;
    preferredTheme: z.ZodOptional<z.ZodEnum<["SYSTEM", "LIGHT", "DARK"]>>;
}, "strip", z.ZodTypeAny, {
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
export declare const DeviceErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    error: string;
}, {
    message: string;
    error: string;
}>;
export declare const GetDevicesQuerySchema: z.ZodObject<{
    device_unique_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    device_unique_id?: string | undefined;
}, {
    device_unique_id?: string | undefined;
}>;
export declare const GetDevicesResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    device_unique_id: z.ZodString;
    notes: z.ZodString;
    notification_token: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
export declare const GetDevicePreferencesQuerySchema: z.ZodObject<{
    device_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    device_id?: string | undefined;
}, {
    device_id?: string | undefined;
}>;
export declare const GetDevicePreferencesResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    device_unique_id: z.ZodString;
    arePushNotificationsEnabled: z.ZodBoolean;
    areTransactionAlertsEnabled: z.ZodBoolean;
    areNotificationSoundsEnabled: z.ZodBoolean;
    isVibrationEnabled: z.ZodBoolean;
    isBiometricAuthEnabled: z.ZodBoolean;
    autoLockAfterMinutes: z.ZodNumber;
    isPrivacySettingsEnabled: z.ZodBoolean;
    isAutoSyncEnabled: z.ZodBoolean;
    isCloudBackupEnabled: z.ZodBoolean;
    canExportData: z.ZodBoolean;
    preferredTheme: z.ZodEnum<["SYSTEM", "LIGHT", "DARK"]>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
export declare const UpdateNotificationTokenRequestSchema: z.ZodObject<{
    device_unique_id: z.ZodString;
    notification_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    device_unique_id: string;
    notification_token: string;
}, {
    device_unique_id: string;
    notification_token: string;
}>;
export declare const UpdateNotificationTokenResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        device_id: z.ZodNumber;
        device_unique_id: z.ZodString;
        notification_token_updated: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        device_unique_id: string;
        device_id: number;
        notification_token_updated: boolean;
    }, {
        device_unique_id: string;
        device_id: number;
        notification_token_updated: boolean;
    }>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
