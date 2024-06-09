import axios from 'axios';

import { IFilter } from '../redux/filter/filter-slice';
import { IProduct } from '../redux/types/products.types';

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

export const fetchProductById = async (id: string) => {
    const response = await instance.get(`/products/${id}`);
    return response.data;
};

export const fetchPopularProducts = async () => {
    const response = await instance.get<IProduct[]>('/products/popular');
    return response.data;
};
