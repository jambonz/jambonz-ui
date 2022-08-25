import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import { Tabs, Tab, M } from "../src/lib";

export default {
  title: "Jambonz UI/Tabs",
  component: Tabs,
  subcomponents: { Tab },
} as ComponentMeta<typeof Tabs>;

export const TabsMenu = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <>
      <div style={{ padding: "16px", textAlign: "center" }}>
        <M>
          The active tab is <span>{activeTab}</span>
        </M>
      </div>
      <Tabs setActiveTab={setActiveTab}>
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
    </>
  );
};
