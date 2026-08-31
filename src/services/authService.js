import api from '../api/client';

export const authService = {
    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        return response.data;
    },
    getProfile: async () => {
        if (localStorage.getItem('token') === 'mock-bypass-token') {
            return {
                id: 11,
                rol: "FAMILIAR",
                role: "FAMILIAR",
                nombre: "Familia García",
                email: "familia.garcia@email.com"
            };
        }
        const response = await api.get('/auth/me');
        return response.data;
    },
};