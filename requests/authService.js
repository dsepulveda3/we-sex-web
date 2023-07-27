import { baseService } from "./baseService";

export const registerUser = async (data) => {
    const response = await baseService.post("/users", data);
    return response;
}

export const sendSocialAuthUser = async (data) => {
    const response = await baseService.post("/users/socialAuth", data);
    return response;
}

export const submitConfirmationCode = async (data) => {
    const response = await baseService.post("/users/validateEmailCode", data);
    return response;
}

export const sendConfirmationCode = async (data) => {
    const response = await baseService.post("/users/email");
    return response;
}

export const getUser = async (data) => {
    const response = await baseService.get("/users/");
    return response;
}

