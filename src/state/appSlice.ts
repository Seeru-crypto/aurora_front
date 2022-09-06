import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
    value: number;
    incrementAmount: number;
    isToastShown: boolean;
    currentPage: string;
    numberOfProjects: number;
    auroraLastUpdated: string;
}

const initialState: AppState = {
    value: 0,
    incrementAmount: 1,
    isToastShown: false,
    currentPage: '',
    numberOfProjects: 0,
    auroraLastUpdated: '',
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += state.incrementAmount;
        },
        decrement: (state) => {
            state.value -= state.incrementAmount;
        },
        changeIncrementAmount: (state, action: PayloadAction<number>) => {
            state.incrementAmount = action.payload;
        },

        changeToastValue: (state) => {
            state.isToastShown = !state.isToastShown;
        },
        setCurrentPage: (state, action: PayloadAction<string>) => {
            state.currentPage = action.payload;
        },
        setNumberOfProjects: (state, action: PayloadAction<number>) => {
            state.numberOfProjects = action.payload;
        },
        setAuroraLastUpdated: (
            state,
            action: PayloadAction<string | undefined>
        ) => {
            if (action.payload) state.auroraLastUpdated = action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    changeIncrementAmount,
    changeToastValue,
    setCurrentPage,
    setNumberOfProjects,
    setAuroraLastUpdated,
} = appSlice.actions;

export default appSlice.reducer;
