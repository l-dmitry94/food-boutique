import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct, IProductsState } from '../../redux/types/products.types';
import {
    getPopularProducts,
    getProductById,
    getProducts,
} from './products-operation';

const initialState: IProductsState = {
    products: [],
    inCart: [],
    popularProducts: [],
    discountProducts: [],
    product: null,
    error: null,
    isLoading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            state.inCart = [...state.inCart, action.payload];
        },
        deleteFromCart: (state, action: PayloadAction<string>) => {
            state.inCart = state.inCart.filter(
                ({ _id }) => _id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getProducts.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.products = action.payload;
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addCase(
                getProducts.rejected,
                (state, action: PayloadAction<any>) => {
                    state.error = action.payload;
                    state.isLoading = false;
                }
            )
            .addCase(getProductById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getProductById.fulfilled,
                (state, action: PayloadAction<IProduct>) => {
                    state.product = action.payload;
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addCase(
                getProductById.rejected,
                (state, action: PayloadAction<any>) => {
                    console.log(action.payload);
                    state.error = action.payload;
                    state.isLoading = false;
                }
            )
            .addCase(getPopularProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getPopularProducts.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.popularProducts = action.payload;
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addCase(
                getPopularProducts.rejected,
                (state, action: PayloadAction<any>) => {
                    state.error = action.payload;
                    state.isLoading = false;
                }
            );
    },
});

export const { addToCart, deleteFromCart } = productsSlice.actions;

export default productsSlice.reducer;
