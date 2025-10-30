import type { Preview } from "@storybook/react-vite";
import { DesignSystemProvider } from "../src/theme/ThemeProvider";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Renderer } from "storybook/internal/csf";
import theme from "../src/theme/themeDefault.json";

/**
 * Theme decorator factory
 *
 * Creates a Storybook decorator that wraps stories with the design system theme
 * provider. The decorator exposes multiple named themes to the addon UI and
 * switches the applied theme by rendering the provided Provider with the
 * selected theme object.
 *
 * - themes: map of theme name -> theme object used by the Provider.
 * - defaultTheme: theme name applied when Storybook starts.
 * - Provider: React component that applies the theme (here: DesignSystemProvider).
 *
 * Note: This is the inline decorator value passed to `preview.decorators`.
 */
const themeDecorator = withThemeFromJSXProvider<Renderer>({
  themes: {
    light: theme,
    dark: {}
  },
  defaultTheme: "light",
  Provider: DesignSystemProvider
});

/**
 * Storybook preview configuration
 *
 * - decorators: Global decorators applied to all stories. Here we add the theme
 *   decorator so every story is rendered within the DesignSystemProvider.
 * - parameters.controls.matchers: Convenience regex matchers that allow Storybook
 *   to show appropriate controls (color pickers for color-like props, date
 *   pickers for Date props).
 *
 * Exporting this `preview` object lets Storybook discover the global UI and
 * behavior customizations for the project.
 */
const preview: Preview = {
  decorators: [themeDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
