import { Link } from 'react-router-dom';
import scss from './Menu.module.scss';
import { icons } from 'assets/icons';
import { useMedia } from 'hooks/useMedia';

const Menu = () => {
    const { isMobile } = useMedia();
    return (
        <nav>
            <ul className={scss.list}>
                <li>
                    <Link to="/" className={scss.link}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className={scss.linkCart}>
                        <div className={scss.iconWrapper}>
                            <svg className={scss.icon}>
                                <use href={`${icons}#icon-cart`}></use>
                            </svg>
                        </div>
                        {!isMobile && (
                            <span className={scss.counter}>Cart (0)</span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
