import { z } from 'zod';
export declare const BankConnectionSchema: z.ZodObject<{
    id: z.ZodString;
    institution_id: z.ZodNumber;
    external_connection_id: z.ZodString;
    status: z.ZodEnum<{
        error: "error";
        pending: "pending";
        active: "active";
        revoked: "revoked";
        disconnected: "disconnected";
    }>;
    nickname: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    last_sync_at: z.ZodNullable<z.ZodString>;
    revoked_at: z.ZodNullable<z.ZodString>;
    expires_at: z.ZodNullable<z.ZodString>;
    is_active: z.ZodBoolean;
}, z.core.$strip>;
export declare const CreateConnectionRequestSchema: z.ZodObject<{
    sessionId: z.ZodString;
    institution_id: z.ZodNumber;
    nickname: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CreateConnectionResponseSchema: z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        institution_id: z.ZodNumber;
        external_connection_id: z.ZodString;
        status: z.ZodEnum<{
            error: "error";
            pending: "pending";
            active: "active";
            revoked: "revoked";
            disconnected: "disconnected";
        }>;
        nickname: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        last_sync_at: z.ZodNullable<z.ZodString>;
        revoked_at: z.ZodNullable<z.ZodString>;
        expires_at: z.ZodNullable<z.ZodString>;
        is_active: z.ZodBoolean;
    }, z.core.$strip>;
    accessToken: z.ZodString;
}, z.core.$strip>;
export declare const GetConnectionResponseSchema: z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        institution_id: z.ZodNumber;
        external_connection_id: z.ZodString;
        status: z.ZodEnum<{
            error: "error";
            pending: "pending";
            active: "active";
            revoked: "revoked";
            disconnected: "disconnected";
        }>;
        nickname: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        last_sync_at: z.ZodNullable<z.ZodString>;
        revoked_at: z.ZodNullable<z.ZodString>;
        expires_at: z.ZodNullable<z.ZodString>;
        is_active: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ListConnectionsResponseSchema: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        institution_id: z.ZodNumber;
        external_connection_id: z.ZodString;
        status: z.ZodEnum<{
            error: "error";
            pending: "pending";
            active: "active";
            revoked: "revoked";
            disconnected: "disconnected";
        }>;
        nickname: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        last_sync_at: z.ZodNullable<z.ZodString>;
        revoked_at: z.ZodNullable<z.ZodString>;
        expires_at: z.ZodNullable<z.ZodString>;
        is_active: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const RevokeConnectionResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
export declare const AccountBalanceSchema: z.ZodObject<{
    current: z.ZodNullable<z.ZodNumber>;
    available: z.ZodNullable<z.ZodNumber>;
    limit: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export declare const BankAccountSchema: z.ZodObject<{
    id: z.ZodString;
    connectionId: z.ZodString;
    type: z.ZodEnum<{
        other: "other";
        credit_card: "credit_card";
        loan: "loan";
        investment: "investment";
        checking: "checking";
        savings: "savings";
        depository: "depository";
    }>;
    name: z.ZodString;
    lastFour: z.ZodNullable<z.ZodString>;
    balance: z.ZodObject<{
        current: z.ZodNullable<z.ZodNumber>;
        available: z.ZodNullable<z.ZodNumber>;
        limit: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
    currency: z.ZodString;
    lastTransactionRefresh: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const ListAccountsResponseSchema: z.ZodObject<{
    accounts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodString;
        type: z.ZodEnum<{
            other: "other";
            credit_card: "credit_card";
            loan: "loan";
            investment: "investment";
            checking: "checking";
            savings: "savings";
            depository: "depository";
        }>;
        name: z.ZodString;
        lastFour: z.ZodNullable<z.ZodString>;
        balance: z.ZodObject<{
            current: z.ZodNullable<z.ZodNumber>;
            available: z.ZodNullable<z.ZodNumber>;
            limit: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>;
        currency: z.ZodString;
        lastTransactionRefresh: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const GetAccountResponseSchema: z.ZodObject<{
    account: z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodString;
        type: z.ZodEnum<{
            other: "other";
            credit_card: "credit_card";
            loan: "loan";
            investment: "investment";
            checking: "checking";
            savings: "savings";
            depository: "depository";
        }>;
        name: z.ZodString;
        lastFour: z.ZodNullable<z.ZodString>;
        balance: z.ZodObject<{
            current: z.ZodNullable<z.ZodNumber>;
            available: z.ZodNullable<z.ZodNumber>;
            limit: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>;
        currency: z.ZodString;
        lastTransactionRefresh: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const BankTransactionSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    amount: z.ZodNumber;
    date: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    reference: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        pending: "pending";
        completed: "completed";
        cancelled: "cancelled";
        failed: "failed";
    }>;
    transactionRefresh: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const ListTransactionsRequestSchema: z.ZodObject<{
    refreshedSince: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    offset: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
}, z.core.$strip>;
export declare const ListTransactionsResponseSchema: z.ZodObject<{
    transactions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accountId: z.ZodString;
        amount: z.ZodNumber;
        date: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        reference: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            pending: "pending";
            completed: "completed";
            cancelled: "cancelled";
            failed: "failed";
        }>;
        transactionRefresh: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const GetTransactionResponseSchema: z.ZodObject<{
    transaction: z.ZodObject<{
        id: z.ZodString;
        accountId: z.ZodString;
        amount: z.ZodNumber;
        date: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        reference: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            pending: "pending";
            completed: "completed";
            cancelled: "cancelled";
            failed: "failed";
        }>;
        transactionRefresh: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
}, z.core.$strip>;
