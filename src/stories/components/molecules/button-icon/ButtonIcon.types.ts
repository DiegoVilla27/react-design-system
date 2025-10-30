import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

/**
 * ButtonIconProps
 *
 * Public props for the ButtonIcon molecule.
 * Extends native HTML button attributes so consumers can pass standard props
 * (onClick, disabled, aria-*, type, etc.). Accessibility responsibilities for
 * icon-only buttons remain with the caller (provide aria-label or aria-labelledby).
 */
export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button.
   *
   * - "primary": primary / brand action
   * - "secondary": secondary / neutral action
   * - "ghost": minimal / transparent button
   *
   * Default: "primary"
   */
  variant?: "primary" | "secondary" | "ghost";

  /**
   * Size token for the button.
   *
   * - "sm": small
   * - "md": medium (default)
   * - "lg": large
   *
   * Use these tokens to align spacing and typography consistently across the UI.
   */
  size?: "sm" | "md" | "lg";

  /**
   * Visible label text rendered inside the button.
   *
   * If provided, the label is shown and the internal icon (if any) is treated
   * as decorative (aria-hidden=true). For icon-only buttons omit `label` and
   * provide an accessible name via native ARIA props.
   */
  label?: string;

  /**
   * Font Awesome icon definition to render inside the button.
   *
   * Accepts an IconProp from Font Awesome packs (e.g. `faArrowRight`).
   * Required when an icon is intended to be displayed.
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
   * Mapped internally to concrete CSS font-size values by the Icon component.
   */
  iconSize?: "sm" | "md" | "lg" | "xl";

  /**
   * CSS color value applied to the icon (hex, rgb, named color, etc.).
   *
   * If omitted, icon color is inherited from context / CSS variables.
   */
  iconColor?: string;

  /**
   * Placement of the icon relative to the label/content.
   *
   * - "left": icon before label
   * - "right": icon after label
   * - "center": icon centered (used typically for icon-only buttons)
   *
   * Default: "left"
   */
  iconPosition?: "left" | "right" | "center";
}
