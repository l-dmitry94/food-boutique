import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { icons } from 'assets/icons';

import { ILogo, LogoStyle } from './types';
import scss from './Logo.module.scss';

const Logo: FC<ILogo> = ({ style }) => {
    return (
        <Link to="/" className={scss.linkLogo}>
            <div
                className={clsx(
                    scss.wrapperLogoIcon,
                    style === LogoStyle.Header && scss.wrapperLogoIconHeader,
                    style === LogoStyle.Footer && scss.wrapperLogoIconFooter
                )}
            >
                <svg
                    className={clsx(
                        scss.logoIcon,
                        style === LogoStyle.Header && scss.logoIconHeader,
                        style === LogoStyle.Footer && scss.logoIconFooter
                    )}
                >
                    <use href={`${icons}#icon-logo`}></use>
                </svg>
            </div>
            <p
                className={clsx(
                    scss.logoText,
                    style === LogoStyle.Footer && scss.logoTextFooter
                )}
            >
                Food Boutique
            </p>
        </Link>
    );
};

export default Logo;
