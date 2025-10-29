import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  icon: IconProp;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
}
