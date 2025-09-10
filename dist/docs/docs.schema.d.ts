import { z } from 'zod';
export declare const HealthResponseSchema: z.ZodObject<{
    status: z.ZodString;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: string;
    timestamp: string;
}, {
    status: string;
    timestamp: string;
}>;
export declare const OpenApiInfoSchema: z.ZodObject<{
    title: z.ZodString;
    version: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    contact: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        email?: string | undefined;
        name?: string | undefined;
    }, {
        email?: string | undefined;
        name?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    version: string;
    description?: string | undefined;
    contact?: {
        email?: string | undefined;
        name?: string | undefined;
    } | undefined;
}, {
    title: string;
    version: string;
    description?: string | undefined;
    contact?: {
        email?: string | undefined;
        name?: string | undefined;
    } | undefined;
}>;
export declare const OpenApiServerSchema: z.ZodObject<{
    url: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url: string;
    description?: string | undefined;
}, {
    url: string;
    description?: string | undefined;
}>;
export declare const OpenApiSecuritySchemeSchema: z.ZodObject<{
    type: z.ZodString;
    scheme: z.ZodOptional<z.ZodString>;
    bearerFormat: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: string;
    description?: string | undefined;
    scheme?: string | undefined;
    bearerFormat?: string | undefined;
}, {
    type: string;
    description?: string | undefined;
    scheme?: string | undefined;
    bearerFormat?: string | undefined;
}>;
export declare const OpenApiComponentsSchema: z.ZodObject<{
    securitySchemes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        scheme: z.ZodOptional<z.ZodString>;
        bearerFormat: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        description?: string | undefined;
        scheme?: string | undefined;
        bearerFormat?: string | undefined;
    }, {
        type: string;
        description?: string | undefined;
        scheme?: string | undefined;
        bearerFormat?: string | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    securitySchemes?: Record<string, {
        type: string;
        description?: string | undefined;
        scheme?: string | undefined;
        bearerFormat?: string | undefined;
    }> | undefined;
}, {
    securitySchemes?: Record<string, {
        type: string;
        description?: string | undefined;
        scheme?: string | undefined;
        bearerFormat?: string | undefined;
    }> | undefined;
}>;
export declare const OpenApiTagSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    name: string;
}, {
    description: string;
    name: string;
}>;
export declare const OpenApiJsonResponseSchema: z.ZodObject<{
    contentType: z.ZodLiteral<"application/json">;
    body: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    contentType: "application/json";
    body?: any;
}, {
    contentType: "application/json";
    body?: any;
}>;
export declare const OpenApiYamlResponseSchema: z.ZodObject<{
    contentType: z.ZodLiteral<"text/yaml">;
    body: z.ZodString;
}, "strip", z.ZodTypeAny, {
    contentType: "text/yaml";
    body: string;
}, {
    contentType: "text/yaml";
    body: string;
}>;
export declare const HealthResponseContractSchema: z.ZodObject<{
    contentType: z.ZodLiteral<"application/json">;
    body: z.ZodObject<{
        status: z.ZodString;
        timestamp: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: string;
        timestamp: string;
    }, {
        status: string;
        timestamp: string;
    }>;
}, "strip", z.ZodTypeAny, {
    contentType: "application/json";
    body: {
        status: string;
        timestamp: string;
    };
}, {
    contentType: "application/json";
    body: {
        status: string;
        timestamp: string;
    };
}>;
