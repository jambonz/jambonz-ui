import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Button, ButtonGroup as ButtonGroupComponent } from "../src/lib";

import type { ButtonGroupProps } from "../src/lib/button";

export default {
  title: "Jambonz UI/Buttons/ButtonGroup",
  component: ButtonGroupComponent,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
  },
} as ComponentMeta<typeof ButtonGroupComponent>;

export const ButtonGroup = (args: ButtonGroupProps) => {
  return (
    <ButtonGroupComponent {...args}>
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
    </ButtonGroupComponent>
  );
};
