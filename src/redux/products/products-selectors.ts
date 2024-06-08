import { RootState } from '../../redux/store';

export const selectProducts = (state: RootState) => state.products.products;
export const selectAddToCart = (state: RootState) => state.products.inCart;
export const selectProductById = (state: RootState) => state.products.product;
export const selectisLoading = (state: RootState) => state.products.isLoading;
