import axios from 'axios';
const AUTHORIZATION_HEADER = 'Authorization';

const clienteAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: process.env.NEXT_PUBLIC_TIMEOUT || 10000,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': process.env.NEXT_PUBLIC_USER_TOKEN,
        'Accept': 'application/json, text/plain, */*'
    },
});

export default clienteAxios;