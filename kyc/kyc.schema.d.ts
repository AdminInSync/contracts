import { z } from 'zod';
export declare const KycStatusSchema: z.ZodEnum<["none", "pending", "on_hold", "approved", "rejected"]>;
export declare const KycTokenRequestSchema: z.ZodObject<{
    ttlInSecs: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    ttlInSecs: number;
}, {
    ttlInSecs?: number | undefined;
}>;
export declare const KycTokenResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    data: z.ZodObject<{
        token: z.ZodString;
        userId: z.ZodString;
        levelName: z.ZodString;
        expiresIn: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        token: string;
        userId: string;
        levelName: string;
        expiresIn: number;
    }, {
        token: string;
        userId: string;
        levelName: string;
        expiresIn: number;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        token: string;
        userId: string;
        levelName: string;
        expiresIn: number;
    };
    success: boolean;
}, {
    message: string;
    data: {
        token: string;
        userId: string;
        levelName: string;
        expiresIn: number;
    };
    success: boolean;
}>;
export declare const KycStatusResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
    data: z.ZodObject<{
        uid: z.ZodString;
        status: z.ZodEnum<["none", "pending", "on_hold", "approved", "rejected"]>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        applicantId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "none" | "pending" | "on_hold" | "approved" | "rejected";
        uid: string;
        reviewedAt: string | null;
        applicantId: string | null;
    }, {
        status: "none" | "pending" | "on_hold" | "approved" | "rejected";
        uid: string;
        reviewedAt: string | null;
        applicantId: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    data: {
        status: "none" | "pending" | "on_hold" | "approved" | "rejected";
        uid: string;
        reviewedAt: string | null;
        applicantId: string | null;
    };
    success: boolean;
}, {
    message: string;
    data: {
        status: "none" | "pending" | "on_hold" | "approved" | "rejected";
        uid: string;
        reviewedAt: string | null;
        applicantId: string | null;
    };
    success: boolean;
}>;
export declare const WebhookEventSchema: z.ZodObject<{
    type: z.ZodString;
    applicant: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        externalUserId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        externalUserId: string;
    }, {
        id: string;
        externalUserId: string;
    }>>;
    externalUserId: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    reviewResult: z.ZodOptional<z.ZodObject<{
        reviewAnswer: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reviewAnswer: string;
    }, {
        reviewAnswer: string;
    }>>;
    reviewedAt: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodString;
    applicant: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        externalUserId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        externalUserId: string;
    }, {
        id: string;
        externalUserId: string;
    }>>;
    externalUserId: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    reviewResult: z.ZodOptional<z.ZodObject<{
        reviewAnswer: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reviewAnswer: string;
    }, {
        reviewAnswer: string;
    }>>;
    reviewedAt: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodString;
    applicant: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        externalUserId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        externalUserId: string;
    }, {
        id: string;
        externalUserId: string;
    }>>;
    externalUserId: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    reviewResult: z.ZodOptional<z.ZodObject<{
        reviewAnswer: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reviewAnswer: string;
    }, {
        reviewAnswer: string;
    }>>;
    reviewedAt: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type KycStatus = z.infer<typeof KycStatusSchema>;
export type KycTokenRequest = z.infer<typeof KycTokenRequestSchema>;
export type KycTokenResponse = z.infer<typeof KycTokenResponseSchema>;
export type KycStatusResponse = z.infer<typeof KycStatusResponseSchema>;
export type WebhookEvent = z.infer<typeof WebhookEventSchema>;
