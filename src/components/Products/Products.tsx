import { useEffect } from 'react';

import ProductItem from './ProductItem';

import useFilter from '../../hooks/useFilter';
import { useAppDispatch } from '../../hooks/store';
import { getProducts } from '../../redux/products/products-operation';
import { resetFilter } from '../../redux/filter/filter-slice';
import useProducts from '../../hooks/useProducts';

import scss from './Products.module.scss';

const Products = () => {
    const { keyword, category, page, limit } = useFilter();
    const dispatch = useAppDispatch();
    const { products } = useProducts();

    console.log(products);

    useEffect(() => {
        dispatch(resetFilter());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProducts({ category, keyword, limit, page }));
    }, [category, keyword, limit, page, dispatch]);

    return (
        <section className={scss.productsSection}>
            <ul className={scss.productsList}>
                {products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </ul>
        </section>
    );
};

export default Products;
