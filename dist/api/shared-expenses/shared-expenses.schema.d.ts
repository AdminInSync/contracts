import { z } from 'zod';
export declare const SharedExpenseCurrencySchema: z.ZodEnum<{
    DOP: "DOP";
    USD: "USD";
    EUR: "EUR";
}>;
export declare const SharedExpenseCategorySchema: z.ZodUnion<readonly [z.ZodEnum<{
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
}>]>;
export declare const SharedExpenseGroupMemberSchema: z.ZodObject<{
    display_name: z.ZodString;
    is_owner: z.ZodBoolean;
}, z.core.$strip>;
export declare const SharedExpenseGroupSchema: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
    currency: z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>;
    invite_code: z.ZodNullable<z.ZodString>;
    invite_link: z.ZodNullable<z.ZodString>;
    invite_expires_at: z.ZodNullable<z.ZodString>;
    is_owner: z.ZodBoolean;
    members: z.ZodArray<z.ZodObject<{
        display_name: z.ZodString;
        is_owner: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SharedExpenseSummarySchema: z.ZodObject<{
    currency: z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>;
    expense_total: z.ZodNumber;
    income_total: z.ZodNumber;
    net_total: z.ZodNumber;
    expense_distribution: z.ZodArray<z.ZodObject<{
        category: z.ZodEnum<{
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
        amount: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SharedExpenseGroupDetailSchema: z.ZodObject<{
    group: z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        invite_code: z.ZodNullable<z.ZodString>;
        invite_link: z.ZodNullable<z.ZodString>;
        invite_expires_at: z.ZodNullable<z.ZodString>;
        is_owner: z.ZodBoolean;
        members: z.ZodArray<z.ZodObject<{
            display_name: z.ZodString;
            is_owner: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    summary: z.ZodObject<{
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        expense_total: z.ZodNumber;
        income_total: z.ZodNumber;
        net_total: z.ZodNumber;
        expense_distribution: z.ZodArray<z.ZodObject<{
            category: z.ZodEnum<{
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
            amount: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SharedExpenseTransactionItemSchema: z.ZodObject<{
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
    }>]>;
    description: z.ZodString;
    is_manual: z.ZodBoolean;
    payment_method: z.ZodEnum<{
        other: "other";
        cash: "cash";
        card: "card";
        apple_pay: "apple_pay";
        google_pay: "google_pay";
    }>;
    is_author: z.ZodBoolean;
    created_by_name: z.ZodString;
    read_only: z.ZodBoolean;
}, z.core.$strip>;
export declare const CreateSharedExpenseGroupSchema: z.ZodObject<{
    name: z.ZodString;
    currency: z.ZodEnum<{
        DOP: "DOP";
        USD: "USD";
        EUR: "EUR";
    }>;
    display_name: z.ZodString;
}, z.core.$strict>;
export declare const JoinSharedExpenseGroupSchema: z.ZodObject<{
    invite_code: z.ZodString;
    display_name: z.ZodString;
}, z.core.$strict>;
export declare const CreateSharedExpenseTransactionSchema: z.ZodObject<{
    amount: z.ZodNumber;
    transaction_date: z.ZodString;
    transaction_type: z.ZodDefault<z.ZodEnum<{
        debit: "debit";
        credit: "credit";
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
    }>]>;
    payment_method: z.ZodOptional<z.ZodEnum<{
        other: "other";
        cash: "cash";
        card: "card";
        apple_pay: "apple_pay";
        google_pay: "google_pay";
    }>>;
}, z.core.$strict>;
export declare const UpdateSharedExpenseTransactionSchema: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    transaction_date: z.ZodOptional<z.ZodString>;
    transaction_type: z.ZodOptional<z.ZodEnum<{
        debit: "debit";
        credit: "credit";
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
    }>]>>;
    payment_method: z.ZodOptional<z.ZodEnum<{
        other: "other";
        cash: "cash";
        card: "card";
        apple_pay: "apple_pay";
        google_pay: "google_pay";
    }>>;
}, z.core.$strict>;
export declare const SharedExpenseTransactionsQuerySchema: z.ZodObject<{
    limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const SharedExpenseGroupResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        invite_code: z.ZodNullable<z.ZodString>;
        invite_link: z.ZodNullable<z.ZodString>;
        invite_expires_at: z.ZodNullable<z.ZodString>;
        is_owner: z.ZodBoolean;
        members: z.ZodArray<z.ZodObject<{
            display_name: z.ZodString;
            is_owner: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SharedExpenseGroupsResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        invite_code: z.ZodNullable<z.ZodString>;
        invite_link: z.ZodNullable<z.ZodString>;
        invite_expires_at: z.ZodNullable<z.ZodString>;
        is_owner: z.ZodBoolean;
        members: z.ZodArray<z.ZodObject<{
            display_name: z.ZodString;
            is_owner: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SharedExpenseGroupDetailResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        group: z.ZodObject<{
            uuid: z.ZodString;
            name: z.ZodString;
            currency: z.ZodEnum<{
                DOP: "DOP";
                USD: "USD";
                EUR: "EUR";
            }>;
            invite_code: z.ZodNullable<z.ZodString>;
            invite_link: z.ZodNullable<z.ZodString>;
            invite_expires_at: z.ZodNullable<z.ZodString>;
            is_owner: z.ZodBoolean;
            members: z.ZodArray<z.ZodObject<{
                display_name: z.ZodString;
                is_owner: z.ZodBoolean;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        summary: z.ZodObject<{
            currency: z.ZodEnum<{
                DOP: "DOP";
                USD: "USD";
                EUR: "EUR";
            }>;
            expense_total: z.ZodNumber;
            income_total: z.ZodNumber;
            net_total: z.ZodNumber;
            expense_distribution: z.ZodArray<z.ZodObject<{
                category: z.ZodEnum<{
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
                amount: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SharedExpenseTransactionsResponseSchema: z.ZodObject<{
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
        }>]>;
        description: z.ZodString;
        is_manual: z.ZodBoolean;
        payment_method: z.ZodEnum<{
            other: "other";
            cash: "cash";
            card: "card";
            apple_pay: "apple_pay";
            google_pay: "google_pay";
        }>;
        is_author: z.ZodBoolean;
        created_by_name: z.ZodString;
        read_only: z.ZodBoolean;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        total: z.ZodNumber;
        limit: z.ZodNumber;
        offset: z.ZodNumber;
    }, z.core.$strip>;
    summary: z.ZodObject<{
        currency: z.ZodEnum<{
            DOP: "DOP";
            USD: "USD";
            EUR: "EUR";
        }>;
        expense_total: z.ZodNumber;
        income_total: z.ZodNumber;
        net_total: z.ZodNumber;
        expense_distribution: z.ZodArray<z.ZodObject<{
            category: z.ZodEnum<{
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
            amount: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SharedExpenseTransactionResponseSchema: z.ZodObject<{
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
        }>]>;
        description: z.ZodString;
        is_manual: z.ZodBoolean;
        payment_method: z.ZodEnum<{
            other: "other";
            cash: "cash";
            card: "card";
            apple_pay: "apple_pay";
            google_pay: "google_pay";
        }>;
        is_author: z.ZodBoolean;
        created_by_name: z.ZodString;
        read_only: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const SharedExpenseTransactionDeletedResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
