import { Theme } from "../../typings";
import { BaseTheme } from "./BaseTheme";

export const DarkTheme: Theme = {
  colors: {
    background: "#16161a",
    headline: "#fffffe",
    paragraph: "94a1b2",
    button: "#7f5af0",
    buttonText: "#fffffe",
    stroke: "#010101",
    highlight: "#7f5af0",
    primary: "#fffffe",
    secondary: "#72757e",
    tertiary: "#2cb67d",
  },
  ...BaseTheme,
};
