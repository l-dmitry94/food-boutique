import scss from './HeroHead.module.scss';

const HeroHead = () => {
    return (
        <div className={scss.head}>
            <h1 className={scss.title}>
                Welcome to the <span className={scss.titleColor}>Food</span>{' '}
                Boutique!
            </h1>
            <p className={scss.text}>
                With Food Boutique, you're not just subscribing to food, you're
                signing up for a fresher, fitter, and happier you.
            </p>
        </div>
    );
};

export default HeroHead;
