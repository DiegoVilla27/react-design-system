import React from "react";
import { Button, Icon } from "../../atoms";
import { ButtonIconProps } from "./ButtonIcon.types";
import "./button-icon.css";

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
  const renderIcon = () => (
    <Icon
      icon={icon}
      size={iconSize}
      color={iconColor}
      aria-hidden={!label}
    />
  );

  const hasLabel = Boolean(label);
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
