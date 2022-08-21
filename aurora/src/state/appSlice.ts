import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
    value: number;
    incrementAmount: number;
    isToastShown: boolean;
    currentPage: string;
}

const initialState: AppState = {
    value: 0,
    incrementAmount: 1,
    isToastShown: false,
    currentPage: '',
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
    },
});

export const {
    increment,
    decrement,
    changeIncrementAmount,
    changeToastValue,
    setCurrentPage,
} = appSlice.actions;

export default appSlice.reducer;
