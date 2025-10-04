import { z } from 'zod';
export declare const InstitutionsContracts: {
    createInstitution: {
        summary: "Create a new financial institution";
        description: "Creates a new financial institution (admin only)";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            institution_type: z.ZodOptional<z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>>;
            logo_url: z.ZodOptional<z.ZodString>;
            website: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            is_active: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            is_active?: boolean | undefined;
            description?: string | undefined;
            institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
            logo_url?: string | undefined;
            website?: string | undefined;
            country?: string | undefined;
            region?: string | undefined;
        }, {
            name: string;
            is_active?: boolean | undefined;
            description?: string | undefined;
            institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
            logo_url?: string | undefined;
            website?: string | undefined;
            country?: string | undefined;
            region?: string | undefined;
        }>;
        path: "/institutions";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
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
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                };
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            409: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getInstitutions: {
        query: z.ZodObject<{
            institution_type: z.ZodOptional<z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>>;
            country: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            search: z.ZodOptional<z.ZodString>;
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
            search?: string | undefined;
            institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
            country?: string | undefined;
            region?: string | undefined;
        }, {
            limit?: number | undefined;
            search?: string | undefined;
            offset?: number | undefined;
            institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
            country?: string | undefined;
            region?: string | undefined;
        }>;
        summary: "Get all financial institutions";
        description: "Retrieves all active financial institutions with optional filtering";
        method: "GET";
        path: "/institutions";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
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
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getInstitution: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Get a specific financial institution";
        description: "Retrieves a specific financial institution by ID";
        method: "GET";
        path: "/institutions/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
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
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                };
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    updateInstitution: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Update a financial institution";
        description: "Updates an existing financial institution (admin only)";
        method: "PUT";
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            institution_type: z.ZodOptional<z.ZodOptional<z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>>>;
            logo_url: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            website: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            country: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            region: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            is_active: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            is_active?: boolean | undefined;
            description?: string | undefined;
            name?: string | undefined;
            institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
            logo_url?: string | undefined;
            website?: string | undefined;
            country?: string | undefined;
            region?: string | undefined;
        }, {
            is_active?: boolean | undefined;
            description?: string | undefined;
            name?: string | undefined;
            institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
            logo_url?: string | undefined;
            website?: string | undefined;
            country?: string | undefined;
            region?: string | undefined;
        }>;
        path: "/institutions/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
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
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                };
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            409: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    deleteInstitution: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Delete a financial institution";
        description: "Soft deletes a financial institution (admin only)";
        method: "DELETE";
        path: "/institutions/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    searchInstitutions: {
        query: z.ZodObject<{
            q: z.ZodString;
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
            q: string;
        }, {
            q: string;
            limit?: number | undefined;
            offset?: number | undefined;
        }>;
        summary: "Search financial institutions";
        description: "Search financial institutions by name";
        method: "GET";
        path: "/institutions/search";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
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
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getInstitutionsByType: {
        pathParams: z.ZodObject<{
            type: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
        }, "strip", z.ZodTypeAny, {
            type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
        }, {
            type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
        }>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: number | undefined;
            offset?: number | undefined;
        }>;
        summary: "Get institutions by type";
        description: "Retrieves financial institutions filtered by type";
        method: "GET";
        path: "/institutions/type/:type";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
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
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getInstitutionsWithProducts: {
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodNumber>;
            offset: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: number | undefined;
            offset?: number | undefined;
        }>;
        summary: "Get institutions with products";
        description: "Retrieves financial institutions that have active products";
        method: "GET";
        path: "/institutions/with-products";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    institution_type: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
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
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }, {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }>, "many">;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    total: number;
                    offset: number;
                }, {
                    limit: number;
                    total: number;
                    offset: number;
                }>>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    description: string | null;
                    uuid: string;
                    name: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: string | null;
                    institution_type: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech";
                    logo_url: string | null;
                    website: string | null;
                    country: string | null;
                    region: string | null;
                    products?: {
                        id: number;
                        is_active: boolean;
                        name: string;
                        product_type: string;
                    }[] | undefined;
                }[];
                pagination?: {
                    limit: number;
                    total: number;
                    offset: number;
                } | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
};
