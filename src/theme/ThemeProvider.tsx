import React, { ReactNode, useEffect } from "react";
import { Theme } from "./Theme.types";
import themeDefault from "./themeDefault.json";

interface Props {
  theme?: Theme;
  children?: ReactNode;
}

export const DesignSystemProvider: React.FC<Props> = ({
  theme = themeDefault,
  children
}) => {
  useEffect(() => {
    const root = document.documentElement;

    // Set CSS variables for colors
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Set CSS variables for font families
    Object.entries(theme.font.family).forEach(([key, value]) => {
      root.style.setProperty(`--font-family-${key}`, value);
    });

    // Set CSS variables for font sizes
    Object.entries(theme.font.size).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });
  }, [theme]);

  return <>{children}</>;
};
