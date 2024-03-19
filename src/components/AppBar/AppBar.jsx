import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
    return (
        <>
            <Header />

            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>

            <Footer />
        </>
    );
};

export default AppBar;
