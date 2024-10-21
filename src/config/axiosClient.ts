import axios from 'axios';
import type { Env } from '~/types/env';

const env = import.meta.env;

if (!('VITE_APIURL' in env) || !('VITE_APIKEY' in env)) {
    throw new Error('environment variables are not defined');
}

const { VITE_APIURL: apiUrl, VITE_APIKEY: apiKey } = env as unknown as Env;

export const apiCall = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiKey}`
    },
    params: {
        language: 'es-AR'
    }
})