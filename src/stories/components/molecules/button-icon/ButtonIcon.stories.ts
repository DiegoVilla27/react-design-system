import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon";

/**
 * Storybook meta configuration for the ButtonIcon molecule.
 *
 * - title: groups stories under "Molecules/ButtonIcon" in the Storybook sidebar.
 * - component: component reference used by Storybook to render and infer prop types.
 * - tags: "autodocs" enables automatic docs generation.
 * - parameters:
 *   - layout: centers the canvas when rendering stories.
 *   - docs.description.component: markdown description shown in the Docs tab.
 *
 * ArgTypes:
 * - variant: visual style of the button (primary, secondary, ghost).
 * - size: overall button size (sm, md, lg).
 * - icon: Font Awesome icon object (control disabled for complex object).
 * - iconSize: semantic icon size token (sm, md, lg, xl).
 * - iconColor: color control for the icon.
 * - iconPosition: placement of the icon inside the button (left, right, center).
 * - label: optional visible text displayed alongside the icon.
 * - onClick: action captured by Storybook actions.
 */
const meta: Meta<typeof ButtonIcon> = {
  title: "Molecules/ButtonIcon",
  component: ButtonIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The `ButtonIcon` component combines the atomic `Button` and `Icon` components to create flexible buttons with icon support. It allows configuring icon position, color, and size while maintaining consistent design system styles."
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"],
      description: "Defines the visual style of the button."
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Adjusts the overall button size."
    },
    icon: {
      control: false,
      description: "Font Awesome icon object."
    },
    iconSize: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Sets the icon size relative to the button."
    },
    iconColor: {
      control: "color",
      description: "Sets the icon color."
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right", "center"],
      description: "Defines the icon placement inside the button."
    },
    label: {
      control: "text",
      description: "Optional text displayed alongside the icon."
    },
    onClick: { action: "clicked" }
  }
};

export default meta;

/**
 * Story type alias for ButtonIcon.
 *
 * Ensures each story conforms to Storybook's StoryObj shape for this component.
 */
type Story = StoryObj<typeof ButtonIcon>;

/**
 * Default story
 *
 * Demonstrates a primary ButtonIcon with a right-aligned arrow icon and visible label.
 * - Useful to validate spacing, icon alignment and default appearance.
 * - Args reflect realistic usage: variant, label, icon and iconPosition.
 */
export const Default: Story = {
  args: {
    variant: "primary",
    label: "Continue",
    icon: faArrowRight,
    iconPosition: "right"
  }
};
