import { z } from 'zod';
import { extendZodWithOpenApi } from '@anatine/zod-openapi';
extendZodWithOpenApi(z);
export const ActivationPhaseSchema = z.enum([
    'account_created',
    'registration_started',
    'document_submitted',
    'registration_completed',
    'email_connected',
    'product_linked',
]);
export const ActivationFunnelSchema = z.object({
    account_created: z.number().int(),
    registration_started: z.number().int(),
    document_submitted: z.number().int(),
    registration_completed: z.number().int(),
    email_connected: z.number().int(),
    product_linked: z.number().int(),
});
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
    activation_phase: ActivationPhaseSchema,
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
    activation_funnel: ActivationFunnelSchema,
    clients_growth: z.array(ClientsGrowthPointSchema),
    product_type_distribution: z.array(ProductTypeCountSchema),
    recent_signups: z.array(DashboardRecentSignupSchema),
});
export const DashboardStatsResponseSchema = z.object({
    message: z.string(),
    data: DashboardStatsSchema,
});
