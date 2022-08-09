import React from "react";
import { ComponentMeta } from "@storybook/react";

import { MS } from "../lib";

export default {
  title: "Jambonz UI/Typography/MetaSmall",
  component: MS,
} as ComponentMeta<typeof MS>;

export const MetaSmall = () => {
  return (
    <div className="wrap">
      <MS>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </MS>
    </div>
  );
};
