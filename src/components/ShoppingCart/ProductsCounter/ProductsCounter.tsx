import { FC } from 'react';

import scss from './ProductsCounter.module.scss';
import { icons } from 'assets/icons';

interface IProductsCounter {
    counter: number;
}

const ProductsCounter: FC<IProductsCounter> = ({ counter }) => {
    return (
        <div className={scss.productsCounter}>
            <div className={scss.cartIconWrapper}>
                <svg className={scss.cartIcon}>
                    <use href={`${icons}#icon-cart`}></use>
                </svg>
            </div>
            <p className={scss.cartCounter}>Cart ({counter})</p>
        </div>
    );
};

export default ProductsCounter;
