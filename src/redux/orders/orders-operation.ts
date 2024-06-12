import { createAsyncThunk } from '@reduxjs/toolkit';
import { IOrder, fetchOrders } from 'api/orders-api';
import { IOrderResponse } from 'redux/types/subscription.types';

export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async (body: IOrder, { rejectWithValue }) => {
        try {
            const data: IOrderResponse = await fetchOrders(body);
            return data.message;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
