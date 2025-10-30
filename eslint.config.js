import js from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * ESLint configuration for the repository.
 *
 * This file exports an array of configuration entries via `defineConfig`.
 * - The first entry applies global ignore patterns.
 * - The second entry targets TypeScript/TSX files and configures language options,
 *   plugins, shared extends and a curated set of rules.
 *
 * Keep this file minimal and declarative: prefer comments for intent and place
 * behavioral changes in project-level docs when possible.
 */
export default defineConfig([
  /**
   * globalIgnores([...])
   *
   * List of file globs that ESLint should ignore globally. Useful to skip
   * generated artifacts and common directories that should not be linted.
   *
   * Examples:
   *  - "dist", "node_modules", "coverage": typical build/test outputs
   *  - "**/ /*.config.js", "**/ /*.config.ts": config files that may intentionally
   *    use different globals or patterns.
   */
  globalIgnores([
    "dist",
    "node_modules",
    "coverage",
    "**/*.config.js",
    "**/*.config.ts"
  ]),

  /**
   * TypeScript/TSX specific configuration
   *
   * This object applies to all files matching the `files` glob below and
   * contains:
   * - languageOptions: ECMAScript target and global variables used in the project.
   * - plugins: additional ESLint plugins activated for these files.
   * - extends: base configs and plugin recommended sets to compose linting rules.
   * - settings: plugin-specific settings (e.g. react.version detection).
   * - rules: explicit rule overrides and additions.
   */
  {
    /**
     * files
     *
     * Glob(s) that determine which files this config block applies to.
     * Here we target TypeScript and TSX source files across the repo.
     */
    files: ["**/*.{ts,tsx}"],

    /**
     * languageOptions
     *
     * Low-level parsing/runtime assumptions:
     * - ecmaVersion: target ECMAScript syntax level
     * - globals: predefined global variables available in the environment
     */
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    },

    /**
     * plugins
     *
     * Declares additional ESLint plugins used by rules and extends below.
     * Each key maps a short name to the imported plugin instance.
     */
    plugins: {
      react: react,
      jest: jestPlugin
    },

    /**
     * extends
     *
     * Ordered list of shareable configurations to inherit rules from.
     * - js.configs.recommended: base JavaScript recommended rules
     * - ts eslint configs: TypeScript-aware recommended rules (spread to include nested configs)
     * - reactHooks / reactRefresh: React-specific best-practice rules
     */
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite
    ],

    /**
     * settings
     *
     * Per-plugin settings. Example: automatic React version detection used by
     * eslint-plugin-react to enable appropriate linting for JSX.
     */
    settings: {
      react: {
        version: "detect"
      }
    },

    /**
     * rules
     *
     * Explicit rule configuration for the project.
     * - We spread several base rule sets first to keep defaults,
     *   then apply project-specific overrides below.
     * - Use concise comments on each rule to document intent for future readers.
     */
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs["recommended-latest"].rules,
      ...reactRefresh.configs.vite.rules,
      ...jestPlugin.configs.recommended.rules,

      /**
       * Enforce React hooks rules of hooks
       * (ensures hooks are called in the right order and only from React function components).
       */
      "react-hooks/rules-of-hooks": "error",

      /**
       * Allow JSX without importing React (new JSX transform).
       */
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      /**
       * Ensure variables used in JSX are recognized as used.
       */
      "react/jsx-uses-vars": "error",

      /**
       * Custom rule to validate symmetrical naming in useState() calls.
       * (project-specific helper rule; keep enabled to enforce consistency)
       */
      "react/hook-use-state": "error",

      /**
       * Require `key` props for elements in iterable children.
       */
      "react/jsx-key": "error",

      /**
       * Enforce double quotes for strings by default, but allow template literals
       * and avoid escapes when necessary.
       */
      "quotes": [
        "error",
        "double",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ],

      /**
       * Prefer strict equality operators except when comparing to null.
       */
      "eqeqeq": ["error", "smart"],

      /**
       * Disallow console usage in source code to prevent accidental debug logs in production.
       */
      "no-console": ["error"],

      /**
       * Disallow redundant `else` blocks after `return` to simplify control flow.
       */
      "no-else-return": [
        "error",
        {
          "allowElseIf": true
        }
      ],

      /**
       * Disallow empty blocks (empty catch blocks are disallowed as well).
       */
      "no-empty": [
        "error",
        {
          "allowEmptyCatch": false
        }
      ],

      /**
       * Disallow unnecessary semicolons.
       */
      "no-extra-semi": ["error"],

      /**
       * Enforce semicolons at ends of statements with controlled exceptions.
       */
      "semi": [
        "error",
        "always",
        {
          "omitLastInOneLineBlock": true,
          "omitLastInOneLineClassBody": true
        }
      ]
    }
  }
]);
