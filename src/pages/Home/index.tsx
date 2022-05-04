import React from "react";

import {
  MainContainer,
  SubContainer,
  DescriptionContainer,
  Title,
  SecondTitle,
  ThirdTitle,
  MainButton,
  Logo,
} from "./styles";

import CatPoster from "../../assets/cat_poster.jpg";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <SubContainer>
        <DescriptionContainer>
          <Title>Happiness</Title>

          <SecondTitle>is having a cat</SecondTitle>

          <ThirdTitle>as a friend.</ThirdTitle>

          <MainButton>
            <span>adopt a cat</span>
          </MainButton>
        </DescriptionContainer>

        <Logo src={CatPoster} />
      </SubContainer>
    </MainContainer>
  );
};

export default Home;
