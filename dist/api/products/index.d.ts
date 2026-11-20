import { z } from 'zod';
export declare const ProductsContracts: {
    createProduct: {
        summary: "Create a new financial product";
        description: "Creates a new financial product (admin only)";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            product_type: z.ZodOptional<z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>;
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
            product_type?: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
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
            product_type?: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
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
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
            product_type: z.ZodOptional<z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>;
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
            product_type?: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
            institution_id?: number | undefined;
            credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
            is_spotlight?: boolean | undefined;
        }, {
            limit?: string | undefined;
            search?: string | undefined;
            offset?: string | undefined;
            product_type?: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
            institution_id?: string | undefined;
            credit_score_requirement?: "excellent" | "good" | "fair" | "poor" | undefined;
            is_spotlight?: string | undefined;
        }>;
        summary: "Get all financial products";
        description: "Returns all active financial products with optional filtering and search";
        method: "GET";
        path: "/products";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
            type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
        }, "strip", z.ZodTypeAny, {
            type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
        }, {
            type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        description: "Returns financial products filtered by type";
        method: "GET";
        path: "/products/type/:type";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
        description: "Returns financial products for a specific institution";
        method: "GET";
        path: "/products/institution/:institutionId";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
        summary: "Get featured products";
        description: "Returns featured financial products";
        method: "GET";
        path: "/products/spotlight";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
        summary: "Get no-annual-fee products";
        description: "Returns financial products with no annual fee";
        method: "GET";
        path: "/products/no-annual-fee";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
        description: "Returns financial products filtered by credit score requirement";
        method: "GET";
        path: "/products/credit-score/:requirement";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
    getMyProducts: {
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
        summary: "Get my saved products";
        description: "Returns products saved by the authenticated user";
        method: "GET";
        path: "/products/all-my-products/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
    removeFromMyProducts: {
        pathParams: z.ZodObject<{
            productId: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            productId: number;
        }, {
            productId: string;
        }>;
        summary: "Remove product from my list";
        description: "Removes a product from the authenticated user product list";
        method: "DELETE";
        path: "/products/my-products/:productId";
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
    getProduct: {
        pathParams: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        summary: "Get a specific financial product";
        description: "Returns a specific financial product by ID";
        method: "GET";
        path: "/products/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
            product_type: z.ZodOptional<z.ZodOptional<z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>>;
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
            product_type?: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
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
            product_type?: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | undefined;
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
                    product_type: z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
                    institution_id: number;
                    institution_name: string;
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
        description: "Soft-deletes a financial product (admin only)";
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
    getMyConnectedProducts: {
        pathParams: z.ZodObject<{
            type: z.ZodEnum<["accounts", "cards", "loans", "financial-certificate"]>;
        }, "strip", z.ZodTypeAny, {
            type: "accounts" | "cards" | "loans" | "financial-certificate";
        }, {
            type: "accounts" | "cards" | "loans" | "financial-certificate";
        }>;
        query: z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            from?: string | undefined;
            to?: string | undefined;
        }, {
            from?: string | undefined;
            to?: string | undefined;
        }>;
        summary: "Get my connected products by type";
        description: "Returns products from bank connections filtered by type. Optional from/to (YYYY-MM-DD) limit debit spend totals. Account products include optional bank_balance and period_spend values with separate currency fields; bank_balance is null when no balance has been reported or recorded.";
        method: "GET";
        path: "/products/my-products/connected/:type";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    summary: z.ZodOptional<z.ZodObject<{
                        pending_balance: z.ZodOptional<z.ZodNumber>;
                        initial_debt: z.ZodOptional<z.ZodNumber>;
                        monthly_payment: z.ZodOptional<z.ZodNumber>;
                        total_balance: z.ZodOptional<z.ZodNumber>;
                        monthly_change: z.ZodOptional<z.ZodNumber>;
                        active_count: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        active_count: number;
                        monthly_payment?: number | undefined;
                        pending_balance?: number | undefined;
                        initial_debt?: number | undefined;
                        total_balance?: number | undefined;
                        monthly_change?: number | undefined;
                    }, {
                        active_count: number;
                        monthly_payment?: number | undefined;
                        pending_balance?: number | undefined;
                        initial_debt?: number | undefined;
                        total_balance?: number | undefined;
                        monthly_change?: number | undefined;
                    }>>;
                    products: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        type: z.ZodString;
                        name: z.ZodString;
                        institution: z.ZodString;
                        institution_logo: z.ZodNullable<z.ZodString>;
                        product_kind: z.ZodEnum<["debit", "credit"]>;
                        product_label: z.ZodString;
                        lastFour: z.ZodString;
                        expense_destination: z.ZodObject<{
                            budget_uuid: z.ZodNullable<z.ZodString>;
                            group_uuid: z.ZodNullable<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            budget_uuid: string | null;
                            group_uuid: string | null;
                        }, {
                            budget_uuid: string | null;
                            group_uuid: string | null;
                        }>;
                        is_manual: z.ZodBoolean;
                        card_brand: z.ZodNullable<z.ZodEnum<["visa", "mastercard", "amex"]>>;
                        linked_account_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        balance: z.ZodObject<{
                            current: z.ZodNumber;
                            available: z.ZodNumber;
                            limit: z.ZodNullable<z.ZodNumber>;
                        }, "strip", z.ZodTypeAny, {
                            limit: number | null;
                            current: number;
                            available: number;
                        }, {
                            limit: number | null;
                            current: number;
                            available: number;
                        }>;
                        bank_balance: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        bank_balance_currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        period_spend: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        period_spend_currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        metadata: z.ZodObject<{
                            utilization: z.ZodNullable<z.ZodNumber>;
                            next_payment: z.ZodNullable<z.ZodString>;
                            minimum_payment: z.ZodNullable<z.ZodNumber>;
                            monthly_payment: z.ZodNullable<z.ZodNumber>;
                            remaining_payments: z.ZodNullable<z.ZodNumber>;
                            progress: z.ZodNullable<z.ZodNumber>;
                            annual_rate: z.ZodNullable<z.ZodString>;
                            investment_contract_months: z.ZodNullable<z.ZodNumber>;
                            risk_level: z.ZodNullable<z.ZodString>;
                            interest_payment: z.ZodNullable<z.ZodString>;
                            initial_value: z.ZodNullable<z.ZodNumber>;
                            accumulated_gain: z.ZodNullable<z.ZodNumber>;
                        }, "strip", z.ZodTypeAny, {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            monthly_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            investment_contract_months: number | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        }, {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            monthly_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            investment_contract_months: number | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        }>;
                        percentage_change: z.ZodString;
                        currency: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: string;
                        id: string;
                        metadata: {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            monthly_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            investment_contract_months: number | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        product_kind: "debit" | "credit";
                        product_label: string;
                        lastFour: string;
                        expense_destination: {
                            budget_uuid: string | null;
                            group_uuid: string | null;
                        };
                        is_manual: boolean;
                        card_brand: "visa" | "mastercard" | "amex" | null;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                        linked_account_id?: string | null | undefined;
                        bank_balance?: number | null | undefined;
                        bank_balance_currency?: string | null | undefined;
                        period_spend?: number | null | undefined;
                        period_spend_currency?: string | null | undefined;
                    }, {
                        type: string;
                        id: string;
                        metadata: {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            monthly_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            investment_contract_months: number | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        product_kind: "debit" | "credit";
                        product_label: string;
                        lastFour: string;
                        expense_destination: {
                            budget_uuid: string | null;
                            group_uuid: string | null;
                        };
                        is_manual: boolean;
                        card_brand: "visa" | "mastercard" | "amex" | null;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                        linked_account_id?: string | null | undefined;
                        bank_balance?: number | null | undefined;
                        bank_balance_currency?: string | null | undefined;
                        period_spend?: number | null | undefined;
                        period_spend_currency?: string | null | undefined;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    products: {
                        type: string;
                        id: string;
                        metadata: {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            monthly_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            investment_contract_months: number | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        product_kind: "debit" | "credit";
                        product_label: string;
                        lastFour: string;
                        expense_destination: {
                            budget_uuid: string | null;
                            group_uuid: string | null;
                        };
                        is_manual: boolean;
                        card_brand: "visa" | "mastercard" | "amex" | null;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                        linked_account_id?: string | null | undefined;
                        bank_balance?: number | null | undefined;
                        bank_balance_currency?: string | null | undefined;
                        period_spend?: number | null | undefined;
                        period_spend_currency?: string | null | undefined;
                    }[];
                    summary?: {
                        active_count: number;
                        monthly_payment?: number | undefined;
                        pending_balance?: number | undefined;
                        initial_debt?: number | undefined;
                        total_balance?: number | undefined;
                        monthly_change?: number | undefined;
                    } | undefined;
                }, {
                    products: {
                        type: string;
                        id: string;
                        metadata: {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            monthly_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            investment_contract_months: number | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        product_kind: "debit" | "credit";
                        product_label: string;
                        lastFour: string;
                        expense_destination: {
                            budget_uuid: string | null;
                            group_uuid: string | null;
                        };
                        is_manual: boolean;
                        card_brand: "visa" | "mastercard" | "amex" | null;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                        linked_account_id?: string | null | undefined;
                        bank_balance?: number | null | undefined;
                        bank_balance_currency?: string | null | undefined;
                        period_spend?: number | null | undefined;
                        period_spend_currency?: string | null | undefined;
                    }[];
                    summary?: {
                        active_count: number;
                        monthly_payment?: number | undefined;
                        pending_balance?: number | undefined;
                        initial_debt?: number | undefined;
                        total_balance?: number | undefined;
                        monthly_change?: number | undefined;
                    } | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    products: {
                        type: string;
                        id: string;
                        metadata: {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            monthly_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            investment_contract_months: number | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        product_kind: "debit" | "credit";
                        product_label: string;
                        lastFour: string;
                        expense_destination: {
                            budget_uuid: string | null;
                            group_uuid: string | null;
                        };
                        is_manual: boolean;
                        card_brand: "visa" | "mastercard" | "amex" | null;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                        linked_account_id?: string | null | undefined;
                        bank_balance?: number | null | undefined;
                        bank_balance_currency?: string | null | undefined;
                        period_spend?: number | null | undefined;
                        period_spend_currency?: string | null | undefined;
                    }[];
                    summary?: {
                        active_count: number;
                        monthly_payment?: number | undefined;
                        pending_balance?: number | undefined;
                        initial_debt?: number | undefined;
                        total_balance?: number | undefined;
                        monthly_change?: number | undefined;
                    } | undefined;
                };
            }, {
                message: string;
                data: {
                    products: {
                        type: string;
                        id: string;
                        metadata: {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            monthly_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            investment_contract_months: number | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        product_kind: "debit" | "credit";
                        product_label: string;
                        lastFour: string;
                        expense_destination: {
                            budget_uuid: string | null;
                            group_uuid: string | null;
                        };
                        is_manual: boolean;
                        card_brand: "visa" | "mastercard" | "amex" | null;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                        linked_account_id?: string | null | undefined;
                        bank_balance?: number | null | undefined;
                        bank_balance_currency?: string | null | undefined;
                        period_spend?: number | null | undefined;
                        period_spend_currency?: string | null | undefined;
                    }[];
                    summary?: {
                        active_count: number;
                        monthly_payment?: number | undefined;
                        pending_balance?: number | undefined;
                        initial_debt?: number | undefined;
                        total_balance?: number | undefined;
                        monthly_change?: number | undefined;
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
    setMyProductExpenseDestination: {
        pathParams: z.ZodObject<{
            productUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            productUuid: string;
        }, {
            productUuid: string;
        }>;
        summary: "Set expense destinations for a connected product";
        description: "Sets optional budget and shared group destinations for future imported expenses from this connected product.";
        method: "PATCH";
        body: z.ZodObject<{
            budget_uuid: z.ZodNullable<z.ZodString>;
            group_uuid: z.ZodNullable<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            budget_uuid: string | null;
            group_uuid: string | null;
        }, {
            budget_uuid: string | null;
            group_uuid: string | null;
        }>;
        path: "/products/my-products/:productUuid/expense-destination";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    budget_uuid: z.ZodNullable<z.ZodString>;
                    group_uuid: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    budget_uuid: string | null;
                    group_uuid: string | null;
                }, {
                    budget_uuid: string | null;
                    group_uuid: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    budget_uuid: string | null;
                    group_uuid: string | null;
                };
            }, {
                message: string;
                data: {
                    budget_uuid: string | null;
                    group_uuid: string | null;
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
    setMyTransactionExpenseDestination: {
        pathParams: z.ZodObject<{
            transactionUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            transactionUuid: string;
        }, {
            transactionUuid: string;
        }>;
        summary: "Set destinations for a personal expense";
        description: "Assigns an expense to a budget regardless of category, sets its shared group, or excludes it from one category-based budget without changing other budgets.";
        method: "PATCH";
        body: z.ZodEffects<z.ZodObject<{
            budget_uuid: z.ZodNullable<z.ZodString>;
            group_uuid: z.ZodNullable<z.ZodString>;
        } & {
            excluded_budget_uuid: z.ZodOptional<z.ZodString>;
            budget_excluded: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            budget_uuid: string | null;
            group_uuid: string | null;
            excluded_budget_uuid?: string | undefined;
            budget_excluded?: boolean | undefined;
        }, {
            budget_uuid: string | null;
            group_uuid: string | null;
            excluded_budget_uuid?: string | undefined;
            budget_excluded?: boolean | undefined;
        }>, {
            budget_uuid: string | null;
            group_uuid: string | null;
            excluded_budget_uuid?: string | undefined;
            budget_excluded?: boolean | undefined;
        }, {
            budget_uuid: string | null;
            group_uuid: string | null;
            excluded_budget_uuid?: string | undefined;
            budget_excluded?: boolean | undefined;
        }>;
        path: "/products/my-transactions/:transactionUuid/expense-destination";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    budget_uuid: z.ZodNullable<z.ZodString>;
                    group_uuid: z.ZodNullable<z.ZodString>;
                } & {
                    excluded_budget_uuids: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    budget_uuid: string | null;
                    group_uuid: string | null;
                    excluded_budget_uuids: string[];
                }, {
                    budget_uuid: string | null;
                    group_uuid: string | null;
                    excluded_budget_uuids: string[];
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    budget_uuid: string | null;
                    group_uuid: string | null;
                    excluded_budget_uuids: string[];
                };
            }, {
                message: string;
                data: {
                    budget_uuid: string | null;
                    group_uuid: string | null;
                    excluded_budget_uuids: string[];
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
    getMyTransactions: {
        query: z.ZodObject<{
            limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
            currency: z.ZodOptional<z.ZodEnum<["DOP", "USD", "EUR"]>>;
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
            search: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<["debit", "credit", "payment"]>>;
            product_uuid: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            assignment_candidates: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, boolean, string>, z.ZodBoolean>>;
            statement_upload_uuid: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            offset: number;
            type?: "debit" | "credit" | "payment" | undefined;
            search?: string | undefined;
            currency?: "DOP" | "USD" | "EUR" | undefined;
            product_uuid?: string | undefined;
            category?: string | undefined;
            from?: string | undefined;
            to?: string | undefined;
            assignment_candidates?: boolean | undefined;
            statement_upload_uuid?: string | undefined;
        }, {
            type?: "debit" | "credit" | "payment" | undefined;
            limit?: string | undefined;
            search?: string | undefined;
            currency?: "DOP" | "USD" | "EUR" | undefined;
            offset?: string | undefined;
            product_uuid?: string | undefined;
            category?: string | undefined;
            from?: string | undefined;
            to?: string | undefined;
            assignment_candidates?: string | undefined;
            statement_upload_uuid?: string | undefined;
        }>;
        summary: "Get my product transactions";
        description: "Returns product transactions for the authenticated user. Optional currency limits results to DOP, USD, or EUR. Optional from/to (YYYY-MM-DD) limit results to an inclusive date range. Optional search matches description, institution, product, card brand, or last 4. Optional product_uuid limits results to one connected product. assignment_candidates=true includes manual and imported personal expenses regardless of tracking mode for destination assignment. Optional statement_upload_uuid limits results to one accepted statement upload.";
        method: "GET";
        path: "/products/my-transactions";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    uuid: z.ZodString;
                    product_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    amount: z.ZodNumber;
                    currency: z.ZodString;
                    transaction_date: z.ZodString;
                    transaction_occurred_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    description: z.ZodNullable<z.ZodString>;
                    transaction_type: z.ZodEnum<["debit", "credit", "payment"]>;
                    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    can_edit_category: z.ZodOptional<z.ZodBoolean>;
                    can_assign_to_budget: z.ZodOptional<z.ZodBoolean>;
                    is_imported: z.ZodOptional<z.ZodBoolean>;
                    is_manual: z.ZodOptional<z.ZodBoolean>;
                    institution_name: z.ZodNullable<z.ZodString>;
                    institution_logo: z.ZodNullable<z.ZodString>;
                    product_type: z.ZodNullable<z.ZodEnum<["credit_card", "debit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>>;
                    product_kind: z.ZodNullable<z.ZodEnum<["debit", "credit"]>>;
                    product_label: z.ZodNullable<z.ZodString>;
                    card_brand: z.ZodNullable<z.ZodEnum<["visa", "mastercard", "amex"]>>;
                    linked_account_label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    excluded_budget_uuids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    destination_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    budget_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    group_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    description: string | null;
                    uuid: string;
                    currency: string;
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    product_kind: "debit" | "credit" | null;
                    product_label: string | null;
                    card_brand: "visa" | "mastercard" | "amex" | null;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit" | "payment";
                    budget_uuid?: string | null | undefined;
                    group_uuid?: string | null | undefined;
                    is_manual?: boolean | undefined;
                    product_uuid?: string | null | undefined;
                    transaction_occurred_at?: string | null | undefined;
                    category?: string | null | undefined;
                    can_edit_category?: boolean | undefined;
                    can_assign_to_budget?: boolean | undefined;
                    is_imported?: boolean | undefined;
                    linked_account_label?: string | null | undefined;
                    excluded_budget_uuids?: string[] | undefined;
                    destination_pending?: string | null | undefined;
                    budget_pending?: string | null | undefined;
                    group_pending?: string | null | undefined;
                }, {
                    description: string | null;
                    uuid: string;
                    currency: string;
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    product_kind: "debit" | "credit" | null;
                    product_label: string | null;
                    card_brand: "visa" | "mastercard" | "amex" | null;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit" | "payment";
                    budget_uuid?: string | null | undefined;
                    group_uuid?: string | null | undefined;
                    is_manual?: boolean | undefined;
                    product_uuid?: string | null | undefined;
                    transaction_occurred_at?: string | null | undefined;
                    category?: string | null | undefined;
                    can_edit_category?: boolean | undefined;
                    can_assign_to_budget?: boolean | undefined;
                    is_imported?: boolean | undefined;
                    linked_account_label?: string | null | undefined;
                    excluded_budget_uuids?: string[] | undefined;
                    destination_pending?: string | null | undefined;
                    budget_pending?: string | null | undefined;
                    group_pending?: string | null | undefined;
                }>, "many">;
                pagination: z.ZodObject<{
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
                }>;
                summary: z.ZodObject<{
                    income: z.ZodNumber;
                    expenses: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    income: number;
                    expenses: number;
                }, {
                    income: number;
                    expenses: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    description: string | null;
                    uuid: string;
                    currency: string;
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    product_kind: "debit" | "credit" | null;
                    product_label: string | null;
                    card_brand: "visa" | "mastercard" | "amex" | null;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit" | "payment";
                    budget_uuid?: string | null | undefined;
                    group_uuid?: string | null | undefined;
                    is_manual?: boolean | undefined;
                    product_uuid?: string | null | undefined;
                    transaction_occurred_at?: string | null | undefined;
                    category?: string | null | undefined;
                    can_edit_category?: boolean | undefined;
                    can_assign_to_budget?: boolean | undefined;
                    is_imported?: boolean | undefined;
                    linked_account_label?: string | null | undefined;
                    excluded_budget_uuids?: string[] | undefined;
                    destination_pending?: string | null | undefined;
                    budget_pending?: string | null | undefined;
                    group_pending?: string | null | undefined;
                }[];
                pagination: {
                    limit: number;
                    total: number;
                    offset: number;
                };
                summary: {
                    income: number;
                    expenses: number;
                };
            }, {
                message: string;
                data: {
                    description: string | null;
                    uuid: string;
                    currency: string;
                    product_type: "insurance" | "credit_card" | "debit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage" | null;
                    institution_name: string | null;
                    institution_logo: string | null;
                    product_kind: "debit" | "credit" | null;
                    product_label: string | null;
                    card_brand: "visa" | "mastercard" | "amex" | null;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit" | "payment";
                    budget_uuid?: string | null | undefined;
                    group_uuid?: string | null | undefined;
                    is_manual?: boolean | undefined;
                    product_uuid?: string | null | undefined;
                    transaction_occurred_at?: string | null | undefined;
                    category?: string | null | undefined;
                    can_edit_category?: boolean | undefined;
                    can_assign_to_budget?: boolean | undefined;
                    is_imported?: boolean | undefined;
                    linked_account_label?: string | null | undefined;
                    excluded_budget_uuids?: string[] | undefined;
                    destination_pending?: string | null | undefined;
                    budget_pending?: string | null | undefined;
                    group_pending?: string | null | undefined;
                }[];
                pagination: {
                    limit: number;
                    total: number;
                    offset: number;
                };
                summary: {
                    income: number;
                    expenses: number;
                };
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
