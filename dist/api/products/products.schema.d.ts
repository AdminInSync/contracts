import { z } from 'zod';
export declare const ProductTypeSchema: z.ZodEnum<["credit_card", "loan", "savings_account", "checking_account", "investment", "insurance", "mortgage"]>;
export declare const CreditScoreRequirementSchema: z.ZodEnum<["excellent", "good", "fair", "poor"]>;
export declare const ConnectedProductTypeSchema: z.ZodEnum<["accounts", "cards", "loans", "financial-certificate"]>;
export declare const FinancialProductSchema: z.ZodObject<{
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
export declare const CreateProductSchema: z.ZodObject<{
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
export declare const UpdateProductSchema: z.ZodObject<{
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
export declare const GetProductsQuerySchema: z.ZodObject<{
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
export declare const ProductResponseSchema: z.ZodObject<{
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
export declare const ProductsListResponseSchema: z.ZodObject<{
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
export declare const ConnectedProductBalanceSchema: z.ZodObject<{
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
export declare const ConnectedProductMetadataSchema: z.ZodObject<{
    utilization: z.ZodNullable<z.ZodNumber>;
    next_payment: z.ZodNullable<z.ZodString>;
    minimum_payment: z.ZodNullable<z.ZodNumber>;
    monthly_payment: z.ZodNullable<z.ZodNumber>;
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
    monthly_payment: number | null;
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
    monthly_payment: number | null;
    remaining_payments: number | null;
    progress: number | null;
    annual_rate: string | null;
    risk_level: string | null;
    interest_payment: string | null;
    initial_value: number | null;
    accumulated_gain: number | null;
}>;
export declare const ConnectedProductSchema: z.ZodObject<{
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
        monthly_payment: z.ZodNullable<z.ZodNumber>;
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
        monthly_payment: number | null;
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
        monthly_payment: number | null;
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
        monthly_payment: number | null;
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
        monthly_payment: number | null;
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
}>;
export declare const ConnectedProductsSummarySchema: z.ZodObject<{
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
}>;
export declare const ConnectedProductsDataSchema: z.ZodObject<{
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
            monthly_payment: z.ZodNullable<z.ZodNumber>;
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
            monthly_payment: number | null;
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
            monthly_payment: number | null;
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
            monthly_payment: number | null;
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
            monthly_payment: number | null;
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
            monthly_payment: number | null;
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
        monthly_payment?: number | undefined;
        pending_balance?: number | undefined;
        initial_debt?: number | undefined;
        total_balance?: number | undefined;
        monthly_change?: number | undefined;
    } | undefined;
}>;
export declare const ConnectedProductsResponseSchema: z.ZodObject<{
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
                monthly_payment: z.ZodNullable<z.ZodNumber>;
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
                monthly_payment: number | null;
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
                monthly_payment: number | null;
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
                monthly_payment: number | null;
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
                monthly_payment: number | null;
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
                monthly_payment: number | null;
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
            monthly_payment?: number | undefined;
            pending_balance?: number | undefined;
            initial_debt?: number | undefined;
            total_balance?: number | undefined;
            monthly_change?: number | undefined;
        } | undefined;
    };
}>;
