import Container from 'components/Container';
import scss from './Header.module.scss';
import Logo from 'components/Logo';

const Header = () => {
    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <Logo />
                </div>
            </Container>
        </header>
    );
};

export default Header;
