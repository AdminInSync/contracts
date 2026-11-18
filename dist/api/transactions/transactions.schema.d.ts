import { z } from 'zod';
export declare const ExpenseCategorySchema: z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>;
export declare const IncomeCategorySchema: z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>;
export declare const ManualTransactionTypeSchema: z.ZodEnum<["debit", "credit", "payment"]>;
export declare const ManualTransactionCategorySchema: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>, z.ZodLiteral<"Pago de crédito">]>;
export declare const ManualPaymentMethodSchema: z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>;
export declare const CreateManualTransactionSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    amount: z.ZodNumber;
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    transaction_date: z.ZodString;
    transaction_type: z.ZodDefault<z.ZodEnum<["debit", "credit", "payment"]>>;
    category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>, z.ZodLiteral<"Pago de crédito">]>;
    payment_method: z.ZodOptional<z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>>;
    product_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    goal_income_allocation: z.ZodOptional<z.ZodObject<{
        goal_id: z.ZodPipeline<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>, z.ZodNumber>;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        goal_id: number;
    }, {
        amount: number;
        goal_id: string | number;
    }>>;
}, "strict", z.ZodTypeAny, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    product_uuid?: string | null | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
    goal_income_allocation?: {
        amount: number;
        goal_id: number;
    } | undefined;
}, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    product_uuid?: string | null | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
    goal_income_allocation?: {
        amount: number;
        goal_id: string | number;
    } | undefined;
}>, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    product_uuid?: string | null | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
    goal_income_allocation?: {
        amount: number;
        goal_id: number;
    } | undefined;
}, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    product_uuid?: string | null | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
    goal_income_allocation?: {
        amount: number;
        goal_id: string | number;
    } | undefined;
}>, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    product_uuid?: string | null | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
    goal_income_allocation?: {
        amount: number;
        goal_id: number;
    } | undefined;
}, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    product_uuid?: string | null | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
    goal_income_allocation?: {
        amount: number;
        goal_id: string | number;
    } | undefined;
}>;
export declare const UpdateManualTransactionSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodEnum<["DOP", "USD", "EUR"]>>;
    transaction_date: z.ZodOptional<z.ZodString>;
    transaction_type: z.ZodOptional<z.ZodEnum<["debit", "credit", "payment"]>>;
    category: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>, z.ZodLiteral<"Pago de crédito">]>>;
    payment_method: z.ZodOptional<z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>>;
    product_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strict", z.ZodTypeAny, {
    currency?: "DOP" | "USD" | "EUR" | undefined;
    product_uuid?: string | null | undefined;
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}, {
    currency?: "DOP" | "USD" | "EUR" | undefined;
    product_uuid?: string | null | undefined;
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}>, {
    currency?: "DOP" | "USD" | "EUR" | undefined;
    product_uuid?: string | null | undefined;
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}, {
    currency?: "DOP" | "USD" | "EUR" | undefined;
    product_uuid?: string | null | undefined;
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}>, {
    currency?: "DOP" | "USD" | "EUR" | undefined;
    product_uuid?: string | null | undefined;
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}, {
    currency?: "DOP" | "USD" | "EUR" | undefined;
    product_uuid?: string | null | undefined;
    amount?: number | undefined;
    transaction_date?: string | undefined;
    transaction_type?: "debit" | "credit" | "payment" | undefined;
    category?: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito" | undefined;
    payment_method?: "other" | "cash" | "card" | "apple_pay" | "google_pay" | undefined;
}>;
export declare const ManualTransactionsQuerySchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    offset: number;
}, {
    limit?: string | undefined;
    offset?: string | undefined;
}>;
export declare const ManualTransactionItemSchema: z.ZodEffects<z.ZodObject<{
    uuid: z.ZodString;
    amount: z.ZodNumber;
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    transaction_date: z.ZodString;
    transaction_type: z.ZodEnum<["debit", "credit", "payment"]>;
    category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>, z.ZodLiteral<"Pago de crédito">]>;
    description: z.ZodEnum<["Gasto manual", "Ingreso manual", "Pago manual"]>;
    is_manual: z.ZodLiteral<true>;
    payment_method: z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>;
    product_uuid: z.ZodNullable<z.ZodString>;
    budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    destination_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    budget_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    group_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    description: "Gasto manual" | "Ingreso manual" | "Pago manual";
    uuid: string;
    currency: "DOP" | "USD" | "EUR";
    is_manual: true;
    product_uuid: string | null;
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    destination_pending?: string | null | undefined;
    budget_pending?: string | null | undefined;
    group_pending?: string | null | undefined;
}, {
    description: "Gasto manual" | "Ingreso manual" | "Pago manual";
    uuid: string;
    currency: "DOP" | "USD" | "EUR";
    is_manual: true;
    product_uuid: string | null;
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    destination_pending?: string | null | undefined;
    budget_pending?: string | null | undefined;
    group_pending?: string | null | undefined;
}>, {
    description: "Gasto manual" | "Ingreso manual" | "Pago manual";
    uuid: string;
    currency: "DOP" | "USD" | "EUR";
    is_manual: true;
    product_uuid: string | null;
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    destination_pending?: string | null | undefined;
    budget_pending?: string | null | undefined;
    group_pending?: string | null | undefined;
}, {
    description: "Gasto manual" | "Ingreso manual" | "Pago manual";
    uuid: string;
    currency: "DOP" | "USD" | "EUR";
    is_manual: true;
    product_uuid: string | null;
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
    budget_uuid?: string | null | undefined;
    group_uuid?: string | null | undefined;
    destination_pending?: string | null | undefined;
    budget_pending?: string | null | undefined;
    group_pending?: string | null | undefined;
}>;
export declare const VoiceExpenseDraftSchema: z.ZodEffects<z.ZodObject<{
    transaction_type: z.ZodEnum<["debit", "credit", "payment"]>;
    amount: z.ZodNumber;
    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
    transaction_date: z.ZodString;
    category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>, z.ZodLiteral<"Pago de crédito">]>;
}, "strip", z.ZodTypeAny, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
}, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
}>, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
}, {
    currency: "DOP" | "USD" | "EUR";
    amount: number;
    transaction_date: string;
    transaction_type: "debit" | "credit" | "payment";
    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
}>;
export declare const ParseVoiceExpenseResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodEffects<z.ZodObject<{
        transaction_type: z.ZodEnum<["debit", "credit", "payment"]>;
        amount: z.ZodNumber;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        transaction_date: z.ZodString;
        category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>, z.ZodLiteral<"Pago de crédito">]>;
    }, "strip", z.ZodTypeAny, {
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    }, {
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    }>, {
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    }, {
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    };
}, {
    message: string;
    data: {
        currency: "DOP" | "USD" | "EUR";
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
    };
}>;
export declare const ManualTransactionResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodEffects<z.ZodObject<{
        uuid: z.ZodString;
        amount: z.ZodNumber;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        transaction_date: z.ZodString;
        transaction_type: z.ZodEnum<["debit", "credit", "payment"]>;
        category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>, z.ZodLiteral<"Pago de crédito">]>;
        description: z.ZodEnum<["Gasto manual", "Ingreso manual", "Pago manual"]>;
        is_manual: z.ZodLiteral<true>;
        payment_method: z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>;
        product_uuid: z.ZodNullable<z.ZodString>;
        budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        destination_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        budget_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        group_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }, {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }>, {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }, {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    };
}, {
    message: string;
    data: {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    };
}>;
export declare const ManualTransactionsListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodEffects<z.ZodObject<{
        uuid: z.ZodString;
        amount: z.ZodNumber;
        currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
        transaction_date: z.ZodString;
        transaction_type: z.ZodEnum<["debit", "credit", "payment"]>;
        category: z.ZodUnion<[z.ZodEnum<["Alimentos", "Transporte", "Hogar", "Servicios", "Suscripciones", "Compras", "Cuidado personal", "Salud", "Educación", "Entretenimiento", "Viajes", "Otros"]>, z.ZodEnum<["Salario", "Trabajo independiente", "Ventas", "Inversiones", "Otros ingresos"]>, z.ZodLiteral<"Pago de crédito">]>;
        description: z.ZodEnum<["Gasto manual", "Ingreso manual", "Pago manual"]>;
        is_manual: z.ZodLiteral<true>;
        payment_method: z.ZodEnum<["cash", "card", "apple_pay", "google_pay", "other"]>;
        product_uuid: z.ZodNullable<z.ZodString>;
        budget_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        group_uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        destination_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        budget_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        group_pending: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }, {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }>, {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }, {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
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
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }[];
    pagination: {
        limit: number;
        total: number;
        offset: number;
    };
}, {
    message: string;
    data: {
        description: "Gasto manual" | "Ingreso manual" | "Pago manual";
        uuid: string;
        currency: "DOP" | "USD" | "EUR";
        is_manual: true;
        product_uuid: string | null;
        amount: number;
        transaction_date: string;
        transaction_type: "debit" | "credit" | "payment";
        category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Suscripciones" | "Compras" | "Cuidado personal" | "Salud" | "Educación" | "Entretenimiento" | "Viajes" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos" | "Pago de crédito";
        payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
        budget_uuid?: string | null | undefined;
        group_uuid?: string | null | undefined;
        destination_pending?: string | null | undefined;
        budget_pending?: string | null | undefined;
        group_pending?: string | null | undefined;
    }[];
    pagination: {
        limit: number;
        total: number;
        offset: number;
    };
}>;
export declare const ManualTransactionDeletedResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
