import React from "react";

import { Container } from "./styles";

interface IMainCard {
  data: {
    id: number;
    photo: string;
    name: string;
    city: string;
    street: string;
  };
}

const MainCard: React.FC<IMainCard> = ({ data }) => {
  return (
    <Container key={data.id}>
      <img src={data.photo} width="100px" height="100px" />

      <div className="cat_description">
        <h3>{data.name}</h3>

        <p>
          <span>City: </span>
          {data.city}
        </p>

        <p>
          <span>Address: </span>
          {data.street}
        </p>
      </div>
    </Container>
  );
};

export default MainCard;
