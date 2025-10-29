import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The `Icon` component is a reusable atomic element that renders Font Awesome icons with consistent sizing and color styling across the design system."
      }
    }
  },
  argTypes: {
    icon: {
      control: false,
      description:
        "Font Awesome icon object imported from `@fortawesome/free-solid-svg-icons`."
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Sets the icon size according to the design system scale."
    },
    color: {
      control: "color",
      description: "Sets a custom color for the icon."
    }
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Heart: Story = {
  args: {
    icon: faHeart,
    size: "md",
    color: "#ef4444"
  }
};
