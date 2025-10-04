import { z } from 'zod';
// Enums
export const ProductTypeSchema = z.enum(['credit_card', 'loan', 'savings_account', 'checking_account', 'investment', 'insurance', 'mortgage']);
export const CreditScoreRequirementSchema = z.enum(['excellent', 'good', 'fair', 'poor']);
// Base schemas
export const FinancialProductSchema = z.object({
    id: z.number(),
    uuid: z.string().uuid(),
    name: z.string(),
    product_type: ProductTypeSchema,
    institution_id: z.number(),
    interest_rate: z.number().nullable(),
    annual_fee: z.number().nullable(),
    minimum_balance: z.number().nullable(),
    credit_score_requirement: CreditScoreRequirementSchema.nullable(),
    benefits: z.string().nullable(),
    features: z.string().nullable(),
    terms_conditions: z.string().nullable(),
    is_spotlight: z.boolean(),
    is_active: z.boolean(),
    currency: z.string().nullable(),
    valid_from: z.string().date().nullable(),
    valid_until: z.string().date().nullable(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    deleted_at: z.string().datetime().nullable(),
    institution: z.object({
        id: z.number(),
        name: z.string(),
        institution_type: z.string(),
        logo_url: z.string().nullable(),
    }).optional(),
});
// Request schemas
export const CreateProductSchema = z.object({
    name: z.string().min(1).max(255),
    product_type: ProductTypeSchema.optional(),
    institution_id: z.number().positive(),
    interest_rate: z.number().min(0).max(100).optional(),
    annual_fee: z.number().min(0).optional(),
    minimum_balance: z.number().min(0).optional(),
    credit_score_requirement: CreditScoreRequirementSchema.optional(),
    benefits: z.string().optional(),
    features: z.string().optional(),
    terms_conditions: z.string().optional(),
    is_spotlight: z.boolean().optional(),
    is_active: z.boolean().optional(),
    currency: z.string().max(100).optional(),
    valid_from: z.string().date().optional(),
    valid_until: z.string().date().optional(),
});
export const UpdateProductSchema = CreateProductSchema.partial();
// Query schemas
export const GetProductsQuerySchema = z.object({
    product_type: ProductTypeSchema.optional(),
    institution_id: z.number().positive().optional(),
    credit_score_requirement: CreditScoreRequirementSchema.optional(),
    is_spotlight: z.boolean().optional(),
    search: z.string().optional(),
    limit: z.number().min(1).max(100).default(20),
    offset: z.number().min(0).default(0),
});
// Response schemas
export const ProductResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: FinancialProductSchema,
});
export const ProductsListResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    data: z.array(FinancialProductSchema),
    pagination: z.object({
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
    }).optional(),
});
