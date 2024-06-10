import { FC } from 'react';

import { IProductItem } from 'components/Products/ProductItem';

import { icons } from 'assets/icons';
import { addToCart } from '../../../redux/products/products-slice';
import { useAppDispatch } from '../../../hooks/store';
import useProducts from '../../../hooks/useProducts';
import normalizedCategory from 'helpers/normalizedCategory';

import scss from './PopularProductsItem.module.scss';

const PopularProductsItem: FC<IProductItem> = ({ product, openModal }) => {
    const dispatch = useAppDispatch();
    const { _id, category, img, name, popularity, size } = product;

    const { inCart } = useProducts();

    const isDuplicateProduct = inCart.some((product) => product._id === _id);

    const handleAddToCart = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        if (!isDuplicateProduct) {
            dispatch(addToCart(product));
        }
    };

    return (
        <li className={scss.popularProductsItem} onClick={() => openModal(_id)}>
            <div className={scss.imageWrapper}>
                <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className={scss.image}
                />
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

            <button
                type="button"
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
        </li>
    );
};

export default PopularProductsItem;
