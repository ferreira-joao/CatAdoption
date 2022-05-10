import React, { useState } from "react";

import { TabContainer, TabList } from "./styles";

import {
  AdoptionContentForm,
  AdoptionContentPolicies,
} from "../AdoptionTabsContent";

const AdoptionTabs: React.FC = () => {
  const [tab, setTab] = useState("tab1");

  function handleTab1() {
    setTab("tab1");
  }

  function handleTab2() {
    setTab("tab2");
  }

  return (
    <TabContainer>
      <TabList>
        <li className={tab === "tab1" ? "active" : ""} onClick={handleTab1}>
          <p>Adoption form</p>
        </li>
        <li className={tab === "tab2" ? "active" : ""} onClick={handleTab2}>
          <p>Adoption policies</p>
        </li>
      </TabList>

      {tab === "tab1" ? <AdoptionContentForm /> : <AdoptionContentPolicies />}
    </TabContainer>
  );
};

export default AdoptionTabs;
