import React from "react";
import { ComponentMeta } from "@storybook/react";

import { H1 } from "../lib";

export default {
  title: "Jambonz UI/Typography/Heading1",
  component: H1,
} as ComponentMeta<typeof H1>;

export const Heading1 = () => {
  return (
    <div className="wrap">
      <H1>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H1>
    </div>
  );
};
