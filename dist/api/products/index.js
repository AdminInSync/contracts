import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { CreateProductSchema, UpdateProductSchema, GetProductsQuerySchema, ProductResponseSchema, ProductsListResponseSchema, ConnectedProductTypeSchema, ConnectedProductsResponseSchema } from './products.schema';
import { ErrorResSchema } from '../../common/schemas/common.schema';
const c = initContract();
export const ProductsContracts = c.router({
    // Create financial product
    createProduct: {
        method: 'POST',
        path: '/products',
        responses: {
            201: ProductResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            409: ErrorResSchema,
            500: ErrorResSchema,
        },
        body: CreateProductSchema,
        summary: 'Crear un nuevo producto financiero',
        description: 'Crea un nuevo producto financiero (solo administrador)',
    },
    // Get all financial products
    getProducts: {
        method: 'GET',
        path: '/products',
        responses: {
            200: ProductsListResponseSchema,
            500: ErrorResSchema,
        },
        query: GetProductsQuerySchema,
        summary: 'Obtener todos los productos financieros',
        description: 'Obtiene todos los productos financieros activos con filtrado y búsqueda opcionales',
    },
    // Get products by type
    getProductsByType: {
        method: 'GET',
        path: '/products/type/:type',
        responses: {
            200: ProductsListResponseSchema,
            400: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            type: z.enum(['credit_card', 'loan', 'savings_account', 'checking_account', 'investment', 'insurance', 'mortgage']),
        }),
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Obtener productos por tipo',
        description: 'Obtiene productos financieros filtrados por tipo',
    },
    // Get products by institution
    getProductsByInstitution: {
        method: 'GET',
        path: '/products/institution/:institutionId',
        responses: {
            200: ProductsListResponseSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            institutionId: z.string().regex(/^\d+$/, 'El ID de institución debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Obtener productos por institución',
        description: 'Obtiene productos financieros para una institución específica',
    },
    // Get spotlight products
    getSpotlightProducts: {
        method: 'GET',
        path: '/products/spotlight',
        responses: {
            200: ProductsListResponseSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Obtener productos destacados',
        description: 'Obtiene productos financieros destacados',
    },
    // Get products with no annual fee
    getNoAnnualFeeProducts: {
        method: 'GET',
        path: '/products/no-annual-fee',
        responses: {
            200: ProductsListResponseSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Obtener productos sin tarifa anual',
        description: 'Obtiene productos financieros sin tarifa anual',
    },
    // Get products by credit score requirement
    getProductsByCreditScore: {
        method: 'GET',
        path: '/products/credit-score/:requirement',
        responses: {
            200: ProductsListResponseSchema,
            400: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            requirement: z.enum(['excellent', 'good', 'fair', 'poor']),
        }),
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Obtener productos por requisito de puntaje de crédito',
        description: 'Obtiene productos financieros filtrados por requisito de puntaje de crédito',
    },
    // Get my saved products
    getMyProducts: {
        method: 'GET',
        path: '/products/all-my-products/',
        responses: {
            200: ProductsListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Obtener mis productos guardados',
        description: 'Obtiene productos guardados por el usuario autenticado',
    },
    // Add product to my products
    addToMyProducts: {
        method: 'POST',
        path: '/products/my-products/:productId',
        responses: {
            201: z.object({
                message: z.string(),
            }),
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            409: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            productId: z.string().regex(/^\d+$/, 'El ID de producto debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        body: z.object({
            notes: z.string().optional(),
        }).optional(),
        summary: 'Agregar producto a mis productos',
        description: 'Guarda un producto en la lista de productos del usuario autenticado',
    },
    // Remove product from my products
    removeFromMyProducts: {
        method: 'DELETE',
        path: '/products/my-products/:productId',
        responses: {
            200: z.object({
                message: z.string(),
            }),
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            productId: z.string().regex(/^\d+$/, 'El ID de producto debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Eliminar producto de mis productos',
        description: 'Elimina un producto de la lista de productos del usuario autenticado',
    },
    // Get one financial product (MUST come after all specific routes)
    getProduct: {
        method: 'GET',
        path: '/products/:id',
        responses: {
            200: ProductResponseSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().regex(/^\d+$/, 'El ID debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Obtener un producto financiero específico',
        description: 'Obtiene un producto financiero específico por ID',
    },
    // Update financial product
    updateProduct: {
        method: 'PUT',
        path: '/products/:id',
        responses: {
            200: ProductResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            404: ErrorResSchema,
            409: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().regex(/^\d+$/, 'El ID debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        body: UpdateProductSchema,
        summary: 'Actualizar un producto financiero',
        description: 'Actualiza un producto financiero existente (solo administrador)',
    },
    // Delete financial product
    deleteProduct: {
        method: 'DELETE',
        path: '/products/:id',
        responses: {
            200: z.object({
                message: z.string(),
            }),
            401: ErrorResSchema,
            404: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            id: z.string().regex(/^\d+$/, 'El ID debe ser un número válido').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Eliminar un producto financiero',
        description: 'Elimina suavemente un producto financiero (solo administrador)',
    },
    // Get my connected products
    getMyConnectedProducts: {
        method: 'GET',
        path: '/products/my-products/connected/:type',
        responses: {
            200: ConnectedProductsResponseSchema,
            400: ErrorResSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        pathParams: z.object({
            type: ConnectedProductTypeSchema,
        }),
        summary: 'Obtener mis productos conectados por tipo',
        description: 'Obtiene productos conectados de conexiones bancarias filtrados por tipo',
    },
});
