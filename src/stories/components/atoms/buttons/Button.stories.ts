import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary"
  }
};

export const Ghost: Story = {
  args: {
    label: "Ghost Button",
    variant: "ghost"
  }
};

export const Large: Story = {
  args: {
    label: "Large Button",
    size: "lg"
  }
};

export const Medium: Story = {
  args: {
    label: "Medium Button",
    size: "md"
  }
};

export const Small: Story = {
  args: {
    label: "Small Button",
    size: "sm"
  }
};
