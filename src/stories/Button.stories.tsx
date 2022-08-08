import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../lib/index";
import { GitHub } from "react-feather";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Jambonz UI/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Default button",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  mainStyle: "hollow",
  children: (
    <>
      <GitHub />
      <span>With inline icon</span>
    </>
  ),
};
