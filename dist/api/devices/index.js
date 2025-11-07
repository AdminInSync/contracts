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
        summary: 'Crear nuevo dispositivo',
        description: 'Crea un nuevo dispositivo para el usuario autenticado',
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
        summary: 'Obtener dispositivos del usuario',
        description: 'Obtiene todos los dispositivos del usuario autenticado con filtrado opcional por ID de dispositivo',
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
        summary: 'Crear preferencias de dispositivo',
        description: 'Crea preferencias para un dispositivo específico',
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
        summary: 'Obtener preferencias de dispositivo',
        description: 'Obtiene todas las preferencias de dispositivo del usuario autenticado con filtrado opcional por ID de dispositivo',
    },
    updateDevicePreferences: {
        method: 'PUT',
        path: '/preferences/:id',
        pathParams: z.object({
            id: z.string().openapi({
                description: 'ID de preferencias de dispositivo'
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
        summary: 'Actualizar preferencias de dispositivo',
        description: 'Actualiza preferencias para un dispositivo específico',
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
        summary: 'Actualizar token de notificación',
        description: 'Actualiza el token de notificación FCM para un dispositivo específico',
    }
}, {
    strictStatusCodes: true,
    pathPrefix: '/devices',
    tags: ['Devices']
});
