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

export const query_referral = async (guide_id, referral_code) => {
    const response = await basePremiumService.get(
        `v1/Guide/referral?code=${referral_code}&guide_id=${guide_id}`
    );
    return response;
}

export const query_packs = async () => {
    const response = await basePremiumService.get(
        `v1/Guide/packs`
    );
    return response;
}

export const query_pack = async (pack_name) => {
    const response = await basePremiumService.get(
        `v1/Guide/pack?pack_name=${pack_name}`
    );
    return response;
}

export const query_premium_guide = async (guide_id) => {
    const response = await basePremiumService.get(
        `v1/Guide/premium/${guide_id}`
    );
    return response;
}

export const create_couple = async (data) => {
    const response = await basePremiumService.post(
        `v1/CoupleGame`,
        data
    );
    return response;
}

export const get_couple = async (couple_name) => {
    const response = await basePremiumService.get(
        `v1/CoupleGame/?couple_name=${couple_name}`
    );
    return response;
}

export const done_task = async (data) => {
    const response = await basePremiumService.put(
        `v1/CoupleGame`,
        data
    );
    return response;
}

export const query_task = async (couple_name, task_type, task_index) => {
    const response = await basePremiumService.get(
        `v1/CoupleGame/task?coupleName=${couple_name}&taskType=${task_type}&taskIndex=${task_index}`
    );
    return response;
}
