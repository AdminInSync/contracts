import { z } from 'zod';
import '../../openapi-extensions';
export declare const DevicesContracts: {
    createDevice: {
        summary: "Register a new device";
        description: "Registers a new device for the authenticated user";
        method: "POST";
        body: z.ZodObject<{
            user_uid: z.ZodString;
            device_unique_id: z.ZodString;
            notes: z.ZodString;
            notification_token: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: "/devices/";
        responses: {
            201: z.ZodObject<{
                id: z.ZodNumber;
                uuid: z.ZodString;
                user_uid: z.ZodString;
                device_unique_id: z.ZodString;
                notes: z.ZodString;
                notification_token: z.ZodNullable<z.ZodString>;
                created_at: z.ZodString;
                updated_at: z.ZodString;
            }, z.core.$strip>;
            400: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            409: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    getDevices: {
        query: z.ZodObject<{
            device_unique_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        summary: "Get user devices";
        description: "Returns all devices for the authenticated user with optional device ID filter";
        method: "GET";
        path: "/devices/";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                uuid: z.ZodString;
                user_uid: z.ZodString;
                device_unique_id: z.ZodString;
                notes: z.ZodString;
                notification_token: z.ZodNullable<z.ZodString>;
                created_at: z.ZodString;
                updated_at: z.ZodString;
            }, z.core.$strip>>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    createDevicePreferences: {
        summary: "Create device preferences";
        description: "Creates preferences for a specific device";
        method: "POST";
        body: z.ZodObject<{
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
        path: "/devices/preferences";
        responses: {
            201: z.ZodObject<{
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
            400: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            409: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    getDevicePreferences: {
        query: z.ZodObject<{
            device_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        summary: "Get device preferences";
        description: "Returns all device preferences for the authenticated user with optional device ID filter";
        method: "GET";
        path: "/devices/preferences";
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    updateDevicePreferences: {
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
        summary: "Update device preferences";
        description: "Updates preferences for a specific device";
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
            preferredTheme: z.ZodOptional<z.ZodEnum<{
                SYSTEM: "SYSTEM";
                LIGHT: "LIGHT";
                DARK: "DARK";
            }>>;
        }, z.core.$strip>;
        path: "/devices/preferences/:id";
        responses: {
            200: z.ZodObject<{
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
            400: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
    updateNotificationToken: {
        summary: "Update notification token";
        description: "Updates the FCM notification token for a specific device";
        method: "PUT";
        body: z.ZodObject<{
            device_unique_id: z.ZodString;
            notification_token: z.ZodString;
        }, z.core.$strip>;
        path: "/devices/notification-token";
        responses: {
            200: z.ZodObject<{
                success: z.ZodLiteral<true>;
                data: z.ZodObject<{
                    device_id: z.ZodNumber;
                    device_unique_id: z.ZodString;
                    notification_token_updated: z.ZodBoolean;
                }, z.core.$strip>;
                message: z.ZodString;
            }, z.core.$strip>;
            400: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                error: z.ZodString;
                message: z.ZodString;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
        strictStatusCodes: true;
    };
};
