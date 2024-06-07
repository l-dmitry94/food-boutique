import { Route, Routes } from 'react-router-dom';

import AppBar from './AppBar';
import HomePage from 'pages/HomePage';
import ShoppingCartPage from 'pages/ShoppingCartPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<HomePage />} />
                <Route path="cart" element={<ShoppingCartPage />} />
            </Route>
        </Routes>
    );
};

export default App;
