import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Heart } from "react-feather";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import { Button } from "../lib";

import type { ButtonProps, RouterLinkProps } from "../lib/button";

export default {
  title: "Jambonz UI/Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Base = ({ children, ...args }: ButtonProps) => {
  return <Button {...args}>{children}</Button>;
};

Base.args = {
  mainStyle: "primary",
  disabled: false,
  children: "Base button",
} as ButtonProps;

export const WithInlineIcon = ({ children, ...args }: ButtonProps) => {
  return <Button {...args}>{children}</Button>;
};

WithInlineIcon.args = {
  mainStyle: "hollow",
  disabled: false,
  children: (
    <>
      <Heart />
      <span>Button with inline icon</span>
    </>
  ),
} as ButtonProps;

export const AsRouterLink = ({ children, ...args }: RouterLinkProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Button {...args}>{children}</Button>} />
      </Routes>
    </BrowserRouter>
  );
};

AsRouterLink.args = {
  mainStyle: "primary",
  disabled: false,
  children: "Button as react router link",
  as: Link,
  to: "/",
} as RouterLinkProps;
