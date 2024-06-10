import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct, IProducts } from '../../redux/types/products.types';
import { IFilter } from '../../redux/filter/filter-slice';
import {
    fetchDiscountProducts,
    fetchPopularProducts,
    fetchProductById,
    fetchProducts,
} from 'api/products-api';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (params: IFilter, { rejectWithValue }) => {
        try {
            const data: IProducts = await fetchProducts(params);
            return data.results;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id: string, { rejectWithValue }) => {
        try {
            const data: IProduct = await fetchProductById(id);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const getPopularProducts = createAsyncThunk(
    'products/getPopularProducts',
    async (_, { rejectWithValue }) => {
        try {
            const data: IProduct[] = await fetchPopularProducts();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const getDiscountProducts = createAsyncThunk(
    'products/getDiscountProducts',
    async (_, { rejectWithValue }) => {
        try {
            const data: IProduct[] = await fetchDiscountProducts();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
