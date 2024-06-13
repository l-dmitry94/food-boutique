import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import CustomModal from 'components/CustomModal';

import { IProduct } from '../../../redux/types/products.types';
import { getOrders } from '../../../redux/orders/orders-operation';
import { resetCart } from '../../../redux/products/products-slice';
import { useAppDispatch } from 'hooks/store';

import { IInputs } from 'components/Footer/FooterForm';
import scss from './ProductsOrder.module.scss';
import useOrders from 'hooks/useOrders';
import ProductsOrderModal from './ProductsOrderModal';

interface IProductsOrder {
    totalPrice: number;
    products: IProduct[];
}

const schema = yup.object({
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
});

const ProductsOrder: FC<IProductsOrder> = ({ totalPrice, products }) => {
    const dispatch = useAppDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { isLoading, error } = useOrders();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInputs>({
        resolver: yupResolver(schema),
    });

    const order = products.map(({ _id }) => ({
        productId: _id,
        amount: 1,
    }));

    const onSubmit: SubmitHandler<IInputs> = async ({ email }) => {
        dispatch(
            getOrders({
                email,
                products: order,
            })
        );
        setModalIsOpen(true);
    };

    const resetCartProducts = () => {
        dispatch(resetCart());
    };

    return (
        <div className={scss.productsOrder}>
            <h2 className={scss.orderTitle}>Your Order</h2>

            <div className={scss.orderInfo}>
                <p className={scss.orderText}>Total</p>
                <div className={scss.orderPrice}>
                    <span className={scss.orderPriceLabel}>Sum</span>
                    <p className={scss.price}>{`$${totalPrice}`}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={scss.orderForm}>
                <div className={scss.inputWrapper}>
                    <div className={scss.inputLabelWrapper}>
                        <input
                            type="text"
                            {...register('email')}
                            id="email"
                            placeholder="Enter your email"
                            className={scss.input}
                        />
                        <label htmlFor="email" className={scss.orderLabel}>
                            Mail:
                        </label>
                    </div>

                    <p className={scss.inputError}>{errors.email?.message}</p>
                </div>

                <button type="submit" className={scss.formButton}>
                    Checkout
                </button>
            </form>

            <CustomModal
                modalIsOpen={modalIsOpen}
                isLoading={isLoading}
                closeModal={() => setModalIsOpen(false)}
                onClickOrders={resetCartProducts}
            >
                <ProductsOrderModal error={error} image={products[0].img} />
            </CustomModal>
        </div>
    );
};

export default ProductsOrder;
