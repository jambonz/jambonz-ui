import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button, ButtonGroup } from "../lib";

import type { ButtonGroupProps } from "src/lib/button";

export default {
  title: "Jambonz UI/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
  },
} as ComponentMeta<typeof ButtonGroup>;

export const Index = (args: ButtonGroupProps) => {
  return (
    <ButtonGroup {...args}>
      <Button small>Button</Button>
      <Button small subStyle="dark">
        Button
      </Button>
      <Button small subStyle="grey">
        Button
      </Button>
      <Button small subStyle="blue">
        Button
      </Button>
      <Button small subStyle="teal">
        Button
      </Button>
      <Button small subStyle="purple">
        Button
      </Button>
    </ButtonGroup>
  );
};
