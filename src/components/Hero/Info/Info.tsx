import scss from './Info.module.scss';

const Info = () => {
    return (
        <div className={scss.heroInfo}>
            <h1 className={scss.heroTitle}>
                Welcome to the <span className={scss.heroTitleColor}>Food</span>{' '}
                Boutique!
            </h1>
            <p className={scss.heroDescription}>
                With Food Boutique, you're not just subscribing to food, you're
                signing up for a fresher, fitter, and happier you.
            </p>
        </div>
    );
};

export default Info;
