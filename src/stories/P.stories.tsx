import React from "react";
import { ComponentMeta } from "@storybook/react";

import { P } from "../lib";

export default {
  title: "Jambonz UI/Typography/Paragraph",
  component: P,
} as ComponentMeta<typeof P>;

export const Paragraph = () => {
  return (
    <div className="wrap">
      <P>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </P>
      <P>&nbsp;</P>
      <P>
        This is <strong>strong</strong> text. This is{" "}
        <strong className="med">medium</strong> text. This is{" "}
        <em>emphasized</em> text.
      </P>
      <P>&nbsp;</P>
      <P>
        This is <span className="txt--blue">colored</span> text. This is{" "}
        <span className="txt--teal">colored</span> text. This is{" "}
        <span className="txt--purple">colored</span> text.{" "}
      </P>
    </div>
  );
};
