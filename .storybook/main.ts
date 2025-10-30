import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook configuration for the project.
 *
 * - stories: Glob pattern(s) used to discover story files in the workspace.
 * - framework: Configuration for the Storybook framework integration (here: React + Vite).
 * - core.builder: Selects the underlying builder implementation (Vite).
 * - typescript.reactDocgen: Chooses the docgen strategy used to extract prop information for the Docs addon.
 *
 * viteFinal:
 * - Async hook that receives the resolved Vite config and should return the final Vite configuration used by Storybook.
 * - Use this hook to programmatically adjust Vite settings (plugins, resolve.alias, define, optimizeDeps, etc.)
 * - Signature: async (config) => config
 *
 * Notes:
 * - Keep the `stories` glob in sync with the repository structure to ensure all stories are discovered.
 * - Prefer minimal, explicit changes inside `viteFinal` to avoid surprising behavior during Storybook startup.
 */
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  async viteFinal(config) {
    return config;
  }
};
export default config;
