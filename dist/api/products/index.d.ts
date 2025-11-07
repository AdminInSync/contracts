import { z } from 'zod';
export declare const ProductsContracts: {
    createProduct: {
        summary: "Crear un nuevo producto financiero";
        description: "Crea un nuevo producto financiero (solo administrador)";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Obtener todos los productos financieros";
        description: "Obtiene todos los productos financieros activos con filtrado y búsqueda opcionales";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Obtener productos por tipo";
        description: "Obtiene productos financieros filtrados por tipo";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Obtener productos por institución";
        description: "Obtiene productos financieros para una institución específica";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Obtener productos destacados";
        description: "Obtiene productos financieros destacados";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Obtener productos sin tarifa anual";
        description: "Obtiene productos financieros sin tarifa anual";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Obtener productos por requisito de puntaje de crédito";
        description: "Obtiene productos financieros filtrados por requisito de puntaje de crédito";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Obtener mis productos guardados";
        description: "Obtiene productos guardados por el usuario autenticado";
        method: "GET";
        path: "/products/all-my-products/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
    addToMyProducts: {
        pathParams: z.ZodObject<{
            productId: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            productId: number;
        }, {
            productId: string;
        }>;
        summary: "Agregar producto a mis productos";
        description: "Guarda un producto en la lista de productos del usuario autenticado";
        method: "POST";
        body: z.ZodOptional<z.ZodObject<{
            notes: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            notes?: string | undefined;
        }, {
            notes?: string | undefined;
        }>>;
        path: "/products/my-products/:productId";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
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
    removeFromMyProducts: {
        pathParams: z.ZodObject<{
            productId: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            productId: number;
        }, {
            productId: string;
        }>;
        summary: "Eliminar producto de mis productos";
        description: "Elimina un producto de la lista de productos del usuario autenticado";
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
        summary: "Obtener un producto financiero específico";
        description: "Obtiene un producto financiero específico por ID";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Actualizar un producto financiero";
        description: "Actualiza un producto financiero existente (solo administrador)";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
                    product_type: "insurance" | "credit_card" | "loan" | "savings_account" | "checking_account" | "investment" | "mortgage";
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
        summary: "Eliminar un producto financiero";
        description: "Elimina suavemente un producto financiero (solo administrador)";
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
        summary: "Obtener mis productos conectados por tipo";
        description: "Obtiene productos conectados de conexiones bancarias filtrados por tipo";
        method: "GET";
        path: "/products/my-products/connected/:type";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    summary: z.ZodOptional<z.ZodObject<{
                        total_balance: z.ZodOptional<z.ZodNumber>;
                        monthly_change: z.ZodOptional<z.ZodNumber>;
                        active_count: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        active_count: number;
                        total_balance?: number | undefined;
                        monthly_change?: number | undefined;
                    }, {
                        active_count: number;
                        total_balance?: number | undefined;
                        monthly_change?: number | undefined;
                    }>>;
                    products: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        type: z.ZodString;
                        name: z.ZodString;
                        institution: z.ZodString;
                        institution_logo: z.ZodNullable<z.ZodString>;
                        lastFour: z.ZodString;
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
                        metadata: z.ZodObject<{
                            utilization: z.ZodNullable<z.ZodNumber>;
                            next_payment: z.ZodNullable<z.ZodString>;
                            minimum_payment: z.ZodNullable<z.ZodNumber>;
                            remaining_payments: z.ZodNullable<z.ZodNumber>;
                            progress: z.ZodNullable<z.ZodNumber>;
                            annual_rate: z.ZodNullable<z.ZodString>;
                            risk_level: z.ZodNullable<z.ZodString>;
                            interest_payment: z.ZodNullable<z.ZodString>;
                            initial_value: z.ZodNullable<z.ZodNumber>;
                            accumulated_gain: z.ZodNullable<z.ZodNumber>;
                        }, "strip", z.ZodTypeAny, {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        }, {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
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
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        lastFour: string;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                    }, {
                        type: string;
                        id: string;
                        metadata: {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        lastFour: string;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    products: {
                        type: string;
                        id: string;
                        metadata: {
                            utilization: number | null;
                            next_payment: string | null;
                            minimum_payment: number | null;
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        lastFour: string;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                    }[];
                    summary?: {
                        active_count: number;
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
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        lastFour: string;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                    }[];
                    summary?: {
                        active_count: number;
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
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        lastFour: string;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                    }[];
                    summary?: {
                        active_count: number;
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
                            remaining_payments: number | null;
                            progress: number | null;
                            annual_rate: string | null;
                            risk_level: string | null;
                            interest_payment: string | null;
                            initial_value: number | null;
                            accumulated_gain: number | null;
                        };
                        name: string;
                        currency: string;
                        institution: string;
                        institution_logo: string | null;
                        lastFour: string;
                        balance: {
                            limit: number | null;
                            current: number;
                            available: number;
                        };
                        percentage_change: string;
                    }[];
                    summary?: {
                        active_count: number;
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
};
