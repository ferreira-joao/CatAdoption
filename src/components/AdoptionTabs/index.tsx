import React, { useState } from "react";

import { TabList } from "./styles";

const AdoptionTabs: React.FC = () => {
  const [tab, setTab] = useState("tab1");

  function handleTab1() {
    setTab("tab1");
  }

  function handleTab2() {
    setTab("tab2");
  }

  return (
    <div>
      <TabList>
        <li className={tab === "tab1" ? "active" : ""} onClick={handleTab1}>
          <p>Adoption form</p>
        </li>
        <li className={tab === "tab2" ? "active" : ""} onClick={handleTab2}>
          <p>Adoption policies</p>
        </li>
      </TabList>
    </div>
  );
};

export default AdoptionTabs;
