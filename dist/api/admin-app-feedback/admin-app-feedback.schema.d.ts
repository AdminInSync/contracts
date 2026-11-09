import { z } from 'zod';
export declare const AppFeedbackStatusSchema: z.ZodEnum<["new", "reviewed", "resolved"]>;
export declare const AdminAppFeedbackEntrySchema: z.ZodObject<{
    id: z.ZodString;
    message: z.ZodString;
    status: z.ZodEnum<["new", "reviewed", "resolved"]>;
    user_uid: z.ZodString;
    user_name: z.ZodString;
    user_email: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    status: "new" | "reviewed" | "resolved";
    id: string;
    user_uid: string;
    created_at: string;
    user_name: string;
    user_email: string | null;
}, {
    message: string;
    status: "new" | "reviewed" | "resolved";
    id: string;
    user_uid: string;
    created_at: string;
    user_name: string;
    user_email: string | null;
}>;
export declare const AppFeedbackListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        message: z.ZodString;
        status: z.ZodEnum<["new", "reviewed", "resolved"]>;
        user_uid: z.ZodString;
        user_name: z.ZodString;
        user_email: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        status: "new" | "reviewed" | "resolved";
        id: string;
        user_uid: string;
        created_at: string;
        user_name: string;
        user_email: string | null;
    }, {
        message: string;
        status: "new" | "reviewed" | "resolved";
        id: string;
        user_uid: string;
        created_at: string;
        user_name: string;
        user_email: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        message: string;
        status: "new" | "reviewed" | "resolved";
        id: string;
        user_uid: string;
        created_at: string;
        user_name: string;
        user_email: string | null;
    }[];
}, {
    message: string;
    data: {
        message: string;
        status: "new" | "reviewed" | "resolved";
        id: string;
        user_uid: string;
        created_at: string;
        user_name: string;
        user_email: string | null;
    }[];
}>;
export declare const GetAppFeedbackQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["new", "reviewed", "resolved"]>, z.ZodLiteral<"all">]>>;
}, "strip", z.ZodTypeAny, {
    status?: "all" | "new" | "reviewed" | "resolved" | undefined;
}, {
    status?: "all" | "new" | "reviewed" | "resolved" | undefined;
}>;
export declare const UpdateAppFeedbackStatusParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const UpdateAppFeedbackStatusBodySchema: z.ZodObject<{
    status: z.ZodEnum<["new", "reviewed", "resolved"]>;
}, "strip", z.ZodTypeAny, {
    status: "new" | "reviewed" | "resolved";
}, {
    status: "new" | "reviewed" | "resolved";
}>;
export declare const UpdateAppFeedbackStatusResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        id: z.ZodString;
        message: z.ZodString;
        status: z.ZodEnum<["new", "reviewed", "resolved"]>;
        user_uid: z.ZodString;
        user_name: z.ZodString;
        user_email: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        status: "new" | "reviewed" | "resolved";
        id: string;
        user_uid: string;
        created_at: string;
        user_name: string;
        user_email: string | null;
    }, {
        message: string;
        status: "new" | "reviewed" | "resolved";
        id: string;
        user_uid: string;
        created_at: string;
        user_name: string;
        user_email: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        message: string;
        status: "new" | "reviewed" | "resolved";
        id: string;
        user_uid: string;
        created_at: string;
        user_name: string;
        user_email: string | null;
    };
}, {
    message: string;
    data: {
        message: string;
        status: "new" | "reviewed" | "resolved";
        id: string;
        user_uid: string;
        created_at: string;
        user_name: string;
        user_email: string | null;
    };
}>;
export type AdminAppFeedbackEntry = z.infer<typeof AdminAppFeedbackEntrySchema>;
export type AppFeedbackStatus = z.infer<typeof AppFeedbackStatusSchema>;
