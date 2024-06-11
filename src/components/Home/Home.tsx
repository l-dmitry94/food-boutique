import Hero from 'components/Hero';
import Filters from 'components/Filters';
import Container from 'components/Container';
import Products from 'components/Products';
import PopularProducts from 'components/PopularProducts';
import DiscountProducts from 'components/DiscountProducts';

import scss from './Home.module.scss';

const Home = () => {
    return (
        <>
            <Hero />
            <Filters />
            <section className={scss.productsSection}>
                <Container>
                    <div className={scss.productsWrapper}>
                        <Products />

                        <div className={scss.popularDiscountWrapper}>
                            <PopularProducts />
                            <DiscountProducts />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
