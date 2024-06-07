import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilter {
    keyword?: string | null;
    category?: string | null;
    page: number;
    limit: number;
}

const initialState: IFilter = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterByKeyword: (state, action: PayloadAction<string>) => {
            state.keyword = action.payload;
        },

        filterByCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },

        resetFilter: (state) => {
            state.keyword = null;
            state.category = null;
        },
    },
});

export const { filterByKeyword, filterByCategory, resetFilter } =
    filterSlice.actions;

export default filterSlice.reducer;
