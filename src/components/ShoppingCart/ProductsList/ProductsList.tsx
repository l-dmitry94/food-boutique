import { FC } from 'react';

import ProductsItem from './ProductsItem';

import { IProduct } from 'redux/types/products.types';
import { resetCart } from '../../../redux/products/products-slice';
import { useAppDispatch } from 'hooks/store';
import { icons } from 'assets/icons';

import scss from './ProductsList.module.scss';
import CustomSimpleBar from 'components/CustomSimpleBar';

interface IProductsList {
    products: IProduct[];
}

const ProductsList: FC<IProductsList> = ({ products }) => {
    const dispatch = useAppDispatch();

    const deleteAllProducts = () => {
        dispatch(resetCart());
    };
    return (
        <div className={scss.productsWrapper}>
            <button onClick={deleteAllProducts} className={scss.deleteAll}>
                <p className={scss.deleteText}>Delete all</p>
                <svg className={scss.deleteIcon}>
                    <use href={`${icons}#icon-close`}></use>
                </svg>
            </button>

            <CustomSimpleBar height={452}>
                <ul className={scss.productsList}>
                    {products.map((product) => (
                        <ProductsItem key={product._id} product={product} />
                    ))}
                </ul>
            </CustomSimpleBar>
        </div>
    );
};

export default ProductsList;
