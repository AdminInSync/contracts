import { z } from 'zod';
/**
 * Query-string booleans. Do not use z.coerce.boolean() here: Boolean("false") is true.
 */
export const QueryBooleanSchema = z.preprocess((value) => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        const normalized = value.trim().toLowerCase();
        if (normalized === 'true' || normalized === '1') {
            return true;
        }
        if (normalized === 'false' || normalized === '0') {
            return false;
        }
    }
    return value;
}, z.boolean().optional());
export const ErrorResSchema = z.object({
    message: z.string(),
    error: z.string().optional(),
    statusCode: z.number().optional(),
});
export const ParamSchema = z.object({
    id: z.string().guid(),
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
