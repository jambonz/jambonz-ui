import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Heart } from "react-feather";

import { Icon, IconGroup } from "../lib";

export default {
  title: "Jambonz UI/IconGroup",
  component: IconGroup,
  subcomponents: { Icon },
} as ComponentMeta<typeof IconGroup>;

export const Index = () => {
  return (
    <IconGroup>
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
    </IconGroup>
  );
};
