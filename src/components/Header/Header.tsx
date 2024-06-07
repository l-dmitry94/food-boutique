import Container from 'components/Container';

import Logo, { LogoStyle } from 'components/Logo';
import scss from './Header.module.scss';
import Navigation from './Navigation';

const Header = () => {
    const menuListItems = [
        { label: 'Home', href: '/' },
        { label: 'Cart', href: '/cart' },
    ];
    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <Logo style={LogoStyle.Header} />
                    <Navigation menuListItems={menuListItems} />
                </div>
            </Container>
        </header>
    );
};

export default Header;
