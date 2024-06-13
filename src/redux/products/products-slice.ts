import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loading } from 'notiflix';

import { IProduct, IProductsState } from '../../redux/types/products.types';
import {
    getDiscountProducts,
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

        resetCart: (state) => {
            state.inCart = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                Loading.pulse({
                    backgroundColor: 'rgba(1, 1, 1, 0.4)',
                    svgColor: '#fafafa',
                });
            })
            .addCase(
                getProducts.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.products = action.payload;
                    state.isLoading = false;
                    state.error = null;
                    Loading.remove();
                }
            )
            .addCase(
                getProducts.rejected,
                (state, action: PayloadAction<any>) => {
                    state.error = action.payload;
                    state.isLoading = false;
                    Loading.remove();
                }
            )
            .addCase(getProductById.pending, (state) => {
                state.isLoading = true;
                Loading.pulse({
                    backgroundColor: 'rgba(1, 1, 1, 0.4)',
                    svgColor: '#fafafa',
                });
            })
            .addCase(
                getProductById.fulfilled,
                (state, action: PayloadAction<IProduct>) => {
                    state.product = action.payload;
                    state.isLoading = false;
                    state.error = null;
                    Loading.remove();
                }
            )
            .addCase(
                getProductById.rejected,
                (state, action: PayloadAction<any>) => {
                    console.log(action.payload);
                    state.error = action.payload;
                    state.isLoading = false;
                    Loading.remove();
                }
            )
            .addCase(getPopularProducts.pending, (state) => {
                state.isLoading = true;
                Loading.pulse({
                    backgroundColor: 'rgba(1, 1, 1, 0.4)',
                    svgColor: '#fafafa',
                });
            })
            .addCase(
                getPopularProducts.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.popularProducts = action.payload;
                    state.isLoading = false;
                    state.error = null;
                    Loading.remove();
                }
            )
            .addCase(
                getPopularProducts.rejected,
                (state, action: PayloadAction<any>) => {
                    state.error = action.payload;
                    state.isLoading = false;
                    Loading.remove();
                }
            )
            .addCase(getDiscountProducts.pending, (state) => {
                state.isLoading = true;
                Loading.pulse({
                    backgroundColor: 'rgba(1, 1, 1, 0.4)',
                    svgColor: '#fafafa',
                });
            })
            .addCase(
                getDiscountProducts.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.discountProducts = action.payload;
                    state.isLoading = false;
                    state.error = null;
                    Loading.remove();
                }
            )
            .addCase(
                getDiscountProducts.rejected,
                (state, action: PayloadAction<any>) => {
                    state.error = action.payload;
                    state.isLoading = false;
                    Loading.remove();
                }
            );
    },
});

export const { addToCart, deleteFromCart, resetCart } = productsSlice.actions;

export default productsSlice.reducer;
