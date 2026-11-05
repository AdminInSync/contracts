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
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    createGroup: {
        summary: "Create a shared expense group and invite link";
        method: "POST";
        body: z.ZodObject<{
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
        path: "/shared-expenses/groups";
        responses: {
            201: z.ZodObject<{
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    getGroup: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            uuid: string;
        }, {
            uuid: string;
        }>;
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
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    renewInvite: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            uuid: string;
        }, {
            uuid: string;
        }>;
        summary: "Replace an expired shared expense invitation";
        method: "POST";
        body: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        path: "/shared-expenses/groups/:uuid/invite";
        responses: {
            200: z.ZodObject<{
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
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    joinGroup: {
        summary: "Join a shared expense group with an invite code";
        method: "POST";
        body: z.ZodObject<{
            invite_code: z.ZodString;
            display_name: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            display_name: string;
            invite_code: string;
        }, {
            display_name: string;
            invite_code: string;
        }>;
        path: "/shared-expenses/join";
        responses: {
            200: z.ZodObject<{
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    listTransactions: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            uuid: string;
        }, {
            uuid: string;
        }>;
        query: z.ZodEffects<z.ZodObject<{
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
        summary: "List group expenses and income with totals";
        method: "GET";
        path: "/shared-expenses/groups/:uuid/transactions";
        responses: {
            200: z.ZodObject<{
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
                    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
                    is_author: boolean;
                    created_by_name: string;
                }, {
                    description: "Gasto manual" | "Ingreso manual";
                    uuid: string;
                    currency: "DOP" | "USD" | "EUR";
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
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
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    createTransaction: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            uuid: string;
        }, {
            uuid: string;
        }>;
        summary: "Record a shared expense or income";
        method: "POST";
        body: z.ZodEffects<z.ZodObject<{
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
        path: "/shared-expenses/groups/:uuid/transactions";
        responses: {
            201: z.ZodObject<{
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
                    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
                    is_author: boolean;
                    created_by_name: string;
                }, {
                    description: "Gasto manual" | "Ingreso manual";
                    uuid: string;
                    currency: "DOP" | "USD" | "EUR";
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
                    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
                    is_author: boolean;
                    created_by_name: string;
                };
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    updateTransaction: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
            transactionUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            uuid: string;
            transactionUuid: string;
        }, {
            uuid: string;
            transactionUuid: string;
        }>;
        summary: "Correct a shared transaction created by the authenticated user";
        method: "PATCH";
        body: z.ZodEffects<z.ZodEffects<z.ZodObject<{
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
        path: "/shared-expenses/groups/:uuid/transactions/:transactionUuid";
        responses: {
            200: z.ZodObject<{
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
                    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
                    is_author: boolean;
                    created_by_name: string;
                }, {
                    description: "Gasto manual" | "Ingreso manual";
                    uuid: string;
                    currency: "DOP" | "USD" | "EUR";
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
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
                    is_manual: true;
                    amount: number;
                    transaction_date: string;
                    transaction_type: "debit" | "credit";
                    category: "Alimentos" | "Transporte" | "Hogar" | "Servicios" | "Educación" | "Salud" | "Entretenimiento" | "Otros" | "Salario" | "Trabajo independiente" | "Ventas" | "Inversiones" | "Otros ingresos";
                    payment_method: "other" | "cash" | "card" | "apple_pay" | "google_pay";
                    is_author: boolean;
                    created_by_name: string;
                };
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
    deleteTransaction: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
            transactionUuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            uuid: string;
            transactionUuid: string;
        }, {
            uuid: string;
            transactionUuid: string;
        }>;
        summary: "Delete a shared transaction created by the authenticated user";
        method: "DELETE";
        path: "/shared-expenses/groups/:uuid/transactions/:transactionUuid";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            401: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
            500: z.ZodObject<{
                message: z.ZodString;
                error: z.ZodOptional<z.ZodString>;
                statusCode: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }, {
                message: string;
                error?: string | undefined;
                statusCode?: number | undefined;
            }>;
        };
    };
};
