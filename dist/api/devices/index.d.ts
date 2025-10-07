import { z } from 'zod';
export declare const DevicesContracts: {
    createDevice: {
        summary: "Create new device";
        description: "Create a new device for the authenticated user";
        method: "POST";
        body: z.ZodObject<{
            user_uid: z.ZodString;
            device_id: z.ZodString;
            notes: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            user_uid: string;
            device_id: string;
            notes: string;
        }, {
            user_uid: string;
            device_id: string;
            notes: string;
        }>;
        path: "/devices/";
        responses: {
            201: z.ZodObject<{
                id: z.ZodNumber;
                uuid: z.ZodString;
                user_uid: z.ZodString;
                device_id: z.ZodString;
                notes: z.ZodString;
                created_at: z.ZodString;
                updated_at: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                uuid: string;
                user_uid: string;
                created_at: string;
                device_id: string;
                notes: string;
                updated_at: string;
            }, {
                id: number;
                uuid: string;
                user_uid: string;
                created_at: string;
                device_id: string;
                notes: string;
                updated_at: string;
            }>;
            400: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            409: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getDevices: {
        query: z.ZodObject<{
            device_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            device_id?: string | undefined;
        }, {
            device_id?: string | undefined;
        }>;
        summary: "Get user devices";
        description: "Get all devices for the authenticated user with optional filtering by device ID";
        method: "GET";
        path: "/devices/";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                uuid: z.ZodString;
                user_uid: z.ZodString;
                device_id: z.ZodString;
                notes: z.ZodString;
                created_at: z.ZodString;
                updated_at: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: number;
                uuid: string;
                user_uid: string;
                created_at: string;
                device_id: string;
                notes: string;
                updated_at: string;
            }, {
                id: number;
                uuid: string;
                user_uid: string;
                created_at: string;
                device_id: string;
                notes: string;
                updated_at: string;
            }>, "many">;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    createDevicePreferences: {
        summary: "Create device preferences";
        description: "Create preferences for a specific device";
        method: "POST";
        body: z.ZodObject<{
            device_id: z.ZodString;
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
            device_id: string;
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
            device_id: string;
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
        path: "/devices/preferences";
        responses: {
            201: z.ZodObject<{
                id: z.ZodNumber;
                uuid: z.ZodString;
                user_uid: z.ZodString;
                device_id: z.ZodString;
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
                device_id: string;
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
                device_id: string;
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
            400: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
            409: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    getDevicePreferences: {
        query: z.ZodObject<{
            device_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            device_id?: string | undefined;
        }, {
            device_id?: string | undefined;
        }>;
        summary: "Get device preferences";
        description: "Get all device preferences for the authenticated user with optional filtering by device ID";
        method: "GET";
        path: "/devices/preferences";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                uuid: z.ZodString;
                user_uid: z.ZodString;
                device_id: z.ZodString;
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
                device_id: string;
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
                device_id: string;
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
    updateDevicePreferences: {
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        summary: "Update device preferences";
        description: "Update preferences for a specific device";
        method: "PUT";
        body: z.ZodObject<{
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
        path: "/devices/preferences/:id";
        responses: {
            200: z.ZodObject<{
                id: z.ZodNumber;
                uuid: z.ZodString;
                user_uid: z.ZodString;
                device_id: z.ZodString;
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
                device_id: string;
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
                device_id: string;
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
            400: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error: string;
            }, {
                message: string;
                error: string;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
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
