import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { KycStatusSchema } from '../kyc/kyc.schema';
extendZodWithOpenApi(z);
export const ProductTypeCountSchema = z.object({
    product_type: z.string(),
    count: z.number().int(),
});
export const ClientsGrowthPointSchema = z.object({
    month: z.string(),
    count: z.number().int(),
});
export const DashboardRecentSignupSchema = z.object({
    id: z.string(),
    name: z.string(),
    last_name: z.string(),
    email: z.string().email().or(z.literal('')),
    kyc_status: KycStatusSchema,
    product_count: z.number().int(),
    created_at: z.string().datetime(),
});
export const DashboardStatsSchema = z.object({
    total_clients: z.number().int(),
    active_clients: z.number().int(),
    new_clients_this_month: z.number().int(),
    new_clients_previous_month: z.number().int(),
    users_with_products: z.number().int(),
    total_products: z.number().int(),
    avg_products_per_user: z.number(),
    kyc_funnel: z.object({
        none: z.number().int(),
        pending: z.number().int(),
        on_hold: z.number().int(),
        approved: z.number().int(),
        rejected: z.number().int(),
    }),
    clients_growth: z.array(ClientsGrowthPointSchema),
    product_type_distribution: z.array(ProductTypeCountSchema),
    recent_signups: z.array(DashboardRecentSignupSchema),
});
export const DashboardStatsResponseSchema = z.object({
    message: z.string(),
    data: DashboardStatsSchema,
});
