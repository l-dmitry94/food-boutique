import HeroHead from './HeroHead';
import HeroImage from './HeroImage';
import scss from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={scss.section}>
            <HeroHead />
            <HeroImage />
        </section>
    );
};

export default Hero;
