import { useSelector } from 'react-redux';
import {
    selectAddToCart,
    selectProducts,
} from '../redux/products/products-selectors';

const useProducts = () => {
    const products = useSelector(selectProducts);
    const inCart = useSelector(selectAddToCart);
    return { products, inCart };
};

export default useProducts;
