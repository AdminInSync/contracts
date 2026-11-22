import { z } from 'zod';
export declare const InstitutionsContracts: {
    createInstitution: {
        summary: "Create a new financial institution";
        description: "Creates a new financial institution (admin only)";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            institution_type: z.ZodOptional<z.ZodEnum<{
                bank: "bank";
                credit_union: "credit_union";
                investment_firm: "investment_firm";
                insurance: "insurance";
                fintech: "fintech";
            }>>;
            logo_url: z.ZodOptional<z.ZodString>;
            website: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            is_active: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: "/institutions";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<{
                        bank: "bank";
                        credit_union: "credit_union";
                        investment_firm: "investment_firm";
                        insurance: "insurance";
                        fintech: "fintech";
                    }>;
                    logo_url: z.ZodNullable<z.ZodString>;
                    website: z.ZodNullable<z.ZodString>;
                    country: z.ZodNullable<z.ZodString>;
                    region: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                    description: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    products: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        product_type: z.ZodString;
                        is_active: z.ZodBoolean;
                    }, z.core.$strip>>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            409: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getInstitutions: {
        query: z.ZodObject<{
            institution_type: z.ZodOptional<z.ZodEnum<{
                bank: "bank";
                credit_union: "credit_union";
                investment_firm: "investment_firm";
                insurance: "insurance";
                fintech: "fintech";
            }>>;
            country: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            search: z.ZodOptional<z.ZodString>;
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
        summary: "Get all financial institutions";
        description: "Returns all active financial institutions with optional filtering";
        method: "GET";
        path: "/institutions";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<{
                        bank: "bank";
                        credit_union: "credit_union";
                        investment_firm: "investment_firm";
                        insurance: "insurance";
                        fintech: "fintech";
                    }>;
                    logo_url: z.ZodNullable<z.ZodString>;
                    website: z.ZodNullable<z.ZodString>;
                    country: z.ZodNullable<z.ZodString>;
                    region: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                    description: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    products: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        product_type: z.ZodString;
                        is_active: z.ZodBoolean;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getInstitution: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Get a specific financial institution";
        description: "Returns a specific financial institution by ID";
        method: "GET";
        path: "/institutions/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<{
                        bank: "bank";
                        credit_union: "credit_union";
                        investment_firm: "investment_firm";
                        insurance: "insurance";
                        fintech: "fintech";
                    }>;
                    logo_url: z.ZodNullable<z.ZodString>;
                    website: z.ZodNullable<z.ZodString>;
                    country: z.ZodNullable<z.ZodString>;
                    region: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                    description: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    products: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        product_type: z.ZodString;
                        is_active: z.ZodBoolean;
                    }, z.core.$strip>>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    updateInstitution: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Update a financial institution";
        description: "Updates an existing financial institution (admin only)";
        method: "PUT";
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            institution_type: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                bank: "bank";
                credit_union: "credit_union";
                investment_firm: "investment_firm";
                insurance: "insurance";
                fintech: "fintech";
            }>>>;
            logo_url: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            website: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            country: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            region: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            is_active: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>;
        path: "/institutions/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<{
                        bank: "bank";
                        credit_union: "credit_union";
                        investment_firm: "investment_firm";
                        insurance: "insurance";
                        fintech: "fintech";
                    }>;
                    logo_url: z.ZodNullable<z.ZodString>;
                    website: z.ZodNullable<z.ZodString>;
                    country: z.ZodNullable<z.ZodString>;
                    region: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                    description: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    products: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        product_type: z.ZodString;
                        is_active: z.ZodBoolean;
                    }, z.core.$strip>>>;
                }, z.core.$strip>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            409: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    deleteInstitution: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Delete a financial institution";
        description: "Soft-deletes a financial institution (admin only)";
        method: "DELETE";
        path: "/institutions/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, z.core.$strip>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    searchInstitutions: {
        query: z.ZodObject<{
            q: z.ZodString;
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
        summary: "Search financial institutions";
        description: "Searches financial institutions by name";
        method: "GET";
        path: "/institutions/search";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<{
                        bank: "bank";
                        credit_union: "credit_union";
                        investment_firm: "investment_firm";
                        insurance: "insurance";
                        fintech: "fintech";
                    }>;
                    logo_url: z.ZodNullable<z.ZodString>;
                    website: z.ZodNullable<z.ZodString>;
                    country: z.ZodNullable<z.ZodString>;
                    region: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                    description: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    products: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        product_type: z.ZodString;
                        is_active: z.ZodBoolean;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getInstitutionsByType: {
        pathParams: z.ZodObject<{
            type: z.ZodEnum<{
                bank: "bank";
                credit_union: "credit_union";
                investment_firm: "investment_firm";
                insurance: "insurance";
                fintech: "fintech";
            }>;
        }, z.core.$strip>;
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
        summary: "Get institutions by type";
        description: "Returns financial institutions filtered by type";
        method: "GET";
        path: "/institutions/type/:type";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<{
                        bank: "bank";
                        credit_union: "credit_union";
                        investment_firm: "investment_firm";
                        insurance: "insurance";
                        fintech: "fintech";
                    }>;
                    logo_url: z.ZodNullable<z.ZodString>;
                    website: z.ZodNullable<z.ZodString>;
                    country: z.ZodNullable<z.ZodString>;
                    region: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                    description: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    products: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        product_type: z.ZodString;
                        is_active: z.ZodBoolean;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    getInstitutionsWithProducts: {
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
        summary: "Get institutions with products";
        description: "Returns financial institutions that have active products";
        method: "GET";
        path: "/institutions/with-products";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<{
                        bank: "bank";
                        credit_union: "credit_union";
                        investment_firm: "investment_firm";
                        insurance: "insurance";
                        fintech: "fintech";
                    }>;
                    logo_url: z.ZodNullable<z.ZodString>;
                    website: z.ZodNullable<z.ZodString>;
                    country: z.ZodNullable<z.ZodString>;
                    region: z.ZodNullable<z.ZodString>;
                    is_active: z.ZodBoolean;
                    description: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    products: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        product_type: z.ZodString;
                        is_active: z.ZodBoolean;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
};
