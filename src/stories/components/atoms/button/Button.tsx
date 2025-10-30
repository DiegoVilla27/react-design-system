import React from "react";
import { ButtonProps } from "./Button.types";
import "./button.css";

/**
 * Button component
 *
 * Renders a semantic <button> element with variant and size modifiers.
 *
 * Props:
 * @param {("primary"|"secondary"|"ghost")} [variant="primary"] - Visual variant applied via BEM modifier class.
 * @param {("sm"|"md"|"lg")} [size="md"] - Size modifier applied via BEM modifier class.
 * @param {string} [label] - Visible text rendered inside the button. If provided, takes precedence over children.
 * @param {React.ReactNode} [children] - Fallback content to render inside the button when `label` is not provided.
 * @param {...React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Native button attributes (onClick, disabled, aria-*, etc.).
 *
 * Returns:
 * @returns {JSX.Element} A styled button element with BEM classes: `btn`, `btn--{variant}`, and `btn--{size}`.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  label,
  children,
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      {...props}
    >
      {label || children}
    </button>
  );
};
