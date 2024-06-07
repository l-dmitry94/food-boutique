import Filters from 'components/Filters';
import Hero from 'components/Hero';
import Products from 'components/Products';

import scss from './Home.module.scss';
import Container from 'components/Container';

const Home = () => {
    return (
        <>
            <Hero />
            <Filters />
            <section className={scss.productsSection}>
                <Container>
                    <div className={scss.productsWrapper}>
                        <Products />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
