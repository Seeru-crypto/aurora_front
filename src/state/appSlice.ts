import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  currentSection: string;
  value: number;
  incrementAmount: number;
  isToastShown: boolean;
  currentPage: string;
  numberOfProjects: number;
  auroraLastUpdated: string;
  isInitialHeroCounterAnimation: boolean;
}

const initialState: AppState = {
  currentSection: '',
  value: 0,
  incrementAmount: 1,
  isToastShown: false,
  currentPage: '',
  numberOfProjects: 0,
  auroraLastUpdated: '',
  isInitialHeroCounterAnimation: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleToastVisibility: (state) => {
      state.isToastShown = !state.isToastShown;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
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
      console.log('new current is ', action.payload);
      state.currentPage = action.payload;
    },
    setNumberOfProjects: (state, action: PayloadAction<number>) => {
      state.numberOfProjects = action.payload;
    },
    setAuroraLastUpdated: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) state.auroraLastUpdated = action.payload;
    },
    setIsInitialHeroCounterAnimation: (state) => {
      state.isInitialHeroCounterAnimation = false;
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
  setActiveSection,
  setIsInitialHeroCounterAnimation,
} = appSlice.actions;

export default appSlice.reducer;
