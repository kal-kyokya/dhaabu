// src/pages/Login.jsx

// src/pages/Signup.jsx

// src/pages/Dashboard.jsx
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const login = (data) => API.post('/login', data);
export const signup = (data) => API.post('/users/signUp', data);

