import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { CreateProductSchema, UpdateProductSchema, GetProductsQuerySchema, ProductResponseSchema, ProductsListResponseSchema, ConnectedProductTypeSchema, ConnectedProductsResponseSchema, ProductTransactionsListResponseSchema } from './products.schema';
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
        summary: 'Create a new financial product',
        description: 'Creates a new financial product (admin only)',
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
        summary: 'Get all financial products',
        description: 'Returns all active financial products with optional filtering and search',
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
        summary: 'Get products by type',
        description: 'Returns financial products filtered by type',
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
            institutionId: z.string().regex(/^\d+$/, 'Institution ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Get products by institution',
        description: 'Returns financial products for a specific institution',
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
        summary: 'Get featured products',
        description: 'Returns featured financial products',
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
        summary: 'Get no-annual-fee products',
        description: 'Returns financial products with no annual fee',
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
        summary: 'Get products by credit score requirement',
        description: 'Returns financial products filtered by credit score requirement',
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
        summary: 'Get my saved products',
        description: 'Returns products saved by the authenticated user',
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
            productId: z.string().regex(/^\d+$/, 'Product ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        body: z.object({
            notes: z.string().optional(),
        }).optional(),
        summary: 'Add product to my list',
        description: 'Saves a product to the authenticated user product list',
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
            productId: z.string().regex(/^\d+$/, 'Product ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Remove product from my list',
        description: 'Removes a product from the authenticated user product list',
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
            id: z.string().regex(/^\d+$/, 'ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Get a specific financial product',
        description: 'Returns a specific financial product by ID',
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
            id: z.string().regex(/^\d+$/, 'ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        body: UpdateProductSchema,
        summary: 'Update a financial product',
        description: 'Updates an existing financial product (admin only)',
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
            id: z.string().regex(/^\d+$/, 'ID must be a valid number').transform((val) => parseInt(val, 10)),
        }),
        summary: 'Delete a financial product',
        description: 'Soft-deletes a financial product (admin only)',
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
        summary: 'Get my connected products by type',
        description: 'Returns products from bank connections filtered by type',
    },
    getMyTransactions: {
        method: 'GET',
        path: '/products/my-transactions',
        responses: {
            200: ProductTransactionsListResponseSchema,
            401: ErrorResSchema,
            500: ErrorResSchema,
        },
        query: z.object({
            limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).default('20'),
            offset: z.string().transform(Number).pipe(z.number().min(0)).default('0'),
        }),
        summary: 'Get my product transactions',
        description: 'Returns product transactions for the authenticated user',
    },
});
