import { z } from 'zod';
export declare const InstitutionTypeSchema: z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>;
export declare const FinancialInstitutionSchema: z.ZodObject<{
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
    created_at: string;
    updated_at: string;
    name: string;
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
    created_at: string;
    updated_at: string;
    name: string;
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
export declare const CreateInstitutionSchema: z.ZodObject<{
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
export declare const UpdateInstitutionSchema: z.ZodObject<{
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
export declare const GetInstitutionsQuerySchema: z.ZodObject<{
    institution_type: z.ZodOptional<z.ZodEnum<["bank", "credit_union", "investment_firm", "insurance", "fintech"]>>;
    country: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    offset: number;
    search?: string | undefined;
    institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
    country?: string | undefined;
    region?: string | undefined;
}, {
    limit?: string | undefined;
    search?: string | undefined;
    offset?: string | undefined;
    institution_type?: "bank" | "credit_union" | "investment_firm" | "insurance" | "fintech" | undefined;
    country?: string | undefined;
    region?: string | undefined;
}>;
export declare const InstitutionResponseSchema: z.ZodObject<{
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
        created_at: string;
        updated_at: string;
        name: string;
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
        created_at: string;
        updated_at: string;
        name: string;
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
        created_at: string;
        updated_at: string;
        name: string;
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
        created_at: string;
        updated_at: string;
        name: string;
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
export declare const InstitutionsListResponseSchema: z.ZodObject<{
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
        created_at: string;
        updated_at: string;
        name: string;
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
        created_at: string;
        updated_at: string;
        name: string;
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
        created_at: string;
        updated_at: string;
        name: string;
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
        created_at: string;
        updated_at: string;
        name: string;
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
