import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Loading } from 'notiflix';

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
                Loading.pulse({
                    backgroundColor: 'rgba(1, 1, 1, 0.4)',
                    svgColor: '#fafafa',
                });
            })
            .addCase(
                getSubscription.fulfilled,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.message = action.payload;
                    state.error = null;
                    Loading.remove();
                }
            )
            .addCase(
                getSubscription.rejected,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                    Loading.remove();
                }
            ),
});

export default subscriptionSlice.reducer;
