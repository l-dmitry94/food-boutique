import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Loading } from 'notiflix';

import { IOrdersState } from '../types/subscription.types';
import { getOrders } from './orders-operation';

const initialState: IOrdersState = {
    message: '',
    isLoading: false,
    error: null,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
                Loading.pulse({
                    backgroundColor: 'rgba(1, 1, 1, 0.4)',
                    svgColor: '#fafafa',
                });
            })
            .addCase(
                getOrders.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.message = action.payload;
                    state.error = null;
                    Loading.remove();
                }
            )
            .addCase(
                getOrders.rejected,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                    Loading.remove();
                }
            ),
});

export default ordersSlice.reducer;
