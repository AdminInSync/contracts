import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { ErrorResSchema } from '../../common/schemas/common.schema';
import { CreateDeviceRequestSchema, DeviceResponseSchema, DeviceErrorResponseSchema, GetDevicesResponseSchema, GetDevicesQuerySchema, CreateDevicePreferencesRequestSchema, DevicePreferencesResponseSchema, UpdateDevicePreferencesRequestSchema, GetDevicePreferencesResponseSchema, GetDevicePreferencesQuerySchema, UpdateNotificationTokenRequestSchema, UpdateNotificationTokenResponseSchema } from './devices.schema';
const c = initContract();
export const DevicesContracts = c.router({
    createDevice: {
        method: 'POST',
        path: '/',
        responses: {
            201: DeviceResponseSchema,
            400: DeviceErrorResponseSchema,
            401: ErrorResSchema,
            409: DeviceErrorResponseSchema,
            500: ErrorResSchema
        },
        body: CreateDeviceRequestSchema,
        summary: 'Create new device',
        description: 'Create a new device for the authenticated user',
    },
    getDevices: {
        method: 'GET',
        path: '/',
        query: GetDevicesQuerySchema,
        responses: {
            200: GetDevicesResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema
        },
        summary: 'Get user devices',
        description: 'Get all devices for the authenticated user with optional filtering by device ID',
    },
    createDevicePreferences: {
        method: 'POST',
        path: '/preferences',
        responses: {
            201: DevicePreferencesResponseSchema,
            400: DeviceErrorResponseSchema,
            401: ErrorResSchema,
            404: DeviceErrorResponseSchema,
            409: DeviceErrorResponseSchema,
            500: ErrorResSchema
        },
        body: CreateDevicePreferencesRequestSchema,
        summary: 'Create device preferences',
        description: 'Create preferences for a specific device',
    },
    getDevicePreferences: {
        method: 'GET',
        path: '/preferences',
        query: GetDevicePreferencesQuerySchema,
        responses: {
            200: GetDevicePreferencesResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: DeviceErrorResponseSchema,
            500: ErrorResSchema
        },
        summary: 'Get device preferences',
        description: 'Get all device preferences for the authenticated user with optional filtering by device ID',
    },
    updateDevicePreferences: {
        method: 'PUT',
        path: '/preferences/:id',
        pathParams: z.object({
            id: z.string().openapi({
                description: 'Device preferences ID'
            })
        }),
        responses: {
            200: DevicePreferencesResponseSchema,
            400: DeviceErrorResponseSchema,
            401: ErrorResSchema,
            404: DeviceErrorResponseSchema,
            500: ErrorResSchema
        },
        body: UpdateDevicePreferencesRequestSchema,
        summary: 'Update device preferences',
        description: 'Update preferences for a specific device',
    },
    updateNotificationToken: {
        method: 'PUT',
        path: '/notification-token',
        responses: {
            200: UpdateNotificationTokenResponseSchema,
            400: DeviceErrorResponseSchema,
            401: ErrorResSchema,
            404: DeviceErrorResponseSchema,
            500: ErrorResSchema
        },
        body: UpdateNotificationTokenRequestSchema,
        summary: 'Update notification token',
        description: 'Update the FCM notification token for a specific device',
    }
}, {
    strictStatusCodes: true,
    pathPrefix: '/devices',
    tags: ['Devices']
});
