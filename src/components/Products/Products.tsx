import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import ProductsNotFound from './ProductsNotFound';
import CustomModal from 'components/CustomModal';
import ProductModal from 'components/ProductModal';

import useFilter from '../../hooks/useFilter';
import { useAppDispatch } from '../../hooks/store';
import {
    getProductById,
    getProducts,
} from '../../redux/products/products-operation';
import { resetFilter } from '../../redux/filter/filter-slice';
import useProducts from '../../hooks/useProducts';

import scss from './Products.module.scss';

const Products = () => {
    const dispatch = useAppDispatch();
    const { keyword, category, page, limit } = useFilter();
    const { products, product, isLoading } = useProducts();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    useEffect(() => {
        dispatch(resetFilter());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProducts({ category, keyword, limit, page }));
    }, [category, keyword, limit, page, dispatch]);

    const handleOpenModal = (id: string) => {
        setModalIsOpen(true);
        dispatch(getProductById(id));
    };

    return (
        <section className={scss.productsSection}>
            {products.length ? (
                <ul className={scss.productsList}>
                    {products.map((product) => (
                        <ProductItem
                            key={product._id}
                            product={product}
                            openModal={handleOpenModal}
                        />
                    ))}
                </ul>
            ) : (
                <>{!isLoading && <ProductsNotFound />}</>
            )}

            <CustomModal
                modalIsOpen={modalIsOpen}
                closeModal={() => setModalIsOpen(false)}
                isLoading={isLoading}
            >
                <ProductModal product={product} />
            </CustomModal>
        </section>
    );
};

export default Products;
