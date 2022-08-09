import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Heart } from "react-feather";

import { Icon } from "../lib";

import type { IconProps } from "../lib/icon";

export default {
  title: "Jambonz UI/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Standard = ({ children, ...args }: IconProps) => {
  return <Icon {...args}>{children}</Icon>;
};

Standard.args = {
  mainStyle: "primary",
  children: <Heart />,
} as IconProps;
