import { z } from 'zod';
export declare const CreateDeviceRequestSchema: z.ZodObject<{
    user_uid: z.ZodString;
    device_unique_id: z.ZodString;
    notes: z.ZodString;
    notification_token: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const DeviceResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    device_unique_id: z.ZodString;
    notes: z.ZodString;
    notification_token: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, z.core.$strip>;
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
    preferredTheme: z.ZodOptional<z.ZodEnum<{
        SYSTEM: "SYSTEM";
        LIGHT: "LIGHT";
        DARK: "DARK";
    }>>;
}, z.core.$strip>;
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
    preferredTheme: z.ZodEnum<{
        SYSTEM: "SYSTEM";
        LIGHT: "LIGHT";
        DARK: "DARK";
    }>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, z.core.$strip>;
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
    preferredTheme: z.ZodOptional<z.ZodEnum<{
        SYSTEM: "SYSTEM";
        LIGHT: "LIGHT";
        DARK: "DARK";
    }>>;
}, z.core.$strip>;
export declare const DeviceErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
export declare const GetDevicesQuerySchema: z.ZodObject<{
    device_unique_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetDevicesResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    uuid: z.ZodString;
    user_uid: z.ZodString;
    device_unique_id: z.ZodString;
    notes: z.ZodString;
    notification_token: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, z.core.$strip>>;
export declare const GetDevicePreferencesQuerySchema: z.ZodObject<{
    device_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
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
    preferredTheme: z.ZodEnum<{
        SYSTEM: "SYSTEM";
        LIGHT: "LIGHT";
        DARK: "DARK";
    }>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, z.core.$strip>>;
export declare const UpdateNotificationTokenRequestSchema: z.ZodObject<{
    device_unique_id: z.ZodString;
    notification_token: z.ZodString;
}, z.core.$strip>;
export declare const UpdateNotificationTokenResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    data: z.ZodObject<{
        device_id: z.ZodNumber;
        device_unique_id: z.ZodString;
        notification_token_updated: z.ZodBoolean;
    }, z.core.$strip>;
    message: z.ZodString;
}, z.core.$strip>;
