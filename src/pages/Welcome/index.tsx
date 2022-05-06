import React from "react";

import {
  MainContainer,
  DescriptionContainer,
  Title,
  SecondTitle,
  ThirdTitle,
  MainButton,
  Figure,
} from "./styles";

import CatPoster from "../../assets/cat_poster.jpg";

const Welcome: React.FC = () => {
  return (
    <MainContainer>
      <DescriptionContainer>
        <Title>Happiness</Title>

        <SecondTitle>is having a cat</SecondTitle>

        <ThirdTitle>as a friend.</ThirdTitle>

        <MainButton>adopt a cat</MainButton>
      </DescriptionContainer>

      <Figure>
        <img src={CatPoster} />
      </Figure>
    </MainContainer>
  );
};

export default Welcome;
