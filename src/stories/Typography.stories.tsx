import React from "react";
import { ComponentMeta } from "@storybook/react";

import { H1, H2, H3, H4, H5, H6, P, M, MS, MXS } from "../lib";

const Wrap = ({ children }: { children: React.ReactNode }) => {
  return <div className="wrap">{children}</div>;
};

export default {
  title: "Jambonz UI/Typography",
  component: Wrap,
  subcomponents: { H1, H2, H3, H4, H5, H6, P, M, MS, MXS },
} as ComponentMeta<typeof Wrap>;

export const Heading1 = () => {
  return (
    <Wrap>
      <H1>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H1>
    </Wrap>
  );
};

export const Heading2 = () => {
  return (
    <Wrap>
      <H2>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H2>
    </Wrap>
  );
};

export const Heading3 = () => {
  return (
    <Wrap>
      <H3>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H3>
    </Wrap>
  );
};

export const Heading4 = () => {
  return (
    <Wrap>
      <H4>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H4>
    </Wrap>
  );
};

export const Heading5 = () => {
  return (
    <Wrap>
      <H5>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H5>
    </Wrap>
  );
};

export const Heading6 = () => {
  return (
    <Wrap>
      <H6>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </H6>
    </Wrap>
  );
};

export const Paragraph = () => {
  return (
    <Wrap>
      <P>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </P>
      <P>&nbsp;</P>
      <P>
        This is <strong>strong</strong>, this is{" "}
        <strong className="med">medium</strong> and this is <em>emphasized</em>{" "}
        text.
      </P>
      <P>&nbsp;</P>
      <P>
        This is <span className="txt--blue">blue</span>, this is{" "}
        <span className="txt--teal">teal</span> and this is{" "}
        <span className="txt--purple">purple</span> text.
      </P>
    </Wrap>
  );
};

export const Meta = () => {
  return (
    <Wrap>
      <M>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </M>
    </Wrap>
  );
};

export const MetaSmall = () => {
  return (
    <Wrap>
      <MS>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </MS>
    </Wrap>
  );
};

export const MetaExtraSmall = () => {
  return (
    <Wrap>
      <MXS>
        <span>jambonz</span> is the communications platform that brings your
        ideas to life. So you can bring your best to your customers every day.
      </MXS>
    </Wrap>
  );
};
