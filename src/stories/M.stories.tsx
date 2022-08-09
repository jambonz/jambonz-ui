import React from "react";
import { ComponentMeta } from "@storybook/react";

import { M } from "../lib";

export default {
  title: "Jambonz UI/Typography/Meta",
  component: M,
} as ComponentMeta<typeof M>;

export const Meta = () => {
  return (
    <div className="wrap">
      <M>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </M>
    </div>
  );
};
