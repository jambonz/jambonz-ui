import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Heart } from "react-feather";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import { Button } from "../lib";

import type { ButtonProps, RouterLinkProps } from "../lib/button";

export default {
  title: "Jambonz UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Standard = ({ children, ...args }: ButtonProps) => {
  return <Button {...args}>{children}</Button>;
};

Standard.args = {
  mainStyle: "primary",
  disabled: false,
  children: "Standard button",
} as ButtonProps;

export const InlineIcon = ({ children, ...args }: ButtonProps) => {
  return <Button {...args}>{children}</Button>;
};

InlineIcon.args = {
  mainStyle: "hollow",
  disabled: false,
  children: (
    <>
      <Heart />
      <span>Button with inline icon</span>
    </>
  ),
} as ButtonProps;

export const AsLink = ({ children, ...args }: RouterLinkProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Button {...args}>{children}</Button>} />
      </Routes>
    </BrowserRouter>
  );
};

AsLink.args = {
  mainStyle: "primary",
  disabled: false,
  children: "Button as react router link",
  as: Link,
  to: "/",
} as RouterLinkProps;
