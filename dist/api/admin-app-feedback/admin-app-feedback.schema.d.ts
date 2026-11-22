import { z } from 'zod';
export declare const AppFeedbackStatusSchema: z.ZodEnum<{
    new: "new";
    reviewed: "reviewed";
    resolved: "resolved";
}>;
export declare const AdminAppFeedbackEntrySchema: z.ZodObject<{
    id: z.ZodString;
    message: z.ZodString;
    status: z.ZodEnum<{
        new: "new";
        reviewed: "reviewed";
        resolved: "resolved";
    }>;
    user_uid: z.ZodString;
    user_name: z.ZodString;
    user_email: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
}, z.core.$strip>;
export declare const AppFeedbackListResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        message: z.ZodString;
        status: z.ZodEnum<{
            new: "new";
            reviewed: "reviewed";
            resolved: "resolved";
        }>;
        user_uid: z.ZodString;
        user_name: z.ZodString;
        user_email: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const GetAppFeedbackQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        new: "new";
        reviewed: "reviewed";
        resolved: "resolved";
    }>, z.ZodLiteral<"all">]>>;
}, z.core.$strip>;
export declare const UpdateAppFeedbackStatusParamsSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const UpdateAppFeedbackStatusBodySchema: z.ZodObject<{
    status: z.ZodEnum<{
        new: "new";
        reviewed: "reviewed";
        resolved: "resolved";
    }>;
}, z.core.$strip>;
export declare const UpdateAppFeedbackStatusResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        id: z.ZodString;
        message: z.ZodString;
        status: z.ZodEnum<{
            new: "new";
            reviewed: "reviewed";
            resolved: "resolved";
        }>;
        user_uid: z.ZodString;
        user_name: z.ZodString;
        user_email: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AdminAppFeedbackEntry = z.infer<typeof AdminAppFeedbackEntrySchema>;
export type AppFeedbackStatus = z.infer<typeof AppFeedbackStatusSchema>;
