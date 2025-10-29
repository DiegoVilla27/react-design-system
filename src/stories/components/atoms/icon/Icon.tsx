import React from "react";
import { IconProps } from "./Icon.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon: React.FC<IconProps> = ({ icon, size = "md", color }) => {
  const sizeMap = {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  };

  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ fontSize: sizeMap[size], color }}
    />
  );
};
