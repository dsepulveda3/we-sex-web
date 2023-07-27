import axios from 'axios';
import firebase from '../config/firebase'
import { getAuth } from 'firebase/auth';

const AUTHORIZATION_HEADER = 'Authorization';

const auth = getAuth(firebase);

export const baseService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: process.env.NEXT_PUBLIC_TIMEOUT || 10000,
    headers: { 'content-type': 'application/json' },
});

const setAuthorizationInterceptors = axiosInstance => {
    axiosInstance.interceptors.request.use(async request => {
        const user = auth.currentUser;
        if (user) {
            try {
                const token = await user.getIdToken();
                request.headers.common[AUTHORIZATION_HEADER] = token;
            } catch (error) {
                console.error('Error getting Firebase ID token:', error);
            }
        }
        return request;
    });
};

setAuthorizationInterceptors(baseService);