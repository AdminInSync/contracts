import { z } from 'zod';
export declare const SharedExpenseCurrencySchema: z.ZodEnum<["DOP", "USD", "EUR"]>;
export declare const SharedExpenseCategorySchema: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>]>;
export declare const SharedExpenseGroupMemberSchema: z.ZodObject<{
    display_name: z.ZodString;
    is_owner: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    display_name: string;
    is_owner: boolean;
}, {
    display_name: string;
    is_owner: boolean;
}>;
export declare const SharedExpenseGroupSchema: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    invite_code: z.ZodNullable<z.ZodString>;
    invite_link: z.ZodNullable<z.ZodString>;
    invite_expires_at: z.ZodNullable<z.ZodString>;
    is_owner: z.ZodBoolean;
    members: z.ZodArray<z.ZodObject<{
        display_name: z.ZodString;
        is_owner: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        display_name: string;
        is_owner: boolean;
    }, {
        display_name: string;
        is_owner: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    uuid: string;
    name: string;
    currency: "DOP" | "USD" | "EUR";
    invite_code: string | null;
    is_owner: boolean;
    invite_link: string | null;
    invite_expires_at: string | null;
    members: {
        display_name: string;
        is_owner: boolean;
    }[];
}, {
    uuid: string;
    name: string;
    currency: "DOP" | "USD" | "EUR";
    invite_code: string | null;
    is_owner: boolean;
    invite_link: string | null;
    invite_expires_at: string | null;
    members: {
        display_name: string;
        is_owner: boolean;
    }[];
}>;
export declare const SharedExpenseSummarySchema: z.ZodObject<{
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    expense_total: z.ZodNumber;
    income_total: z.ZodNumber;
    net_total: z.ZodNumber;
    expense_distribution: z.ZodArray<z.ZodObject<{
        category: z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
    }, {
        amount: number;
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    currency: "DOP" | "USD" | "EUR";
    expense_total: number;
    income_total: number;
    net_total: number;
    expense_distribution: {
        amount: number;
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
    }[];
}, {
    currency: "DOP" | "USD" | "EUR";
    expense_total: number;
    income_total: number;
    net_total: number;
    expense_distribution: {
        amount: number;
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
    }[];
}>;
export declare const SharedExpenseGroupDetailSchema: z.ZodObject<{
    group: z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        invite_code: z.ZodNullable<z.ZodString>;
        invite_link: z.ZodNullable<z.ZodString>;
        invite_expires_at: z.ZodNullable<z.ZodString>;
        is_owner: z.ZodBoolean;
        members: z.ZodArray<z.ZodObject<{
            display_name: z.ZodString;
            is_owner: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            display_name: string;
            is_owner: boolean;
        }, {
            display_name: string;
            is_owner: boolean;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    }, {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    }>;
    summary: z.ZodObject<{
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        expense_total: z.ZodNumber;
        income_total: z.ZodNumber;
        net_total: z.ZodNumber;
        expense_distribution: z.ZodArray<z.ZodObject<{
            category: z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>;
            amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }, {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        currency: "DOP" | "USD" | "EUR";
        expense_total: number;
        income_total: number;
        net_total: number;
        expense_distribution: {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }[];
    }, {
        currency: "DOP" | "USD" | "EUR";
        expense_total: number;
        income_total: number;
        net_total: number;
        expense_distribution: {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    summary: {
        currency: "DOP" | "USD" | "EUR";
        expense_total: number;
        income_total: number;
        net_total: number;
        expense_distribution: {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }[];
    };
    group: {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    };
}, {
    summary: {
        currency: "DOP" | "USD" | "EUR";
        expense_total: number;
        income_total: number;
        net_total: number;
        expense_distribution: {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }[];
    };
    group: {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    };
}>;
export declare const SharedExpenseTransactionItemSchema: z.ZodObject<{
    uuid: z.ZodString;
    amount: z.ZodNumber;
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    transaction_date: z.ZodString;
    transaction_type: z.ZodEnum<["debit", "credit"]>;
    category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>]>;
    description: z.ZodEnum<["Gasto manual", "Ingreso manual"]>;
    is_manual: z.ZodLiteral<true>;
    payment_method: z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>;
    is_author: z.ZodBoolean;
    created_by_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: "Gasto manual" | "Ingreso manual";
    uuid: string;
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
    is_manual: true;
    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
    is_author: boolean;
    created_by_name: string;
}, {
    description: "Gasto manual" | "Ingreso manual";
    uuid: string;
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
    is_manual: true;
    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
    is_author: boolean;
    created_by_name: string;
}>;
export declare const CreateSharedExpenseGroupSchema: z.ZodObject<{
    name: z.ZodString;
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    display_name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    display_name: string;
    name: string;
    currency: "DOP" | "USD" | "EUR";
}, {
    display_name: string;
    name: string;
    currency: "DOP" | "USD" | "EUR";
}>;
export declare const JoinSharedExpenseGroupSchema: z.ZodObject<{
    invite_code: z.ZodString;
    display_name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    display_name: string;
    invite_code: string;
}, {
    display_name: string;
    invite_code: string;
}>;
export declare const CreateSharedExpenseTransactionSchema: z.ZodEffects<z.ZodObject<{
    amount: z.ZodNumber;
    transaction_date: z.ZodString;
    transaction_type: z.ZodDefault<z.ZodEnum<["debit", "credit"]>>;
    category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>]>;
    payment_method: z.ZodOptional<z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>>;
}, "strict", z.ZodTypeAny, {
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}, {
    amount: number;
    transaction_date: string;
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
    transaction_type?: "debit" | "credit" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}>, {
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}, {
    amount: number;
    transaction_date: string;
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
    transaction_type?: "debit" | "credit" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}>;
export declare const UpdateSharedExpenseTransactionSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    transaction_date: z.ZodOptional<z.ZodString>;
    transaction_type: z.ZodOptional<z.ZodEnum<["debit", "credit"]>>;
    category: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>]>>;
    payment_method: z.ZodOptional<z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>>;
}, "strict", z.ZodTypeAny, {
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}, {
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}>, {
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}, {
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}>, {
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}, {
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}>;
export declare const SharedExpenseTransactionsQuerySchema: z.ZodEffects<z.ZodObject<{
    limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    offset: number;
    from?: string | undefined;
    to?: string | undefined;
}, {
    limit?: string | undefined;
    offset?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
}>, {
    limit: number;
    offset: number;
    from?: string | undefined;
    to?: string | undefined;
}, {
    limit?: string | undefined;
    offset?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
}>;
export declare const SharedExpenseGroupResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        invite_code: z.ZodNullable<z.ZodString>;
        invite_link: z.ZodNullable<z.ZodString>;
        invite_expires_at: z.ZodNullable<z.ZodString>;
        is_owner: z.ZodBoolean;
        members: z.ZodArray<z.ZodObject<{
            display_name: z.ZodString;
            is_owner: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            display_name: string;
            is_owner: boolean;
        }, {
            display_name: string;
            is_owner: boolean;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    }, {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    };
}, {
    message: string;
    data: {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    };
}>;
export declare const SharedExpenseGroupsResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        invite_code: z.ZodNullable<z.ZodString>;
        invite_link: z.ZodNullable<z.ZodString>;
        invite_expires_at: z.ZodNullable<z.ZodString>;
        is_owner: z.ZodBoolean;
        members: z.ZodArray<z.ZodObject<{
            display_name: z.ZodString;
            is_owner: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            display_name: string;
            is_owner: boolean;
        }, {
            display_name: string;
            is_owner: boolean;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    }, {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    }[];
}, {
    message: string;
    data: {
        uuid: string;
        name: string;
        currency: "DOP" | "USD" | "EUR";
        invite_code: string | null;
        is_owner: boolean;
        invite_link: string | null;
        invite_expires_at: string | null;
        members: {
            display_name: string;
            is_owner: boolean;
        }[];
    }[];
}>;
export declare const SharedExpenseGroupDetailResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        group: z.ZodObject<{
            uuid: z.ZodString;
            name: z.ZodString;
            currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
            invite_code: z.ZodNullable<z.ZodString>;
            invite_link: z.ZodNullable<z.ZodString>;
            invite_expires_at: z.ZodNullable<z.ZodString>;
            is_owner: z.ZodBoolean;
            members: z.ZodArray<z.ZodObject<{
                display_name: z.ZodString;
                is_owner: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                display_name: string;
                is_owner: boolean;
            }, {
                display_name: string;
                is_owner: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            uuid: string;
            name: string;
            currency: "DOP" | "USD" | "EUR";
            invite_code: string | null;
            is_owner: boolean;
            invite_link: string | null;
            invite_expires_at: string | null;
            members: {
                display_name: string;
                is_owner: boolean;
            }[];
        }, {
            uuid: string;
            name: string;
            currency: "DOP" | "USD" | "EUR";
            invite_code: string | null;
            is_owner: boolean;
            invite_link: string | null;
            invite_expires_at: string | null;
            members: {
                display_name: string;
                is_owner: boolean;
            }[];
        }>;
        summary: z.ZodObject<{
            currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
            expense_total: z.ZodNumber;
            income_total: z.ZodNumber;
            net_total: z.ZodNumber;
            expense_distribution: z.ZodArray<z.ZodObject<{
                category: z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>;
                amount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                amount: number;
                category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            }, {
                amount: number;
                category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            currency: "DOP" | "USD" | "EUR";
            expense_total: number;
            income_total: number;
            net_total: number;
            expense_distribution: {
                amount: number;
                category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            }[];
        }, {
            currency: "DOP" | "USD" | "EUR";
            expense_total: number;
            income_total: number;
            net_total: number;
            expense_distribution: {
                amount: number;
                category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            }[];
        }>;
    }, "strip", z.ZodTypeAny, {
        summary: {
            currency: "DOP" | "USD" | "EUR";
            expense_total: number;
            income_total: number;
            net_total: number;
            expense_distribution: {
                amount: number;
                category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            }[];
        };
        group: {
            uuid: string;
            name: string;
            currency: "DOP" | "USD" | "EUR";
            invite_code: string | null;
            is_owner: boolean;
            invite_link: string | null;
            invite_expires_at: string | null;
            members: {
                display_name: string;
                is_owner: boolean;
            }[];
        };
    }, {
        summary: {
            currency: "DOP" | "USD" | "EUR";
            expense_total: number;
            income_total: number;
            net_total: number;
            expense_distribution: {
                amount: number;
                category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            }[];
        };
        group: {
            uuid: string;
            name: string;
            currency: "DOP" | "USD" | "EUR";
            invite_code: string | null;
            is_owner: boolean;
            invite_link: string | null;
            invite_expires_at: string | null;
            members: {
                display_name: string;
                is_owner: boolean;
            }[];
        };
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        summary: {
            currency: "DOP" | "USD" | "EUR";
            expense_total: number;
            income_total: number;
            net_total: number;
            expense_distribution: {
                amount: number;
                category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            }[];
        };
        group: {
            uuid: string;
            name: string;
            currency: "DOP" | "USD" | "EUR";
            invite_code: string | null;
            is_owner: boolean;
            invite_link: string | null;
            invite_expires_at: string | null;
            members: {
                display_name: string;
                is_owner: boolean;
            }[];
        };
    };
}, {
    message: string;
    data: {
        summary: {
            currency: "DOP" | "USD" | "EUR";
            expense_total: number;
            income_total: number;
            net_total: number;
            expense_distribution: {
                amount: number;
                category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
            }[];
        };
        group: {
            uuid: string;
            name: string;
            currency: "DOP" | "USD" | "EUR";
            invite_code: string | null;
            is_owner: boolean;
            invite_link: string | null;
            invite_expires_at: string | null;
            members: {
                display_name: string;
                is_owner: boolean;
            }[];
        };
    };
}>;
export declare const SharedExpenseTransactionsResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        amount: z.ZodNumber;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        transaction_date: z.ZodString;
        transaction_type: z.ZodEnum<["debit", "credit"]>;
        category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>]>;
        description: z.ZodEnum<["Gasto manual", "Ingreso manual"]>;
        is_manual: z.ZodLiteral<true>;
        payment_method: z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>;
        is_author: z.ZodBoolean;
        created_by_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: "Gasto manual" | "Ingreso manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
        is_manual: true;
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        is_author: boolean;
        created_by_name: string;
    }, {
        description: "Gasto manual" | "Ingreso manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
        is_manual: true;
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        is_author: boolean;
        created_by_name: string;
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
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        expense_total: z.ZodNumber;
        income_total: z.ZodNumber;
        net_total: z.ZodNumber;
        expense_distribution: z.ZodArray<z.ZodObject<{
            category: z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>;
            amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }, {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        currency: "DOP" | "USD" | "EUR";
        expense_total: number;
        income_total: number;
        net_total: number;
        expense_distribution: {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }[];
    }, {
        currency: "DOP" | "USD" | "EUR";
        expense_total: number;
        income_total: number;
        net_total: number;
        expense_distribution: {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        description: "Gasto manual" | "Ingreso manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
        is_manual: true;
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        is_author: boolean;
        created_by_name: string;
    }[];
    pagination: {
        limit: number;
        total: number;
        offset: number;
    };
    summary: {
        currency: "DOP" | "USD" | "EUR";
        expense_total: number;
        income_total: number;
        net_total: number;
        expense_distribution: {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }[];
    };
}, {
    message: string;
    data: {
        description: "Gasto manual" | "Ingreso manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
        is_manual: true;
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        is_author: boolean;
        created_by_name: string;
    }[];
    pagination: {
        limit: number;
        total: number;
        offset: number;
    };
    summary: {
        currency: "DOP" | "USD" | "EUR";
        expense_total: number;
        income_total: number;
        net_total: number;
        expense_distribution: {
            amount: number;
            category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros";
        }[];
    };
}>;
export declare const SharedExpenseTransactionResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uuid: z.ZodString;
        amount: z.ZodNumber;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        transaction_date: z.ZodString;
        transaction_type: z.ZodEnum<["debit", "credit"]>;
        category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Educación", "Salud", "Entretenimiento", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>]>;
        description: z.ZodEnum<["Gasto manual", "Ingreso manual"]>;
        is_manual: z.ZodLiteral<true>;
        payment_method: z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>;
        is_author: z.ZodBoolean;
        created_by_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: "Gasto manual" | "Ingreso manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
        is_manual: true;
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        is_author: boolean;
        created_by_name: string;
    }, {
        description: "Gasto manual" | "Ingreso manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
        is_manual: true;
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        is_author: boolean;
        created_by_name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        description: "Gasto manual" | "Ingreso manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
        is_manual: true;
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        is_author: boolean;
        created_by_name: string;
    };
}, {
    message: string;
    data: {
        description: "Gasto manual" | "Ingreso manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
        is_manual: true;
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        is_author: boolean;
        created_by_name: string;
    };
}>;
export declare const SharedExpenseTransactionDeletedResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
