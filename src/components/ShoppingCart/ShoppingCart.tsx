import Container from 'components/Container';

import ProductsCounter from './ProductsCounter';
import useProducts from 'hooks/useProducts';
import ProductsList from './ProductsList';
import EmptyCart from './EmptyCart';

import scss from './ShoppingCart.module.scss';

const ShoppingCart = () => {
    const { inCart } = useProducts();

    return (
        <section className={scss.cartSection}>
            <Container>
                <ProductsCounter counter={inCart.length} />

                {inCart.length ? (
                    <div className={scss.wrapper}>
                        <ProductsList products={inCart} />
                    </div>
                ) : (
                    <EmptyCart />
                )}
            </Container>
        </section>
    );
};

export default ShoppingCart;
