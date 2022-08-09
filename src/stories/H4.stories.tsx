import React from "react";
import { ComponentMeta } from "@storybook/react";

import { H4 } from "../lib";

export default {
  title: "Jambonz UI/Typography/Heading4",
  component: H4,
} as ComponentMeta<typeof H4>;

export const Heading4 = () => {
  return (
    <div className="wrap">
      <H4>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H4>
    </div>
  );
};
