export interface ISubscriptionState {
    message: string;
    isLoading: boolean;
    error: string | null;
}

export interface IOrdersState {
    message: string;
    isLoading: boolean;
    error: string | null;
}

export interface ISubscriptionResponse {
    message: string;
}

export interface IOrderResponse {
    message: string;
}
