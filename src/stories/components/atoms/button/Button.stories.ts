import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

/**
 * Storybook metadata for the Button component.
 *
 * - title: groups stories under "Atoms/Button" in the Storybook sidebar.
 * - component: component reference used by Storybook to render and infer prop types.
 * - tags: metadata flags (e.g. "autodocs" enables automatic docs generation).
 * - parameters.docs.description.component: markdown description shown in the Docs tab.
 * - argTypes: per-prop controls, descriptions and table categorization for docs.
 */
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

/**
 * Story type alias for the Button component.
 *
 * - Ensures story objects conform to Storybook's StoryObj shape for this component.
 */
type Story = StoryObj<typeof Button>;

/**
 * Default story for the Button component.
 *
 * - Demonstrates the primary variant at medium size with a visible label.
 * - Args reflect the default props applied when the story is rendered.
 */
export const Default: Story = {
  args: {
    label: "Button Default",
    variant: "primary",
    size: "md"
  }
};
