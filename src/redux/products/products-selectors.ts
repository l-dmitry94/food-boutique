import { RootState } from '../../redux/store';

export const selectProducts = (state: RootState) => state.products.products;
export const selectAddToCart = (state: RootState) => state.products.inCart;
