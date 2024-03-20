import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters/filtersSlice';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
});
