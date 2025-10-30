import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon";

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
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  args: {
    variant: "primary",
    label: "Continue",
    icon: faArrowRight,
    iconPosition: "right"
  }
};
