import React from "react";
import { Button, Icon } from "../../atoms";
import { ButtonIconProps } from "./ButtonIcon.types";
import "./button-icon.css";

/**
 * ButtonIcon
 *
 * Molecule that composes the atomic Button and Icon components to produce a button
 * with optional icon support. Supports left/right/center icon positions and
 * gracefully handles accessibility for icon-only or icon+label variants.
 *
 * Props:
 * - variant: visual style token (primary | secondary | ghost). Default: "primary".
 * - size: button size token (sm | md | lg). Default: "md".
 * - label: optional visible text; when present it is rendered and the icon is marked decorative.
 * - icon: FontAwesome icon definition to render (optional).
 * - iconSize: semantic icon size token for the Icon component. Default: "md".
 * - iconColor: CSS color applied to the icon. Default: "#ffffff".
 * - iconPosition: "left" | "right" | "center" — placement of the icon relative to label. Default: "left".
 *
 * Accessibility:
 * - When `label` is provided, the Icon receives `aria-hidden=true` so screen readers ignore the decorative icon.
 * - For icon-only buttons (no `label`), consumers MUST provide an accessible name via `aria-label` or `aria-labelledby` on the Button props.
 *
 * Returns:
 * @returns {JSX.Element} A Button element containing icon + optional label arranged per `iconPosition`.
 */
export const ButtonIcon: React.FC<ButtonIconProps> = ({
  variant = "primary",
  size = "md",
  label,
  icon,
  iconSize = "md",
  iconColor = "#ffffff",
  iconPosition = "left",
  ...props
}) => {
  /**
   * renderIcon
   *
   * Local helper that returns the Icon element with the configured size/color and
   * correct aria-hidden behaviour based on presence of a visible label.
   *
   * - Keeps the markup consistent and avoids duplicating Icon props in JSX.
   *
   * @returns {JSX.Element} Icon element configured for this ButtonIcon instance.
   */
  const renderIcon = () => (
    <Icon
      icon={icon}
      size={iconSize}
      color={iconColor}
      aria-hidden={!label}
    />
  );

  /**
   * hasLabel
   *
   * Boolean flag indicating whether a visible label is provided.
   * Used to decide rendering order and aria-hidden behaviour.
   */
  const hasLabel = Boolean(label);

  /**
   * hasIcon
   *
   * Boolean flag indicating whether an icon was supplied.
   * Guards conditional rendering of the icon markup.
   */
  const hasIcon = Boolean(icon);

  return (
    <Button
      {...props}
      variant={variant}
      size={size}
    >
      <span className={`button-icon button-icon--${iconPosition}`}>
        {hasIcon && iconPosition === "left" && renderIcon()}
        {hasLabel && <span className="button-icon__label">{label}</span>}
        {hasIcon && iconPosition === "right" && renderIcon()}
        {hasIcon && iconPosition === "center" && !hasLabel && renderIcon()}
      </span>
    </Button>
  );
};
