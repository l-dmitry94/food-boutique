import { useSelector } from 'react-redux';
import {
    selectAddToCart,
    selectProductById,
    selectProducts,
    selectisLoading,
} from '../redux/products/products-selectors';

const useProducts = () => {
    const products = useSelector(selectProducts);
    const inCart = useSelector(selectAddToCart);
    const product = useSelector(selectProductById);
    const isLoading = useSelector(selectisLoading);

    return { products, inCart, product, isLoading };
};

export default useProducts;
