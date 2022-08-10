import React from "react";
import { ComponentMeta } from "@storybook/react";

import { MXS } from "../src/lib";

export default {
  title: "Jambonz UI/Typography/MetaXtraSmall",
  component: MXS,
} as ComponentMeta<typeof MXS>;

export const MetaXtraSmall = () => {
  return (
    <div className="wrap">
      <MXS>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </MXS>
    </div>
  );
};
