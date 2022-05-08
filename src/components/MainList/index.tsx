import React from "react";

import { Container } from "./styles";

import { cats } from "./data";

interface IMainItem {
  item: [
    {
      id: number;
      name: string;
      city: string;
      street: string;
    }
  ];
}

const MainList: React.FC<IMainItem> = ({ item }) => {
  return (
    <Container>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <p>{cat.name}</p>
            <p>{cat.city}</p>
            <p>{cat.street}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MainList;
