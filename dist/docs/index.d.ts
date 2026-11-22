export declare const DocsContracts: {
    health: {
        summary: "Health check endpoint";
        description: "Returns the current status of the API server";
        method: "GET";
        path: "/health";
        responses: {
            200: import("zod").ZodObject<{
                contentType: import("zod").ZodLiteral<"application/json">;
                body: import("zod").ZodObject<{
                    status: import("zod").ZodString;
                    timestamp: import("zod").ZodString;
                }, import("zod/v4/core").$strip>;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    openApiJson: {
        summary: "Get OpenAPI schema as JSON";
        description: "Returns the complete OpenAPI 3.0 schema in JSON format";
        method: "GET";
        path: "/api-docs.json";
        responses: {
            200: import("zod").ZodObject<{
                contentType: import("zod").ZodLiteral<"application/json">;
                body: import("zod").ZodAny;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    openApiYaml: {
        summary: "Get OpenAPI schema as YAML";
        description: "Returns the complete OpenAPI 3.0 schema in YAML format";
        method: "GET";
        path: "/api-docs.yaml";
        responses: {
            200: import("zod").ZodObject<{
                contentType: import("zod").ZodLiteral<"text/yaml">;
                body: import("zod").ZodString;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
    qDocs: {
        summary: "Get OpenAPI schema as JSON (alternative endpoint)";
        description: "Returns the complete OpenAPI 3.0 schema in JSON format via /q/docs endpoint";
        method: "GET";
        path: "/q/docs";
        responses: {
            200: import("zod").ZodObject<{
                contentType: import("zod").ZodLiteral<"application/json">;
                body: import("zod").ZodAny;
            }, import("zod/v4/core").$strip>;
        };
        strictStatusCodes: true;
    };
};
