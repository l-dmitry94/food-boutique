import { useEffect } from 'react';

import useFilter from '../../hooks/useFilter';
import { useAppDispatch } from '../../hooks/store';
import { getProducts } from '../../redux/products/products-operation';

import scss from './Products.module.scss';

const Products = () => {
    const { keyword, category, page, limit } = useFilter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts({ category, keyword, limit, page }));
    }, [category, keyword, limit, page, dispatch]);

    return <section className={scss.productsSection}></section>;
};

export default Products;
