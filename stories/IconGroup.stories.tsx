import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Heart } from "react-feather";

import { Icon, IconGroup as IconGroupComponent } from "../src/lib";

export default {
  title: "Jambonz UI/Icons/IconGroup",
  component: IconGroupComponent,
  subcomponents: { Icon },
} as ComponentMeta<typeof IconGroupComponent>;

export const IconGroup = () => {
  return (
    <IconGroupComponent>
      <Icon>
        <Heart />
      </Icon>
      <Icon subStyle="dark">
        <Heart />
      </Icon>
      <Icon subStyle="blue">
        <Heart />
      </Icon>
      <Icon subStyle="teal">
        <Heart />
      </Icon>
      <Icon subStyle="purple">
        <Heart />
      </Icon>
      <Icon subStyle="grey">
        <Heart />
      </Icon>
    </IconGroupComponent>
  );
};
