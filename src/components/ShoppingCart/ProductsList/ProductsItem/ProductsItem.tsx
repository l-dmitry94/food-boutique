import { FC } from 'react';

import { IProduct } from '../../../../redux/types/products.types';

import scss from './ProductsItem.module.scss';
import normalizedCategory from 'helpers/normalizedCategory';
import { icons } from 'assets/icons';
import useProducts from 'hooks/useProducts';
import { useAppDispatch } from 'hooks/store';
import { deleteFromCart } from '../../../../redux/products/products-slice';

interface IProductsItem {
    product: IProduct;
}

const ProductsItem: FC<IProductsItem> = ({ product }) => {
    const { _id, name, img, category, size, price } = product;

    const { inCart } = useProducts();
    const dispatch = useAppDispatch();

    const isDuplicateProduct = inCart.some((product) => product._id === _id);

    const handleDeleteFromCart = () => {
        if (isDuplicateProduct) {
            dispatch(deleteFromCart(_id));
        }
    };

    return (
        <li className={scss.productItem}>
            <div className={scss.imageWrapper}>
                <img src={img} alt={name} className={scss.image} />
            </div>

            <div className={scss.info}>
                <h3 className={scss.productTitle}>{name}</h3>
                <ul className={scss.productDetails}>
                    <li className={scss.detailsItem}>
                        <p className={scss.detailTitle}>Category:</p>
                        <p className={scss.detailText}>
                            {normalizedCategory(category)}
                        </p>
                    </li>
                    <li className={scss.detailsItem}>
                        <p className={scss.detailTitle}>Size:</p>
                        <p className={scss.detailText}>{size}</p>
                    </li>
                </ul>
                <p className={scss.productPrice}>{`$${price}`}</p>
            </div>

            <button
                onClick={handleDeleteFromCart}
                className={scss.deleteButton}
            >
                <svg className={scss.deleteIcon}>
                    <use href={`${icons}#icon-close`}></use>
                </svg>
            </button>
        </li>
    );
};

export default ProductsItem;
