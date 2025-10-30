import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

/**
 * Vite configuration for the React Design System library.
 *
 * Overview:
 * - Builds the design system as a distributable library (ES and CJS).
 * - Generates consolidated TypeScript declarations and injects a single CSS asset.
 *
 * Plugins:
 * - @vitejs/plugin-react: React JSX transforms and dev tooling.
 * - vite-plugin-lib-inject-css: Collects component CSS into a single output file.
 * - vite-plugin-dts: Produces consolidated .d.ts declarations and can insert a "types" entry in package.json.
 *
 * Key build options:
 * - lib.entry: Absolute path to the library entry (src/index.ts). This file must export the public API.
 * - lib.name: Global name (used for UMD/IIFE builds).
 * - lib.formats: Output module formats produced ("es", "cjs").
 * - lib.fileName: Pattern used to name output bundles.
 *
 * Rollup options:
 * - external: Mark peer dependencies (e.g. "react", "react-dom") as external to avoid bundling them.
 * - output.globals: Global variable names for externalized deps when generating UMD builds.
 *
 * Notes & recommendations:
 * - Ensure src/index.ts exports all public components and types; the declaration generator uses that entry to roll up types.
 * - Configure tsconfig (tsconfig.app.json) to include only source files (avoid project root config files in "include") so API Extractor doesn't process unrelated files.
 * - Keep peer dependencies external to prevent bundling React into consumer applications.
 * - Use insertTypesEntry to automatically populate the "types" field in package.json (verify it points to dist/index.d.ts).
 */
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true
    })
  ],
  server: {
    port: 3000
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DiegoVillaReactDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
