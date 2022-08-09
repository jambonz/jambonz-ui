import React from "react";
import { ComponentMeta } from "@storybook/react";

import { H5 } from "../lib";

export default {
  title: "Jambonz UI/Typography/Heading5",
  component: H5,
} as ComponentMeta<typeof H5>;

export const Heading5 = () => {
  return (
    <div className="wrap">
      <H5>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H5>
    </div>
  );
};
