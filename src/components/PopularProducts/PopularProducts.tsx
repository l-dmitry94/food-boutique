import { useEffect, useState } from 'react';

import PopularProductsItem from './PopularProductsItem';
import CustomModal from 'components/CustomModal';
import ProductModal from 'components/ProductModal';

import useProducts from '../../hooks/useProducts';
import { useAppDispatch } from '../../hooks/store';
import { getPopularProducts } from '../../redux/products/products-operation';

import scss from './PopularProducts.module.scss';

const PopularProducts = () => {
    const { popularProducts } = useProducts();
    const dispatch = useAppDispatch();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [productId, setProductId] = useState<string>('');

    useEffect(() => {
        dispatch(getPopularProducts());
    }, [dispatch]);

    const handleOpenModal = (id: string) => {
        setModalIsOpen(true);
        setProductId(id);
    };

    return (
        <section className={scss.popularSection}>
            <h2 className={scss.popularTitle}>Popular products</h2>

            <ul className={scss.popularProductsList}>
                {popularProducts.map((product) => (
                    <PopularProductsItem
                        key={product._id}
                        product={product}
                        openModal={handleOpenModal}
                    />
                ))}
            </ul>

            <CustomModal
                modalIsOpen={modalIsOpen}
                closeModal={() => setModalIsOpen(false)}
            >
                <ProductModal id={productId} />
            </CustomModal>
        </section>
    );
};

export default PopularProducts;
