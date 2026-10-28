import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // Remove /api if your endpoints don't use it (yours uses /employee, so no /api)
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor: Attach token to every outgoing request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401/403 globally (e.g., token expired)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            // Token expired or invalid
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login'; // Force redirect to login
        }
        return Promise.reject(error);
    }
);

export default api;