import React from "react";

import { Container } from "./styles";

import MainCard from "../MainCard";

interface IMainItem {
  data: [
    {
      id: number;
      photo: string;
      name: string;
      city: string;
      street: string;
    }
  ];
}

const MainList: React.FC<IMainItem> = ({ data }) => {
  return (
    <Container>
      {data.map((i) => (
        <MainCard data={i} />
      ))}
    </Container>
  );
};

export default MainList;
