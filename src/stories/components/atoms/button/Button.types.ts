import React, { ReactNode } from "react";

/**
 * ButtonProps
 *
 * Public props for the Button component.
 * Extends native button attributes so consumers can pass standard HTML button props
 * (onClick, aria-*, disabled, type, etc.). Keep ARIA responsibilities with the caller:
 * for icon-only buttons provide a clear aria-label or aria-labelledby.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button.
   * - "primary": primary/brand action
   * - "secondary": secondary/neutral action
   * - "ghost": minimal/transparent button
   *
   * Default: "primary"
   */
  variant?: "primary" | "secondary" | "ghost";
  /**
   * Size token for the button.
   * - "sm": small
   * - "md": medium (default)
   * - "lg": large
   *
   * Use these tokens to align spacing and typography consistently across the UI.
   */
  size?: "sm" | "md" | "lg";
  /**
   * Visible text label for the button.
   * If provided, this text takes precedence over `children` for content rendering.
   * For icon-only usage, omit `label` and provide `aria-label` or `aria-labelledby` via native props.
   */
  label?: string;
  /**
   * React children to render inside the button.
   * Used as a fallback when `label` is not supplied — useful for complex content or icon+text combinations.
   */
  children?: ReactNode;
}
