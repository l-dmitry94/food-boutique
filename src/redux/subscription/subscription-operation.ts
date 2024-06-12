import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubscription } from 'api/subscription-api';
import { IInputs } from 'components/Footer/FooterForm/FooterForm';
import { ISubscriptionResponse } from 'redux/types/subscription.types';

export const getSubscription = createAsyncThunk(
    'subscription/getSubscription',
    async (body: IInputs, { rejectWithValue }) => {
        try {
            const data: ISubscriptionResponse = await fetchSubscription(body);
            return data.message;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
