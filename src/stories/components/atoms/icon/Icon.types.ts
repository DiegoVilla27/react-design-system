import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

/**
 * IconProps
 *
 * Public props for the Icon component.
 * Extends native HTML attributes so callers can pass standard props and ARIA attributes
 * (className, style, role, aria-*, etc.). The component renders a purely visual icon:
 * provide accessible labeling on the parent/control when used without visible text.
 */
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Font Awesome icon definition to render.
   *
   * Accepts an IconProp imported from `@fortawesome/free-solid-svg-icons` (or other FA packs).
   * Example: `import { faHeart } from "@fortawesome/free-solid-svg-icons";`
   *
   * Required.
   */
  icon: IconProp;

  /**
   * Semantic size token for the icon.
   *
   * - "sm": small
   * - "md": medium (default)
   * - "lg": large
   * - "xl": extra large
   *
   * These tokens are mapped to CSS font-size values inside the Icon component.
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Optional CSS color value applied to the icon (hex, rgb, color name, etc.).
   *
   * If omitted, the icon inherits color from the surrounding context or from CSS variables.
   */
  color?: string;
}
