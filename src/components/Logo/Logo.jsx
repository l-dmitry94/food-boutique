import { Link } from 'react-router-dom';
import scss from './Logo.module.scss';
import { icons } from 'assets/icons';

const Logo = () => {
    return (
        <Link to="/" className={scss.link}>
            <div className={scss.iconWrapper}>
                <svg className={scss.icon}>
                    <use href={`${icons}#icon-logo`}></use>
                </svg>
            </div>
            Food Boutique
        </Link>
    );
};

export default Logo;
