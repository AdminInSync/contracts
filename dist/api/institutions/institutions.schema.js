import { z } from 'zod';
// Enums
export const InstitutionTypeSchema = z.enum(['bank', 'credit_union', 'investment_firm', 'insurance', 'fintech']);
// Base schemas
export const FinancialInstitutionSchema = z.object({
    id: z.number(),
    uuid: z.string().uuid(),
    name: z.string(),
    institution_type: InstitutionTypeSchema,
    logo_url: z.string().nullable(),
    website: z.string().nullable(),
    country: z.string().nullable(),
    region: z.string().nullable(),
    is_active: z.boolean(),
    description: z.string().nullable(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    deleted_at: z.string().datetime().nullable(),
    products: z.array(z.object({
        id: z.number(),
        name: z.string(),
        product_type: z.string(),
        is_active: z.boolean(),
    })).optional(),
});
// Request schemas
export const CreateInstitutionSchema = z.object({
    name: z.string().min(1).max(255),
    institution_type: InstitutionTypeSchema.optional(),
    logo_url: z.string().url().optional(),
    website: z.string().url().optional(),
    country: z.string().max(100).optional(),
    region: z.string().max(100).optional(),
    is_active: z.boolean().optional(),
    description: z.string().optional(),
});
export const UpdateInstitutionSchema = CreateInstitutionSchema.partial();
// Query schemas
export const GetInstitutionsQuerySchema = z.object({
    institution_type: InstitutionTypeSchema.optional(),
    country: z.string().optional(),
    region: z.string().optional(),
    search: z.string().optional(),
    limit: z.number().min(1).max(100).default(20),
    offset: z.number().min(0).default(0),
});
// Response schemas
export const InstitutionResponseSchema = z.object({
    message: z.string(),
    data: FinancialInstitutionSchema,
});
export const InstitutionsListResponseSchema = z.object({
    message: z.string(),
    data: z.array(FinancialInstitutionSchema),
    pagination: z.object({
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
    }).optional(),
});
