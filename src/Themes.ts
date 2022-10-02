import { DefaultTheme } from 'styled-components';

const red = {
  $300: '#FCA5A5',
  $400: '#F87171',
  $500: '#EF4444',
  $600: '#DC2626',
  $700: '#B91C1C',
};

const size = {
  $100: '8px',
  $200: '12px',
  $300: '16px',
  $400: '24px',
  $500: '32px',
  $600: '48px',
  $700: '64px',
  $800: '96px',
  $900: '128px',
};

const primaryColor = {
  $100: '#E0E7FF',
  $200: '#C7D2FE',
  $300: '#A5B4FC',
  $400: '#818CF8',
  $500: '#6366F1',
  $600: '#4F46E5',
  $700: '#4338CA',
  $800: '#3730A3',
  $900: '#312E81',
};

const gray = {
  $100: '#f1f5f9',
  $200: '#e2e8f0',
  $300: '#cbd5e1',
  $400: '#94a3b8',
  $500: '#64748b',
  $600: '#475569',
  $700: '#334155',
  $800: '#1e293b',
  $900: '#0f172a',
};

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
  frontend: '#c0392b',
  backend: '#27ae60',
  database: '#2980b9',
  other: '#8e44ad',
  red,
  gray,
  primaryColor,
  size,
};

export const DayTheme = {
  ...baseTheme,
  background: '#fffffe',
  primary: '#6246ea',
  red200: 'sdsds',
  secondary: '#d1d1e9',
  textColor: '#2b2c34',
};

export const NightTheme = {
  ...baseTheme,
  background: '#16161a',
  primary: '#7f5af0',
  secondary: '#72757e',
  textColor: '#94a1b2',
};

export type FredTheme = typeof baseTheme & (typeof DayTheme | typeof NightTheme) & DefaultTheme;
