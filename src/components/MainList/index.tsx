import React from "react";

import { Container } from "./styles";

import { cats } from "./data";

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
      <ul>
        {data.map((i) => (
          <li key={i.id}>
            <img src={i.photo} width="100px" height="100px" />
            <p>{i.name}</p>
            <p>{i.city}</p>
            <p>{i.street}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MainList;
