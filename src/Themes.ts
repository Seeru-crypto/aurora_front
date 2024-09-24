import { DefaultTheme } from 'styled-components';

const red = {
  $300: '#FCA5A5',
  $400: '#F87171',
  $500: '#EF4444',
  $600: '#DC2626',
  $700: '#B91C1C',
};

const lime = {
  $300: '#bef264',
  $400: '#a3e635',
  $500: '#84cc16',
  $600: '#65a30d',
}

const emerald = {
  $300: '#6ee7b7',
  $400: '#34d399',
  $500: '#10b981',
  $600: '#059669',
  $700: '#047857',
}

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

const violet = {
  $100: '#ede9fe',
  $200: '#ddd6fe',
  $300: '#c4b5fd',
  $400: '#a78bfa',
  $500: '#7f5af0',
  $600: '#7c3aed',
  $700: '#6d28d9',
  $800: '#5b21b6',
  $900: '#4c1d95',
};

const primaryColor = {
  $100: '#E0E7FF',
  $200: '#C7D2FE',
  $300: '#A5B4FC',
  $400: '#818CF8',
  $500: '#6366F1',
  $600: '#6246ea',
  $700: '#4338CA',
  $800: '#3730A3',
  $900: '#312E81',
};

const gray = {
  $0: '#EEEEEE',
  $50: '#fffffe',
  $100: '#f1f5f9',
  $200: '#e2e8f0',
  $300: '#cbd5e1',
  $400: '#94a3b8',
  $500: '#64748b',
  $600: '#475569',
  $700: '#334155',
  $800: '#1e293b',
  $900: '#0f172a',
  $950: '#16161a'
};

export const baseTheme = {
  blurAmount: size.$100,
  borderRadius: size.$100,
  positive: emerald.$500,
  negative: red.$500,
  transition: '350ms linear',
  primaryFont: "'Montserrat', sans-serif",
  secondaryFont: "'IBM Plex Mono', monospace",
  red,
  gray,
  primaryColor,
  size,
  lime,
  emerald,
  violet
};

export const DayTheme = {
  ...baseTheme,
  // background: gray.$200,
  background: gray.$0,
  primary: primaryColor.$600,
  secondary: primaryColor.$100,
  textColor: gray.$800,
  showCaseBoxShadowColor:primaryColor.$200,
  detailTextColor: gray.$500,
  buttonTextColor: gray.$100,
  buttonHoverTextColor: gray.$900,
  buttonHoverBkgColor: primaryColor.$400,
  clipboardBkgColor: primaryColor.$600,
  clipboardColor: violet.$600,
  clipboardHoverBkgColor: primaryColor.$400,
  frontend: red.$300,
  backend: emerald.$300,
  database: lime.$400,
  other: primaryColor.$300,
  headerBkgColor: primaryColor.$200
};

export const NightTheme = {
  ...baseTheme,
  background: gray.$950,
  primary: violet.$500,
  secondary: gray.$600,
  textColor: gray.$300,
  showCaseBoxShadowColor: primaryColor.$700,
  buttonHoverTextColor: gray.$900,
  buttonHoverBkgColor: violet.$300,
  clipboardBkgColor: primaryColor.$600,
  clipboardColor: violet.$600,
  clipboardHoverBkgColor: primaryColor.$400,
  frontend: red.$700,
  backend: emerald.$700,
  database: lime.$600,
  other: primaryColor.$800,
  headerBkgColor: primaryColor.$900
}
export type FredTheme = typeof baseTheme & (typeof DayTheme | typeof NightTheme) & DefaultTheme;
