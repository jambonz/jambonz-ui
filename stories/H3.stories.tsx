import React from "react";
import { ComponentMeta } from "@storybook/react";

import { H3 } from "../src/lib";

export default {
  title: "Jambonz UI/Typography/Heading3",
  component: H3,
} as ComponentMeta<typeof H3>;

export const Heading3 = () => {
  return (
    <div className="wrap">
      <H3>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H3>
    </div>
  );
};
