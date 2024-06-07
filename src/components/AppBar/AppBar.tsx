import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const AppBar = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppBar;
