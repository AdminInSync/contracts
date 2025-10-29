import { z } from 'zod';
export declare const BankConnectionSchema: z.ZodObject<{
    id: z.ZodString;
    institution_id: z.ZodNumber;
    external_connection_id: z.ZodString;
    status: z.ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
    nickname: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    last_sync_at: z.ZodNullable<z.ZodString>;
    revoked_at: z.ZodNullable<z.ZodString>;
    expires_at: z.ZodNullable<z.ZodString>;
    is_active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    status: "error" | "pending" | "active" | "disconnected" | "revoked";
    id: string;
    is_active: boolean;
    created_at: string;
    institution_id: number;
    external_connection_id: string;
    nickname: string | null;
    last_sync_at: string | null;
    revoked_at: string | null;
    expires_at: string | null;
}, {
    status: "error" | "pending" | "active" | "disconnected" | "revoked";
    id: string;
    is_active: boolean;
    created_at: string;
    institution_id: number;
    external_connection_id: string;
    nickname: string | null;
    last_sync_at: string | null;
    revoked_at: string | null;
    expires_at: string | null;
}>;
export declare const CreateConnectionRequestSchema: z.ZodObject<{
    sessionId: z.ZodString;
    institution_id: z.ZodNumber;
    nickname: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    institution_id: number;
    sessionId: string;
    notes?: string | undefined;
    nickname?: string | undefined;
}, {
    institution_id: number;
    sessionId: string;
    notes?: string | undefined;
    nickname?: string | undefined;
}>;
export declare const CreateConnectionResponseSchema: z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        institution_id: z.ZodNumber;
        external_connection_id: z.ZodString;
        status: z.ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
        nickname: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        last_sync_at: z.ZodNullable<z.ZodString>;
        revoked_at: z.ZodNullable<z.ZodString>;
        expires_at: z.ZodNullable<z.ZodString>;
        is_active: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    }, {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    }>;
    accessToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    connection: {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    };
    accessToken: string;
}, {
    connection: {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    };
    accessToken: string;
}>;
export declare const GetConnectionResponseSchema: z.ZodObject<{
    connection: z.ZodObject<{
        id: z.ZodString;
        institution_id: z.ZodNumber;
        external_connection_id: z.ZodString;
        status: z.ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
        nickname: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        last_sync_at: z.ZodNullable<z.ZodString>;
        revoked_at: z.ZodNullable<z.ZodString>;
        expires_at: z.ZodNullable<z.ZodString>;
        is_active: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    }, {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    connection: {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    };
}, {
    connection: {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    };
}>;
export declare const ListConnectionsResponseSchema: z.ZodObject<{
    connections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        institution_id: z.ZodNumber;
        external_connection_id: z.ZodString;
        status: z.ZodEnum<["active", "pending", "disconnected", "error", "revoked"]>;
        nickname: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        last_sync_at: z.ZodNullable<z.ZodString>;
        revoked_at: z.ZodNullable<z.ZodString>;
        expires_at: z.ZodNullable<z.ZodString>;
        is_active: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    }, {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    connections: {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    }[];
}, {
    connections: {
        status: "error" | "pending" | "active" | "disconnected" | "revoked";
        id: string;
        is_active: boolean;
        created_at: string;
        institution_id: number;
        external_connection_id: string;
        nickname: string | null;
        last_sync_at: string | null;
        revoked_at: string | null;
        expires_at: string | null;
    }[];
}>;
export declare const RevokeConnectionResponseSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
export declare const AccountBalanceSchema: z.ZodObject<{
    current: z.ZodNullable<z.ZodNumber>;
    available: z.ZodNullable<z.ZodNumber>;
    limit: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number | null;
    current: number | null;
    available: number | null;
}, {
    limit: number | null;
    current: number | null;
    available: number | null;
}>;
export declare const BankAccountSchema: z.ZodObject<{
    id: z.ZodString;
    connectionId: z.ZodString;
    type: z.ZodEnum<["checking", "savings", "credit_card", "loan", "investment", "depository", "other"]>;
    name: z.ZodString;
    lastFour: z.ZodNullable<z.ZodString>;
    balance: z.ZodObject<{
        current: z.ZodNullable<z.ZodNumber>;
        available: z.ZodNullable<z.ZodNumber>;
        limit: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        limit: number | null;
        current: number | null;
        available: number | null;
    }, {
        limit: number | null;
        current: number | null;
        available: number | null;
    }>;
    currency: z.ZodString;
    lastTransactionRefresh: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
    id: string;
    name: string;
    currency: string;
    lastFour: string | null;
    balance: {
        limit: number | null;
        current: number | null;
        available: number | null;
    };
    connectionId: string;
    lastTransactionRefresh: string | null;
}, {
    type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
    id: string;
    name: string;
    currency: string;
    lastFour: string | null;
    balance: {
        limit: number | null;
        current: number | null;
        available: number | null;
    };
    connectionId: string;
    lastTransactionRefresh: string | null;
}>;
export declare const ListAccountsResponseSchema: z.ZodObject<{
    accounts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodString;
        type: z.ZodEnum<["checking", "savings", "credit_card", "loan", "investment", "depository", "other"]>;
        name: z.ZodString;
        lastFour: z.ZodNullable<z.ZodString>;
        balance: z.ZodObject<{
            current: z.ZodNullable<z.ZodNumber>;
            available: z.ZodNullable<z.ZodNumber>;
            limit: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number | null;
            current: number | null;
            available: number | null;
        }, {
            limit: number | null;
            current: number | null;
            available: number | null;
        }>;
        currency: z.ZodString;
        lastTransactionRefresh: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
        id: string;
        name: string;
        currency: string;
        lastFour: string | null;
        balance: {
            limit: number | null;
            current: number | null;
            available: number | null;
        };
        connectionId: string;
        lastTransactionRefresh: string | null;
    }, {
        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
        id: string;
        name: string;
        currency: string;
        lastFour: string | null;
        balance: {
            limit: number | null;
            current: number | null;
            available: number | null;
        };
        connectionId: string;
        lastTransactionRefresh: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    accounts: {
        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
        id: string;
        name: string;
        currency: string;
        lastFour: string | null;
        balance: {
            limit: number | null;
            current: number | null;
            available: number | null;
        };
        connectionId: string;
        lastTransactionRefresh: string | null;
    }[];
}, {
    accounts: {
        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
        id: string;
        name: string;
        currency: string;
        lastFour: string | null;
        balance: {
            limit: number | null;
            current: number | null;
            available: number | null;
        };
        connectionId: string;
        lastTransactionRefresh: string | null;
    }[];
}>;
export declare const GetAccountResponseSchema: z.ZodObject<{
    account: z.ZodObject<{
        id: z.ZodString;
        connectionId: z.ZodString;
        type: z.ZodEnum<["checking", "savings", "credit_card", "loan", "investment", "depository", "other"]>;
        name: z.ZodString;
        lastFour: z.ZodNullable<z.ZodString>;
        balance: z.ZodObject<{
            current: z.ZodNullable<z.ZodNumber>;
            available: z.ZodNullable<z.ZodNumber>;
            limit: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            limit: number | null;
            current: number | null;
            available: number | null;
        }, {
            limit: number | null;
            current: number | null;
            available: number | null;
        }>;
        currency: z.ZodString;
        lastTransactionRefresh: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
        id: string;
        name: string;
        currency: string;
        lastFour: string | null;
        balance: {
            limit: number | null;
            current: number | null;
            available: number | null;
        };
        connectionId: string;
        lastTransactionRefresh: string | null;
    }, {
        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
        id: string;
        name: string;
        currency: string;
        lastFour: string | null;
        balance: {
            limit: number | null;
            current: number | null;
            available: number | null;
        };
        connectionId: string;
        lastTransactionRefresh: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    account: {
        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
        id: string;
        name: string;
        currency: string;
        lastFour: string | null;
        balance: {
            limit: number | null;
            current: number | null;
            available: number | null;
        };
        connectionId: string;
        lastTransactionRefresh: string | null;
    };
}, {
    account: {
        type: "other" | "credit_card" | "loan" | "investment" | "checking" | "savings" | "depository";
        id: string;
        name: string;
        currency: string;
        lastFour: string | null;
        balance: {
            limit: number | null;
            current: number | null;
            available: number | null;
        };
        connectionId: string;
        lastTransactionRefresh: string | null;
    };
}>;
export declare const BankTransactionSchema: z.ZodObject<{
    id: z.ZodString;
    accountId: z.ZodString;
    amount: z.ZodNumber;
    date: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    reference: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["pending", "completed", "cancelled", "failed"]>;
    transactionRefresh: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "completed" | "cancelled" | "failed";
    id: string;
    date: string;
    description: string | null;
    amount: number;
    accountId: string;
    reference: string | null;
    transactionRefresh: string | null;
}, {
    status: "pending" | "completed" | "cancelled" | "failed";
    id: string;
    date: string;
    description: string | null;
    amount: number;
    accountId: string;
    reference: string | null;
    transactionRefresh: string | null;
}>;
export declare const ListTransactionsRequestSchema: z.ZodObject<{
    refreshedSince: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
    offset: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    limit?: number | undefined;
    offset?: number | undefined;
    refreshedSince?: string | undefined;
}, {
    limit?: string | undefined;
    offset?: string | undefined;
    refreshedSince?: string | undefined;
}>;
export declare const ListTransactionsResponseSchema: z.ZodObject<{
    transactions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        accountId: z.ZodString;
        amount: z.ZodNumber;
        date: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        reference: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["pending", "completed", "cancelled", "failed"]>;
        transactionRefresh: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "pending" | "completed" | "cancelled" | "failed";
        id: string;
        date: string;
        description: string | null;
        amount: number;
        accountId: string;
        reference: string | null;
        transactionRefresh: string | null;
    }, {
        status: "pending" | "completed" | "cancelled" | "failed";
        id: string;
        date: string;
        description: string | null;
        amount: number;
        accountId: string;
        reference: string | null;
        transactionRefresh: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    transactions: {
        status: "pending" | "completed" | "cancelled" | "failed";
        id: string;
        date: string;
        description: string | null;
        amount: number;
        accountId: string;
        reference: string | null;
        transactionRefresh: string | null;
    }[];
}, {
    transactions: {
        status: "pending" | "completed" | "cancelled" | "failed";
        id: string;
        date: string;
        description: string | null;
        amount: number;
        accountId: string;
        reference: string | null;
        transactionRefresh: string | null;
    }[];
}>;
export declare const GetTransactionResponseSchema: z.ZodObject<{
    transaction: z.ZodObject<{
        id: z.ZodString;
        accountId: z.ZodString;
        amount: z.ZodNumber;
        date: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        reference: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["pending", "completed", "cancelled", "failed"]>;
        transactionRefresh: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "pending" | "completed" | "cancelled" | "failed";
        id: string;
        date: string;
        description: string | null;
        amount: number;
        accountId: string;
        reference: string | null;
        transactionRefresh: string | null;
    }, {
        status: "pending" | "completed" | "cancelled" | "failed";
        id: string;
        date: string;
        description: string | null;
        amount: number;
        accountId: string;
        reference: string | null;
        transactionRefresh: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    transaction: {
        status: "pending" | "completed" | "cancelled" | "failed";
        id: string;
        date: string;
        description: string | null;
        amount: number;
        accountId: string;
        reference: string | null;
        transactionRefresh: string | null;
    };
}, {
    transaction: {
        status: "pending" | "completed" | "cancelled" | "failed";
        id: string;
        date: string;
        description: string | null;
        amount: number;
        accountId: string;
        reference: string | null;
        transactionRefresh: string | null;
    };
}>;
export declare const ErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    error: string;
}, {
    message: string;
    error: string;
}>;
