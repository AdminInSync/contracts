import { z } from 'zod';
export declare const ProductsContracts: {
    createProduct: {
        summary: "Create a new financial product";
        description: "Creates a new financial product (admin only)";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            product_type: z.ZodOptional<z.ZodEnum<{
                insurance: "insurance";
                credit_card: "credit_card";
                debit_card: "debit_card";
                loan: "loan";
                savings_account: "savings_account";
                checking_account: "checking_account";
                investment: "investment";
                mortgage: "mortgage";
            }>>;
            institution_id: z.ZodNumber;
            interest_rate: z.ZodOptional<z.ZodNumber>;
            annual_fee: z.ZodOptional<z.ZodNumber>;
            minimum_balance: z.ZodOptional<z.ZodNumber>;
            credit_score_requirement: z.ZodOptional<z.ZodEnum<{
                excellent: "excellent";
                good: "good";
                fair: "fair";
                poor: "poor";
            }>>;
            benefits: z.ZodOptional<z.ZodString>;
            features: z.ZodOptional<z.ZodString>;
            terms_conditions: z.ZodOptional<z.ZodString>;
            is_spotlight: z.ZodOptional<z.ZodBoolean>;
            is_active: z.ZodOptional<z.ZodBoolean>;
            currency: z.ZodOptional<z.ZodString>;
            valid_from: z.ZodOptional<z.ZodString>;
            valid_until: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: "/products";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    getProducts: {
        query: z.ZodObject<{
            product_type: z.ZodOptional<z.ZodEnum<{
                insurance: "insurance";
                credit_card: "credit_card";
                debit_card: "debit_card";
                loan: "loan";
                savings_account: "savings_account";
                checking_account: "checking_account";
                investment: "investment";
                mortgage: "mortgage";
            }>>;
            institution_id: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            credit_score_requirement: z.ZodOptional<z.ZodEnum<{
                excellent: "excellent";
                good: "good";
                fair: "fair";
                poor: "poor";
            }>>;
            is_spotlight: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>, z.ZodBoolean>>;
            search: z.ZodOptional<z.ZodString>;
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    getProductsByType: {
        pathParams: z.ZodObject<{
            type: z.ZodEnum<{
                insurance: "insurance";
                credit_card: "credit_card";
                debit_card: "debit_card";
                loan: "loan";
                savings_account: "savings_account";
                checking_account: "checking_account";
                investment: "investment";
                mortgage: "mortgage";
            }>;
        }, z.core.$strip>;
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    getProductsByInstitution: {
        pathParams: z.ZodObject<{
            institutionId: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    getSpotlightProducts: {
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    getNoAnnualFeeProducts: {
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    getProductsByCreditScore: {
        pathParams: z.ZodObject<{
            requirement: z.ZodEnum<{
                excellent: "excellent";
                good: "good";
                fair: "fair";
                poor: "poor";
            }>;
        }, z.core.$strip>;
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    getMyProducts: {
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
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
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                pagination: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            401: z.ZodObject<{
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
    removeFromMyProducts: {
        pathParams: z.ZodObject<{
            productId: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Remove product from my list";
        description: "Removes a product from the authenticated user product list";
        method: "DELETE";
        path: "/products/my-products/:productId";
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
    getProduct: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
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
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    updateProduct: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Update a financial product";
        description: "Updates an existing financial product (admin only)";
        method: "PUT";
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            product_type: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                insurance: "insurance";
                credit_card: "credit_card";
                debit_card: "debit_card";
                loan: "loan";
                savings_account: "savings_account";
                checking_account: "checking_account";
                investment: "investment";
                mortgage: "mortgage";
            }>>>;
            institution_id: z.ZodOptional<z.ZodNumber>;
            interest_rate: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            annual_fee: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            minimum_balance: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            credit_score_requirement: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
                excellent: "excellent";
                good: "good";
                fair: "fair";
                poor: "poor";
            }>>>;
            benefits: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            features: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            terms_conditions: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            is_spotlight: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            is_active: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            currency: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            valid_from: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            valid_until: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>;
        path: "/products/:id";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    id: z.ZodNumber;
                    uuid: z.ZodString;
                    name: z.ZodString;
                    product_type: z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>;
                    institution_id: z.ZodNumber;
                    institution_name: z.ZodString;
                    interest_rate: z.ZodNullable<z.ZodNumber>;
                    annual_fee: z.ZodNullable<z.ZodNumber>;
                    minimum_balance: z.ZodNullable<z.ZodNumber>;
                    credit_score_requirement: z.ZodNullable<z.ZodEnum<{
                        excellent: "excellent";
                        good: "good";
                        fair: "fair";
                        poor: "poor";
                    }>>;
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
                    }, z.core.$strip>>;
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
    deleteProduct: {
        pathParams: z.ZodObject<{
            id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
        }, z.core.$strip>;
        summary: "Delete a financial product";
        description: "Soft-deletes a financial product (admin only)";
        method: "DELETE";
        path: "/products/:id";
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
    getMyConnectedProducts: {
        pathParams: z.ZodObject<{
            type: z.ZodEnum<{
                accounts: "accounts";
                cards: "cards";
                loans: "loans";
                "financial-certificate": "financial-certificate";
            }>;
        }, z.core.$strip>;
        query: z.ZodObject<{
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
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
                    }, z.core.$strip>>;
                    products: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        type: z.ZodString;
                        name: z.ZodString;
                        institution: z.ZodString;
                        institution_logo: z.ZodNullable<z.ZodString>;
                        product_kind: z.ZodEnum<{
                            debit: "debit";
                            credit: "credit";
                        }>;
                        product_label: z.ZodString;
                        lastFour: z.ZodString;
                        expense_destination: z.ZodObject<{
                            budget_uuid: z.ZodNullable<z.ZodString>;
                            group_uuid: z.ZodNullable<z.ZodString>;
                        }, z.core.$strip>;
                        is_manual: z.ZodBoolean;
                        card_brand: z.ZodNullable<z.ZodEnum<{
                            visa: "visa";
                            mastercard: "mastercard";
                            amex: "amex";
                        }>>;
                        linked_account_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        balance: z.ZodObject<{
                            current: z.ZodNumber;
                            available: z.ZodNumber;
                            limit: z.ZodNullable<z.ZodNumber>;
                        }, z.core.$strip>;
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
                        }, z.core.$strip>;
                        percentage_change: z.ZodString;
                        currency: z.ZodString;
                    }, z.core.$strip>>;
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
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    setMyProductExpenseDestination: {
        pathParams: z.ZodObject<{
            productUuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Set expense destinations for a connected product";
        description: "Sets optional budget and shared group destinations for future imported expenses from this connected product.";
        method: "PATCH";
        body: z.ZodObject<{
            budget_uuid: z.ZodNullable<z.ZodString>;
            group_uuid: z.ZodNullable<z.ZodString>;
        }, z.core.$strict>;
        path: "/products/my-products/:productUuid/expense-destination";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    budget_uuid: z.ZodNullable<z.ZodString>;
                    group_uuid: z.ZodNullable<z.ZodString>;
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
    setMyTransactionExpenseDestination: {
        pathParams: z.ZodObject<{
            transactionUuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Set destinations for a personal expense";
        description: "Assigns an expense to a budget regardless of category, sets its shared group, or excludes it from one category-based budget without changing other budgets.";
        method: "PATCH";
        body: z.ZodObject<{
            budget_uuid: z.ZodNullable<z.ZodString>;
            group_uuid: z.ZodNullable<z.ZodString>;
            excluded_budget_uuid: z.ZodOptional<z.ZodString>;
            budget_excluded: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
        path: "/products/my-transactions/:transactionUuid/expense-destination";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    budget_uuid: z.ZodNullable<z.ZodString>;
                    group_uuid: z.ZodNullable<z.ZodString>;
                    excluded_budget_uuids: z.ZodArray<z.ZodString>;
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
    getMyTransactions: {
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            currency: z.ZodOptional<z.ZodEnum<{
                DOP: "DOP";
                USD: "USD";
                EUR: "EUR";
            }>>;
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
            search: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<{
                debit: "debit";
                credit: "credit";
                payment: "payment";
            }>>;
            product_uuid: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodString>;
            assignment_candidates: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>, z.ZodBoolean>>;
            statement_upload_uuid: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
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
                    transaction_type: z.ZodEnum<{
                        debit: "debit";
                        credit: "credit";
                        payment: "payment";
                    }>;
                    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    can_edit_category: z.ZodOptional<z.ZodBoolean>;
                    can_assign_to_budget: z.ZodOptional<z.ZodBoolean>;
                    is_imported: z.ZodOptional<z.ZodBoolean>;
                    is_manual: z.ZodOptional<z.ZodBoolean>;
                    institution_name: z.ZodNullable<z.ZodString>;
                    institution_logo: z.ZodNullable<z.ZodString>;
                    product_type: z.ZodNullable<z.ZodEnum<{
                        insurance: "insurance";
                        credit_card: "credit_card";
                        debit_card: "debit_card";
                        loan: "loan";
                        savings_account: "savings_account";
                        checking_account: "checking_account";
                        investment: "investment";
                        mortgage: "mortgage";
                    }>>;
                    product_kind: z.ZodNullable<z.ZodEnum<{
                        debit: "debit";
                        credit: "credit";
                    }>>;
                    product_label: z.ZodNullable<z.ZodString>;
                    card_brand: z.ZodNullable<z.ZodEnum<{
                        visa: "visa";
                        mastercard: "mastercard";
                        amex: "amex";
                    }>>;
                    linked_account_label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    excluded_budget_uuids: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    destination_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    budget_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    group_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, z.core.$strip>>;
                pagination: z.ZodObject<{
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, z.core.$strip>;
                summary: z.ZodObject<{
                    income: z.ZodNumber;
                    expenses: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>;
            401: z.ZodObject<{
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
};
