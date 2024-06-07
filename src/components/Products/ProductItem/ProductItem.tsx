import { FC } from 'react';

import normalizedCategory from 'helpers/normalizedCategory';
import { icons } from 'assets/icons';
import { useAppDispatch } from '../../../hooks/store';
import useProducts from '../../../hooks/useProducts';
import { IProduct } from '../../../redux/types/products.types';
import { addToCart } from '../../../redux/products/products-slice';

import scss from './ProductItem.module.scss';

interface IProductItem {
    product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
    const dispatch = useAppDispatch();

    const {
        _id,
        category,
        img,
        is10PercentOff,
        name,
        popularity,
        price,
        size,
    } = product;

    const { inCart } = useProducts();

    const isDuplicateProduct = inCart.some((product) => product._id === _id);

    const handleAddToCart = () => {
        if (!isDuplicateProduct) {
            dispatch(addToCart(product));
        }
    };

    return (
        <li className={scss.productItem}>
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
            </div>

            <div className={scss.control}>
                <p className={scss.productPrice}>{`$${price}`}</p>
                <button
                    onClick={handleAddToCart}
                    className={scss.productButton}
                >
                    {!isDuplicateProduct ? (
                        <svg className={scss.productCartIcon}>
                            <use href={`${icons}#icon-cart`}></use>
                        </svg>
                    ) : (
                        <svg className={scss.productCheckIcon}>
                            <use href={`${icons}#icon-check`}></use>
                        </svg>
                    )}
                </button>
            </div>

            {is10PercentOff && (
                <svg className={scss.productDiscount}>
                    <use href={`${icons}#icon-discount`}></use>
                </svg>
            )}
        </li>
    );
};

export default ProductItem;
