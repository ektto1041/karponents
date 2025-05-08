import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Label",
    defaultValue: "input",
  },
  argTypes: {
    width: {
      type: "string",
    },
  },
};
