import { DecoratorFn } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/components/GlobalStyle";
import { DarkTheme } from "../src/themes/DarkTheme";
import { LightTheme } from "../src/themes/LightTheme";
import { ActiveTheme } from "../typings";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// TODO: Implement context
const withTheme: DecoratorFn = (Story, context) => {
  const { theme } = context.parameters || ActiveTheme.LIGHT;
  const activeTheme = theme === ActiveTheme.LIGHT ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: ActiveTheme.LIGHT,
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: ActiveTheme.LIGHT, icon: "circlehollow", title: "light" },
        { value: ActiveTheme.DARK, icon: "circle", title: "dark" },
      ],
      showName: true,
    },
  },
};
