// src/pages/Login.jsx

// src/pages/Signup.jsx

// src/pages/Dashboard.jsx
import axios from 'axios';

/**
 * const API = axios.create({
 * baseURL: import.meta.env.VITE_API_URL,
 * });
 */

const baseURL = import.meta.env.VITE_API_URL;

export const login = ({email, password}) => {
  // const token = btoa(`${email}:${password}`);
  // const auth = `Basic ${token}`;
  /**
   * const headers = new Headers();  Is incorrect
   * headers.append("Authorization", auth);  axios expects headers to be passed as
   * plain Javascript object as follows
   *
   * const headers = { Authorization: auth};
   * return API.get('/signIn', { headers });
   *
   * or use global axios config defaults as follows
   */
  // API.defaults.headers.common['Authorization'] = auth;

    return axios.get(`${baseURL}/signIn`, { email, password });
};

export const signup = (data) => axios.post(`${baseURL}/users/signUp`, data);
