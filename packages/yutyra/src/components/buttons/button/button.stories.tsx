import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Buttons/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "button",
    variant: "solid",
    size: "md",
    color: "primary",
  },
};

export const Solid = () => (
  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    <Button color="primary" size="sm">
      primary
    </Button>
    <Button color="secondary" size="sm">
      secondary
    </Button>
    <Button color="success" size="sm">
      success
    </Button>
    <Button color="warning" size="sm">
      warning
    </Button>
    <Button color="danger" size="sm">
      danger
    </Button>
  </div>
);

export const Outline = () => (
  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    <Button variant="outline" color="primary" size="sm">
      primary
    </Button>
    <Button variant="outline" color="secondary" size="sm">
      secondary
    </Button>
    <Button variant="outline" color="success" size="sm">
      success
    </Button>
    <Button variant="outline" color="warning" size="sm">
      warning
    </Button>
    <Button variant="outline" color="danger" size="sm">
      danger
    </Button>
  </div>
);
