import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  label?: string;
  icon: IconProp;
  iconSize?: "sm" | "md" | "lg" | "xl";
  iconColor?: string;
  iconPosition?: "left" | "right" | "center";
}
