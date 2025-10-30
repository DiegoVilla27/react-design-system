import React from "react";
import { IconProps } from "./Icon.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Size map for the Icon component.
 *
 * Maps semantic size tokens to CSS font-size values (including units).
 * Keys:
 *  - sm: small
 *  - md: medium (default)
 *  - lg: large
 *  - xl: extra large
 *
 * These tokens align with the design system scale and are applied directly as
 * the `font-size` style of the rendered icon.
 */
const sizeMap: Record<NonNullable<IconProps["size"]>, string> = {
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem"
};

/**
 * Icon component
 *
 * Renders a FontAwesome icon with consistent sizing and optional color.
 *
 * Props:
 * @param {IconProps} props.icon - Font Awesome icon definition to render.
 * @param {IconProps["size"]} [props.size="md"] - Semantic size token resolved via `sizeMap`.
 * @param {string} [props.color] - Optional CSS color applied to the icon.
 *
 * Accessibility:
 * - Icons are purely visual. When used without accompanying descriptive text,
 *   ensure the host element provides appropriate accessible labeling
 *   (e.g. `aria-label` or `aria-labelledby` on a parent/control).
 *
 * Returns:
 * @returns {JSX.Element} A <FontAwesomeIcon /> sized and colored per props.
 */
export const Icon: React.FC<IconProps> = ({ icon, size = "md", color }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ fontSize: sizeMap[size], color }}
    />
  );
};
