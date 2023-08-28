import { basePremiumService } from "./baseService";

export const subscribe_to_premium = async (subscription_plan_id, data) => {
    const response = await basePremiumService.post(`/v1/Subscription/${subscription_plan_id}`, data);
    return response;
}