import React from "react";
import { ButtonProps } from "./Button.types";
import "./button.css";

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
