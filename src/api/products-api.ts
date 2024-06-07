import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const fetchCategories = async () => {
    const response = await instance.get<string[]>('/products/categories');
    return response.data;
};
