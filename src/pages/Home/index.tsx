import React from "react";

import { Container, Logo } from "./styles";

import CatLogo from "../../assets/cat.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <h1>HOME</h1>

      <Logo src={CatLogo} />
    </Container>
  );
};

export default Home;
