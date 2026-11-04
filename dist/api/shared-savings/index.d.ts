import { z } from 'zod';
export declare const SharedSavingsContracts: {
    list: {
        summary: "List shared savings goals for the authenticated user";
        method: "GET";
        path: "/shared-savings";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodArray<z.ZodObject<{
                    uuid: z.ZodString;
                    name: z.ZodString;
                    purpose: z.ZodString;
                    target_amount: z.ZodNumber;
                    current_amount: z.ZodNumber;
                    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                    target_date: z.ZodString;
                    invite_code: z.ZodString;
                    is_owner: z.ZodBoolean;
                    leaderboard: z.ZodArray<z.ZodObject<{
                        rank: z.ZodNumber;
                        display_name: z.ZodString;
                        contributed_amount: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }, {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }, {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }[];
            }, {
                message: string;
                data: {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
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
    create: {
        summary: "Create a shared savings goal";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            purpose: z.ZodString;
            target_amount: z.ZodNumber;
            currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
            target_date: z.ZodString;
            display_name: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            display_name: string;
            name: string;
            target_amount: number;
            currency: "DOP" | "USD" | "EUR";
            target_date: string;
            purpose: string;
        }, {
            display_name: string;
            name: string;
            target_amount: number;
            currency: "DOP" | "USD" | "EUR";
            target_date: string;
            purpose: string;
        }>;
        path: "/shared-savings";
        responses: {
            201: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    uuid: z.ZodString;
                    name: z.ZodString;
                    purpose: z.ZodString;
                    target_amount: z.ZodNumber;
                    current_amount: z.ZodNumber;
                    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                    target_date: z.ZodString;
                    invite_code: z.ZodString;
                    is_owner: z.ZodBoolean;
                    leaderboard: z.ZodArray<z.ZodObject<{
                        rank: z.ZodNumber;
                        display_name: z.ZodString;
                        contributed_amount: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }, {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }, {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                };
            }, {
                message: string;
                data: {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
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
    join: {
        summary: "Join a shared savings goal with an invite code";
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
        path: "/shared-savings/join";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    uuid: z.ZodString;
                    name: z.ZodString;
                    purpose: z.ZodString;
                    target_amount: z.ZodNumber;
                    current_amount: z.ZodNumber;
                    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                    target_date: z.ZodString;
                    invite_code: z.ZodString;
                    is_owner: z.ZodBoolean;
                    leaderboard: z.ZodArray<z.ZodObject<{
                        rank: z.ZodNumber;
                        display_name: z.ZodString;
                        contributed_amount: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }, {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }, {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                };
            }, {
                message: string;
                data: {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
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
    contribute: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            uuid: string;
        }, {
            uuid: string;
        }>;
        summary: "Add a contribution to a shared savings goal";
        method: "POST";
        body: z.ZodObject<{
            amount: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            amount: number;
        }, {
            amount: number;
        }>;
        path: "/shared-savings/:uuid/contributions";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
                data: z.ZodObject<{
                    uuid: z.ZodString;
                    name: z.ZodString;
                    purpose: z.ZodString;
                    target_amount: z.ZodNumber;
                    current_amount: z.ZodNumber;
                    currency: z.ZodEnum<["DOP", "USD", "EUR"]>;
                    target_date: z.ZodString;
                    invite_code: z.ZodString;
                    is_owner: z.ZodBoolean;
                    leaderboard: z.ZodArray<z.ZodObject<{
                        rank: z.ZodNumber;
                        display_name: z.ZodString;
                        contributed_amount: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }, {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }, {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                }>;
            }, "strip", z.ZodTypeAny, {
                message: string;
                data: {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
                    }[];
                };
            }, {
                message: string;
                data: {
                    uuid: string;
                    name: string;
                    target_amount: number;
                    current_amount: number;
                    currency: "DOP" | "USD" | "EUR";
                    target_date: string;
                    purpose: string;
                    invite_code: string;
                    is_owner: boolean;
                    leaderboard: {
                        display_name: string;
                        rank: number;
                        contributed_amount: number;
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
};
