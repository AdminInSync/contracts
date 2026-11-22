import { z } from 'zod';
export declare const HealthResponseSchema: z.ZodObject<{
    status: z.ZodString;
    timestamp: z.ZodString;
}, z.core.$strip>;
export declare const OpenApiInfoSchema: z.ZodObject<{
    title: z.ZodString;
    version: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    contact: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const OpenApiServerSchema: z.ZodObject<{
    url: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const OpenApiSecuritySchemeSchema: z.ZodObject<{
    type: z.ZodString;
    scheme: z.ZodOptional<z.ZodString>;
    bearerFormat: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const OpenApiComponentsSchema: z.ZodObject<{
    securitySchemes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        scheme: z.ZodOptional<z.ZodString>;
        bearerFormat: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const OpenApiTagSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
}, z.core.$strip>;
export declare const OpenApiJsonResponseSchema: z.ZodObject<{
    contentType: z.ZodLiteral<"application/json">;
    body: z.ZodAny;
}, z.core.$strip>;
export declare const OpenApiYamlResponseSchema: z.ZodObject<{
    contentType: z.ZodLiteral<"text/yaml">;
    body: z.ZodString;
}, z.core.$strip>;
export declare const HealthResponseContractSchema: z.ZodObject<{
    contentType: z.ZodLiteral<"application/json">;
    body: z.ZodObject<{
        status: z.ZodString;
        timestamp: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
