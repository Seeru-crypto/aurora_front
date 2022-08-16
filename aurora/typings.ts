export enum ActiveTheme {
  LIGHT = "light",
  DARK = "dark",
}

interface BaseTheme {
  borderRadius: string;
  transition: string;
}

export interface Theme extends BaseTheme {
  colors: {
    background: string;
    headline: string;
    paragraph: string;
    button: string;
    buttonText: string;
    stroke: string;
    highlight: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
  borderRadius: string;
}
