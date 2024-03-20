import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addKeywordFilter(state, action) {
            state.keyword = action.payload;
        },
        addCategoryFilter(state, action) {
            state.category = action.payload;
        },
    },
});

export const { addKeywordFilter, addCategoryFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
