import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
// Device Request Schema
export const CreateDeviceRequestSchema = z.object({
    user_uid: z.string().openapi({
        description: 'User UID from Firebase'
    }),
    device_id: z.string().min(1).max(100).openapi({
        description: 'Unique device identifier'
    }),
    notes: z.string().min(1).max(100).openapi({
        description: 'Device description or notes'
    })
}).openapi({
    title: 'CreateDeviceRequest',
    description: 'Request schema for creating a new device'
});
// Device Response Schema
export const DeviceResponseSchema = z.object({
    id: z.number().openapi({
        description: 'Internal database ID'
    }),
    uuid: z.string().uuid().openapi({
        description: 'Public UUID for the device record'
    }),
    user_uid: z.string().openapi({
        description: 'User UID from Firebase'
    }),
    device_id: z.string().openapi({
        description: 'Unique device identifier'
    }),
    notes: z.string().openapi({
        description: 'Device description or notes'
    }),
    created_at: z.string().datetime().openapi({
        description: 'Creation timestamp'
    }),
    updated_at: z.string().datetime().openapi({
        description: 'Last update timestamp'
    })
}).openapi({
    title: 'DeviceResponse',
    description: 'Response schema for device'
});
// Device Preferences Request Schema
export const CreateDevicePreferencesRequestSchema = z.object({
    device_id: z.string().min(1).max(100).openapi({
        description: 'Device ID to associate preferences with'
    }),
    // Notificaciones
    arePushNotificationsEnabled: z.boolean().optional().openapi({
        description: 'Enable push notifications'
    }),
    areTransactionAlertsEnabled: z.boolean().optional().openapi({
        description: 'Enable transaction alerts'
    }),
    areNotificationSoundsEnabled: z.boolean().optional().openapi({
        description: 'Enable notification sounds'
    }),
    isVibrationEnabled: z.boolean().optional().openapi({
        description: 'Enable vibration'
    }),
    // Seguridad
    isBiometricAuthEnabled: z.boolean().optional().openapi({
        description: 'Enable biometric authentication'
    }),
    autoLockAfterMinutes: z.number().int().min(1).max(60).optional().openapi({
        description: 'Auto lock timeout in minutes'
    }),
    isPrivacySettingsEnabled: z.boolean().optional().openapi({
        description: 'Enable privacy settings'
    }),
    // Datos y Sincronización
    isAutoSyncEnabled: z.boolean().optional().openapi({
        description: 'Enable auto sync'
    }),
    isCloudBackupEnabled: z.boolean().optional().openapi({
        description: 'Enable cloud backup'
    }),
    canExportData: z.boolean().optional().openapi({
        description: 'Allow data export'
    }),
    // Apariencia
    preferredTheme: z.enum(['SYSTEM', 'LIGHT', 'DARK']).optional().openapi({
        description: 'Preferred theme'
    })
}).openapi({
    title: 'CreateDevicePreferencesRequest',
    description: 'Request schema for creating device preferences'
});
// Device Preferences Response Schema
export const DevicePreferencesResponseSchema = z.object({
    id: z.number().openapi({
        description: 'Internal database ID'
    }),
    uuid: z.string().uuid().openapi({
        description: 'Public UUID for the preferences record'
    }),
    user_uid: z.string().openapi({
        description: 'User UID from Firebase'
    }),
    device_id: z.string().openapi({
        description: 'Associated device ID'
    }),
    // Notificaciones
    arePushNotificationsEnabled: z.boolean().openapi({
        description: 'Push notifications enabled'
    }),
    areTransactionAlertsEnabled: z.boolean().openapi({
        description: 'Transaction alerts enabled'
    }),
    areNotificationSoundsEnabled: z.boolean().openapi({
        description: 'Notification sounds enabled'
    }),
    isVibrationEnabled: z.boolean().openapi({
        description: 'Vibration enabled'
    }),
    // Seguridad
    isBiometricAuthEnabled: z.boolean().openapi({
        description: 'Biometric authentication enabled'
    }),
    autoLockAfterMinutes: z.number().openapi({
        description: 'Auto lock timeout in minutes'
    }),
    isPrivacySettingsEnabled: z.boolean().openapi({
        description: 'Privacy settings enabled'
    }),
    // Datos y Sincronización
    isAutoSyncEnabled: z.boolean().openapi({
        description: 'Auto sync enabled'
    }),
    isCloudBackupEnabled: z.boolean().openapi({
        description: 'Cloud backup enabled'
    }),
    canExportData: z.boolean().openapi({
        description: 'Data export allowed'
    }),
    // Apariencia
    preferredTheme: z.enum(['SYSTEM', 'LIGHT', 'DARK']).openapi({
        description: 'Preferred theme'
    }),
    created_at: z.string().datetime().openapi({
        description: 'Creation timestamp'
    }),
    updated_at: z.string().datetime().openapi({
        description: 'Last update timestamp'
    })
}).openapi({
    title: 'DevicePreferencesResponse',
    description: 'Response schema for device preferences'
});
// Update Device Preferences Request Schema
export const UpdateDevicePreferencesRequestSchema = z.object({
    // Notificaciones
    arePushNotificationsEnabled: z.boolean().optional().openapi({
        description: 'Enable push notifications'
    }),
    areTransactionAlertsEnabled: z.boolean().optional().openapi({
        description: 'Enable transaction alerts'
    }),
    areNotificationSoundsEnabled: z.boolean().optional().openapi({
        description: 'Enable notification sounds'
    }),
    isVibrationEnabled: z.boolean().optional().openapi({
        description: 'Enable vibration'
    }),
    // Seguridad
    isBiometricAuthEnabled: z.boolean().optional().openapi({
        description: 'Enable biometric authentication'
    }),
    autoLockAfterMinutes: z.number().int().min(1).max(60).optional().openapi({
        description: 'Auto lock timeout in minutes'
    }),
    isPrivacySettingsEnabled: z.boolean().optional().openapi({
        description: 'Enable privacy settings'
    }),
    // Datos y Sincronización
    isAutoSyncEnabled: z.boolean().optional().openapi({
        description: 'Enable auto sync'
    }),
    isCloudBackupEnabled: z.boolean().optional().openapi({
        description: 'Enable cloud backup'
    }),
    canExportData: z.boolean().optional().openapi({
        description: 'Allow data export'
    }),
    // Apariencia
    preferredTheme: z.enum(['SYSTEM', 'LIGHT', 'DARK']).optional().openapi({
        description: 'Preferred theme'
    })
}).openapi({
    title: 'UpdateDevicePreferencesRequest',
    description: 'Request schema for updating device preferences'
});
// Error Response Schema
export const DeviceErrorResponseSchema = z.object({
    error: z.string().openapi({
        description: 'Error type'
    }),
    message: z.string().openapi({
        description: 'Error message'
    })
}).openapi({
    title: 'DeviceErrorResponse',
    description: 'Error response schema for devices and preferences'
});
// Get Devices Query Schema
export const GetDevicesQuerySchema = z.object({
    device_id: z.string().optional().openapi({
        description: 'Filter by device ID'
    })
}).openapi({
    title: 'GetDevicesQuery',
    description: 'Query parameters for filtering devices'
});
// Get Devices Response (array of device records)
export const GetDevicesResponseSchema = z.array(DeviceResponseSchema).openapi({
    title: 'GetDevicesResponse',
    description: 'Response schema for getting devices list'
});
// Get Device Preferences Query Schema
export const GetDevicePreferencesQuerySchema = z.object({
    device_id: z.string().optional().openapi({
        description: 'Filter by device ID'
    })
}).openapi({
    title: 'GetDevicePreferencesQuery',
    description: 'Query parameters for filtering device preferences'
});
// Get Device Preferences Response (array of preferences records)
export const GetDevicePreferencesResponseSchema = z.array(DevicePreferencesResponseSchema).openapi({
    title: 'GetDevicePreferencesResponse',
    description: 'Response schema for getting device preferences list'
});
