import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filter/filter-slice';

const persistConfig = {
    key: 'filter',
    storage,
};

const persistedReducer = persistReducer(persistConfig, filterReducer);

const rootReducer = combineReducers({
    filter: persistedReducer,
});

export default rootReducer;