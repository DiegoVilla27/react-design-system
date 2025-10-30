import React, { ReactNode, useEffect } from "react";
import { Theme } from "./Theme.types";
import themeDefault from "./themeDefault.json";
import "./global.css";

/**
 * Props for DesignSystemProvider.
 *
 * @property {Theme} [theme] - Optional theme object used to populate CSS custom properties.
 *                             Defaults to themeDefault when not provided.
 * @property {ReactNode} [children] - React children to render within the provider.
 */
interface Props {
  theme?: Theme;
  children?: ReactNode;
}

/**
 * Apply a record of values as CSS custom properties on the provided root element.
 *
 * Example:
 *   applyCssVars(document.documentElement, "color", { primary: "#fff" })
 *   // -> sets --color-primary: #fff
 *
 * @param {HTMLElement} root - Element where CSS variables will be applied (usually document.documentElement).
 * @param {string} prefix - Prefix used for the CSS variable names (e.g. "color", "font-family").
 * @param {Record<string, string>} obj - Map of key -> cssValue to convert into --{prefix}-{key}: value.
 */
const applyCssVars = (
  root: HTMLElement,
  prefix: string,
  obj: Record<string, string>
) => {
  Object.entries(obj).forEach(([key, value]) => {
    root.style.setProperty(`--${prefix}-${key}`, value);
  });
};

/**
 * DesignSystemProvider
 *
 * Sets theme values as global CSS custom properties so components can consume them via CSS variables.
 *
 * Behavior:
 * - No-op on server (guarded against SSR by checking for `document`).
 * - Writes theme.colors, theme.font.family and theme.font.size to the provided root element.
 * - Re-applies values when the `theme` prop changes.
 *
 * Notes:
 * - The incoming `theme` is optional; themeDefault is used when not provided.
 * - For scoped theming (not :root), adapt to accept a `scope` selector/element.
 *
 * @param {Props} props - Component props.
 * @returns {JSX.Element} Rendered children without extra DOM wrapper.
 */
export const DesignSystemProvider: React.FC<Props> = ({
  theme = themeDefault,
  children
}) => {
  useEffect(() => {
    // Guard for SSR / non-browser environments
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (!root) return;

    // Defensive checks in case theme shape is partial
    if (theme?.colors) {
      applyCssVars(root, "color", theme.colors as Record<string, string>);
    }

    if (theme?.font?.family) {
      applyCssVars(
        root,
        "font-family",
        theme.font.family as Record<string, string>
      );
    }

    if (theme?.font?.size) {
      applyCssVars(
        root,
        "font-size",
        theme.font.size as Record<string, string>
      );
    }
  }, [theme]);

  return <>{children}</>;
};

export default DesignSystemProvider;
