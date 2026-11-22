import { z } from 'zod';
export declare const ExpenseCategorySchema: z.ZodEnum<{
    Alimentos: "Alimentos";
    Transporte: "Transporte";
    Hogar: "Hogar";
    Servicios: "Servicios";
    Suscripciones: "Suscripciones";
    Compras: "Compras";
    "Cuidado personal": "Cuidado personal";
    Salud: "Salud";
    Educación: "Educación";
    Entretenimiento: "Entretenimiento";
    Viajes: "Viajes";
    Otros: "Otros";
}>;
export declare const IncomeCategorySchema: z.ZodEnum<{
    Salario: "Salario";
    "Trabajo independiente": "Trabajo independiente";
    Ventas: "Ventas";
    Inversiones: "Inversiones";
    "Otros ingresos": "Otros ingresos";
}>;
export declare const ManualTransactionTypeSchema: z.ZodEnum<{
    debit: "debit";
    credit: "credit";
    payment: "payment";
}>;
export declare const ManualTransactionCategorySchema: z.ZodUnion<readonly [z.ZodEnum<{
    Alimentos: "Alimentos";
    Transporte: "Transporte";
    Hogar: "Hogar";
    Servicios: "Servicios";
    Suscripciones: "Suscripciones";
    Compras: "Compras";
    "Cuidado personal": "Cuidado personal";
    Salud: "Salud";
    Educación: "Educación";
    Entretenimiento: "Entretenimiento";
    Viajes: "Viajes";
    Otros: "Otros";
}>, z.ZodEnum<{
    Salario: "Salario";
    "Trabajo independiente": "Trabajo independiente";
    Ventas: "Ventas";
    Inversiones: "Inversiones";
    "Otros ingresos": "Otros ingresos";
}>, z.ZodLiteral<"Pago de crédito">]>;
export declare const ManualPaymentMethodSchema: z.ZodEnum<{
    other: "other";
    cash: "cash";
    card: "card";
    apple_pay: "apple_pay";
    google_pay: "google_pay";
}>;
export declare const CreateManualTransactionSchema: z.ZodObject<{
    request_id: z.ZodOptional<z.ZodString>;
    amount: z.ZodNumber;
    currency: z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>;
    transaction_date: z.ZodString;
    transaction_type: z.ZodDefault<z.ZodEnum<{
        debit: "debit";
        credit: "credit";
        payment: "payment";
    }>>;
    category: z.ZodUnion<readonly [z.ZodEnum<{
        Alimentos: "Alimentos";
        Transporte: "Transporte";
        Hogar: "Hogar";
        Servicios: "Servicios";
        Suscripciones: "Suscripciones";
        Compras: "Compras";
        "Cuidado personal": "Cuidado personal";
        Salud: "Salud";
        Educación: "Educación";
        Entretenimiento: "Entretenimiento";
        Viajes: "Viajes";
        Otros: "Otros";
    }>, z.ZodEnum<{
        Salario: "Salario";
        "Trabajo independiente": "Trabajo independiente";
        Ventas: "Ventas";
        Inversiones: "Inversiones";
        "Otros ingresos": "Otros ingresos";
    }>, z.ZodLiteral<"Pago de crédito">]>;
    payment_method: z.ZodOptional<z.ZodEnum<{
        other: "other";
        cash: "cash";
        card: "card";
        apple_pay: "apple_pay";
        google_pay: "google_pay";
    }>>;
    product_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    goal_income_allocation: z.ZodOptional<z.ZodObject<{
        goal_id: z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>]>, z.ZodNumber>;
        amount: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strict>;
export declare const UpdateManualTransactionSchema: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>>;
    transaction_date: z.ZodOptional<z.ZodString>;
    transaction_type: z.ZodOptional<z.ZodEnum<{
        debit: "debit";
        credit: "credit";
        payment: "payment";
    }>>;
    category: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        Alimentos: "Alimentos";
        Transporte: "Transporte";
        Hogar: "Hogar";
        Servicios: "Servicios";
        Suscripciones: "Suscripciones";
        Compras: "Compras";
        "Cuidado personal": "Cuidado personal";
        Salud: "Salud";
        Educación: "Educación";
        Entretenimiento: "Entretenimiento";
        Viajes: "Viajes";
        Otros: "Otros";
    }>, z.ZodEnum<{
        Salario: "Salario";
        "Trabajo independiente": "Trabajo independiente";
        Ventas: "Ventas";
        Inversiones: "Inversiones";
        "Otros ingresos": "Otros ingresos";
    }>, z.ZodLiteral<"Pago de crédito">]>>;
    payment_method: z.ZodOptional<z.ZodEnum<{
        other: "other";
        cash: "cash";
        card: "card";
        apple_pay: "apple_pay";
        google_pay: "google_pay";
    }>>;
    product_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export declare const ManualTransactionsQuerySchema: z.ZodObject<{
    limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
}, z.core.$strip>;
export declare const ManualTransactionItemSchema: z.ZodObject<{
    uuid: z.ZodString;
    amount: z.ZodNumber;
    currency: z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>;
    transaction_date: z.ZodString;
    transaction_type: z.ZodEnum<{
        debit: "debit";
        credit: "credit";
        payment: "payment";
    }>;
    category: z.ZodUnion<readonly [z.ZodEnum<{
        Alimentos: "Alimentos";
        Transporte: "Transporte";
        Hogar: "Hogar";
        Servicios: "Servicios";
        Suscripciones: "Suscripciones";
        Compras: "Compras";
        "Cuidado personal": "Cuidado personal";
        Salud: "Salud";
        Educación: "Educación";
        Entretenimiento: "Entretenimiento";
        Viajes: "Viajes";
        Otros: "Otros";
    }>, z.ZodEnum<{
        Salario: "Salario";
        "Trabajo independiente": "Trabajo independiente";
        Ventas: "Ventas";
        Inversiones: "Inversiones";
        "Otros ingresos": "Otros ingresos";
    }>, z.ZodLiteral<"Pago de crédito">]>;
    description: z.ZodEnum<{
        "Gasto manual": "Gasto manual";
        "Ingreso manual": "Ingreso manual";
        "Pago manual": "Pago manual";
    }>;
    is_manual: z.ZodLiteral<true>;
    payment_method: z.ZodEnum<{
        other: "other";
        cash: "cash";
        card: "card";
        apple_pay: "apple_pay";
        google_pay: "google_pay";
    }>;
    product_uuid: z.ZodNullable<z.ZodString>;
    budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    excluded_budget_uuids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    destination_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    budget_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    group_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const VoiceExpenseDraftSchema: z.ZodObject<{
    transaction_type: z.ZodEnum<{
        debit: "debit";
        credit: "credit";
        payment: "payment";
    }>;
    amount: z.ZodNumber;
    currency: z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>;
    transaction_date: z.ZodString;
    category: z.ZodUnion<readonly [z.ZodEnum<{
        Alimentos: "Alimentos";
        Transporte: "Transporte";
        Hogar: "Hogar";
        Servicios: "Servicios";
        Suscripciones: "Suscripciones";
        Compras: "Compras";
        "Cuidado personal": "Cuidado personal";
        Salud: "Salud";
        Educación: "Educación";
        Entretenimiento: "Entretenimiento";
        Viajes: "Viajes";
        Otros: "Otros";
    }>, z.ZodEnum<{
        Salario: "Salario";
        "Trabajo independiente": "Trabajo independiente";
        Ventas: "Ventas";
        Inversiones: "Inversiones";
        "Otros ingresos": "Otros ingresos";
    }>, z.ZodLiteral<"Pago de crédito">]>;
}, z.core.$strip>;
export declare const ParseVoiceExpenseResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        transaction_type: z.ZodEnum<{
            debit: "debit";
            credit: "credit";
            payment: "payment";
        }>;
        amount: z.ZodNumber;
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        transaction_date: z.ZodString;
        category: z.ZodUnion<readonly [z.ZodEnum<{
            Alimentos: "Alimentos";
            Transporte: "Transporte";
            Hogar: "Hogar";
            Servicios: "Servicios";
            Suscripciones: "Suscripciones";
            Compras: "Compras";
            "Cuidado personal": "Cuidado personal";
            Salud: "Salud";
            Educación: "Educación";
            Entretenimiento: "Entretenimiento";
            Viajes: "Viajes";
            Otros: "Otros";
        }>, z.ZodEnum<{
            Salario: "Salario";
            "Trabajo independiente": "Trabajo independiente";
            Ventas: "Ventas";
            Inversiones: "Inversiones";
            "Otros ingresos": "Otros ingresos";
        }>, z.ZodLiteral<"Pago de crédito">]>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ManualTransactionResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uuid: z.ZodString;
        amount: z.ZodNumber;
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        transaction_date: z.ZodString;
        transaction_type: z.ZodEnum<{
            debit: "debit";
            credit: "credit";
            payment: "payment";
        }>;
        category: z.ZodUnion<readonly [z.ZodEnum<{
            Alimentos: "Alimentos";
            Transporte: "Transporte";
            Hogar: "Hogar";
            Servicios: "Servicios";
            Suscripciones: "Suscripciones";
            Compras: "Compras";
            "Cuidado personal": "Cuidado personal";
            Salud: "Salud";
            Educación: "Educación";
            Entretenimiento: "Entretenimiento";
            Viajes: "Viajes";
            Otros: "Otros";
        }>, z.ZodEnum<{
            Salario: "Salario";
            "Trabajo independiente": "Trabajo independiente";
            Ventas: "Ventas";
            Inversiones: "Inversiones";
            "Otros ingresos": "Otros ingresos";
        }>, z.ZodLiteral<"Pago de crédito">]>;
        description: z.ZodEnum<{
            "Gasto manual": "Gasto manual";
            "Ingreso manual": "Ingreso manual";
            "Pago manual": "Pago manual";
        }>;
        is_manual: z.ZodLiteral<true>;
        payment_method: z.ZodEnum<{
            other: "other";
            cash: "cash";
            card: "card";
            apple_pay: "apple_pay";
            google_pay: "google_pay";
        }>;
        product_uuid: z.ZodNullable<z.ZodString>;
        budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        excluded_budget_uuids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        destination_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        budget_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        group_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ManualTransactionsListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        amount: z.ZodNumber;
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        transaction_date: z.ZodString;
        transaction_type: z.ZodEnum<{
            debit: "debit";
            credit: "credit";
            payment: "payment";
        }>;
        category: z.ZodUnion<readonly [z.ZodEnum<{
            Alimentos: "Alimentos";
            Transporte: "Transporte";
            Hogar: "Hogar";
            Servicios: "Servicios";
            Suscripciones: "Suscripciones";
            Compras: "Compras";
            "Cuidado personal": "Cuidado personal";
            Salud: "Salud";
            Educación: "Educación";
            Entretenimiento: "Entretenimiento";
            Viajes: "Viajes";
            Otros: "Otros";
        }>, z.ZodEnum<{
            Salario: "Salario";
            "Trabajo independiente": "Trabajo independiente";
            Ventas: "Ventas";
            Inversiones: "Inversiones";
            "Otros ingresos": "Otros ingresos";
        }>, z.ZodLiteral<"Pago de crédito">]>;
        description: z.ZodEnum<{
            "Gasto manual": "Gasto manual";
            "Ingreso manual": "Ingreso manual";
            "Pago manual": "Pago manual";
        }>;
        is_manual: z.ZodLiteral<true>;
        payment_method: z.ZodEnum<{
            other: "other";
            cash: "cash";
            card: "card";
            apple_pay: "apple_pay";
            google_pay: "google_pay";
        }>;
        product_uuid: z.ZodNullable<z.ZodString>;
        budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        excluded_budget_uuids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        destination_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        budget_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        group_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        total: z.ZodNumber;
        limit: z.ZodNumber;
        offset: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ManualTransactionDeletedResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
