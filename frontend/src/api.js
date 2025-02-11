import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const login = (data) => API.get(`signIn`, data);

export const signup = (data) => API.post(`users/signUp`, data);
