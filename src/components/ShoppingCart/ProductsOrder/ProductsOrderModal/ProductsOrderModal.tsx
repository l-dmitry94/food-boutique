import { FC } from 'react';

import scss from './ProductsOrderModal.module.scss';

interface IProductsOrderModal {
    error: string | null;
    image: string;
}

const ProductsOrderModal: FC<IProductsOrderModal> = ({ error, image }) => {
    return (
        <div className={scss.modal}>
            <img src={image} alt="product" className={scss.image} />

            <div className={scss.info}>
                <h2 className={scss.title}>
                    {!error ? 'Order success' : 'Something went wrong'}
                </h2>
                <p className={scss.description}>
                    {!error
                        ? `Thank you for shopping at Food Boutique. Your order has been
                    received and is now being freshly prepared just for you! Get
                    ready to indulge in nourishing goodness, delivered right to
                    your doorstep. We're thrilled to be part of your journey to
                    better health and happiness.`
                        : `Oops! It looks like something went wrong with your order`}
                </p>
            </div>
        </div>
    );
};

export default ProductsOrderModal;
