import { RootState } from '../../redux/store';

export const selectSubscription = (state: RootState) =>
    state.subscription.message;
export const selectError = (state: RootState) => state.subscription.error;

export const selectIsLoading = (state: RootState) =>
    state.subscription.isLoading;
