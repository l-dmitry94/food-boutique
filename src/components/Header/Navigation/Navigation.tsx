import { FC } from 'react';
import { Link } from 'react-router-dom';

import { icons } from 'assets/icons';

import { INavigation } from './types';
import scss from './Navigation.module.scss';

const Navigation: FC<INavigation> = ({ menuListItems }) => {
    return (
        <nav>
            <ul className={scss.menuList}>
                {menuListItems.map(({ label, href }) => {
                    if (label === 'Cart') {
                        return (
                            <li key={label}>
                                <Link
                                    to="/cart"
                                    aria-label={label}
                                    className={scss.cartLink}
                                >
                                    <div className={scss.wrapperCartIcon}>
                                        <svg className={scss.cartIcon}>
                                            <use
                                                href={`${icons}#icon-cart`}
                                            ></use>
                                        </svg>
                                    </div>
                                    <p className={scss.cartText}>{label} (0)</p>
                                </Link>
                            </li>
                        );
                    }
                    return (
                        <li key={label}>
                            <Link
                                to={href}
                                aria-label={label}
                                className={scss.link}
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
