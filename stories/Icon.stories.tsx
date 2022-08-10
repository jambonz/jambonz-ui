import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Heart } from "react-feather";

import { Icon as IconComponent } from "../src/lib";

import type { IconProps } from "../src/lib/icon";

export default {
  title: "Jambonz UI/Icons/Icon",
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>;

export const Icon = ({ children, ...args }: IconProps) => {
  return <IconComponent {...args}>{children}</IconComponent>;
};

Icon.args = {
  mainStyle: "primary",
  children: <Heart />,
} as IconProps;
