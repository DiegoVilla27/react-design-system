import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
          The **Button** component is an interactive element used to trigger actions.  
          It supports different sizes, visual variants, and states such as hover, loading, and disabled.
        `
      }
    }
  },
  argTypes: {
    label: {
      control: "text",
      description: "Visible text inside the button.",
      table: {
        category: "Content"
      }
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"],
      description: "Defines the visual style of the button.",
      table: {
        category: "Appearance"
      }
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "Specifies the button size depending on its context of use.",
      table: {
        category: "Layout"
      }
    },
    onClick: {
      action: "clicked",
      description: "Event triggered when the button is clicked.",
      table: {
        category: "Events"
      }
    },
    disabled: {
      control: "boolean",
      description: "Disables interaction with the button.",
      table: {
        category: "State"
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button Default",
    variant: "primary",
    size: "md"
  }
};
