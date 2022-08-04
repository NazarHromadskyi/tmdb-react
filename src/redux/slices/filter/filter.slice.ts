import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SortParams, SortOrder } from '../../../enums';
import { RootState } from '../../store';

export type TSortType = { title: string, param: `${SortParams}.${SortOrder}` };

interface IFilterSliceState {
    genreIDs: number[];
    searchValue: string;
    sortType: TSortType;
}

const initialState: IFilterSliceState = {
    genreIDs: [],
    searchValue: '',
    sortType: { title: 'Popularity ↓', param: `${SortParams.POPULARITY}.${SortOrder.DESC}` },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },

        setSortType: (state, action: PayloadAction<TSortType>) => {
            state.sortType = action.payload;
        },

        setGenreIDs: (state, action: PayloadAction<number[]>) => {
            state.genreIDs = action.payload;
        },

        resetGenreIDs: (state) => {
            state.genreIDs = [];
        },
    },
});

export const {
    resetGenreIDs,
    setGenreIDs,
    setSearchValue,
    setSortType,
} = filterSlice.actions;

export const filterSelector = (state: RootState) => state.filterReducer;

export default filterSlice.reducer;
