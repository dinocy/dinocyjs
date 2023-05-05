import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Buttons/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "button",
    variant: "solid",
    size: "md",
  },
};
