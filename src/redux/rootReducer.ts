import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filter/filter-slice';
import productsReducer from './products/products-slice';
import subscriptionReducer from './subscription/subscription-slice';
import ordersReducer from './orders/orders-slice';

const persistConfigFilter = {
    key: 'filter',
    storage,
};

const persistConfigInCart = {
    key: 'inCart',
    storage,
    whitelist: ['inCart'],
};

const persistedFilterReducer = persistReducer(
    persistConfigFilter,
    filterReducer
);
const persistedProductReducer = persistReducer(
    persistConfigInCart,
    productsReducer
);

const rootReducer = combineReducers({
    filter: persistedFilterReducer,
    products: persistedProductReducer,
    subscription: subscriptionReducer,
    orders: ordersReducer,
});

export default rootReducer;
