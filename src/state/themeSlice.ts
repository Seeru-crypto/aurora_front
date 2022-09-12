import { createSlice } from '@reduxjs/toolkit';

export enum ActiveTheme {
  DAY = 'light',
  NIGHT = 'dark',
}

export interface ThemeState {
  activeTheme: ActiveTheme;
}

const initialState: ThemeState = {
  activeTheme: ActiveTheme.DAY,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.activeTheme = state.activeTheme === ActiveTheme.DAY ? ActiveTheme.NIGHT : ActiveTheme.DAY;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
