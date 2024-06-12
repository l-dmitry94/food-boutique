import { FC } from 'react';

import CustomSimpleBar from 'components/CustomSimpleBar';

import { icons } from 'assets/icons';
import { addToCart, deleteFromCart } from '../../redux/products/products-slice';
import { useAppDispatch } from '../../hooks/store';
import useProducts from '../../hooks/useProducts';
import normalizedCategory from 'helpers/normalizedCategory';

import { IProduct } from '../../redux/types/products.types';
import scss from './ProductModal.module.scss';

interface IProductModal {
    product: IProduct | null;
}

const ProductModal: FC<IProductModal> = ({ product }) => {
    const { inCart } = useProducts();
    const dispatch = useAppDispatch();

    if (!product) {
        return null;
    }

    const { _id, category, img, name, popularity, price, size, desc } = product;

    const isDuplicateProduct = inCart.some((product) => product._id === _id);

    const handleToggleCart = () => {
        if (!isDuplicateProduct) {
            dispatch(addToCart(product));
        } else dispatch(deleteFromCart(_id));
    };
    return (
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
                <CustomSimpleBar height={92}>
                    <p className={scss.productDescription}>{desc}</p>
                </CustomSimpleBar>
            </div>

            <div className={scss.control}>
                <p className={scss.productPrice}>{`$${price}`}</p>
                <button
                    onClick={handleToggleCart}
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
    );
};

export default ProductModal;
