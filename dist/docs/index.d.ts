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
                }, "strip", import("zod").ZodTypeAny, {
                    status: string;
                    timestamp: string;
                }, {
                    status: string;
                    timestamp: string;
                }>;
            }, "strip", import("zod").ZodTypeAny, {
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
        };
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
            }, "strip", import("zod").ZodTypeAny, {
                contentType: "application/json";
                body?: any;
            }, {
                contentType: "application/json";
                body?: any;
            }>;
        };
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
            }, "strip", import("zod").ZodTypeAny, {
                contentType: "text/yaml";
                body: string;
            }, {
                contentType: "text/yaml";
                body: string;
            }>;
        };
    };
};
