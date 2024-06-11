import { Fragment, useEffect, useState } from 'react';

import DiscountProductsItem from './DiscountProductsItem';
import CustomModal from 'components/CustomModal';
import ProductModal from 'components/ProductModal';

import { useAppDispatch } from '../../hooks/store';
import useProducts from '../../hooks/useProducts';
import {
    getDiscountProducts,
    getProductById,
} from '../../redux/products/products-operation';

import scss from './DiscountProducts.module.scss';

const DiscountProducts = () => {
    const { discountProducts, product, isLoading } = useProducts();
    const dispatch = useAppDispatch();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getDiscountProducts());
    }, [dispatch]);

    const handleOpenModal = (id: string) => {
        setModalIsOpen(true);
        dispatch(getProductById(id));
    };

    return (
        <section className={scss.discountSection}>
            <h2 className={scss.discountTitle}>Discount products</h2>

            <ul className={scss.discountProductsList}>
                {discountProducts.map((product, index) => (
                    <Fragment key={product._id}>
                        {index < 2 && (
                            <DiscountProductsItem
                                product={product}
                                openModal={handleOpenModal}
                            />
                        )}
                    </Fragment>
                ))}
            </ul>

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

export default DiscountProducts;
