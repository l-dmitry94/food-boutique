import { FC, useEffect } from 'react';

import { icons } from 'assets/icons';
import { addToCart } from '../../redux/products/products-slice';
import normalizedCategory from 'helpers/normalizedCategory';
import { useAppDispatch } from '../../hooks/store';
import { getProductById } from '../../redux/products/products-operation';
import useProducts from '../../hooks/useProducts';

import scss from './ProductModal.module.scss';

interface IProductModal {
    id: string;
}

const ProductModal: FC<IProductModal> = ({ id }) => {
    const dispatch = useAppDispatch();
    const { inCart, product, isLoading } = useProducts();

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    if (!product) {
        return null;
    }
    const { _id, category, img, name, popularity, price, size, desc } = product;

    const isDuplicateProduct = inCart.some((product) => product._id === _id);

    const handleAddToCart = () => {
        if (!isDuplicateProduct) {
            dispatch(addToCart(product));
        }
    };
    return (
        <>
            {!isLoading && (
                <div className={scss.modalWrapper}>
                    <div className={scss.imageWrapper}>
                        <img src={img} alt={name} className={scss.image} />
                    </div>

                    <div className={scss.info}>
                        <h3 className={scss.productTitle}>{name}</h3>
                        <ul className={scss.detailsList}>
                            <li className={scss.detailsItem}>
                                <p className={scss.detailsTitle}>Category:</p>
                                <p className={scss.detailsText}>
                                    {normalizedCategory(category)}
                                </p>
                            </li>
                            <li className={scss.detailsItem}>
                                <p className={scss.detailsTitle}>Size:</p>
                                <p className={scss.detailsText}>{size}</p>
                            </li>
                            <li className={scss.detailsItem}>
                                <p className={scss.detailsTitle}>Popularity:</p>
                                <p className={scss.detailsText}>{popularity}</p>
                            </li>
                        </ul>
                        <p className={scss.productDescription}>{desc}</p>
                    </div>

                    <div className={scss.control}>
                        <p className={scss.productPrice}>{`$${price}`}</p>
                        <button
                            onClick={handleAddToCart}
                            className={scss.productButton}
                        >
                            <p className={scss.productButtonText}>
                                {!isDuplicateProduct ? 'Add to' : 'Remove from'}
                            </p>
                            <svg className={scss.productCartIcon}>
                                <use href={`${icons}#icon-cart`}></use>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductModal;
