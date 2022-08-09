import React from "react";
import { ComponentMeta } from "@storybook/react";

import { H2 } from "../lib";

export default {
  title: "Jambonz UI/Typography/Heading2",
  component: H2,
} as ComponentMeta<typeof H2>;

export const Heading2 = () => {
  return (
    <div className="wrap">
      <H2>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H2>
    </div>
  );
};
