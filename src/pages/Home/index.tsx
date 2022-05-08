import React, { useState, useEffect } from "react";

import { MainContainer, Header, Logo } from "./styles";

import MainList from "../../components/MainList";

import logo from "../../assets/cat_cartoon.svg";

import { getCats } from "../../services/apiCalls";

const Home: React.FC = () => {
  const [cats, setCats] = useState<any>([]);

  const handleData = async () => {
    const list = await getCats();

    setCats(list);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <MainContainer>
      <Header>
        <div className="figure">
          <Logo src={logo} />
        </div>

        <h1>CatAdoption</h1>

        <p>Let us help you find your new pet!</p>
      </Header>

      <MainList data={cats} />
    </MainContainer>
  );
};

export default Home;
