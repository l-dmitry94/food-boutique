import { useSelector } from 'react-redux';

import {
    selectAddToCart,
    selectDiscountProducts,
    selectPopularProducts,
    selectProductById,
    selectProducts,
    selectisLoading,
} from '../redux/products/products-selectors';

const useProducts = () => {
    const products = useSelector(selectProducts);
    const inCart = useSelector(selectAddToCart);
    const product = useSelector(selectProductById);
    const isLoading = useSelector(selectisLoading);
    const popularProducts = useSelector(selectPopularProducts);
    const discountProducts = useSelector(selectDiscountProducts);

    return {
        products,
        inCart,
        product,
        isLoading,
        popularProducts,
        discountProducts,
    };
};

export default useProducts;
