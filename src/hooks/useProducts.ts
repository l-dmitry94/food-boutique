import { useSelector } from 'react-redux';
import {
    selectAddToCart,
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

    return { products, inCart, product, isLoading, popularProducts };
};

export default useProducts;
