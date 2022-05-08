import React from "react";

import { MainContainer, Header, Logo } from "./styles";

import logo from "../../assets/cat_cartoon.svg";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Header>
        <div className="figure">
          <Logo src={logo} />
        </div>

        <h1>CatAdoption</h1>

        <p>Let us help you find your new pet!</p>
      </Header>
    </MainContainer>
  );
};

export default Home;
