import { z } from 'zod';
export const ErrorResSchema = z.object({
    message: z.string(),
    error: z.string().optional(),
    statusCode: z.number().optional(),
});
export const ParamSchema = z.object({
    id: z.string().uuid(),
});
export const PaginationSchema = z.object({
    page: z.number().min(1).default(1),
    limit: z.number().min(1).max(100).default(10),
    search: z.string().optional(),
    sortBy: z.string().optional(),
    sortOrder: z.enum(['ASC', 'DESC']).default('DESC'),
});
export const PaginatedResponseSchema = (dataSchema) => z.object({
    data: z.array(dataSchema),
    pagination: z.object({
        page: z.number(),
        limit: z.number(),
        total: z.number(),
        totalPages: z.number(),
    }),
});
