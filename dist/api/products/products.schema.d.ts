import { z } from 'zod';
export declare const ProductTypeSchema: z.ZodEnum<{
    insurance: "insurance";
    credit_card: "credit_card";
    debit_card: "debit_card";
    loan: "loan";
    savings_account: "savings_account";
    checking_account: "checking_account";
    investment: "investment";
    mortgage: "mortgage";
}>;
export declare const CreditScoreRequirementSchema: z.ZodEnum<{
    excellent: "excellent";
    good: "good";
    fair: "fair";
    poor: "poor";
}>;
export declare const ConnectedProductTypeSchema: z.ZodEnum<{
    accounts: "accounts";
    cards: "cards";
    loans: "loans";
    "financial-certificate": "financial-certificate";
}>;
export declare const FinancialProductSchema: z.ZodObject<{
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
export declare const CreateProductSchema: z.ZodObject<{
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
export declare const UpdateProductSchema: z.ZodObject<{
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
export declare const GetProductsQuerySchema: z.ZodObject<{
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
export declare const ProductResponseSchema: z.ZodObject<{
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
export declare const ProductsListResponseSchema: z.ZodObject<{
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
export declare const ConnectedProductBalanceSchema: z.ZodObject<{
    current: z.ZodNumber;
    available: z.ZodNumber;
    limit: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export declare const ConnectedProductMetadataSchema: z.ZodObject<{
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
export declare const ProductKindSchema: z.ZodEnum<{
    debit: "debit";
    credit: "credit";
}>;
export declare const CardBrandSchema: z.ZodEnum<{
    visa: "visa";
    mastercard: "mastercard";
    amex: "amex";
}>;
export declare const ExpenseDestinationSchema: z.ZodObject<{
    budget_uuid: z.ZodNullable<z.ZodString>;
    group_uuid: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const ConnectedProductSchema: z.ZodObject<{
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
}, z.core.$strip>;
export declare const ConnectedProductsSummarySchema: z.ZodObject<{
    pending_balance: z.ZodOptional<z.ZodNumber>;
    initial_debt: z.ZodOptional<z.ZodNumber>;
    monthly_payment: z.ZodOptional<z.ZodNumber>;
    total_balance: z.ZodOptional<z.ZodNumber>;
    monthly_change: z.ZodOptional<z.ZodNumber>;
    active_count: z.ZodNumber;
}, z.core.$strip>;
export declare const ConnectedProductsDataSchema: z.ZodObject<{
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
export declare const ProductTransactionItemSchema: z.ZodObject<{
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
}, z.core.$strip>;
export declare const SetExpenseDestinationSchema: z.ZodObject<{
    budget_uuid: z.ZodNullable<z.ZodString>;
    group_uuid: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export declare const SetTransactionExpenseDestinationSchema: z.ZodObject<{
    budget_uuid: z.ZodNullable<z.ZodString>;
    group_uuid: z.ZodNullable<z.ZodString>;
    excluded_budget_uuid: z.ZodOptional<z.ZodString>;
    budget_excluded: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const ExpenseDestinationResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        budget_uuid: z.ZodNullable<z.ZodString>;
        group_uuid: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const TransactionExpenseDestinationResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        budget_uuid: z.ZodNullable<z.ZodString>;
        group_uuid: z.ZodNullable<z.ZodString>;
        excluded_budget_uuids: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ProductTransactionsListResponseSchema: z.ZodObject<{
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
