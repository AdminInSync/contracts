import { z } from 'zod';
export declare const ProductsContracts: {
    createProduct: {
        summary: "Create a new financial product";
        description: "Creates a new financial product (admin only)";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            product_type: z.ZodOptional<z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>;
            institution_id: z.ZodNumber;
            interest_rate: z.ZodOptional<z.ZodNumber>;
            annual_fee: z.ZodOptional<z.ZodNumber>;
            minimum_balance: z.ZodOptional<z.ZodNumber>;
            credit_score_requirement: z.ZodOptional<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
            benefits: z.ZodOptional<z.ZodString>;
            features: z.ZodOptional<z.ZodString>;
            terms_conditions: z.ZodOptional<z.ZodString>;
            is_spotlight: z.ZodOptional<z.ZodBoolean>;
            is_active: z.ZodOptional<z.ZodBoolean>;
            currency: z.ZodOptional<z.ZodString>;
            valid_from: z.ZodOptional<z.ZodString>;
            valid_until: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            institution_id: number;
            is_active?: boolean | undefined;
            currency?: string | undefined;
            product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
            interest_rate?: number | undefined;
            annual_fee?: number | undefined;
            minimum_balance?: number | undefined;
            credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
            benefits?: string | undefined;
            features?: string | undefined;
            terms_conditions?: string | undefined;
            is_spotlight?: boolean | undefined;
            valid_from?: string | undefined;
            valid_until?: string | undefined;
        }, {
            name: string;
            institution_id: number;
            is_active?: boolean | undefined;
            currency?: string | undefined;
            product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
            interest_rate?: number | undefined;
            annual_fee?: number | undefined;
            minimum_balance?: number | undefined;
            credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
            benefits?: string | undefined;
            features?: string | undefined;
            terms_conditions?: string | undefined;
            is_spotlight?: boolean | undefined;
            valid_from?: string | undefined;
            valid_until?: string | undefined;
        }>;
        path: "/products";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    getProducts: {
        query: z.ZodObject<{
            product_type: z.ZodOptional<z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>;
            institution_id: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            credit_score_requirement: z.ZodOptional<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
            is_spotlight: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, boolean, string>, z.ZodBoolean>>;
            search: z.ZodOptional<z.ZodString>;
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
            search?: string | undefined;
            product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
            institution_id?: number | undefined;
            credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
            is_spotlight?: boolean | undefined;
        }, {
            limit?: string | undefined;
            search?: string | undefined;
            offset?: string | undefined;
            product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
            institution_id?: string | undefined;
            credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
            is_spotlight?: string | undefined;
        }>;
        summary: "Get all financial products";
        description: "Retrieves all active financial products with optional filtering";
        method: "GET";
        path: "/products";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    getProduct: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Get a specific financial product";
        description: "Retrieves a specific financial product by ID";
        method: "GET";
        path: "/products/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    updateProduct: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Update a financial product";
        description: "Updates an existing financial product (admin only)";
        method: "PUT";
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            product_type: z.ZodOptional<z.ZodOptional<z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>>;
            institution_id: z.ZodOptional<z.ZodNumber>;
            interest_rate: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            annual_fee: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            minimum_balance: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            credit_score_requirement: z.ZodOptional<z.ZodOptional<z.ZodEnum<["excellent", "good", "fair", "poor"]>>>;
            benefits: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            features: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            terms_conditions: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            is_spotlight: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            is_active: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            currency: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            valid_from: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            valid_until: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            is_active?: boolean | undefined;
            name?: string | undefined;
            currency?: string | undefined;
            product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
            institution_id?: number | undefined;
            interest_rate?: number | undefined;
            annual_fee?: number | undefined;
            minimum_balance?: number | undefined;
            credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
            benefits?: string | undefined;
            features?: string | undefined;
            terms_conditions?: string | undefined;
            is_spotlight?: boolean | undefined;
            valid_from?: string | undefined;
            valid_until?: string | undefined;
        }, {
            is_active?: boolean | undefined;
            name?: string | undefined;
            currency?: string | undefined;
            product_type?: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
            institution_id?: number | undefined;
            interest_rate?: number | undefined;
            annual_fee?: number | undefined;
            minimum_balance?: number | undefined;
            credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
            benefits?: string | undefined;
            features?: string | undefined;
            terms_conditions?: string | undefined;
            is_spotlight?: boolean | undefined;
            valid_from?: string | undefined;
            valid_until?: string | undefined;
        }>;
        path: "/products/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                };
            }, {
                message: string;
                data: {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    deleteProduct: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Delete a financial product";
        description: "Soft deletes a financial product (admin only)";
        method: "DELETE";
        path: "/products/:id";
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
    searchProducts: {
        query: z.ZodObject<{
            q: z.ZodString;
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
            q: string;
        }, {
            q: string;
            limit?: string | undefined;
            offset?: string | undefined;
        }>;
        summary: "Search financial products";
        description: "Search financial products by name";
        method: "GET";
        path: "/products/search";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    getProductsByType: {
        pathParams: z.ZodObject<{
            type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
        }, "strip", z.ZodTypeAny, {
            type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
        }, {
            type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
        }>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: string | undefined;
            offset?: string | undefined;
        }>;
        summary: "Get products by type";
        description: "Retrieves financial products filtered by type";
        method: "GET";
        path: "/products/type/:type";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    getProductsByInstitution: {
        pathParams: z.ZodObject<{
            institutionId: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            institutionId: number;
        }, {
            institutionId: string;
        }>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: string | undefined;
            offset?: string | undefined;
        }>;
        summary: "Get products by institution";
        description: "Retrieves financial products for a specific institution";
        method: "GET";
        path: "/products/institution/:institutionId";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    getSpotlightProducts: {
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: string | undefined;
            offset?: string | undefined;
        }>;
        summary: "Get spotlight products";
        description: "Retrieves featured/spotlight financial products";
        method: "GET";
        path: "/products/spotlight";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    getNoAnnualFeeProducts: {
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: string | undefined;
            offset?: string | undefined;
        }>;
        summary: "Get products with no annual fee";
        description: "Retrieves financial products with no annual fee";
        method: "GET";
        path: "/products/no-annual-fee";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
    getProductsByCreditScore: {
        pathParams: z.ZodObject<{
            requirement: z.ZodEnum<["excellent", "good", "fair", "poor"]>;
        }, "strip", z.ZodTypeAny, {
            requirement: "excellent" | "good" | "fair" | "poor";
        }, {
            requirement: "excellent" | "good" | "fair" | "poor";
        }>;
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
        }, {
            limit?: string | undefined;
            offset?: string | undefined;
        }>;
        summary: "Get products by credit score requirement";
        description: "Retrieves financial products filtered by credit score requirement";
        method: "GET";
        path: "/products/credit-score/:requirement";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<["excellent", "good", "fair", "poor"]>>;
                    benefits: z.ZodNullable<z.ZodString>;
                    features: z.ZodNullable<z.ZodString>;
                    terms_conditions: z.ZodNullable<z.ZodString>;
                    is_spotlight: z.ZodBoolean;
                    is_active: z.ZodBoolean;
                    currency: z.ZodNullable<z.ZodString>;
                    valid_from: z.ZodNullable<z.ZodString>;
                    valid_until: z.ZodNullable<z.ZodString>;
                    created_at: z.ZodString;
                    updated_at: z.ZodString;
                    deleted_at: z.ZodNullable<z.ZodString>;
                    institution: z.ZodOptional<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        institution_type: z.ZodString;
                        logo_url: z.ZodNullable<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }, {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
                }, {
                    id: number;
                    is_active: boolean;
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
                    uuid: string;
                    created_at: string;
                    updated_at: string;
                    name: string;
                    currency: string | null;
                    deleted_at: string | null;
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    interest_rate: number | null;
                    annual_fee: number | null;
                    minimum_balance: number | null;
                    credit_score_requirement: "excellent" | "good" | "fair" | "poor" | null;
                    benefits: string | null;
                    features: string | null;
                    terms_conditions: string | null;
                    is_spotlight: boolean;
                    valid_from: string | null;
                    valid_until: string | null;
                    institution?: {
                        id: number;
                        name: string;
                        institution_type: string;
                        logo_url: string | null;
                    } | undefined;
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
};
