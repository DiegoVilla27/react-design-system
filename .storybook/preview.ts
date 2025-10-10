import type { Preview } from "@storybook/react-vite";
import { DesignSystemProvider } from "../src/theme/ThemeProvider";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Renderer } from "storybook/internal/csf";
import theme from "../src/theme/themeDefault.json";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider<Renderer>({
      themes: {
        light: theme,
        dark: {}
      },
      defaultTheme: "light",
      Provider: DesignSystemProvider
    })
  ],
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
