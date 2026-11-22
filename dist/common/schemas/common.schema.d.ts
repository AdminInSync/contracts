import { z } from 'zod';
/**
 * Query-string booleans. Do not use z.coerce.boolean() here: Boolean("false") is true.
 */
export declare const QueryBooleanSchema: z.ZodPreprocess<z.ZodOptional<z.ZodBoolean>, unknown>;
export declare const ErrorResSchema: z.ZodObject<{
    message: z.ZodString;
    error: z.ZodOptional<z.ZodString>;
    statusCode: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const ParamSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const PaginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodDefault<z.ZodEnum<{
        ASC: "ASC";
        DESC: "DESC";
    }>>;
}, z.core.$strip>;
export declare const PaginatedResponseSchema: <T extends z.ZodTypeAny>(dataSchema: T) => z.ZodObject<{
    data: z.ZodArray<T>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
