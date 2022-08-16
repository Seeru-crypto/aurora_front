import { Theme } from "../../typings";
import { BaseTheme } from "./BaseTheme";

export const LightTheme: Theme = {
  colors: {
    background: "#fffffe",
    headline: "#2b2c34",
    paragraph: "#2b2c34",
    button: "#6246ea",
    buttonText: "#fffffe",
    stroke: "#2b2c34",
    highlight: "#6246ea",
    primary: "#fffffe",
    secondary: "#d1d1e9",
    tertiary: "#e45858",
  },
  ...BaseTheme,
};
