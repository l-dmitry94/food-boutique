import { FC } from 'react';

import { icons } from 'assets/icons';
import { addToCart } from '../../../redux/products/products-slice';
import { useAppDispatch } from '../../../hooks/store';
import useProducts from '../../../hooks/useProducts';

import { IProductItem } from 'components/Products/ProductItem';
import scss from './DiscountProductsItem.module.scss';

const DiscountProductsItem: FC<IProductItem> = ({ product, openModal }) => {
    const dispatch = useAppDispatch();
    const { _id, img, name, price, is10PercentOff } = product;

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
        <li
            className={scss.discountProductsItem}
            onClick={() => openModal(_id)}
        >
            <div className={scss.imageWrapper}>
                <img
                    src={img}
                    alt={name}
                    className={scss.image}
                    loading="lazy"
                />
            </div>

            <div className={scss.control}>
                <h3 className={scss.productTitle}>{name}</h3>

                <div className={scss.controlWrapper}>
                    <p className={scss.productPrice}>{`$${price}`}</p>
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
                </div>
            </div>

            {is10PercentOff && (
                <svg className={scss.discountIcon}>
                    <use href={`${icons}#icon-discount`}></use>
                </svg>
            )}
        </li>
    );
};

export default DiscountProductsItem;
