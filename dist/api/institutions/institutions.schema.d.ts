import { z } from 'zod';
export declare const InstitutionTypeSchema: z.ZodEnum<{
    bank: "bank";
    credit_union: "credit_union";
    investment_firm: "investment_firm";
    insurance: "insurance";
    fintech: "fintech";
}>;
export declare const FinancialInstitutionSchema: z.ZodObject<{
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
export declare const CreateInstitutionSchema: z.ZodObject<{
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
export declare const UpdateInstitutionSchema: z.ZodObject<{
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
export declare const GetInstitutionsQuerySchema: z.ZodObject<{
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
export declare const InstitutionResponseSchema: z.ZodObject<{
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
export declare const InstitutionsListResponseSchema: z.ZodObject<{
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
