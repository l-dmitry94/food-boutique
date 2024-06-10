import scss from './FooterInfo.module.scss';

const FooterInfo = () => {
    return (
        <div className={scss.footerInfo}>
            <h2 className={scss.footerTitle}>
                Discover the Variety of Flavors and Quality
            </h2>
            <p className={scss.footerDescription}>
                An online store where you will find fresh, natural and delicious
                products for a healthy life and unforgettable gastronomic
                adventures.
            </p>
        </div>
    );
};

export default FooterInfo;
