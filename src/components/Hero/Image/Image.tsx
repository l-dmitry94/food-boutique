import { icons } from 'assets/icons';
import {
    hero_desk_1x,
    hero_desk_2x,
    hero_mob_1x,
    hero_mob_2x,
    hero_tab_1x,
    hero_tab_2x,
} from 'assets/images/hero';

import scss from './Image.module.scss';

const Image = () => {
    return (
        <div className={scss.wrapperHeroImage}>
            <picture>
                <source
                    media="(min-width: 1440px)"
                    srcSet={`${hero_desk_1x} 1x, ${hero_desk_2x} 2x`}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={`${hero_tab_1x} 1x, ${hero_tab_2x} 2x`}
                />
                <source
                    media="(min-width: 320px)"
                    srcSet={`${hero_mob_1x} 1x, ${hero_mob_2x} 2x`}
                />
                <img
                    src={hero_mob_1x}
                    alt="Welcome to the Food Boutique!"
                    className={scss.heroImage}
                />
            </picture>

            <svg className={scss.organicIcon}>
                <use href={`${icons}#icon-organic`}></use>
            </svg>
        </div>
    );
};

export default Image;
