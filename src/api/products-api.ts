import axios from 'axios';
import { IFilter } from 'redux/filter/filter-slice';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const fetchCategories = async () => {
    const response = await instance.get<string[]>('/products/categories');
    return response.data;
};

export const fetchProducts = async (params: IFilter) => {
    const response = await instance.get('/products', { params });
    return response.data;
};
