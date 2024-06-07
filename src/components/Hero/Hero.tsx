import Container from 'components/Container';
import Info from './Info';
import Image from './Image';

import scss from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={scss.heroSection}>
            <Container>
                <Info />
                <Image />
            </Container>
        </section>
    );
};

export default Hero;
