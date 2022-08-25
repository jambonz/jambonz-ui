import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Tabs, Tab, M } from "../src/lib";

// import type { TabsProps } from "../src/lib/tabs";

export default {
  title: "Jambonz UI/Tabs",
  component: Tabs,
  subcomponents: { Tab },
} as ComponentMeta<typeof Tabs>;

export const TabsMenu = () => {
  return (
    <Tabs>
      <Tab id="tab1" label="Tab One">
        <M>This is tab one.</M>
      </Tab>
      <Tab id="tab2" label="Tab Two">
        <M>This is tab two.</M>
      </Tab>
      <Tab id="tab3" label="Tab Three">
        <M>This is tab three.</M>
      </Tab>
    </Tabs>
  );
};
