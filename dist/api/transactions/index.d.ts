import { z } from 'zod';
export declare const TransactionsContracts: {
    updateEmailExpenseCategory: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Change the category of a personal email expense";
        method: "PATCH";
        body: z.ZodObject<{
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
        }, z.core.$strict>;
        path: "/transactions/email/:uuid/category";
        responses: {
            200: z.ZodObject<{
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
    parseManualTransactionVoice: {
        summary: "Parse an on-device voice transcript into an expense draft";
        description: "Accepts transcript text only, does not store it, and returns a draft for user confirmation.";
        method: "POST";
        body: z.ZodObject<{
            transcript: z.ZodString;
        }, z.core.$strict>;
        path: "/transactions/manual/voice-draft";
        responses: {
            200: z.ZodObject<{
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
            403: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    listManualTransactions: {
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
        }, z.core.$strip>;
        summary: "List manually recorded transactions";
        description: "Returns the authenticated user’s manually recorded expenses and income. Email-enabled accounts see income entries only.";
        method: "GET";
        path: "/transactions/manual";
        responses: {
            200: z.ZodObject<{
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
    createManualTransaction: {
        summary: "Record a manual transaction";
        description: "Creates an expense or income without free-text merchant or counterparty details. Email-enabled accounts may create income entries only.";
        method: "POST";
        body: z.ZodObject<{
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
        path: "/transactions/manual";
        responses: {
            201: z.ZodObject<{
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
            403: z.ZodObject<{
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
    updateManualTransaction: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Correct a manual transaction";
        description: "Corrects a manual entry owned by the authenticated user, including its transaction type. Email-enabled accounts may update income entries only.";
        method: "PATCH";
        body: z.ZodObject<{
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
        path: "/transactions/manual/:uuid";
        responses: {
            200: z.ZodObject<{
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
            403: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            409: z.ZodObject<{
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
    deleteManualTransaction: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Delete a manual transaction";
        description: "Soft-deletes a manual entry owned by the authenticated user.";
        method: "DELETE";
        path: "/transactions/manual/:uuid";
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
};
