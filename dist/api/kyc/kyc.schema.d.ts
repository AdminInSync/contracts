import { z } from 'zod';
export declare const KycStatusSchema: z.ZodEnum<{
    none: "none";
    pending: "pending";
    on_hold: "on_hold";
    approved: "approved";
    rejected: "rejected";
}>;
export declare const KycTokenRequestSchema: z.ZodObject<{
    ttlInSecs: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const KycTokenResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        token: z.ZodString;
        userId: z.ZodString;
        levelName: z.ZodString;
        expiresIn: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const KycStatusResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodObject<{
        uid: z.ZodString;
        status: z.ZodEnum<{
            none: "none";
            pending: "pending";
            on_hold: "on_hold";
            approved: "approved";
            rejected: "rejected";
        }>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        applicantId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const WebhookEventSchema: z.ZodObject<{
    type: z.ZodString;
    applicant: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        externalUserId: z.ZodString;
    }, z.core.$strip>>;
    externalUserId: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    reviewResult: z.ZodOptional<z.ZodObject<{
        reviewAnswer: z.ZodString;
    }, z.core.$strip>>;
    reviewedAt: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type KycStatus = z.infer<typeof KycStatusSchema>;
export type KycTokenRequest = z.infer<typeof KycTokenRequestSchema>;
export type KycTokenResponse = z.infer<typeof KycTokenResponseSchema>;
export type KycStatusResponse = z.infer<typeof KycStatusResponseSchema>;
export type WebhookEvent = z.infer<typeof WebhookEventSchema>;
