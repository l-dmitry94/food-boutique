import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../../redux/types/products.types';
import { getProducts } from './products-operation';

const initialState: IProductsState = {
    products: [],
    error: null,
    isLoading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
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
                    console.log(action.payload);
                    state.error = action.payload;
                    state.isLoading = false;
                }
            );
    },
});

export default productsSlice.reducer;
