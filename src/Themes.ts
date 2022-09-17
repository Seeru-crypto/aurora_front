import { DefaultTheme } from 'styled-components';

export const baseTheme = {
  blurAmount: '8px',
  borderRadius: '8px',
  positive: '#2cb67d',
  negative: '#e45858',
  transition: '350ms linear',
  primaryFont: "'Montserrat', sans-serif",
  secondaryFont: "'IBM Plex Mono', monospace",
  black: '#000',
  white: '#fff',
};

export const DayTheme = {
  ...baseTheme,
  background: '#fffffe',
  primary: '#6246ea',
  secondary: '#d1d1e9',
  text: '#2b2c34',
};

export const NightTheme = {
  ...baseTheme,
  background: '#16161a',
  primary: '#7f5af0',
  secondary: '#72757e',
  text: '#94a1b2',
};

export type FredTheme = typeof baseTheme & (typeof DayTheme | typeof NightTheme) & DefaultTheme;
