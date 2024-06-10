import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ISubscriptionState } from '../../redux/types/subscription.types';
import { getSubscription } from './subscription-operation';

const initialState: ISubscriptionState = {
    message: '',
    isLoading: false,
    error: null,
};

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getSubscription.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getSubscription.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.message = action.payload;
                    state.error = null;
                }
            )
            .addCase(
                getSubscription.rejected,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            ),
});

export default subscriptionSlice.reducer;
