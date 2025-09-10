import { z } from 'zod';
export const HealthResponseSchema = z.object({
    status: z.string(),
    timestamp: z.string()
});
export const OpenApiInfoSchema = z.object({
    title: z.string(),
    version: z.string(),
    description: z.string().optional(),
    contact: z.object({
        name: z.string().optional(),
        email: z.string().optional()
    }).optional()
});
export const OpenApiServerSchema = z.object({
    url: z.string(),
    description: z.string().optional()
});
export const OpenApiSecuritySchemeSchema = z.object({
    type: z.string(),
    scheme: z.string().optional(),
    bearerFormat: z.string().optional(),
    description: z.string().optional()
});
export const OpenApiComponentsSchema = z.object({
    securitySchemes: z.record(OpenApiSecuritySchemeSchema).optional()
});
export const OpenApiTagSchema = z.object({
    name: z.string(),
    description: z.string()
});
export const OpenApiJsonResponseSchema = z.object({
    contentType: z.literal('application/json'),
    body: z.any()
});
export const OpenApiYamlResponseSchema = z.object({
    contentType: z.literal('text/yaml'),
    body: z.string()
});
export const HealthResponseContractSchema = z.object({
    contentType: z.literal('application/json'),
    body: HealthResponseSchema
});
