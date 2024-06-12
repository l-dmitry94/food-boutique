import {
    empty_mob_1x,
    empty_mob_2x,
    empty_tab_1x,
    empty_tab_2x,
} from 'assets/images/cart';

import scss from './EmptyCart.module.scss';

const EmptyCart = () => {
    return (
        <div className={scss.empty}>
            <picture>
                <source
                    media="(min-width: 768px)"
                    srcSet={`${empty_tab_1x} 1x, ${empty_tab_2x} 2x`}
                />
                <img
                    src={empty_mob_1x}
                    srcSet={`${empty_mob_1x} 1x, ${empty_mob_2x} 2x`}
                    alt="Empty basket"
                    className={scss.emptyImage}
                />
            </picture>

            <div className={scss.emptyInfo}>
                <h2 className={scss.emptyTitle}>
                    Your basket is{' '}
                    <span className={scss.emptyTitleColor}>empty...</span>
                </h2>
                <p className={scss.emptyDescription}>
                    Go to the main page to select your favorite products and add
                    them to the cart.
                </p>
            </div>
        </div>
    );
};

export default EmptyCart;
