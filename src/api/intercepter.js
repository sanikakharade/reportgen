import axios from 'axios';
export const BASE_URL = 'https://reportgen.whatbytes.club';


const api = axios.create({
    baseURL: BASE_URL, // Set your base URL here
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5NTIxNDMxLCJpYXQiOjE3MzY4NDMwMzEsImp0aSI6IjFhZTczNzU2MWI3YzQyNzc5NzE3YWMxMjQwZmEwMjllIiwidXNlcl9pZCI6Nn0.d55p9YLEGuiSbkpdZN8aL1FuEibWyfh2hcJByWodwpA';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 404) {
            const errorMessage = error.response.data?.error;
            console.log(errorMessage)
            //   if (errorMessage === 'company not found') {
            //     alert('Company not found');
            //   }
        }
        if (error.response && error.response.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('authToken');
                window.location.href = "/signin";
            }
        }
        return Promise.reject(error);
    }
);

export default api;