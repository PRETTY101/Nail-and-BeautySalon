import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

export const authService = {
    login: async (username, password) => {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data; // { token, role, userId }
    },

    registerCustomer: async (customerData) => {
        const response = await axios.post(`${API_URL}/register-customer`, customerData);
        return response.data;
    }
};