import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import jestPlugin from "eslint-plugin-jest";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      jestPlugin.configs.recommended
    ],
    plugins: {
      jest: jestPlugin
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Rules of hooks
      "react/react-in-jsx-scope": "off", // Rule for allows the use of a TSX or JSX component without the need to import React
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error", // Rule for disallow use var
      "react/hook-use-state": "error", // Rule to check whether unstructured value and setter variables in a useState() call are named symmetrically
      "react/jsx-key": "error", // Rule for using Keys in Child Elements within Loops
      "quotes": [
        // Rule for using double quotes
        "error",
        "double",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ],
      "@typescript-eslint/quotes": [
        "error",
        "double",
        {
          "avoidEscape": true,
          "allowTemplateLiterals": true
        }
      ],
      "eqeqeq": [
        // Rule for strict equality (=== or !==)
        "error",
        "smart"
      ],
      "no-console": [
        // Rule to avoid using console statements
        "error"
      ],
      "no-else-return": [
        // Rule to disallow else as a return
        "error",
        {
          "allowElseIf": true
        }
      ],
      "no-empty": [
        // Rule to disallow empty blocks
        "error",
        {
          "allowEmptyCatch": false
        }
      ],
      "no-extra-semi": [
        // Rule to disallow extra semicolons
        "error"
      ],
      "@typescript-eslint/no-extra-semi": ["error"],
      "semi": [
        // Rule to ensure there is a semicolon at the end
        "error",
        "always",
        {
          "omitLastInOneLineBlock": true,
          "omitLastInOneLineClassBody": true
        }
      ],
      "@typescript-eslint/semi": [
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
