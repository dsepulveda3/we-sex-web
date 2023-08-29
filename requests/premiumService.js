import { basePremiumService } from "./baseService";

export const subscribe_to_premium = async (subscription_plan_id, data) => {
    const response = await basePremiumService.post(`/v1/Subscription/${subscription_plan_id}`, data);
    return response;
}

export const is_subscribed= async (subscription_plan_id) => {
    const response = await basePremiumService.get(`/v1/Subscription/${subscription_plan_id}`);
    return response;
}