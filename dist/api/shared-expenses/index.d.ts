import { z } from 'zod';
export declare const SharedExpenseContracts: {
    listGroups: {
        summary: "List shared expense groups for the authenticated user";
        method: "GET";
        path: "/shared-expenses/groups";
        responses: {
            200: z.ZodObject<{
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
    createGroup: {
        summary: "Create a shared expense group and invite link";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            currency: z.ZodEnum<{
                DOP: "DOP";
                USD: "USD";
                EUR: "EUR";
            }>;
            display_name: z.ZodString;
        }, z.core.$strict>;
        path: "/shared-expenses/groups";
        responses: {
            201: z.ZodObject<{
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
    getGroup: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Get shared expense group and totals";
        method: "GET";
        path: "/shared-expenses/groups/:uuid";
        responses: {
            200: z.ZodObject<{
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
    renewInvite: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Replace an expired shared expense invitation";
        method: "POST";
        body: z.ZodObject<{}, z.core.$strip>;
        path: "/shared-expenses/groups/:uuid/invite";
        responses: {
            200: z.ZodObject<{
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
    joinGroup: {
        summary: "Join a shared expense group with an invite code";
        method: "POST";
        body: z.ZodObject<{
            invite_code: z.ZodString;
            display_name: z.ZodString;
        }, z.core.$strict>;
        path: "/shared-expenses/join";
        responses: {
            200: z.ZodObject<{
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
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    listTransactions: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, z.core.$strip>;
        query: z.ZodObject<{
            limit: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            offset: z.ZodPrefault<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
            from: z.ZodOptional<z.ZodString>;
            to: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        summary: "List group expenses and income with totals";
        method: "GET";
        path: "/shared-expenses/groups/:uuid/transactions";
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
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    createTransaction: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Record a shared expense or income";
        method: "POST";
        body: z.ZodObject<{
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
        path: "/shared-expenses/groups/:uuid/transactions";
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
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    updateTransaction: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
            transactionUuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Correct a shared transaction created by the authenticated user";
        method: "PATCH";
        body: z.ZodObject<{
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
        path: "/shared-expenses/groups/:uuid/transactions/:transactionUuid";
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
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        };
    };
    deleteTransaction: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
            transactionUuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Delete a shared transaction created by the authenticated user";
        method: "DELETE";
        path: "/shared-expenses/groups/:uuid/transactions/:transactionUuid";
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
