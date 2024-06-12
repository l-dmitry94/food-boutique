import Container from 'components/Container';

import ProductsCounter from './ProductsCounter';
import useProducts from 'hooks/useProducts';
import ProductsList from './ProductsList';
import EmptyCart from './EmptyCart';
import ProductsOrder from './ProductsOrder';

import scss from './ShoppingCart.module.scss';

const ShoppingCart = () => {
    const { inCart } = useProducts();

    const totalPrice = Number(
        inCart
            .reduce((previousValue, { price }) => {
                return previousValue + price;
            }, 0)
            .toFixed(2)
    );

    return (
        <section className={scss.cartSection}>
            <Container>
                <ProductsCounter counter={inCart.length} />

                {inCart.length ? (
                    <div className={scss.wrapper}>
                        <ProductsList products={inCart} />
                        <ProductsOrder
                            totalPrice={totalPrice}
                            products={inCart}
                        />
                    </div>
                ) : (
                    <EmptyCart />
                )}
            </Container>
        </section>
    );
};

export default ShoppingCart;
