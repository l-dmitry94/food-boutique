import { RootState } from '../store';

export const selectOrders = (state: RootState) => state.orders.message;
export const selectError = (state: RootState) => state.orders.error;
export const selectIsLoading = (state: RootState) => state.orders.isLoading;
