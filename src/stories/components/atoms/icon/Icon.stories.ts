import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

/**
 * Storybook metadata for the Icon component.
 *
 * - title: Organizes the story under "Atoms/Icon" in the Storybook sidebar.
 * - component: Reference used by Storybook to render the component and infer prop types.
 * - tags: "autodocs" enables automatic documentation generation.
 * - parameters:
 *   - layout: Storybook canvas layout preference ("centered").
 *   - docs.description.component: Markdown description shown in the Docs tab.
 * - argTypes: Per-prop controls and documentation for interactive examples.
 */
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

/**
 * Story type alias for the Icon component.
 *
 * - Ensures story objects conform to Storybook's StoryObj shape for this component.
 */
type Story = StoryObj<typeof Icon>;

/**
 * Heart
 *
 * Default example story for the Icon component.
 * - Demonstrates the `faHeart` icon at medium size with a custom color.
 * - Useful for validating rendering, sizing and color APIs in the Docs and Canvas.
 */
export const Heart: Story = {
  args: {
    icon: faHeart,
    size: "md",
    color: "#ef4444"
  }
};
