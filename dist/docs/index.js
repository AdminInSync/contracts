import { initContract } from '@ts-rest/core';
import { HealthResponseContractSchema, OpenApiJsonResponseSchema, OpenApiYamlResponseSchema } from './docs.schema';
const c = initContract();
export const DocsContracts = c.router({
    health: {
        method: 'GET',
        path: '/health',
        responses: {
            200: HealthResponseContractSchema
        },
        summary: 'Health check endpoint',
        description: 'Returns the current status of the API server'
    },
    openApiJson: {
        method: 'GET',
        path: '/api-docs.json',
        responses: {
            200: OpenApiJsonResponseSchema
        },
        summary: 'Get OpenAPI schema as JSON',
        description: 'Returns the complete OpenAPI 3.0 schema in JSON format'
    },
    openApiYaml: {
        method: 'GET',
        path: '/api-docs.yaml',
        responses: {
            200: OpenApiYamlResponseSchema
        },
        summary: 'Get OpenAPI schema as YAML',
        description: 'Returns the complete OpenAPI 3.0 schema in YAML format'
    },
    qDocs: {
        method: 'GET',
        path: '/q/docs',
        responses: {
            200: OpenApiJsonResponseSchema
        },
        summary: 'Get OpenAPI schema as JSON (alternative endpoint)',
        description: 'Returns the complete OpenAPI 3.0 schema in JSON format via /q/docs endpoint'
    }
}, {
    strictStatusCodes: true,
    tags: ['Docs']
});
