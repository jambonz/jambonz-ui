import React from "react";
import { ComponentMeta } from "@storybook/react";

import { H6 } from "../src/lib";

export default {
  title: "Jambonz UI/Typography/Heading6",
  component: H6,
} as ComponentMeta<typeof H6>;

export const Heading6 = () => {
  return (
    <div className="wrap">
      <H6>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H6>
    </div>
  );
};
