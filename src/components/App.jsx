import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import HomePage from 'pages/HomePage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<HomePage />} />
                <Route path='cart' element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
