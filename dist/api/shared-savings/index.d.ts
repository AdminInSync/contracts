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
                    currency: z.ZodEnum<{
                        DOP: "DOP";
                        USD: "USD";
                        EUR: "EUR";
                    }>;
                    target_date: z.ZodString;
                    invite_code: z.ZodString;
                    is_owner: z.ZodBoolean;
                    leaderboard: z.ZodArray<z.ZodObject<{
                        rank: z.ZodNumber;
                        display_name: z.ZodString;
                        contributed_amount: z.ZodNumber;
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
    create: {
        summary: "Create a shared savings goal";
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
            purpose: z.ZodString;
            target_amount: z.ZodNumber;
            currency: z.ZodEnum<{
                DOP: "DOP";
                USD: "USD";
                EUR: "EUR";
            }>;
            target_date: z.ZodString;
            display_name: z.ZodString;
        }, z.core.$strict>;
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
                    currency: z.ZodEnum<{
                        DOP: "DOP";
                        USD: "USD";
                        EUR: "EUR";
                    }>;
                    target_date: z.ZodString;
                    invite_code: z.ZodString;
                    is_owner: z.ZodBoolean;
                    leaderboard: z.ZodArray<z.ZodObject<{
                        rank: z.ZodNumber;
                        display_name: z.ZodString;
                        contributed_amount: z.ZodNumber;
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
    join: {
        summary: "Join a shared savings goal with an invite code";
        method: "POST";
        body: z.ZodObject<{
            invite_code: z.ZodString;
            display_name: z.ZodString;
        }, z.core.$strict>;
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
                    currency: z.ZodEnum<{
                        DOP: "DOP";
                        USD: "USD";
                        EUR: "EUR";
                    }>;
                    target_date: z.ZodString;
                    invite_code: z.ZodString;
                    is_owner: z.ZodBoolean;
                    leaderboard: z.ZodArray<z.ZodObject<{
                        rank: z.ZodNumber;
                        display_name: z.ZodString;
                        contributed_amount: z.ZodNumber;
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
    contribute: {
        pathParams: z.ZodObject<{
            uuid: z.ZodString;
        }, z.core.$strip>;
        summary: "Add a contribution to a shared savings goal";
        method: "POST";
        body: z.ZodObject<{
            amount: z.ZodNumber;
        }, z.core.$strict>;
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
                    currency: z.ZodEnum<{
                        DOP: "DOP";
                        USD: "USD";
                        EUR: "EUR";
                    }>;
                    target_date: z.ZodString;
                    invite_code: z.ZodString;
                    is_owner: z.ZodBoolean;
                    leaderboard: z.ZodArray<z.ZodObject<{
                        rank: z.ZodNumber;
                        display_name: z.ZodString;
                        contributed_amount: z.ZodNumber;
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
};
