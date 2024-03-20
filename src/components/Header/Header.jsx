import Container from 'components/Container';
import scss from './Header.module.scss';
import Logo from 'components/Logo';
import Menu from './Menu';

const Header = () => {
    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <Logo className="headerLogo" />
                    <Menu />
                </div>
            </Container>
        </header>
    );
};

export default Header;
