import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProducts } from '../../redux/types/products.types';
import { IFilter } from '../../redux/filter/filter-slice';
import { fetchProducts } from 'api/products-api';

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
