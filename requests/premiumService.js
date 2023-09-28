import { basePremiumService } from "./baseService";

export const subscribe_to_premium = async (subscription_plan_id, data) => {
    const response = await basePremiumService.post(
        `/v1/Subscription/${subscription_plan_id}`,
        data
    );
    return response;
}

export const is_subscribed = async (subscription_plan_id) => {
    const response = await basePremiumService.get(
        `/v1/Subscription/${subscription_plan_id}`
    );
    return response;
}

export const subscribe_to_premium_with_email = async (subscription_plan_id, data) => {
    const response = await basePremiumService.post(
        `/v1/Subscription/${subscription_plan_id}/accessCode`,
        data
    );
    return response;
}

export const redeem_access_code = async (subscription_plan_id, access_code) => {
    const response = await basePremiumService.post(
        `v1/AccessCode/redeem/${subscription_plan_id}`,
        { accessCode: access_code }
    );
    return response;
}

export const regenerate_access_code = async (email) => {
    const response = await basePremiumService.post(
        `v1/AccessCode/regenerate`,
        { email: email }
    );
    return response;
}

export const query_guides = async () => {
    const response = await basePremiumService.get(
        `v1/Guide/`
    );
    return response;
}

export const query_guide = async (guide_id) => {
    const response = await basePremiumService.get(
        `v1/Guide/${guide_id}`
    );
    return response;
}